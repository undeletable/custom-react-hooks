import {useEffect, useRef, useState}  from 'react';

const useWindowDimension = (propertyName, returnAsPx) => {
    const [dimension, setDimension] = useState(window[propertyName]);

    const onResize = useRef(() => {
        setDimension(window[propertyName]);
    });

    useEffect(() => {
        window.addEventListener('resize', onResize.current);
        return () => window.removeEventListener('resize', onResize.current);
    }, []);

    return returnAsPx ? `${dimension}px` : dimension;
};

export default useWindowDimension;
