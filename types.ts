import { PokeAPI } from 'pokeapi-types';

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

export type PickedPokemonType = Pick<
    PokemonType,
    | 'name'
    | 'sprites'
    | 'types'
    | 'abilities'
    | 'height'
    | 'weight'
    | 'base_experience'
    | 'stats'
>;

export type ScreenType =
    | 'PokeDex'
    | 'AbilityList'
    | 'ItemList'
    | 'PokemonDetail'
    | 'TypeDetail'
    | 'AbilityDetail';

type Name = {
    name: string;
};

type PokemonDetailScreenParams = Name & {
    data?: PickedPokemonType;
};

export type NativeStackParamList = {
    PokeDex: undefined;
    AbilityList: undefined;
    ItemList: undefined;

    PokemonDetail: PokemonDetailScreenParams;
    TypeDetail: Name;
    AbilityDetail: Name;
};
