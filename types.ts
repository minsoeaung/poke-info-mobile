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

type PokemonDetailScreenParams = {
    data: PokemonType;
} & PokeAPI.NamedAPIResource;

export type NativeStackParamList = {
    PokeDex: undefined;
    AbilityList: undefined;
    ItemList: undefined;

    PokemonDetail: PokemonDetailScreenParams;
    TypeDetail: PokeAPI.NamedAPIResource;
    AbilityDetail: PokeAPI.NamedAPIResource;
};
