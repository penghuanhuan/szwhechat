import request from '../static/js/request.js'
/**
 * 微信报修服务
 */
export class RepairController {
  constructor () {
    this.baseurl = 'RepairController.assx/'
  }

  /**
     * 评价报修
     * repairID:String, openId:String, handleContent:String, attachmentIDs:String, handleTime:Date, satisfactionDegree:int
     */
  EvaluateRepair (repairID, openId, handleContent, attachmentIDs, handleTime, satisfactionDegree) {
    return request.post(this.baseurl + 'EvaluateRepair', Qs.stringify({ repairID: repairID, openId: openId, handleContent: handleContent, attachmentIDs: attachmentIDs, handleTime: handleTime, satisfactionDegree: satisfactionDegree }))
  }

  /**
     * 获取报修详情
     * repairId:String, option:int
     */
  GetRepair (repairId, option) {
    return request.post(this.baseurl + 'GetRepair', Qs.stringify({ repairId: repairId, option: option }))
  }

  /**
     * 获取当前用户报修历史记录
     * openId:String, startIndex:int, maxSize:int, totalCount:boolean
     */
  GetRepairList (openId, startIndex, maxSize, totalCount) {
    return request.post(this.baseurl + 'GetRepairList', Qs.stringify({ openId: openId, startIndex: startIndex, maxSize: maxSize, totalCount: totalCount }))
  }

  /**
     * 添加报修
     * openId:String, data:Repair
     */
  AddRepair (openId, data) {
    return request.post(this.baseurl + 'AddRepair', Qs.stringify({ openId: openId, data: (typeof data === 'undefined' || data === null) ? '' : data.toString() }))
  }

  /**
     * 删除报修记录
     * repairId:String
     */
  DeleteRepair (repairId) {
    return request.post(this.baseurl + 'DeleteRepair', Qs.stringify({ repairId: repairId }))
  }

  /**
     * 获取报修问题
     *
     */
  GetRepairQuestion () {
    return request.post(this.baseurl + 'GetRepairQuestion', Qs.stringify({ }))
  }
}
