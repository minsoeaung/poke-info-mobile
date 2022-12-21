import { useEffect, useState } from 'react';

interface ResData<T> {
    isLoading: boolean;
    error: string;
    data: T | null;
}

const useFetchData = <T>(url: string | null, refresh?: boolean): ResData<T> => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [data, setData] = useState(null);

    useEffect(() => {
        let isMounted: boolean = true;

        (async () => {
            try {
                if (url) {
                    const res = await fetch(url);
                    const data = await res.json();
                    if (data && isMounted) {
                        setData(data);
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
    }, [url, refresh]);

    return { data, error, isLoading };
};

export default useFetchData;
