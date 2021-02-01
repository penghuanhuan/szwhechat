import request from '../static/js/request.js'

/**
 * 日常保洁接口服务
 */
export class DailyCleaningControllerSvr {
  constructor () {
    this.baseurl = 'DailyCleaningControllerSvr.assx/'
  }

  /**
     * 添加日常保洁数据
     * openId:String, eaAreaCode:String, cleaner:String, cleanArea:String, status:int, overview:String, latitude:double, longitude:double
     */
  AddDailyCleaning (openId, eaAreaCode, cleaner, cleanArea, status, overview, latitude, longitude) {
    return request.post(this.baseurl + 'AddDailyCleaning', Qs.stringify({ openId: openId, eaAreaCode: eaAreaCode, cleaner: cleaner, cleanArea: cleanArea, status: status, overview: overview, latitude: latitude, longitude: longitude }))
  }

  /**
     * 查询日常保洁列表
     * openId:String, startIndex:int, maxSize:int, totalCount:boolean
     */
  GetDailyCleaningList (openId, startIndex, maxSize, totalCount) {
    return request.post(this.baseurl + 'GetDailyCleaningList', Qs.stringify({ openId: openId, startIndex: startIndex, maxSize: maxSize, totalCount: totalCount }))
  }

  /**
     * 根据KeyId获得指定日常保洁数据
     * keyId:String
     */
  GetDailyCleaningByKeyId (keyId) {
    return request.post(this.baseurl + 'GetDailyCleaningByKeyId', Qs.stringify({ keyId: keyId }))
  }
}
