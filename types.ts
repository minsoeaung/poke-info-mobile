import { PokeAPI } from 'pokeapi-types';

type PokemonDetailScreen = {
    data: PokeAPI.Pokemon;
} & PokeAPI.NamedAPIResource;

export type NativeStackParamList = {
    PokeDex: undefined;
    AbilityList: undefined;
    ItemList: undefined;

    PokemonDetail: PokemonDetailScreen;
    TypeDetail: PokeAPI.NamedAPIResource;
    AbilityDetail: PokeAPI.NamedAPIResource;
};
