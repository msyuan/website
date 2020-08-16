/*
 * @Description: 
 * @Author: your name
 * @Date: 2020-08-15 11:49:46
 * @LastEditTime: 2020-08-16 15:53:33
 * @LastEditors: Please set LastEditors
 * @FilePath: \website\vue.config.js
 */
const path = require("path")
const resolve = function(dir) {
  return path.join(__dirname, dir)
}

const isProd = process.env.NODE_ENV === 'production'
// const isDev = process.env.NODE_ENV === "development"

module.exports = {
  publicPath: isProd ? "./" : "/",
  //outputDir: "dist",
  assetsDir: "static",
  lintOnSave: true, // 是否开启eslint保存检测
  productionSourceMap: false, // 是否在构建生产包时生成sourcdeMap
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@v", resolve("src/views"))
      .set("@c", resolve("src/components"))
      .set("@u", resolve("src/utils"))
      .set("@s", resolve("src/service")) //别名配置
      //config.optimization.runtimeChunk("single")
    config.optimization.minimizer('terser').tap((args) => {
      // 去除生产环境console
      args[0].terserOptions.compress.drop_console = true
      return args
    })
  },
	devServer: {
		host: "0.0.0.0",
		port: "8085",
    hot: true,
    hotOnly: false,
		open: true,
		overlay: {
			warning: false,
			error: true
		},
		//跨域代理 
		proxy: {
		  "/user": {
        //目标代理服务器地址
        target: "http:/xxx.113.xxx.66/user", 
        //允许跨域
        changeOrigin: true,
        ws: true,
        // pathRewrite: {
        //   "^/api": ""
        // }
		  }
		}
	},
	// css相关配置
	css: {
		 // 是否启用CSS modules 
		 //modules: true,
		// 是否使用css分离插件 ExtractTextPlugin  -vue-cli4默认true, 是分隔的
		//extract: true
		// 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能
		//sourceMap: false,
		//向 CSS 相关的 loader 传递选项(支持 css-loader postcss-loader sass-loader less-loader)
		 //loaderOptions: { css: {}, less: {} }
				
	},
	// 可以用来传递任何第三方插件选项
	pluginOptions: {
		
		
	},
};