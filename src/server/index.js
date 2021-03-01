/*
 * @Author: myjdml
 * @Date: 2021-02-09 00:20:19
 * @LastEditors: myjdml
 * @LastEditTime: 2021-03-01 20:08:20
 * @FilePath: /zscy-youwen-share/src/server/index.js
 * @Description: nothing is everything
 */
import axios from 'axios'

// const TOKEN = 'Bearer ' + `${localStorage.getItem('id_token')}`
const TOKEN = 'Bearer ' + 'eyJjb2xsZWdlIjoi6L2v5Lu25bel56iL5a2m6ZmiIiwiZXhwIjoiMTYxNDY0MzY4NCIsImdlbmRlciI6IueUtyIsImhlYWRJbWdVcmwiOiJodHRwOi8vY2RuLnJlZHJvY2sudGVhbS9tYWdpcG9rZV8yMDE5MjEzODk1XzE2MDk0MDc3MTEucG5nIiwiaWF0IjoiMTYxNDYwMDQ4NCIsImludHJvZHVjdGlvbiI6IiIsIm5pY2tuYW1lIjoiY29kZXIiLCJwaG9uZSI6IiIsInFxIjoiIiwicmVhbE5hbWUiOiLmr5vlsKfkv4oiLCJyZWRpZCI6IjQwMTU2NDkzZmQxM2VlOGEyYjQyMzFjY2VjMzk2ODRiN2IyMDllZGMiLCJzdHVOdW0iOiIyMDE5MjEzODk1Iiwic3ViIjoicG9ja2V0In0=.qKnKnyDz38vr0O09No8ZiZogD4dHEjOeXVP/SJllWHzxjyNia5SPhLf5I8PZk+lzAD22bsJiv8kYRJYuwCtjcd6mJoAOasVvDWuwzzfsPkMR7oC7skCuRUnQeYeiW5EJ3v1ZKDc9msjDycthJ2snGcg1Q5ye87EwEk+UVP4XAt4Bt7B0ssn6cMhwepqQmAf15+6ChI0pVqZLSxxXWINLFJE64UDNWp0dO+Lznzc2YiHorYHVdUUCqNr/b/H8ObervaDNu9JMDku/05PKo/5uETb1s0RQSx/NPpS9o/0SgQKsRqnWo3bYgtibAnSrKQIy5pxo/yIg78NxKNg3ANR11A=='
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
