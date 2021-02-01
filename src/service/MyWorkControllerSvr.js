import request from '../static/js/request.js'
/**
 * 我的工作管理
 */
export class MyWorkControllerSvr {
  constructor () {
    this.baseurl = 'MyWorkControllerSvr.assx/'
  }

  /**
     * 统计用户平均每天工作量
     * oper:String, option:int
     */
  getDailyWorkload (oper, option) {
    return request.post(this.baseurl + 'getDailyWorkload', Qs.stringify({ oper: oper, option: option }))
  }

  /**
     * 获取我的工作个数
     * taskName:String, taskStatus:int, startTime:Date, endTime:Date
     */
  getMyTaskCount (taskName, taskStatus, startTime, endTime) {
    return request.post(this.baseurl + 'getMyTaskCount', Qs.stringify({ taskName: taskName, taskStatus: taskStatus, startTime: startTime, endTime: endTime }))
  }

  /**
     * 开始一项新工作，返回工作ID和URL
     * workTemplateName:String
     */
  startWork (workTemplateName) {
    return request.post(this.baseurl + 'startWork', Qs.stringify({ workTemplateName: workTemplateName }))
  }

  /**
     * 获取我的工作列表
     * loginId:String, taskName:String, taskStatus:int, startTime:Date, endTime:Date, startIndex:int, maxSize:int
     */
  getMyTaskList (loginId, taskName, taskStatus, startTime, endTime, startIndex, maxSize) {
    return request.post(this.baseurl + 'getMyTaskList', Qs.stringify({ loginId: loginId, taskName: taskName, taskStatus: taskStatus, startTime: startTime, endTime: endTime, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 根据workID获取我的工作实例
     * workID:String
     */
  getMyTaskItemByWorkID (workID) {
    return request.post(this.baseurl + 'getMyTaskItemByWorkID', Qs.stringify({ workID: workID }))
  }

  /**
     * 获取我的任务实例
     * taskId:String
     */
  getMyTaskItem (taskId) {
    return request.post(this.baseurl + 'getMyTaskItem', Qs.stringify({ taskId: taskId }))
  }

  /**
     * 业主开始一项新工作，返回工作ID和URL
     * certificateNum:String, workTemplateName:String
     */
  ownerStartWork (certificateNum, workTemplateName) {
    return request.post(this.baseurl + 'ownerStartWork', Qs.stringify({ certificateNum: certificateNum, workTemplateName: workTemplateName }))
  }
}
