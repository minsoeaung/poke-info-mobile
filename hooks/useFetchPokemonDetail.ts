import { useSQLiteContext } from 'expo-sqlite/next';
import { PokeAPI } from 'pokeapi-types';
import { useEffect, useState } from 'react';

import pokemonDetails from '../constants/pokemonDetails';
import { PokemonDetailType } from '../types';
import { buildPokemonDetail } from '../utils/buildPokemonDetail';
import { fetchData } from '../utils/fetchData';

interface ResData<T> {
    isLoading: boolean;
    error: string;
    data: T | null;
}

export const useFetchPokemonDetail = (name: string | null): ResData<PokemonDetailType> => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [data, setData] = useState<PokemonDetailType | null>(null);

    const db = useSQLiteContext();

    useEffect(() => {
        let isMounted: boolean = true;

        (async () => {
            try {
                if (typeof name === 'string') {
                    if (pokemonDetails[name]) {
                        if (isMounted) setData(pokemonDetails[name]);
                    } else {
                        const pokemon = await fetchData<PokeAPI.Pokemon>(
                            `https://pokeapi.co/api/v2/pokemon/${name}/`,
                            db,
                        );
                        if (pokemon) {
                            const species = await fetchData<PokeAPI.PokemonSpecies>(
                                `https://pokeapi.co/api/v2/pokemon-species/${pokemon?.species.name}/`,
                                db,
                            );
                            if (species) {
                                const evolution = await fetchData<PokeAPI.EvolutionChain>(
                                    species.evolution_chain.url,
                                    db,
                                );
                                if (evolution) {
                                    if (isMounted) {
                                        setData(buildPokemonDetail(pokemon, species, evolution));
                                    }
                                }
                            }
                        }
                    }
                }
            } catch (e) {
                if (e instanceof Error) {
                    setError(e?.message);
                } else {
                    setError('Unknown error');
                }
            } finally {
                setIsLoading(false);
            }
        })();

        return () => {
            isMounted = false;
        };
    }, [name]);

    return { data, error, isLoading };
};
