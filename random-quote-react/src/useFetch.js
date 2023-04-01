import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [quote, setQuote] = useState(null);
    const [error, setError] = useState(null);
    
    
    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url, { signal: abortCont.signal })
        .then((response) => {
            if(!response.ok){
                throw Error("Could Not fetch Data. The API is wrong");
            }
            return response.json();
        })
        .then((data) => {
            setQuote(data);
            setIsLoading(false)
            setError(null);
        })
        .catch((err) => {
            setError(err.message)
            setQuote(null);
            setIsLoading(true)
        });

        return () => abortCont.abort();

    }, [url]);

    return {isLoading, quote, error};
}

export default useFetch