const {useWindowDimension} = require('./useWindowDimension');

const useWindowWidth = returnAsPx => {
    return useWindowDimension('innerWidth', returnAsPx);
};

exports.useWindowWidth = useWindowWidth;
