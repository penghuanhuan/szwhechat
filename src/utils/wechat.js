
import Storage from './storage.js'
import { WechatAuthControllerSvr } from '../service/WechatAuthControllerSvr.js'

export const appCode = 'wxf2d6265ad755e314'// appid
export const appSecret = 'd4624c36b6795d1d99dcf0547af5443d'// appsecret

export function getCode (skipUrl) {
  window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appCode + '&redirect_uri=' + skipUrl + '&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
}
export function getQueryString (name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var r = window.location.search.substr(1).match(reg)
  if (r != null) {
    return unescape(r[2])
  }
  return null
}

// 重构方法
export function getUser (isVerifica = true) {
  // let identitAuthUrl = '/DwyWeiXinweb/page/identitAuthentication/identitAuthentication.html';
  const wechatAuthControllerSvr = new WechatAuthControllerSvr()
  const openId = Storage.get('userInfo') && Storage.get('userInfo').OpenId || null
  return new Promise((resolve, reject) => {
    if (!openId) { // 通过微信code获取用户信息
      const code = getQueryString('code') || ''
      // if (!code){
      //   getCode(location.href);
      // }
      wechatAuthControllerSvr.GetWxUserByCode(code).then(res => {
        Storage.set('userInfo', res)
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    } else { // 通过OpenId获取用户信息
      resolve()
    }
  })
}
