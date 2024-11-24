import { PokeAPI } from 'pokeapi-types';

import type PokemonDetailsType from '../assets/data/pokemonDetails.json';
import pokemonDetails from '../assets/data/pokemonDetails.json';

const getPokemonDetailByName = (name: string) => {
    return pokemonDetails[name as keyof typeof PokemonDetailsType];
};

export default getPokemonDetailByName;
