import React, {
    createContext,
    useCallback,
    useContext,
    useRef,
    useState,
  } from 'react';
  import { useEventListener } from './useEventListener';
  
  const WindowSizeContext = createContext(null);
  
  const getSize = () => {
    const innerHeight = window.innerHeight || 1920;
    const innerWidth = window.innerWidth || 1080;
    const outerHeight = window.outerHeight || 1920;
    const outerWidth = window.outerWidth || 1080;
  
    let deviceType = 'mobile';
    if (innerWidth > 1024) deviceType = 'desktop';
    else if (innerWidth > 767) deviceType = 'tablet';
  
    return {
      innerHeight,
      innerWidth,
      outerHeight,
      outerWidth,
      isMobile: deviceType === 'mobile',
      isTablet: deviceType === 'tablet',
      isDesktop: deviceType === 'desktop',
    };
  };
  
  const useWindowSizeListener = () => {
    const [windowSize, setWindowSize] = useState(getSize());
    const resizingRef = useRef(false);
  
    const handleResize = useCallback(() => {
      if (resizingRef.current) {
        setWindowSize(getSize());
      }
      resizingRef.current = true;
    }, []);
  
    useEventListener(window, 'resize', handleResize);
  
    return windowSize;
  };
  
  export const WindowSizeContextProvider = ({ children }) => {
    const windowSize = useWindowSizeListener();
  
    return (
      <WindowSizeContext.Provider value={windowSize}>
        {children}
      </WindowSizeContext.Provider>
    );
  };
  
  export const useWindowSize = () => useContext(WindowSizeContext);
  