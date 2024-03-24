import { useState, useLayoutEffect } from 'react';

const queries = [
  '(max-width: 767px)',
  '(min-width: 768px) and (max-width: 1279px)',
  '(min-width: 1280px)',
];

interface MatchMedia {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export const useMatchMedia = (): MatchMedia => {
  const mediaQueryLists = queries.map(query => matchMedia(query));

  const getValues = () => mediaQueryLists.map(mql => mql.matches);

  const [values, setValues] = useState(getValues);

  useLayoutEffect(() => {
    const handler = () => setValues(getValues);

    mediaQueryLists.forEach(mql => mql.addEventListener('change', handler));

    return () =>
      mediaQueryLists.forEach(mql =>
        mql.removeEventListener('change', handler)
      );
  });

  return ['isMobile', 'isTablet', 'isDesktop'].reduce(
    (acc, screen, idx) => {
      return {
        ...acc,
        [screen]: values[idx],
      };
    },
    {
      isMobile: false,
      isTablet: false,
      isDesktop: false,
    }
  );
};
