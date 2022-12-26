import {useEffect}  from 'react';

const useSetPageTitle = (value, titleFormatter) => {
    document.title = typeof titleFormatter === 'function' ? titleFormatter(value) : value;
};

export default useSetPageTitle;
