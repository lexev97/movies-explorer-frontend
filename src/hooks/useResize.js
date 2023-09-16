import { useState, useEffect } from 'react';
import { M_RES, S_RES } from '../constants/constants';

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    isScreenS: width <= S_RES,
    isScreenM: width > S_RES && width <= M_RES,
    isScreenL: width > M_RES,
  };
};
