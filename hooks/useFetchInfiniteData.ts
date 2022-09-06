import { PokeAPI } from 'pokeapi-types';
import { useEffect, useState } from 'react';

const useFetchInfiniteData = (initialUrl: string) => {
    const [next, setNext] = useState<string | null>(initialUrl);
    const [data, setData] = useState<PokeAPI.NamedAPIResource[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [error, setError] = useState('');
    const [page, setPage] = useState(1);

    useEffect(() => {
        let isMounted = true;

        (async () => {
            if (data.length === 0) {
                setIsLoading(true);
            } else {
                setIsLoadingMore(true);
            }
            try {
                if (next) {
                    const res = await fetch(next);
                    const data = await res.json();
                    if (data && isMounted) {
                        setNext(data.next);
                        setData(prevState => [...prevState, ...data.results]);
                    }
                }
            } catch {
                setError('No Internet Connection.');
            } finally {
                setIsLoading(false);
                setIsLoadingMore(false);
            }
        })();

        return () => {
            isMounted = false;
        };
    }, [page]);

    const fetchMore = () => {
        setPage(prevState => prevState + 1);
    };

    return {
        fetchMore,
        data,
        isLoading,
        isLoadingMore,
        error,
    };
};

export default useFetchInfiniteData;
