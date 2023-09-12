import { useState, useEffect } from 'react';

const queries = [
    '(max-width: 743px)',
    '(min-width: 744px) and (max-width: 1439px)',
    '(min-width: 1440px)',
];

const useMatchMedia = () => {
    const mediaQueryLists = queries.map(query => matchMedia(query));

    const getValues = () => mediaQueryLists.map(list => list.matches);

    const [values, setValues] = useState(getValues);

    useEffect(() => {
        const handler = () => setValues(getValues);

        mediaQueryLists.forEach(list =>
            list.addEventListener('change', handler)
        );

        return () =>
            mediaQueryLists.forEach(list =>
                list.removeEventListener('change', handler)
            );
    });

    return ['isMobile', 'isTablet', 'isDesktop'].reduce(
        (acc, screen, index) => ({
            ...acc,
            [screen]: values[index],
        }),
        {}
    );
};

export default useMatchMedia;
