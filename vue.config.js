/*
 * @Author: myjdml
 * @Date: 2021-02-07 18:44:52
 * @LastEditors: myjdml
 * @LastEditTime: 2021-03-07 19:39:18
 * @FilePath: /zscy-youwen-share/vue.config.js
 * @Description: nothing is everything
 */

module.exports = {
  outputDir: 'build',
  publicPath: process.env.NODE_ENV === 'production' ? '/game/zscy-youwen-share/' : './',
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // Provide path to the file with resources
          resources: './src/assets/style/mixin.scss'
        })
        .end()
    })
  }
}
