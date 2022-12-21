import pokemons, { LocalPokemonType } from '../constants/pokemons';

const getLocalPokemonByName = (name: string): LocalPokemonType | null => {
    return pokemons.find(pokemon => pokemon.name === name) || null;
};

export default getLocalPokemonByName;
