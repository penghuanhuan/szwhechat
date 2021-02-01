import request from '../static/js/request.js'

/**
 * 意见反馈服务
 */
export class SuggestionFeedbackControllerSvr {
  constructor () {
    this.baseurl = 'SuggestionFeedbackControllerSvr.assx/'
  }

  /**
     * 获取意见反馈
     * keyID:String
     */
  GetFeedback (keyID) {
    return request.post(this.baseurl + 'GetFeedback', Qs.stringify({ keyID: keyID }))
  }

  /**
     * 添加意见反馈
     * openId:String, name:String, mobile:String,comfirmCode:String email:String, suggestion:String, latitude:double, longitude:double
     */
  AddFeedback (openId, name, mobile, comfirmCode, email, suggestion, latitude, longitude) {
    return request.post(this.baseurl + 'AddFeedback', Qs.stringify({ openId: openId, name: name, mobile: mobile, comfirmCode: comfirmCode, email: email, suggestion: suggestion, latitude: latitude, longitude: longitude }))
  }
}
