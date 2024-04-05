import { SQLiteDatabase } from 'expo-sqlite/next';
import { PokeAPI } from 'pokeapi-types';

import { buildPokemonDetail } from './buildPokemonDetail';
import { fetchData } from './fetchData';
import { PokemonDetailType } from '../types';

export const fetchPokemonDetail = async (name: string, db: SQLiteDatabase): Promise<null | PokemonDetailType> => {
    const pokemon = await fetchData<PokeAPI.Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}/`, db);
    if (pokemon?.species.url) {
        const species = await fetchData<PokeAPI.PokemonSpecies>(pokemon.species.url, db);
        if (species?.evolution_chain.url) {
            const evolution = await fetchData<PokeAPI.EvolutionChain>(species.evolution_chain.url, db);
            if (evolution) {
                return buildPokemonDetail(pokemon, species, evolution);
            }
        }
    }

    return null;
};
