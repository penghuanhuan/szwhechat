import request from '../static/js/request.js'

/**
 * 日常巡逻接口服务
 */
export class DailyPatrolControllerSvr {
  constructor () {
    this.baseurl = 'DailyPatrolControllerSvr.assx/'
  }

  /**
     * 添加日常巡逻数据
     * openId:String, eaAreaCode:String, patrolSite:String, status:int, problem:String, latitude:double, longitude:double
     */
  AddDailyPatrol (openId, eaAreaCode, patrolSite, status, problem, latitude, longitude) {
    return request.post(this.baseurl + 'AddDailyPatrol', Qs.stringify({ openId: openId, eaAreaCode: eaAreaCode, patrolSite: patrolSite, status: status, problem: problem, latitude: latitude, longitude: longitude }))
  }

  /**
     * 查询日常巡逻列表
     * openId:String, startIndex:int, maxSize:int, totalCount:boolean
     */
  GetDailyPatrolList (openId, startIndex, maxSize, totalCount) {
    return request.post(this.baseurl + 'GetDailyPatrolList', Qs.stringify({ openId: openId, startIndex: startIndex, maxSize: maxSize, totalCount: totalCount }))
  }

  /**
     * 根据KeyId获得指定日常巡逻数据
     * keyId:String
     */
  GetDailyPatrolByKeyId (keyId) {
    return request.post(this.baseurl + 'GetDailyPatrolByKeyId', Qs.stringify({ keyId: keyId }))
  }
}
