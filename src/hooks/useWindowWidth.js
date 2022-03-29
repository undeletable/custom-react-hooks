import useWindowDimension from './useWindowDimension';

const useWindowWidth = returnAsPx => {
    return useWindowDimension('innerWidth', returnAsPx);
};

export default useWindowWidth;
