const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@services': path.resolve(__dirname, 'src/services'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces'),
      '@components': path.resolve(__dirname, 'src/components'),
    },
  };
  return config;
};
