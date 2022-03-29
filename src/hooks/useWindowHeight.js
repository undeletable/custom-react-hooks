import useWindowDimension from './useWindowDimension';

const useWindowHeight = (returnAsPx) => {
    return useWindowDimension('innerHeight', returnAsPx);
};

export default useWindowHeight;
