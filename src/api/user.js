import request from '@/utils/request'

export function login(data) {
  return request({
    // url: '/vue-element-admin/user/login',
    url: '/yh-test/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/yh-test/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout(data) {
  return request({
    url: '/yh-test/user/logout',
    method: 'post',
    data
  })
}
