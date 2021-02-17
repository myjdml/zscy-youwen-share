/*
 * @Author: myjdml
 * @Date: 2021-02-09 00:20:19
 * @LastEditors: myjdml
 * @LastEditTime: 2021-02-17 18:25:49
 * @FilePath: /zscy-youwen-share/src/server/index.js
 * @Description: nothing is everything
 */
import axios from 'axios'

// const TOKEN = 'Bearer ' + `${localStorage.getItem('id_token')}`
const TOKEN = 'eyJjb2xsZWdlIjoi6L2v5Lu25bel56iL5a2m6ZmiIiwiZXhwIjoiMTYxMzYwMDA0MyIsImdlbmRlciI6IueUtyIsImhlYWRJbWdVcmwiOiJodHRwOi8vY2RuLnJlZHJvY2sudGVhbS9tYWdpcG9rZV8yMDE5MjEzODk1XzE2MDk0MDc3MTEucG5nIiwiaWF0IjoiMTYxMzU1Njg0MyIsImludHJvZHVjdGlvbiI6IiIsIm5pY2tuYW1lIjoiY29kZXIiLCJwaG9uZSI6IiIsInFxIjoiIiwicmVhbE5hbWUiOiLmr5vlsKfkv4oiLCJyZWRpZCI6IjQwMTU2NDkzZmQxM2VlOGEyYjQyMzFjY2VjMzk2ODRiN2IyMDllZGMiLCJzdHVOdW0iOiIyMDE5MjEzODk1Iiwic3ViIjoicG9ja2V0In0=.wSJ/6kJL8lFDdQT5bHoXCKHLXNNjX3XE14MPc6uZAVk3CBwi19MuH5XnxTTd7yeOLeIoc6fecSbdCXkXzSkDBTFug6/01WMotzi8TWy9uYKk7jcfVtKqaEUf7BzmByFq6/mMB3o4wctmNDDgPrv5JJBiXYtgEdeBVS/wd73qYQN8JEk13iYFQqgGPpgBsLq3hxLvl62sYMHmKERtJrTbyJrYal8Ds81RH3Uuha4lwCt1xqRBBkWxRQ1gjm5HckkBylEQmWXBBrP/01PPO5hIDHVqILWQAbJHu/hBoPjhSBMcFx+gDejZi/S6y69VCOTgQwmcBATvjR9BYOX0VwqNdQ=='
const BACEURL = process.env.NODE_ENV === 'production' ? 'https://cyxbsmobile.redrock.team/wxapi/magipoke-loop' : '/api'
axios.defaults.headers.common.Authorization = TOKEN

export const instance = axios.create({
  baseURL: BACEURL,
  timeout: 50000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

/**
 * @description: 邮问分享获取主题信息
 * @param {*} data
 * @return {*}
 */
export function getDynamicMainInfo (data) {
  return instance.get('/post/getPostInfo', {
    params: data
  })
}
