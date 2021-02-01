
import { WechatAuthControllerSvr } from '../service/WechatAuthControllerSvr.js'
// import { appid } from './wechat.js';
const init = function () {
  const wxJsApiConfig = {
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: '', // 必填，公众号的唯一标识
    timestamp: '', // 必填，生成签名的时间戳
    nonceStr: '', // 必填，生成签名的随机串
    signature: '', // 必填，签名
    jsApiList: []
  }
  const wechatAuthControllerSvr = new WechatAuthControllerSvr()
  wxJsApiConfig.jsApiList = ['scanQRCode', 'chooseImage', 'uploadImage', 'previewImage', 'getLocalImgData']
  wechatAuthControllerSvr.GetSignPackage(window.location.href).then(
    res => {
      wxJsApiConfig.appId = res.appId
      wxJsApiConfig.nonceStr = res.nonceStr
      wxJsApiConfig.timestamp = res.timestamp
      wxJsApiConfig.signature = res.signature.toLowerCase()
      wx.config(wxJsApiConfig)
      wx.ready(() => {
      })
      wx.error(function (res) {

      })
    }
  ).catch(err => {

  })
}

export class imageApi {
  constructor () {
    this.imgsObjs = []
    init()
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
        that.imgsObjs.push({ localId: localIds[index], serverId: res.serverId, url: localIds[index] })
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
          wx.uploadImage({
            localId: localId,
            isShowProgressTips: 1, // 默认为1，显示进度提示
            success: function (data) {
              successFunc(data)
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
