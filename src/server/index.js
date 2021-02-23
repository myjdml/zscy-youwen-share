/*
 * @Author: myjdml
 * @Date: 2021-02-09 00:20:19
 * @LastEditors: myjdml
 * @LastEditTime: 2021-02-24 00:21:12
 * @FilePath: /zscy-youwen-share/src/server/index.js
 * @Description: nothing is everything
 */
import axios from 'axios'

// const TOKEN = 'Bearer ' + `${localStorage.getItem('id_token')}`
const TOKEN = 'Bearer ' + 'eyJjb2xsZWdlIjoi6L2v5Lu25bel56iL5a2m6ZmiIiwiZXhwIjoiMTYxNDE0MDQyMiIsImdlbmRlciI6IueUtyIsImhlYWRJbWdVcmwiOiJodHRwOi8vY2RuLnJlZHJvY2sudGVhbS9tYWdpcG9rZV8yMDE5MjEzODk1XzE2MDk0MDc3MTEucG5nIiwiaWF0IjoiMTYxNDA5NzIyMiIsImludHJvZHVjdGlvbiI6IiIsIm5pY2tuYW1lIjoiY29kZXIiLCJwaG9uZSI6IiIsInFxIjoiIiwicmVhbE5hbWUiOiLmr5vlsKfkv4oiLCJyZWRpZCI6IjQwMTU2NDkzZmQxM2VlOGEyYjQyMzFjY2VjMzk2ODRiN2IyMDllZGMiLCJzdHVOdW0iOiIyMDE5MjEzODk1Iiwic3ViIjoicG9ja2V0In0=.j7e8C8DOc0kC0C2yKBhsv1Cxa/Bbi5CKPsUowza43T47+TZg9LhQ5TznDwZdMiYsy88Kuc4NL78MDWMolt1Yd3KwRySrW+WoPsDcaSCibZILmRZsGfLUiYpz42NTQtR3UfZ1yWdDeoWupIw2nMMDNlb0x47mWg7Ean0ynHqAPs6rKhyjZUTFcaulzrd4s38wgAVO8D04cylPJnAHMLo3StE4TBqjOfWqaKdTpuKBTtLsQC5QfYZJYdSTfZzj/x3aaHwMlXDu5rflPxkPHQ7kEVx6jQWWpRfnCh+K0M7+tdCWbepwLfVchq/i+X9MPHFgjQ8JWrZKwsSyIFb3pz9Fpw=='
const BACEURL = process.env.NODE_ENV === 'production' ? 'https://cyxbsmobile.redrock.team/wxapi/magipoke-loop' : '/api'
axios.defaults.headers.common.Authorization = TOKEN

export const instance = axios.create({
  baseURL: BACEURL,
  timeout: 50000,
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
