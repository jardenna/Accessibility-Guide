import { useEffect, useRef } from 'react';

const useTimeout = (callback: (id: number) => void, delay: number) => {
  const savedCallback = useRef(callback);

  // Remember the latest callback if it changes.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const id = setTimeout(() => savedCallback.current(id), delay);

    return () => clearTimeout(id);
  }, [delay]);
};

export default useTimeout;
