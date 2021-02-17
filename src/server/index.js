/*
 * @Author: myjdml
 * @Date: 2021-02-09 00:20:19
 * @LastEditors: myjdml
 * @LastEditTime: 2021-02-17 18:04:45
 * @FilePath: /zscy-youwen-share/src/server/index.js
 * @Description: nothing is everything
 */
import axios from 'axios'

// const TOKEN = 'Bearer ' + `${localStorage.getItem('id_token')}`
const TOKEN = 'eyJjb2xsZWdlIjoi6L2v5Lu25bel56iL5a2m6ZmiIiwiZXhwIjoiMTYxMzU5OTQ2MyIsImdlbmRlciI6IueUtyIsImhlYWRJbWdVcmwiOiJodHRwOi8vY2RuLnJlZHJvY2sudGVhbS9tYWdpcG9rZV8yMDE5MjEzODk1XzE2MDk0MDc3MTEucG5nIiwiaWF0IjoiMTYxMzU1NjI2MyIsImludHJvZHVjdGlvbiI6IiIsIm5pY2tuYW1lIjoiY29kZXIiLCJwaG9uZSI6IiIsInFxIjoiIiwicmVhbE5hbWUiOiLmr5vlsKfkv4oiLCJyZWRpZCI6IjQwMTU2NDkzZmQxM2VlOGEyYjQyMzFjY2VjMzk2ODRiN2IyMDllZGMiLCJzdHVOdW0iOiIyMDE5MjEzODk1Iiwic3ViIjoicG9ja2V0In0=.0cPAAwlpksTC8xHxuIoxZI1Gl9uZ/RJ7RyRs0GEi8YmtcBjtrlN9hHpedm/HCHy+Q0goUkYU7HArSlpiLgPup7Cx9oQsb+eD9kMiZGiL9mKq+UDeuym/R3OjJMOrPJ0elT/foZBVcJBiD3QAczFHAk5ZrgTqb252ZGFVpTxQ/iniRIy5GUSEnok5cLKdsz8eLkK+Vf/DWZrJ2gvxo7QL1HBnk4Gt1tEFeB54YaeSyXAVPjAAuJBmfWB4MdlUrOnGLX6Wym0cbioWiAUw4LSOzXn/pqR/HB4kKxDEs01DQg6fcIOwTxCE+QqC5qo5SZ/iJnLuvHt3aQ2+5NQsazX+/g=='
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
