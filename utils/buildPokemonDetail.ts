import { PokeAPI } from 'pokeapi-types';

import getHeightString from './getHeightString';
import getWeightString from './getWeightString';
import { PokemonDetailType } from '../types';

export const buildPokemonDetail = (
    pokemon: PokeAPI.Pokemon,
    species: PokeAPI.PokemonSpecies,
    evolutions: PokeAPI.EvolutionChain,
): PokemonDetailType => {
    return {
        id: pokemon.id,
        name: pokemon.name,
        profile: {
            sprite: pokemon.sprites.front_default,
            species: species.genera.find(generaInfo => generaInfo.language.name === 'en')?.genus || '',
            types: pokemon.types.map(type => type.type.name),
            height: getHeightString(pokemon.height),
            weight: getWeightString(pokemon.weight),
            abilities: pokemon.abilities.map(ability => {
                return {
                    isHidden: ability.is_hidden,
                    slot: ability.slot,
                    name: ability.ability.name,
                };
            }),
            flavorTextEntry: {
                diamond: (
                    species.flavor_text_entries.find(
                        entry => entry.version.name === 'diamond' && entry.language.name === 'en',
                    )?.flavor_text || ''
                ).replace(/(\r\n|\r|\n)/g, ' '),
            },
            gender: getGenderPercentage(species.gender_rate),
        },
        training: {
            catchRate: species.capture_rate,
            growthRate: species.growth_rate.name
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' '),
            baseHappiness: species.base_happiness,
            baseExp: pokemon.base_experience,
            evYield: getEvYield(pokemon.stats),
        },
        breeding: {
            eggGroups: species.egg_groups.map(gp => gp.name),
            eggCycles: species.hatch_counter, // How to decide cycles?
        },
        stats: {
            hp: [getStatNumberByNameFromPokemonData(pokemon, 'hp')],
            attack: [getStatNumberByNameFromPokemonData(pokemon, 'attack')],
            defense: [getStatNumberByNameFromPokemonData(pokemon, 'defense')],
            specialAttack: [getStatNumberByNameFromPokemonData(pokemon, 'special-attack')],
            specialDefense: [getStatNumberByNameFromPokemonData(pokemon, 'special-defense')],
            speed: [getStatNumberByNameFromPokemonData(pokemon, 'speed')],
            total: [getStatTotal(pokemon.stats)],
        },
        evolutions: getEvolution(evolutions),
    };
};

function getGenderPercentage(genderRate: number) {
    if (genderRate === -1) {
        return null;
    }
    const female = (100 * genderRate) / 8;
    return {
        female,
        male: 100 - female,
    };
}

function getEvYield(statsArray: PokeAPI.Pokemon['stats']) {
    const yields: string[] = [];
    statsArray.forEach(statInfo => {
        if (statInfo.effort > 0) {
            yields.push(
                `${statInfo.effort} ${statInfo.stat.name
                    .split('-')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ')}`,
            );
        }
    });
    return yields.join(', ');
}

function getStatNumberByNameFromPokemonData(
    data: PokeAPI.Pokemon,
    statName: 'hp' | 'attack' | 'defense' | 'special-attack' | 'special-defense' | 'speed',
) {
    return data.stats.find(stat => stat.stat.name === statName)?.base_stat || 0;
}

function getStatTotal(stats: PokeAPI.PokemonStat[]) {
    return stats.reduce((accumulator, currentValue) => {
        return currentValue.base_stat + accumulator;
    }, 0);
}

type ChainDetail = {
    speciesName: string;
    minLevel: number;
    triggerName: string | null;
    item: PokeAPI.NamedAPIResource | null;
};

function getEvolution(evolutionChain: PokeAPI.EvolutionChain) {
    if (!evolutionChain) return [];
    const chain: ChainDetail[] = [];
    let chainLink = evolutionChain.chain;

    do {
        const evoDetails = chainLink.evolution_details[0];
        chain.push({
            speciesName: chainLink.species.name,
            minLevel: !evoDetails ? 1 : evoDetails.min_level,
            triggerName: !evoDetails ? null : evoDetails.trigger.name,
            item: !evoDetails ? null : evoDetails.item,
        });
        chainLink = chainLink['evolves_to'][0];
    } while (!!chainLink && chainLink.hasOwnProperty('evolves_to'));

    const results: string[] = [];

    for (let i = 0; i < chain.length - 1; i++) {
        const from = chain[i];
        const to = chain[i + 1];
        if (results.at(-1) !== from.speciesName) {
            results.push(from.speciesName);
        }
        if (to) {
            results.push(getEvoTrigger(to));
            results.push(to.speciesName);
        }
    }

    return results;
}

function getEvoTrigger(to: ChainDetail) {
    const triggerName = to.triggerName;
    let lastPart = '';
    if (triggerName === 'level-up' && to.minLevel) {
        lastPart = 'at level ' + to.minLevel;
    } else if (triggerName === 'trade') {
        lastPart = 'by trading';
    } else if (triggerName === 'use-item' && to.item?.name) {
        lastPart =
            'using a ' +
            to.item?.name
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
    } else if (triggerName === 'shed') {
        lastPart = 'when leveled up with high friendship';
    } else if (triggerName === 'spin') {
        lastPart = 'by spinning around holding Sweet';
    } else if (triggerName === 'tower-of-darkness') {
        lastPart = 'in Tower of Darkness';
    } else if (triggerName === 'tower-of-waters') {
        lastPart = 'in Tower of Water';
    } else if (triggerName === 'three-critical-hits') {
        lastPart = 'by achieving 3 critical hits in one battle';
    } else if (triggerName === 'take-damage') {
    }

    return lastPart;
}
