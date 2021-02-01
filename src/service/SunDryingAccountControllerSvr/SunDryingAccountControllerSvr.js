import request from '../../static/js/request.js'

/**
 * 物业小区管理服务
 */
export class SunDryingAccountControllerSvr {
  constructor () {
    this.baseurl = 'SunDryingAccountControllerSvr.assx/'
  }

  /**
     * 获取小区大型改造工程
     * openID:String, areaCode:String, month:String
     */
  GetEaEstateAreaImproveProjectList (openID, areaCode, month) {
    return request.post(this.baseurl + 'GetEaEstateAreaImproveProjectList', Qs.stringify({ openID: openID, areaCode: areaCode, month: month }))
  }

  /**
     * 获取小区收支情况
     * openID:String, areaCode:String, year:int, quarter:int
     */
  GetEaEstateAreaAccountsSubject (openID, areaCode, year, quarter) {
    return request.post(this.baseurl + 'GetEaEstateAreaAccountsSubject', Qs.stringify({ openID: openID, areaCode: areaCode, year: year, quarter: quarter }))
  }

  /**
     * 获取小区维保资质
     * openID:String, areaCode:String
     */
  GetEaEstateAreaMaintainAptitudeList (openID, areaCode) {
    return request.post(this.baseurl + 'GetEaEstateAreaMaintainAptitudeList', Qs.stringify({ openID: openID, areaCode: areaCode }))
  }

  /**
     * 获取小区基本信息
     * openID:String, areaCode:String
     */
  GetEaEstateAreaBaseEx (openID, areaCode) {
    return request.post(this.baseurl + 'GetEaEstateAreaBaseEx', Qs.stringify({ openID: openID, areaCode: areaCode }))
  }

  /**
     * 获取小区设备维保
     * openID:String, areaCode:String, startTime:String, endTime:String, keyword:String
     */
  GetEaEstateAreaMaintainList (openID, areaCode, startTime, endTime, keyword) {
    return request.post(this.baseurl + 'GetEaEstateAreaMaintainList', Qs.stringify({ openID: openID, areaCode: areaCode, startTime: startTime, endTime: endTime, keyword: keyword }))
  }

  /**
     * 获取小区年度预算
     * openID:String, areaCode:String, year:int
     */
  GetEaEstateAreaYearSubject (openID, areaCode, year) {
    return request.post(this.baseurl + 'GetEaEstateAreaYearSubject', Qs.stringify({ openID: openID, areaCode: areaCode, year: year }))
  }

  /**
     * 获取小区违章装修信息
     * openID:String, areaCode:String, month:String, keyword:String
     */
  GetEaEstateAreaIllegalBuildingList (openID, areaCode, month, keyword) {
    return request.post(this.baseurl + 'GetEaEstateAreaIllegalBuildingList', Qs.stringify({ openID: openID, areaCode: areaCode, month: month, keyword: keyword }))
  }

  /**
     * 获取小区车位信息
     * openID:String, areaCode:String
     */
  GetEaEstateAreaParkingLot (openID, areaCode) {
    return request.post(this.baseurl + 'GetEaEstateAreaParkingLot', Qs.stringify({ openID: openID, areaCode: areaCode }))
  }
}
