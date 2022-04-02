import { useState, useEffect } from 'react';

const useFetch = (type, displayType, prop = '', input = '') => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState('');

  useEffect(() => {
    // type deve ser "meal" ou "cocktail"
    // displayType deve ser "filter", ou "list", ou lookup(detalhes) ou random
    // prop deve ser empre "?{algumaLetra}="
    // input deve ser o de pesquisa
    // input e prop podem ser '' dependendo do caso
    if (!(type && displayType)) {
      return;
    }
    (async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://www.the${type}db.com/api/json/v1/1/${displayType}.php${prop}${input}`);
        const responseJson = await response.json();
        setData(responseJson);
      } catch (error) {
        setErrorState(error.message);
        setData({ drinks: null });
      } finally {
        setIsLoading(false);
        setErrorState('fetch ended');
      }
    })();
  }, [type, displayType, prop, input]);

  return { data, isLoading, errorState };
};

export default useFetch;
