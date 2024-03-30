import type PokemonDetailsType from '../constants/pokemonDetails';
import pokemonDetails from '../constants/pokemonDetails';
import { PokeAPI } from 'pokeapi-types';

const getPokemonDetailByName = (name: string) => {
    return pokemonDetails[name as keyof typeof PokemonDetailsType];
};

export default getPokemonDetailByName;