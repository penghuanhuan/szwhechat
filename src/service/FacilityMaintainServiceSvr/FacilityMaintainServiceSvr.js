import request from '../../static/js/request.js'

/**
 * 维保记录管理服务
 */
export class FacilityMaintainServiceSvr {
  constructor () {
    this.baseurl = 'FacilityMaintainServiceSvr.assx/'
  }

  /**
     * 获取维保单位
     *
     */
  getMaintainUnits () {
    return request.post(this.baseurl + 'getMaintainUnits', Qs.stringify({ }))
  }

  /**
     * 获取维保记录列表
     * openId:String, startIndex:int, maxSize:int, resultTotalCount:boolean
     */
  getFacilityMaintainList (openId, startIndex, maxSize, resultTotalCount) {
    return request.post(this.baseurl + 'getFacilityMaintainList', Qs.stringify({ openId: openId, startIndex: startIndex, maxSize: maxSize, resultTotalCount: resultTotalCount }))
  }

  /**
     * 根据编号获取设备信息
     * openID:String, registerNumber:String
     */
  getFacilityInfo (openID, registerNumber) {
    return request.post(this.baseurl + 'getFacilityInfo', Qs.stringify({ openID: openID, registerNumber: registerNumber }))
  }

  /**
     * 获取维保记录详情
     * maintainCode:String
     */
  getFacilityMaintain (maintainCode) {
    return request.post(this.baseurl + 'getFacilityMaintain', Qs.stringify({ maintainCode: maintainCode }))
  }

  /**
     * 添加维保记录
     * openID:String, facilityMaintain:FacilityMaintain
     */
  addFacilityMaintain (openID, facilityMaintain) {
    return request.post(this.baseurl + 'addFacilityMaintain', Qs.stringify({ openID: openID, facilityMaintain: (typeof facilityMaintain === 'undefined' || facilityMaintain === null) ? '' : facilityMaintain.toString() }))
  }
}
