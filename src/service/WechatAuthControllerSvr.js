import request from '../static/js/request.js'

/**
 * 微信认证服务
 */
export class WechatAuthControllerSvr {
  constructor () {
    this.baseurl = 'WechatAuthControllerSvr.assx/'
  }

  /**
     * 解除绑定
     * openId:String
     */
  WechatUnBind (openId) {
    return request.post(this.baseurl + 'WechatUnBind', Qs.stringify({
      openId: openId
    }))
  }

  /**
     * 微信调用相机认证
     * urlStr:String
     */
  GetSignPackage (urlStr) {
    return request.post(this.baseurl + 'GetSignPackage', Qs.stringify({
      urlStr: urlStr
    }))
  }

  /**
     * 获取微信 配置
     * mediaId:String
     */
  GetCode (mediaId) {
    return request.post(this.baseurl + 'GetCode', Qs.stringify({
      mediaId: mediaId
    }))
  }

  /**
     * 通过Code获取微信用户信息
     * code:String
     */
  GetWxUserByCode (code) {
    return request.post(this.baseurl + 'GetWxUserByCode', Qs.stringify({
      code: code
    }))
  }

  /**
     * 通过手机号和姓名绑定业主
     * openId:String, fullname:String, phone:String, code:String
     */
  UserBindByPhone (openId, fullname, phone, code) {
    return request.post(this.baseurl + 'UserBindByPhone', Qs.stringify({
      openId: openId,
      fullname: fullname,
      phone: phone,
      code: code
    }))
  }

  /**
     * 绑定用户
     * openId:String, loginId:String
     */
  WechatEmployeeBind (openId, loginId) {
    return request.post(this.baseurl + 'WechatEmployeeBind', Qs.stringify({
      openId: openId,
      loginId: loginId
    }))
  }

  /**
     * 身份证识别
     * mediaId:String, face:Boolean
     */
  OcrIdCardWxImage (mediaId, face) {
    return request.post(this.baseurl + 'OcrIdCardWxImage', Qs.stringify({
      mediaId: mediaId,
      face: face
    }))
  }

  /**
     * 绑定业主
     * openId:String, certificateNum:String, name:String, type:String, phone:String, code:String
     */
  Wechatbind (openId, certificateNum, name, type, phone, code) {
    return request.post(this.baseurl + 'Wechatbind', Qs.stringify({
      openId: openId,
      certificateNum: certificateNum,
      name: name,
      type: type,
      phone: phone,
      code: code
    }))
  }

  /**
     * 获取微信用户信息
     * code:String
     */
  GetAccessUser (code) {
    return request.post(this.baseurl + 'GetAccessUser', Qs.stringify({
      code: code
    }))
  }

  /**
     * 登录码授权
     * openId:String, code:String
     */
  codeAuthorize (openId, code) {
    return request.post(this.baseurl + 'codeAuthorize', Qs.stringify({
      openId: openId,
      code: code
    }))
  }

  /**
     * 通过openId获取用户信息
     * openId:String
     */
  GetWxUserByOpenId (openId) {
    return request.post(this.baseurl + 'GetWxUserByOpenId', Qs.stringify({
      openId: openId
    }))
  }

  /**
     * 获取微信 配置
     *
     */
  GetWeixinConfig () {
    return request.post(this.baseurl + 'GetWeixinConfig', Qs.stringify({}))
  }

  /**
     * 通过openId获取用户信息(党支部用户)
     * openId:String
     */
  GetTwoWxUserByOpenId (openId) {
    return request.post(this.baseurl + 'GetTwoWxUserByOpenId', Qs.stringify({ openId: openId }))
  }
}
