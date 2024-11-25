import { PokeAPI } from 'pokeapi-types';

import { cardColor, typeColor } from './constants/colors';

type Name = {
    name: string;
};

export type StackParamList = {
    PokeDex: undefined;
    AbilityList: undefined;
    ItemList: undefined;
    MoveList: undefined;
    About: undefined;

    PokemonDetail: Name;
    MoveDetail: Name;
    TypeDetail: {
        name: keyof typeof cardColor;
    };
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
    moves: {
        levelUp: [string, number | null][];
        egg: string[];
        tutor: string[];
        machine: string[];
    };
};

export type PokemonMoveDetailType = {
    name: string;
    type: string;
    damageClass: string;
    power: number | null;
    accuracy: number | null;
    pp: number | null;
    description: string | null;
};

export type MoveLearnMethod = 'levelUp' | 'machine' | 'tutor' | 'egg';
