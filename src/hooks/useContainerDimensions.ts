import { RefObject, useCallback, useState, useEffect } from "react";

export const useContainerDimensions = <T extends HTMLElement>(
  myRef?: RefObject<T | undefined>
): DOMRect | undefined => {
  const getDimensions = useCallback(() => {
    return myRef?.current?.getBoundingClientRect();
  }, [myRef]);

  const [dimensions, setDimensions] = useState<DOMRect | undefined>();

  useEffect(() => {
    const handleResize = () => {
      setDimensions(getDimensions());
    };

    if (myRef?.current) {
      setDimensions(getDimensions());
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [getDimensions, myRef]);

  return dimensions;
};
