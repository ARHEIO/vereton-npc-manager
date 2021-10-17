import { useEffect, useState } from 'react';

export type WindowSize = {
  width: number;
  height: number;
};

export const useWindowSize = (): WindowSize | undefined => {
  const [windowSize, setWindowSize] = useState<WindowSize | undefined>();

  const handleResize = () =>
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};
