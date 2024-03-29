const path = require('path')

const outputConfig = {
  destPath: './build',
}

// Entry points
// https://webpack.js.org/concepts/entry-points/
const entryConfig = ['./src/index.tsx', './src/assets/stylesheets/app.scss']

// Copy files from src to dist
// https://webpack.js.org/plugins/copy-webpack-plugin/
const copyPluginPatterns = {
  patterns: [
    { from: '**/*', context: './public' },
    { from: './src/assets/images', to: 'static/images' },
    { from: './src/assets/fonts', to: 'static/fonts' },
    { from: './src/assets/vendor', to: 'static/js' },
  ],
}

// Dev server setup
// https://webpack.js.org/configuration/dev-server/
const devServer = {
  static: {
    //directory: outputConfig.destPath,
    directory: path.join(__dirname, 'public'),
  },
  // https: true,
  // port: "8080",
  // host: "0.0.0.0",
  // disableHostCheck: true
}

// SCSS compile
const scssConfig = {
  destFileName: 'static/css/app.min.css',
}

// Production terser config options
// https://webpack.js.org/plugins/terser-webpack-plugin/#terseroptions
const terserPluginConfig = {
  extractComments: false,
  terserOptions: {
    compress: {
      drop_console: true,
    },
  },
}

module.exports.copyPluginPatterns = copyPluginPatterns
module.exports.entryConfig = entryConfig
module.exports.scssConfig = scssConfig
module.exports.devServer = devServer
module.exports.terserPluginConfig = terserPluginConfig
module.exports.outputConfig = outputConfig
