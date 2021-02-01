import request from '../static/js/request.js'

/**
 * 报表定制
 */
export class FormulateControllerSvr {
  constructor () {
    this.baseurl = 'FormulateControllerSvr.assx/'
  }

  /**
     * 修改报表定制
     * token:String, data:ReprotFormulate
     */
  ModifyFormulate (token, data) {
    return request.post(this.baseurl + 'ModifyFormulate', Qs.stringify({ token: token, data: (typeof data === 'undefined' || data === null) ? '' : data.toString() }))
  }

  /**
     * 查询结合绑定下拉框
     * token:String, param:ReprotFormulateQueryPara
     */
  getFormulateList (token, param) {
    return request.post(this.baseurl + 'getFormulateList', Qs.stringify({ token: token, param: (typeof param === 'undefined' || param === null) ? '' : param.toString() }))
  }

  /**
     * 获取机构上报列表
     * token:String, formluateName:String, startIndex:int, maxSize:int
     */
  getOrgFormulateList (token, formluateName, startIndex, maxSize) {
    return request.post(this.baseurl + 'getOrgFormulateList', Qs.stringify({ token: token, formluateName: formluateName, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 分页查询
     * token:String, param:ReprotFormulateQueryPara, startIndex:int, maxSize:int, resultTotalCount:boolean
     */
  getPageFormulateList (token, param, startIndex, maxSize, resultTotalCount) {
    return request.post(this.baseurl + 'getPageFormulateList', Qs.stringify({ token: token, param: (typeof param === 'undefined' || param === null) ? '' : param.toString(), startIndex: startIndex, maxSize: maxSize, resultTotalCount: resultTotalCount }))
  }

  /**
     * 驳回上报
     * token:String, keyId:String
     */
  backCommitFill (token, keyId) {
    return request.post(this.baseurl + 'backCommitFill', Qs.stringify({ token: token, keyId: keyId }))
  }

  /**
     * 提交报表
     * token:String, KeyId:String
     */
  commitReprotFill (token, KeyId) {
    return request.post(this.baseurl + 'commitReprotFill', Qs.stringify({ token: token, KeyId: KeyId }))
  }

  /**
     * 报表启用
     * token:String, data:ReprotFormulate
     */
  startWorkReportFill (token, data) {
    return request.post(this.baseurl + 'startWorkReportFill', Qs.stringify({ token: token, data: (typeof data === 'undefined' || data === null) ? '' : data.toString() }))
  }

  /**
     * 添加报表定制
     * token:String, data:ReprotFormulate
     */
  AddFormulate (token, data) {
    return request.post(this.baseurl + 'AddFormulate', Qs.stringify({ token: token, data: (typeof data === 'undefined' || data === null) ? '' : data.toString() }))
  }

  /**
     * 报表禁用
     * token:String, data:ReprotFormulate
     */
  finishWorkReportFill (token, data) {
    return request.post(this.baseurl + 'finishWorkReportFill', Qs.stringify({ token: token, data: (typeof data === 'undefined' || data === null) ? '' : data.toString() }))
  }

  /**
     * 查询定制明细
     * token:String, KeyId:String
     */
  GetFormulateDetail (token, KeyId) {
    return request.post(this.baseurl + 'GetFormulateDetail', Qs.stringify({ token: token, KeyId: KeyId }))
  }

  /**
     * 首页查询最后一个报表任务
     * token:String
     */
  GetLastReportFormulat (token) {
    return request.post(this.baseurl + 'GetLastReportFormulat', Qs.stringify({ token: token }))
  }
}
