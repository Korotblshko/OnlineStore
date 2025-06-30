module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve = {
        ...webpackConfig.resolve,
        fallback: {
          fs: false, // Отключаем полифил для fs
          stream: false, // Отключаем полифил для stream
        },
      };
      return webpackConfig;
    },
  },
};