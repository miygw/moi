import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useUIActions } from './useUI';

/**
 * クライアントの画面サイズ（モバイル・デスクトップ）の変更を監視し、
 * 検知した変更をグローバルステートに反映する。
 */
export const useDisplaySize = () => {
  const { setIsMobileSize } = useUIActions();
  const isMobileSize = !useMediaQuery({ minWidth: 1024 });
  useEffect(() => {
    console.log(`Display size: ${isMobileSize ? 'mobile' : 'desktop'}`);
    setIsMobileSize(isMobileSize);
  }, [isMobileSize, setIsMobileSize]);
};
