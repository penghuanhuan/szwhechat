import service from './service.js'

const request = {
  post: function (url, params) {
    return new Promise((resolve, reject) => {
      service
        .post(url, params)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          if (typeof err.Msg === 'string') {
            if (err.Msg.indexOf('无效的用户安全标识,或登录已过期') >= 0 || err.Msg.indexOf('用户未登陆') >= 0) {
              // removeToken();
              // location.reload();
              // window.location.href='../../index.html'
              reject(err.Msg)
            } else if (err.Msg.indexOf('timeout') >= 0) {
              reject(err.Msg)
            } else {
              reject(err.Msg)
            }
          } else {
            reject(err.Msg)
          }
        })
    })
  },
  get: function (url, params) {
    return new Promise((resolve, reject) => {
      service
        .get(url, {
          params: params
        })
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          if (typeof err.Msg === 'string') {
            if (err.Msg.indexOf('无效的用户安全标识,或登录已过期') >= 0 || err.Msg.indexOf('用户未登陆') >= 0) {
              removeToken()
              location.reload()
            } else if (err.Msg.indexOf('timeout') >= 0) {
              reject(err.Msg)
            } else {
              reject(err.Msg)
            }
          } else {
            reject(err.Msg)
          }
        })
    })
  }
}
export default request
