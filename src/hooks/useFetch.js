import { useState, useEffect } from 'react';

const useFetch = (type, displayType, prop, input) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (!(type && displayType && prop && input)) {
      return;
    }
    (async () => {
      setIsLoading(true);
      try {
        setUrl(`https://www.the${type}db.com/api/json/v1/1/${displayType}.php${prop}${input}`);
        const response = await fetch(url);
        const responseJson = await response.json();
        setData(responseJson);
      } catch (error) {
        setErrorState(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [type, displayType, prop, input, url]);

  return { data, isLoading, errorState };
};

export default useFetch;
