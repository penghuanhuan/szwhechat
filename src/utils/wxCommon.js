import Storage from './storage.js'
import {
  WechatAuthControllerSvr
} from '../service/WechatAuthControllerSvr.js'
import {
  EvaluteControllerSvr
} from '../service/EvaluteControllerSvr/EvaluteControllerSvr.js'

// let clientWidth = document.documentElement.clientWidth || document.body.clientWidth
// document.getElementsByTagName('html')[0].style.fontSize=clientWidth/11.04+'px'

const wechatAuthControllerSvr = new WechatAuthControllerSvr()
const evaluteControllerSvr = new EvaluteControllerSvr()

function getQueryString (name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var r = window.location.search.substr(1).match(reg)
  if (r != null) {
    return unescape(r[2])
  }
  return null
}
// 获取微信用户信息
function getwxUser () {
  Storage.set('userInfo', {
    OpenId: 'oTDpg1aHro9lV0QJ2nMTnnwxHFRo'
    //  Token:"oTDpg1aHro9lV0QJ2nMTnnwxHFRo",
    //  Type:"业主"
  })
  let openId = Storage.get('userInfo') && Storage.get('userInfo').OpenId || null
  if (openId == 'oMkVe00ITCIBcCT8ld7FaqNYOQOE') {
    openId = null
  }

  const code = getQueryString('code')
  // let token = Storage.get('userInfo') && Storage.get('userInfo').Token || null
  const scripts = document.querySelector('#wxCommon').src
  const isCheck = scripts.split('?isCheck=')[1] // 通过引入wxCommon.JS 中的参数isCheck判断页面是否需要授权才能访问

  return new Promise((resolve, reject) => {
    if (!openId) {
      if (code) { // 通过微信code获取用户信息
        wechatAuthControllerSvr.GetWxUserByCode(code).then(res => {
          Storage.set('userInfo', res)
          resolve(res)
          if (isCheck == 'true') { // 如果该页面需要权限则跳转到授权页面
            if (!res.Token) {
              const baseUrl = window.location.href.split('/page/')[0]
              const identitAuthUrl = baseUrl + '/page/identitAuthentication/identitAuthentication.html'
              window.location.href = identitAuthUrl
            }
          }
        }).catch(err => {
          reject(err)
        })
      } else { // 如果没有openid 拿一次微信code
        auauthorize(window.location.href)
      }
    } else {
      wechatAuthControllerSvr.GetWxUserByOpenId(openId).then(res => { // 刷新一次openid
        Storage.set('userInfo', res)
        if (!res.Token) { // 有openid但是却没有token
          if (isCheck == 'true') { // 如果该页面需要权限则跳转到授权页面
            const baseUrl = window.location.href.split('/page/')[0]
            const identitAuthUrl = baseUrl + '/page/identitAuthentication/identitAuthentication.html'
            window.location.href = identitAuthUrl
          } else {
            resolve()
          }
        } else {
          resolve()
        }
      }).catch(err => {
        reject(err)
      })
    }
  })
}

function linkTo (path, isCheck) {
  const openId = Storage.get('userInfo') && Storage.get('userInfo').OpenId || null
  const token = Storage.get('userInfo') && Storage.get('userInfo').Token || null
  if (!openId) {
    auauthorize(window.location.href)
  } else {
    if (isCheck) {
      if (token) {
        window.location.href = path
      } else {
        const baseUrl = window.location.href.split('/index.html')[0]
        const temp = baseUrl.split('/')
        const api = temp[temp.length - 1]
        const identitAuthUrl = '/' + api + '/page/identitAuthentication/identitAuthentication.html'
        window.location.href = identitAuthUrl
      }
    } else {
      window.location.href = path
    }
  }
}

function auauthorize (skipUrl) {
  wechatAuthControllerSvr.GetWeixinConfig().then(res => {
    window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + res.appId + '&redirect_uri=' + skipUrl + '&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
  }).catch(err => {
    console.log(err)
  })
}

