import { PokeAPI } from 'pokeapi-types';
import { typeColor } from './constants/colors';

type PokemonFormType = {
    slot: number;
    type: PokeAPI.NamedAPIResource;
};

export type PokemonForm = PokeAPI.PokemonForm & {
    types: PokemonFormType[];
};

export type PokemonType = Omit<PokeAPI.Pokemon, 'sprites'> & {
    sprites: {
        front_default?: string;
        other: {
            'official-artwork': {
                front_default: string;
            };
        };
    };
};

export type ScreenType =
    | 'PokeDex'
    | 'AbilityList'
    | 'ItemList'
    | 'ItemDetail'
    | 'PokemonDetail'
    | 'TypeDetail'
    | 'AbilityDetail'
    | 'About';

type Name = {
    name: string;
};

export type StackParamList = {
    PokeDex: undefined;
    AbilityList: undefined;
    ItemList: undefined;
    About: undefined;

    PokemonDetail: Name;
    TypeDetail: Name;
    AbilityDetail: Name;
    ItemDetail: Name;
};

export type Chain = {
    species_name: string;
    min_level: number;
    trigger_name: EvolutionTriggerName | null;
    item: PokeAPI.NamedAPIResource | null;
};

type EvolutionTriggerName =
    | 'level-up'
    | 'trade'
    | 'use-item'
    | 'shed'
    | 'spin'
    | 'tower-of-darkness'
    | 'tower-of-waters'
    | 'three-critical-hits'
    | 'take-damage'
    | string
    | 'other';

export type AbilityType = {
    isHidden: boolean;
    slot: number;
    name: string;
};

export type PokemonSmDetailType = {
    name: string;
    sprite: string | null;
    types: (keyof typeof typeColor)[];
    id: number;
};

export type PokemonDetailType = {
    id: number;
    name: string;
    profile: {
        sprite: string | null;
        species: string;
        types: (keyof typeof typeColor)[];
        height: string;
        weight: string;
        abilities: AbilityType[];
        flavorTextEntry: {
            diamond: string;
        };
        gender: {
            female: number;
            male: number;
        } | null;
    };
    training: {
        catchRate: number;
        growthRate: string;
        baseHappiness: number | null;
        baseExp: number | null;
        evYield: string;
    };
    breeding: { eggGroups: string[]; eggCycles: number | null };
    stats: {
        hp: number[];
        attack: number[];
        defense: number[];
        specialAttack: number[];
        specialDefense: number[];
        speed: number[];
        total: number[];
    };
    evolutions: string[];
};
