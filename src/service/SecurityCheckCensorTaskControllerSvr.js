import request from '../static/js/request.js'

/**
 * 安全生产审核任务
 */
export class SecurityCheckCensorTaskControllerSvr {
  constructor () {
    this.baseurl = 'SecurityCheckCensorTaskControllerSvr.assx/'
  }

  /**
     * 审核安全生产
     * workId:String, taskName:String, actionParam:SecurityCheckTaskFlowActionArgs
     */
  censorSecurityCheck (workId, taskName, actionParam) {
    return request.post(this.baseurl + 'censorSecurityCheck', Qs.stringify({ workId: workId, taskName: taskName, actionParam: (typeof actionParam === 'undefined' || actionParam === null) ? '' : actionParam.toString() }))
  }
}
