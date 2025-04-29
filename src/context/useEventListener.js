import { useEffect } from 'react';

export const useEventListener = (target, type, listener, ...rest) => {
  useEffect(() => {
    if (!target || typeof target.addEventListener !== 'function') return;

    target.addEventListener(type, listener, ...rest);
    return () => {
      target.removeEventListener(type, listener, ...rest);
    };
  }, [target, type, listener, ...rest]);
};
