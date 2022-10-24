const useWindowDimension = require('./useWindowDimension');

const useWindowHeight = (returnAsPx) => {
    return useWindowDimension('innerHeight', returnAsPx);
};

module.exports = useWindowHeight;
