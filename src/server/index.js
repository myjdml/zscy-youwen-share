/*
 * @Author: myjdml
 * @Date: 2021-02-09 00:20:19
 * @LastEditors: myjdml
 * @LastEditTime: 2021-02-19 14:30:26
 * @FilePath: /zscy-youwen-share/src/server/index.js
 * @Description: nothing is everything
 */
import axios from 'axios'

// const TOKEN = 'Bearer ' + `${localStorage.getItem('id_token')}`
const TOKEN = 'Bearer ' + 'eyJjb2xsZWdlIjoi6L2v5Lu25bel56iL5a2m6ZmiIiwiZXhwIjoiMTYxMzc1OTQwMyIsImdlbmRlciI6IueUtyIsImhlYWRJbWdVcmwiOiJodHRwOi8vY2RuLnJlZHJvY2sudGVhbS9tYWdpcG9rZV8yMDE5MjEzODk1XzE2MDk0MDc3MTEucG5nIiwiaWF0IjoiMTYxMzcxNjIwMyIsImludHJvZHVjdGlvbiI6IiIsIm5pY2tuYW1lIjoiY29kZXIiLCJwaG9uZSI6IiIsInFxIjoiIiwicmVhbE5hbWUiOiLmr5vlsKfkv4oiLCJyZWRpZCI6IjQwMTU2NDkzZmQxM2VlOGEyYjQyMzFjY2VjMzk2ODRiN2IyMDllZGMiLCJzdHVOdW0iOiIyMDE5MjEzODk1Iiwic3ViIjoicG9ja2V0In0=.sPLgcY61pA/MRjbG7UdtVYV7zp76VAKoI5y3bFCJgEQbY9zFSnMaXGnf4NnqfLH939Od6qxjCwo6y8/xolDq9/1IuZOhitIjvjJP79NnYVmsSgkvgwarsw4YlAttDbLy2Ntn0e/Q0hDhu6hntFV1mhZZsZV3mUTFre5anMg11UOo02XsutAg3f83aKwQdR7qErh20RI0gJtEYOfAgXXMLmEdnUaJUrIi5iuea16SduboHo+loZ9EJsnshjfCmz2v6kpv+uP/HyOuISfa0uOzVKZMKJNYh2FRyFm4h+IAP/lwyDBjC8j6uBkLDyk46q5aTA44SOXj0Z8LUvJKQPgEhQ=='
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
