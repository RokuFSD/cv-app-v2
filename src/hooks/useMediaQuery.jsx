import { useEffect, useState } from 'react';

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  function getMatches() {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  }

  const listener = () => setMatches(getMatches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    listener();
    mediaQueryList.addEventListener('change', listener);
    return () => mediaQueryList.removeEventListener('change', listener);
  }, [query]);

  return matches;
}

export default useMediaQuery;
