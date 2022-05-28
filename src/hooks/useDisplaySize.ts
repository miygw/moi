import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useUIActions } from './useUI';

export const useDisplaySize = () => {
  const { setIsMobileSize } = useUIActions();
  const isMobileSize = !useMediaQuery({ minWidth: 1024 });
  useEffect(() => {
    console.log(`Display size: ${isMobileSize ? 'mobile' : 'desktop'}`);
    setIsMobileSize(isMobileSize);
  }, [isMobileSize, setIsMobileSize]);
};
