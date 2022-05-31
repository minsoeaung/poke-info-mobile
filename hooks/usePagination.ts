import { PokeAPI } from 'pokeapi-types';
import { useEffect, useState } from 'react';

const usePagination = (page: number, initialUrl: string) => {
    const [next, setNext] = useState<string | null>(initialUrl);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [data, setData] = useState<PokeAPI.NamedAPIResource[]>([]);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            try {
                if (next) {
                    const res = await fetch(next);
                    const data = await res.json();
                    if (data) {
                        setNext(data.next);
                        setData(prevState => [...prevState, ...data.results]);
                    }
                }
            } catch {
                setError('No internet connection.');
            } finally {
                setIsLoading(false);
            }
        })();
    }, [page]);

    return { data, error, isLoading };
};

export default usePagination;
