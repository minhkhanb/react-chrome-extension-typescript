module.exports = {
  webpack: {
    configure: (webpackConfig, {env, paths}) => {
      const newConfig = {
        ...webpackConfig,
        entry: {
          main: [env === 'development' &&
            require.resolve('react-dev-utils/webpackHotDevClient'),paths.appIndexJs].filter(Boolean),
        },
        output: {
          ...webpackConfig.output,
          filename: 'static/js/[name].js',
        },
        optimization: {
          ...webpackConfig.optimization,
          runtimeChunk: false,
        }
      }

      if (env === 'production') {
        return {
          ...newConfig,
          entry: {
            ...newConfig.entry,
            content: './src/chromeServices/DOMEvaluator.ts',
          }
        }
      }

      return newConfig;
    },
  },
  style: {
    postcss: {
      plugins: [
        require('tailwindcss')('./tailwind.config.js'),
        require('autoprefixer'),
      ],
    },
  },
}
