import pokemons, { LocalPokemonType } from '../constants/pokemons';

const getLocalPokemonByName = (name: string): LocalPokemonType | null => {
    return pokemons[name] || null;
};

export default getLocalPokemonByName;
