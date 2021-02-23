/*
 * @Author: myjdml
 * @Date: 2021-02-07 18:44:52
 * @LastEditors: myjdml
 * @LastEditTime: 2021-02-24 01:32:23
 * @FilePath: /zscy-youwen-share/vue.config.js
 * @Description: nothing is everything
 */
module.exports = {
  outputDir: 'build',
  publicPath: './',
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
