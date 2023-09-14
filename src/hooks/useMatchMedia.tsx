import { useState, useEffect } from 'react';

import {useMatchMediaValues} from './useMatchMedia.types'

const queries = [
    '(max-width: 743px)',
    '(min-width: 744px) and (max-width: 1439px)',
    '(min-width: 1440px)',
];

const useMatchMedia = (): useMatchMediaValues => {
    const mediaQueryLists = queries.map(query => matchMedia(query));

    const getValues = (): boolean[] => mediaQueryLists.map(list => list.matches);

    const [values, setValues] = useState<boolean[]>(getValues);

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
