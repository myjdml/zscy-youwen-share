/*
 * @Author: myjdml
 * @Date: 2021-02-09 00:20:19
 * @LastEditors: myjdml
 * @LastEditTime: 2021-03-01 01:12:44
 * @FilePath: /zscy-youwen-share/src/server/index.js
 * @Description: nothing is everything
 */
import axios from 'axios'

// const TOKEN = 'Bearer ' + `${localStorage.getItem('id_token')}`
const TOKEN = 'Bearer ' + 'eyJjb2xsZWdlIjoi6L2v5Lu25bel56iL5a2m6ZmiIiwiZXhwIjoiMTYxNDE4NjMyNiIsImdlbmRlciI6IueUtyIsImhlYWRJbWdVcmwiOiJodHRwOi8vY2RuLnJlZHJvY2sudGVhbS9tYWdpcG9rZV8yMDE5MjEzODk1XzE2MDk0MDc3MTEucG5nIiwiaWF0IjoiMTYxNDE0MzEyNiIsImludHJvZHVjdGlvbiI6IiIsIm5pY2tuYW1lIjoiY29kZXIiLCJwaG9uZSI6IiIsInFxIjoiIiwicmVhbE5hbWUiOiLmr5vlsKfkv4oiLCJyZWRpZCI6IjQwMTU2NDkzZmQxM2VlOGEyYjQyMzFjY2VjMzk2ODRiN2IyMDllZGMiLCJzdHVOdW0iOiIyMDE5MjEzODk1Iiwic3ViIjoicG9ja2V0In0=.cZbiI1f/KIInFBhCgcmaAE6/pP+Tu7GNwCyIZszYx1hbTHnt+SP289Hp2LXdDIGGFwHr0Gtsn1az4HhWIN0hH6qBlV70lgVP2j1k7WH4EJZKfsx4gSwTX4vyCJq861U9w2xMskqncuIXdCuTYHfT4cnNyFXYRq8Ipyalm+wM3Oforq511ut4H85uW+toOwdt5d0/BrmCFRKfpGYm36A2J6q2QAIkjT4mJz/Hm0Lus1qIaJlL3RFpjR23PKIu6qol4Oq77HIVsvnBAjn4HHAArGvKtzexor0I3YnXd2d+qcrIE2x8FYnQ8E9DNcKueEwxJk3gpIeD9kcht/LZjqoyDA=='
const BACEURL = process.env.NODE_ENV === 'production' ? 'https://be-prod.redrock.team/magipoke-loop' : '/api'
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
