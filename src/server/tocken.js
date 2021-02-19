/*
 * @Author: myjdml
 * @Date: 2021-02-19 14:24:20
 * @LastEditors: myjdml
 * @LastEditTime: 2021-02-19 14:25:20
 * @FilePath: /zscy-youwen-share/src/server/tocken.js
 * @Description: nothing is everything
 */
import axios from 'axios'

export const instance = axios.create({
  baseURL: BACEURL,
  timeout: 50000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})