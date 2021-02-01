import request from '../static/js/request.js'
/**
 * 项目申请单
 */
export class EaAreaChangeCheckControllerSvr {
  constructor () {
    this.baseurl = 'EaAreaChangeCheckControllerSvr.assx/'
  }

  /**
     * 获取项目修改申请单列表
     * openID:String, eaAreaName:String, cantonCode:String, streetCode:String, committeCode:String, eaAreaChangeCheckStatus:int, applyTime:Date, startIndex:int, maxSize:int, totalCount:boolean
     */
  GetEaAreaChangeCheckList (openID, eaAreaName, cantonCode, streetCode, committeCode, eaAreaChangeCheckStatus, applyTime, startIndex, maxSize, totalCount) {
    return request.post(this.baseurl + 'GetEaAreaChangeCheckList', Qs.stringify({ openID: openID, eaAreaName: eaAreaName, cantonCode: cantonCode, streetCode: streetCode, committeCode: committeCode, eaAreaChangeCheckStatus: eaAreaChangeCheckStatus, applyTime: applyTime, startIndex: startIndex, maxSize: maxSize, totalCount: totalCount }))
  }

  /**
     * 获取审批数量信息
     * openID:String
     */
  GetEaAreaChangeCheckInfo (openID) {
    return request.post(this.baseurl + 'GetEaAreaChangeCheckInfo', Qs.stringify({ openID: openID }))
  }

  /**
     * 修改项目修改申请单
     * openID:String, eaAreaChangeCheck:EaAreaChangeCheck
     */
  ModifyEaAreaChangeCheck (openID, eaAreaChangeCheck) {
    return request.post(this.baseurl + 'ModifyEaAreaChangeCheck', Qs.stringify({ openID: openID, eaAreaChangeCheck: (typeof eaAreaChangeCheck === 'undefined' || eaAreaChangeCheck === null) ? '' : eaAreaChangeCheck.toString() }))
  }

  /**
     * 撤销项目修改申请单
     * openID:String, eaAreaChangeCheckNumber:String
     */
  UnDoEaAreaChangeCheck (openID, eaAreaChangeCheckNumber) {
    return request.post(this.baseurl + 'UnDoEaAreaChangeCheck', Qs.stringify({ openID: openID, eaAreaChangeCheckNumber: eaAreaChangeCheckNumber }))
  }

  /**
     * 获取项目修改申请单
     * openIdD:String, eaAreaChangeCheckCode:String
     */
  GetEaAreaChangeCheck (openIdD, eaAreaChangeCheckCode) {
    return request.post(this.baseurl + 'GetEaAreaChangeCheck', Qs.stringify({ openIdD: openIdD, eaAreaChangeCheckCode: eaAreaChangeCheckCode }))
  }

  /**
     * 审核项目修改申请单
     * openID:String, eaAreaChangeCheckCodes:String, status:int
     */
  CheckEaAreaChangeCheck (openID, eaAreaChangeCheckCodes, status) {
    return request.post(this.baseurl + 'CheckEaAreaChangeCheck', Qs.stringify({ openID: openID, eaAreaChangeCheckCodes: eaAreaChangeCheckCodes, status: status }))
  }

  /**
     * 提交项目修改申请单
     * openID:String, eaAreaChangeCheck:EaAreaChangeCheck
     */
  SubmitEaAreaChangeCheck (openID, eaAreaChangeCheck) {
    return request.post(this.baseurl + 'SubmitEaAreaChangeCheck', Qs.stringify({ openID: openID, eaAreaChangeCheck: (typeof eaAreaChangeCheck === 'undefined' || eaAreaChangeCheck === null) ? '' : eaAreaChangeCheck.toString() }))
  }
}
