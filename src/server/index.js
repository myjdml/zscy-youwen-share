/*
 * @Author: myjdml
 * @Date: 2021-02-09 00:20:19
 * @LastEditors: myjdml
 * @LastEditTime: 2021-03-08 19:46:11
 * @FilePath: /zscy-youwen-share/src/server/index.js
 * @Description: nothing is everything
 */
import axios from 'axios'

const TOKEN = 'Bearer ' + `${localStorage.getItem('id_token')}`
const BACEURL = process.env.NODE_ENV === 'production' ? 'https://cyxbsmobile.redrock.team/wxapi/magipoke-loop' : '/api'
axios.defaults.headers.common.Authorization = TOKEN

export const instance = axios.create({
  baseURL: BACEURL,
  timeout: 100000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

export function getToken () {
  return instance.get('')
}

/**
 * @description: 邮问分享获取帖子主体信息
 * @param {*} data
 * @return {*}
 */
export function getDynamicMainInfo (data) {
  return instance.get('/post/getPostInfo', {
    params: data
  })
}

/**
 * @description: 邮问分享获取帖子回复
 * @param {*} data
 * @return {*}
 */
export function getDynamicRepeatInfo (data) {
  return instance.get('/comment/getallcomment', {
    params: data
  })
}

/**
 * @description: 邮问圈子最热帖子获取接口
 * @param {*} data {loop, page, size, type:(hot)}
 * @return {*}
 */
export function getQuanziHotPosts (data) {
  return instance.get('/post/getLoopPage', {
    params: data
  })
}

/**
 * @description: 邮问圈子最热帖子获取接口
 * @param {*} data {loop, page, size, type:(latest)}
 * @return {*}
 */
export function getQuanziLatestPosts (data) {
  return instance.get('/post/getLoopPage', {
    params: data
  })
}

/**
 * @description: 获取所有圈子信息
 * @param {*}
 * @return {*}
 */
export function getQuanziInfo () {
  return instance.post('/ground/getTopicGround')
}
