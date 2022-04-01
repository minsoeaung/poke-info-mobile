import {useEffect, useState} from "react";

const useFetchData = (url, refresh) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                if (url) {
                    const res = await fetch(url);
                    const data = await res.json();
                    setData(data);
                }
            } catch (e) {

            } finally {
                setIsLoading(false);
            }

        })();
    }, [url, refresh]);

    return {data, error, isLoading};
}

export default useFetchData;