// 获取微信签名
const sign = function () {
  const wxJsApiConfig = {
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: '', // 必填，公众号的唯一标识
    timestamp: '', // 必填，生成签名的时间戳
    nonceStr: '', // 必填，生成签名的随机串
    signature: '', // 必填，签名
    jsApiList: []
  }

  wxJsApiConfig.jsApiList = ['scanQRCode', 'chooseImage', 'uploadImage', 'previewImage', 'getLocalImgData']
  wechatAuthControllerSvr.GetSignPackage(window.location.href).then(
    res => {
      wxJsApiConfig.appId = res.appId
      wxJsApiConfig.nonceStr = res.nonceStr
      wxJsApiConfig.timestamp = res.timestamp
      wxJsApiConfig.signature = res.signature.toLowerCase()
      wx.config(wxJsApiConfig)
      wx.ready(() => {
        console.log('sucess')
      })
      wx.error(function (res) {
        console.log('fail', res)
      })
    }
  ).catch(err => {
    // console.log(err)
  })
}

class wxJssdk {
  constructor () {
    this.imgsObjs = []
    sign()
  }

  chooseImage (chooseCount, callback) {
    wx.chooseImage({
      count: chooseCount,
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        var localIds = res.localIds // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
        if (callback) {
          callback(localIds)
        }
      }
    })
  }

  uploadImage (localIds, successFunc, idx) { // localIds,本地ID列表,idx下标第几张图片
    const that = this
    let index = idx
    if (index === null || index === undefined) {
      index = 0
    }
    if (index >= localIds.length) return
    wx.uploadImage({
      localId: localIds[index],
      isShowProgressTips: 1,
      success: function (res) {
        that.imgsObjs.push({
          localId: localIds[index],
          serverId: res.serverId,
          url: localIds[index]
        })
        if (successFunc) {
          successFunc(res, index)
        }
        if (index < localIds.length - 1) {
          index++
          that.uploadImage(localIds, successFunc, index)
        }
      }
    })
  }

  iosGetLocalImgData (localId, callback) {
    if (!localId) return
    wx.getLocalImgData({
      localId: localId, // 图片的localID
      success: function (res) {
        var localData = res.localData // localData是图片的base64数据，可以用img标签显示
        if (callback) {
          callback(localData)
        }
      }
    })
  }

  clearImgsObjs () {
    this.imgsObjs = []
  }

  removeImgsObjByServerId (delObj) {
    if (!delObj) return
    for (var i = 0; i < this.imgsObjs.length; i++) {
      if (this.imgsObjs[i].serverId == delObj) {
        this.imgsObjs.splice(i, 1)
        break
      }
    }
  }

  removeImgsObjByLocalId (delObj) {
    if (!delObj) return
    for (var i = 0; i < this.imgsObjs.length; i++) {
      if (this.imgsObjs[i].localId == delObj) {
        this.imgsObjs.splice(i, 1)
        break
      }
    }
  }

  getImgsObjs () {
    return this.imgsObjs
  }

  scan (successFunc, errorFunc) {
    if (typeof (successFunc) === 'function') {
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有 'original',
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        // sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          var localId = res.localIds[0] // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
          // wx.getLocalImgData({
          //     localId: localId, // 图片的localID
          //     success: function (res) {
          //       var localData = res.localData; // localData是图片的base64数据，可以用img标签显示
          //       console.log("localData", localData)
          //     }
          //   });
          wx.uploadImage({
            localId: localId,
            isShowProgressTips: 1, // 默认为1，显示进度提示
            success: function (res) {
              console.log('localData', res.serverId)
              successFunc(res.serverId)
            }
          })
        },
        fail: function (err) {
          if (typeof (errorFunc) === 'function') {
            errorFunc(err)
          }
        }
      })
    }
  }

  scanQRCode (successFunc) {
    wx.scanQRCode({
      needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
      scanType: ['qrCode', 'barCode'], // 可以指定扫二维码还是一维码，默认二者都有
      success: function (res) {
        successFunc(res)
      }
    })
  }
}
// 判断是否为业主身份 由深圳那边的接口判断是否存在房屋判断是否为业主
const getOwner = function () {
  return new Promise((resolve, reject) => {
    evaluteControllerSvr.GetOwnerEaHouseCountByOpenId(Storage.get('userInfo').OpenId).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
const wxApi = {
  auauthorize: auauthorize, // 获取微信code
  getwxUser: getwxUser, // 获取用户信息
  wxJssdk: wxJssdk, // 微信JSSDK
  linkTo: linkTo, // 进入各大功能时的跳转
  getOwner: getOwner,
  trim: trim
}
function trim (val) {
  return val.replace(/(^\s*)|(\s*$)/g, '')
}

Vue.prototype.wxApi = wxApi // 将微信wxApi 继承到Vue中
