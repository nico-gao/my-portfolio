import { useCallback } from "react";

const useThrottle = () => {
  const throttle = useCallback((callbackFn, limit) => {
    let wait = false;
    return () => {
      if (!wait) {
        wait = true;
        setTimeout(() => {
          callbackFn.call();
          wait = false;
        }, limit);
      }
    };
  }, []);
  return [throttle];
};

export default useThrottle;
