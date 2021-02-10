/*
 * @Author: myjdml
 * @Date: 2021-02-09 00:20:19
 * @LastEditors: myjdml
 * @LastEditTime: 2021-02-10 00:28:22
 * @FilePath: /zscy-youwen-share/src/server/index.js
 * @Description: nothing is everything
 */
import axios from 'axios'

// const TOKEN = 'Bearer ' + `${localStorage.getItem('id_token')}`
const TOKEN = `eyJjb2xsZWdlIjoi6L2v5Lu25bel56iL5a2m6ZmiIiwiZXhwIjoiMTYxMjkxNTg4OCIsImdlbmRlciI6IueUtyIsImhlYWRJbWdVcmwiOiJodHRwOi8vY2RuLnJlZHJvY2sudGVhbS9tYWdpcG9rZV8yMDE5MjEzODk1XzE2MDk0MDc3MTEucG5nIiwiaWF0IjoiMTYxMjg3MjY4OCIsImludHJvZHVjdGlvbiI6IiIsIm5pY2tuYW1lIjoiY29kZXIiLCJwaG9uZSI6IiIsInFxIjoiIiwicmVhbE5hbWUiOiLmr5vlsKfkv4oiLCJyZWRpZCI6IjQwMTU2NDkzZmQxM2VlOGEyYjQyMzFjY2VjMzk2ODRiN2IyMDllZGMiLCJzdHVOdW0iOiIyMDE5MjEzODk1Iiwic3ViIjoicG9ja2V0In0=.Mt+bweAtSpMsx0i/0PXRjl1ZtFcNULB0GHpDKO8k1dnQ5IKhEg8xIDxfZb3eZoQIzyTtzizUQL/Tz3QelYhT9IOqKr46YAQtu86YTyz8/Rz42I7C0v/9duwbNQJEGFrbvKyU39YLzS2jwbnuKcpXvQNtVnAKr+AiwP8Kc9KcAcb5FCE15GyKyVQvpuq38NzFxh5ROr5U+g0h/VZTaHeN2KsjuVfY9O8+V7Vy6lY5YwufIzXl1y6I8zsoqJCjLYHnyw6+O7kAytd/DWSDzUnOgsM5hAQ8UHlp+OnAKE5xCw8HZIFG9mwMJnI20EqmlevWBHka9nh3b6pdsmmJjiP+Qg==`
const BACEURL = process.env.NODE_ENV === 'production' ? 'https://cyxbsmobile.redrock.team/wxapi/magipoke-loop' : '/api'
axios.defaults.headers.common.Authorization = TOKEN

export const instance = axios.create({
  baseURL: BACEURL,
  timeout: 50000,
  headers: {
    'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>'
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