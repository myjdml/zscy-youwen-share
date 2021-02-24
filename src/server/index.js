/*
 * @Author: myjdml
 * @Date: 2021-02-09 00:20:19
 * @LastEditors: myjdml
 * @LastEditTime: 2021-02-24 09:29:14
 * @FilePath: /zscy-youwen-share/src/server/index.js
 * @Description: nothing is everything
 */
import axios from 'axios'

// const TOKEN = 'Bearer ' + `${localStorage.getItem('id_token')}`
const TOKEN = 'Bearer ' + 'eyJjb2xsZWdlIjoi6L2v5Lu25bel56iL5a2m6ZmiIiwiZXhwIjoiMTYxNDE3MzI4OCIsImdlbmRlciI6IueUtyIsImhlYWRJbWdVcmwiOiJodHRwOi8vY2RuLnJlZHJvY2sudGVhbS9tYWdpcG9rZV8yMDE5MjEzODk1XzE2MDk0MDc3MTEucG5nIiwiaWF0IjoiMTYxNDEzMDA4OCIsImludHJvZHVjdGlvbiI6IiIsIm5pY2tuYW1lIjoiY29kZXIiLCJwaG9uZSI6IiIsInFxIjoiIiwicmVhbE5hbWUiOiLmr5vlsKfkv4oiLCJyZWRpZCI6IjQwMTU2NDkzZmQxM2VlOGEyYjQyMzFjY2VjMzk2ODRiN2IyMDllZGMiLCJzdHVOdW0iOiIyMDE5MjEzODk1Iiwic3ViIjoicG9ja2V0In0=.G2Yj+H1JlUBfdWkxZ+SiQseljbhwNZYFWd4fB1OQ9OYFJ8k9iXuHYkBf9ynbW/g95Tt15tpOZSKMjGII3PGzKXAI5+6nVywqAuPvsdLyIPAupJzkw2drl6DqebLwzhUEqMyQqZ59hWO8xxXXlQYQshb87mG/skwl+a7JX0wxHvXcHSu1OIqc35MYmkl1CemqNsg8me2ldTrhWmsOqc/OuXiPUS9w1LHoX/iEsMVMAJMA82/HMVRCjAFq61s8E3/Jx89yg0kq1o/1VYY0db5SHWczxn0Sta/fRJcZ8CFbku1iMw/WLDHdUUrEuOmdbyHDmtBmAj9vvH9N/0c1+UKJLg=='
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
