import request from '../static/js/request.js'
/**
 * 安全生产编辑任务
 */
export class SecurityCheckEditTaskControllerSvr {
  constructor () {
    this.baseurl = 'SecurityCheckEditTaskControllerSvr.assx/'
  }

  /**
     * 提交安全生产
     * workId:String, taskName:String, actionParam:SecurityCheckTaskFlowActionArgs
     */
  sumbitSecurityCheck (workId, taskName, actionParam) {
    return request.post(this.baseurl + 'sumbitSecurityCheck', Qs.stringify({ workId: workId, taskName: taskName, actionParam: (typeof actionParam === 'undefined' || actionParam === null) ? '' : actionParam.toString() }))
  }

  /**
     * 修改安全生产
     * workId:String, taskName:String, actionParam:SecurityCheckTaskFlowActionArgs
     */
  modifySecurityCheck (workId, taskName, actionParam) {
    return request.post(this.baseurl + 'modifySecurityCheck', Qs.stringify({ workId: workId, taskName: taskName, actionParam: (typeof actionParam === 'undefined' || actionParam === null) ? '' : actionParam.toString() }))
  }

  /**
     * 提交安全生产,参数不需要工作流Id
     * openId:String, workFlowTemplateName:String, taskName:String, actionParam:SecurityCheckTaskFlowActionArgs
     */
  submitSecurityCheckWithoutWorkId (openId, workFlowTemplateName, taskName, actionParam) {
    return request.post(this.baseurl + 'submitSecurityCheckWithoutWorkId', Qs.stringify({ openId: openId, workFlowTemplateName: workFlowTemplateName, taskName: taskName, actionParam: (typeof actionParam === 'undefined' || actionParam === null) ? '' : actionParam.toString() }))
  }
}
