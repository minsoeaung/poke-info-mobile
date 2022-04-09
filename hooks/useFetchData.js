import {useEffect, useState} from "react";

const useFetchData = (url, refresh) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        let isMounted = true;

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
                setError('No internet connection.');
            } finally {
                setIsLoading(false);
            }

        })();

        return () => {
            isMounted = false;
        }
    }, [url, refresh]);

    return {data, error, isLoading};
}

export default useFetchData;
