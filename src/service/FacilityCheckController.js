import request from '../static/js/request.js'

/**
 * 微信设施设备巡检服务
 */
export class FacilityCheckController {
  constructor () {
    this.baseurl = 'FacilityCheckController.assx/'
  }

  /**
     * 获取巡检列表
     * option:int, startIndex:int, maxSize:int, totalCount:boolean
     */
  GetFacilityCheckList (option, startIndex, maxSize, totalCount) {
    return request.post(this.baseurl + 'GetFacilityCheckList', Qs.stringify({ option: option, startIndex: startIndex, maxSize: maxSize, totalCount: totalCount }))
  }

  /**
     * 添加设施设备巡检
     * data:WYFacilityCheck
     */
  AddFacilityCheck (data) {
    return request.post(this.baseurl + 'AddFacilityCheck', Qs.stringify({ data: (typeof data === 'undefined' || data === null) ? '' : data.toString() }))
  }

  /**
     * 获取巡检详情
     * keyId:String
     */
  GetFacilityCheck (keyId) {
    return request.post(this.baseurl + 'GetFacilityCheck', Qs.stringify({ keyId: keyId }))
  }

  /**
     * 获取设施设备信息
     * registerNumber:String
     */
  GetFacilityInfo (openID, registerNumber) {
    return request.post(this.baseurl + 'GetFacilityInfo', Qs.stringify({ openID: openID, registerNumber: registerNumber }))
  }
}
