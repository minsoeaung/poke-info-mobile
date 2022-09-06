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
    };
    TypeDetail: Name;
    AbilityDetail: Name;
    ItemDetail: Name;
};
