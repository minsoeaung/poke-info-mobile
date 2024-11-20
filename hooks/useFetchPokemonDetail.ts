import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';

import pokemonDetails from '../constants/pokemonDetails';
import { PokemonDetailType } from '../types';
import { fetchPokemonDetail } from '../utils/fetchPokemonDetail';

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
            setIsLoading(true);
            try {
                if (typeof name === 'string') {
                    if (pokemonDetails[name]) {
                        if (isMounted) {
                            setData(pokemonDetails[name]);
                        }
                    } else {
                        const detail = await fetchPokemonDetail(name, db);
                        if (detail && isMounted) {
                            setData(detail);
                        }
                    }
                }
            } catch (e) {
                if (e instanceof Error) {
                    setError(e.message === 'Network request failed' ? 'No internet connection.' : e.message);
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
