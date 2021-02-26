/*
 * @Author: myjdml
 * @Date: 2021-02-25 19:16:44
 * @LastEditors: myjdml
 * @LastEditTime: 2021-02-25 19:23:19
 * @FilePath: /zscy-youwen-share/src/utils/parseQueryString.js
 * @Description: nothing is everything
 */
function parseQueryString (url) {
  var obj = {}
  var keyvalue = []
  var key = ''
  var value = ''
  var paraString = url.substring(url.indexOf('?') + 1, url.length).split('&')
  for (var i in paraString) {
    keyvalue = paraString[i].split('=')
    key = keyvalue[0]
    value = keyvalue[1]
    obj[key] = value
  }
  return obj
}

export default parseQueryString
