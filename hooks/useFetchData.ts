import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';

import { fetchData } from '../utils/fetchData';

interface ResData<T> {
    isLoading: boolean;
    error: string;
    data: T | null;
}

const useFetchData = <T>(url: string): ResData<T> => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [data, setData] = useState<T | null>(null);

    const db = useSQLiteContext();

    useEffect(() => {
        let isMounted: boolean = true;

        (async () => {
            setIsLoading(true);
            try {
                const data = await fetchData<T>(url, db);
                if (data && isMounted) {
                    setData(data);
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
    }, [url]);

    return { data, error, isLoading };
};

export default useFetchData;
