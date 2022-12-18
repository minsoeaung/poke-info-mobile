import { PokeAPI } from 'pokeapi-types';

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

export type PressableListItemType = {
    name: string;
    isHidden?: boolean;
    typeSlot?: number;
    sprites?: string | null;

    // temp
    url?: string;
    sprite?: string | null;
    types?: string[];
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

export type NativeStackParamList = {
    PokeDex: undefined;
    AbilityList: undefined;
    ItemList: undefined;
    About: undefined;

    PokemonDetail: {
        name: string;
        color?: string;
    };
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
