import request from '../static/js/request.js'

/**
 * 微信投诉管理服务
 */
export class WeChatComplaintControllerSvr {
  constructor () {
    this.baseurl = 'WeChatComplaintControllerSvr.assx/'
  }

  /**
     * 发起投诉
     * openId:String, data:complaintData
     */
  CreateComplaint (openId, data) {
    return request.post(this.baseurl + 'CreateComplaint', Qs.stringify({ openId: openId, data: (typeof data === 'undefined' || data === null) ? '' : data.toString() }))
  }

  /**
     * 获取投诉详情
     * complaintNumber:String
     */
  GetComplaintDetail (complaintNumber) {
    return request.post(this.baseurl + 'GetComplaintDetail', Qs.stringify({ complaintNumber: complaintNumber }))
  }

  /**
     * 获取业主投诉列表
     * openId:String, startIndex:int, maxSize:int, option:int
     */
  GetOwnerComplaintList (openId, startIndex, maxSize, option) {
    return request.post(this.baseurl + 'GetOwnerComplaintList', Qs.stringify({ openId: openId, startIndex: startIndex, maxSize: maxSize, option: option }))
  }

  /**
     * 业主评价
     * openId:String, data:ComplaintTaskFlowActionArgs, satisfaction:int
     */
  Evaluateomplaint (openId, data, satisfaction) {
    return request.post(this.baseurl + 'Evaluateomplaint', Qs.stringify({ openId: openId, data: (typeof data === 'undefined' || data === null) ? '' : data.toString(), satisfaction: satisfaction }))
  }

  /**
     * 获取投诉问题
     *
     */
  GetComplaintTypes () {
    return request.post(this.baseurl + 'GetComplaintTypes', Qs.stringify({ }))
  }
}
