import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    const result = localStorage.getItem(key);
    return JSON.parse(result) || initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};

export default useLocalStorage;
