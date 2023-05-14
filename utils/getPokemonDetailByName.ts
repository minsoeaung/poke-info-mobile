import type PokemonDetailsType from '../constants/pokemonDetails';
import pokemonDetails from '../constants/pokemonDetails';

const getPokemonDetailByName = (name: string) => {
    return pokemonDetails[name as keyof typeof PokemonDetailsType];
};

export default getPokemonDetailByName;
