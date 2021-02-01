import request from '../../static/js/request.js'

/**
 * 业主房屋绑定统计信息
 */
export class HmfsOwnerHouseControllerSvr {
  constructor () {
    this.baseurl = 'HmfsOwnerHouseControllerSvr.assx/'
  }

  /**
     * 根据部门ID获取用户列表
     * openId:String, startDate:String, endDate:String
     */
  GetUserOfEmpowerment (openId, startDate, endDate) {
    return request.post(this.baseurl + 'GetOwnerBindInfo', Qs.stringify({ openId: openId, startDate: startDate, endDate: endDate }))
  }
}
