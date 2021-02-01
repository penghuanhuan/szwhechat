import request from '../static/js/request.js'

/**
 * 查询
 */
export class SearchControllerSvr {
  constructor () {
    this.baseurl = 'SearchControllerSvr.assx/'
  }

  /**
   * 获取业主物业区域列表
   * openId:String
   */
  GetOwnerAreaInfoList (openId) {
    return request.post(this.baseurl + 'GetOwnerAreaInfoList', Qs.stringify({ openId: openId }))
  }

  /**
   * 获取业主维修资金信息列表
   * openId:String
   */
  GetOwnerFundsInfoList (openId) {
    return request.post(this.baseurl + 'GetOwnerFundsInfoList', Qs.stringify({ openId: openId }))
  }
}
