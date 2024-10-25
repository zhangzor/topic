const { defineConfig } = require('@vue/cli-service')
const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
const port = process.env.port || process.env.npm_config_port || '8081'
const path = require('path')
function resolve(dir) {
	return path.join(__dirname, dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  lintOnSave: false,
  productionSourceMap: false,
  outputDir: 'dist',
  // assetsDir: "static",
  chainWebpack: (config) => {
    config.plugin('define').tap((definitions) => {
      Object.assign(definitions[0], {
        __VUE_OPTIONS_API__: 'true',
        __VUE_PROD_DEVTOOLS__: 'false',
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
      })
      return definitions
    }),
      config.resolve.alias
        .set('@', resolve('src'))
        .set('@assets', resolve('src/assets'))
        .set('@components', resolve('src/components'))
        .set('@views', resolve('src/views'))
        .set('@router', resolve('src/router'))
        .set('@store', resolve('src/store'))
        .set('@utils', resolve('src/utils'))
        .set('@api', resolve('src/api'))
    config.plugin('html').tap((args) => {
      args[0].title = '题目'
      return args
    })
  },
  devServer: {
    port: port,
    compress: false,
    hot: true,
    open: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://192.168.100.193',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            autoprefixer(),
            pxtorem({
              rootValue: 37.5,
              propList: ['*']
            })
          ]
        }
      },
      sass: {
        additionalData: `@import "@/assets/sass/index.scss";`
      }
    }
  }
})
