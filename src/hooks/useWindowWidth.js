const {default: useWindowDimension} = require('./useWindowDimension');

const useWindowWidth = returnAsPx => {
    return useWindowDimension('innerWidth', returnAsPx);
};

module.exports = useWindowWidth;
