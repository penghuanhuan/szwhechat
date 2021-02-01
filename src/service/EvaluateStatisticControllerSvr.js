import request from '../static/js/request.js'

/**
 * EvaluateStatisticControllerSvr
 */
export class EvaluateStatisticControllerSvr {
  constructor () {
    this.baseurl = 'EvaluateStatisticControllerSvr.assx/'
  }

  /**
     *
     * openId:String, evaluateObjType:int, isAsc:boolean
     */
  getBlacklist (openId, evaluateObjType, isAsc) {
    return request.post(this.baseurl + 'getBlacklist', Qs.stringify({ openId: openId, evaluateObjType: evaluateObjType, isAsc: isAsc }))
  }

  /**
     *
     * openId:String, rangeCode:String, title:String, content:String, evaluateObjType:int, year:int, month:int
     */
  urgeEvaluate (openId, rangeCode, title, content, evaluateObjType, year, month) {
    return request.post(this.baseurl + 'urgeEvaluate', Qs.stringify({ openId: openId, rangeCode: rangeCode, title: title, content: content, evaluateObjType: evaluateObjType, year: year, month: month }))
  }

  /**
     *
     * openId:String, streetCode:String, evaluateObjType:int, year:int, month:int, day:int
     */
  getStationEvaluateOfDayStatistic (openId, streetCode, evaluateObjType, year, month, day) {
    return request.post(this.baseurl + 'getStationEvaluateOfDayStatistic', Qs.stringify({ openId: openId, streetCode: streetCode, evaluateObjType: evaluateObjType, year: year, month: month, day: day }))
  }

  /**
     *
     * openId:String, evaluateObjType:int, year:int, month:int, day:int
     */
  getCantonEvaluateOfDayStatistic (openId, evaluateObjType, year, month, day) {
    return request.post(this.baseurl + 'getCantonEvaluateOfDayStatistic', Qs.stringify({ openId: openId, evaluateObjType: evaluateObjType, year: year, month: month, day: day }))
  }

  /**
     *
     * openId:String, cantonCode:String, evaluateObjType:int, year:int, month:int, day:int
     */
  getStreetEvaluateOfDayStatistic (openId, cantonCode, evaluateObjType, year, month, day) {
    return request.post(this.baseurl + 'getStreetEvaluateOfDayStatistic', Qs.stringify({ openId: openId, cantonCode: cantonCode, evaluateObjType: evaluateObjType, year: year, month: month, day: day }))
  }

  /**
     *
     * openId:String
     */
  refreshLastMonthData (openId) {
    return request.post(this.baseurl + 'refreshLastMonthData', Qs.stringify({ openId: openId }))
  }

  /**
     *
     * openId:String, cantonCode:String, evaluateObjType:int, year:int, month:int
     */
  getStreetEvaluateStatistic (openId, cantonCode, evaluateObjType, year, month) {
    return request.post(this.baseurl + 'getStreetEvaluateStatistic', Qs.stringify({ openId: openId, cantonCode: cantonCode, evaluateObjType: evaluateObjType, year: year, month: month }))
  }

  /**
     *
     * openId:String, stationCode:String, evaluateObjType:int, year:int, month:int, day:int
     */
  getEaAreaEvaluateOfDayStatistic (openId, stationCode, evaluateObjType, year, month, day) {
    return request.post(this.baseurl + 'getEaAreaEvaluateOfDayStatistic', Qs.stringify({ openId: openId, stationCode: stationCode, evaluateObjType: evaluateObjType, year: year, month: month, day: day }))
  }

  /**
     *
     * openId:String, orgCode:String, year:int, month:int, evaluateObjType:int
     */
  getEvaluateScoreResultListByjgdm (openId, orgCode, year, month, evaluateObjType) {
    return request.post(this.baseurl + 'getEvaluateScoreResultListByjgdm', Qs.stringify({ openId: openId, orgCode: orgCode, year: year, month: month, evaluateObjType: evaluateObjType }))
  }

  /**
     *
     * openId:String, orgCode:String, eaAreaCode:String, evaluateObjType:int
     */
  displayReplyBtn (openId, orgCode, eaAreaCode, evaluateObjType) {
    return request.post(this.baseurl + 'displayReplyBtn', Qs.stringify({ openId: openId, orgCode: orgCode, eaAreaCode: eaAreaCode, evaluateObjType: evaluateObjType }))
  }

  /**
     *
     * openId:String, code:String, year:int, month:int, day:int
     */
  getEvaluateResultOfDayStatistic (openId, code, year, month, day) {
    return request.post(this.baseurl + 'getEvaluateResultOfDayStatistic', Qs.stringify({ openId: openId, code: code, year: year, month: month, day: day }))
  }

  /**
     *
     * openId:String, stationCode:String, evaluateObjType:int, year:int, month:int
     */
  getEaAreaEvaluateStatistic (openId, stationCode, evaluateObjType, year, month) {
    return request.post(this.baseurl + 'getEaAreaEvaluateStatistic', Qs.stringify({ openId: openId, stationCode: stationCode, evaluateObjType: evaluateObjType, year: year, month: month }))
  }

  /**
     *
     *
     */
  GetVersion () {
    return request.post(this.baseurl + 'GetVersion', Qs.stringify({ }))
  }

  /**
     *
     * openId:String, streetCode:String, evaluateObjType:int, year:int, month:int
     */
  getStationEvaluateStatistic (openId, streetCode, evaluateObjType, year, month) {
    return request.post(this.baseurl + 'getStationEvaluateStatistic', Qs.stringify({ openId: openId, streetCode: streetCode, evaluateObjType: evaluateObjType, year: year, month: month }))
  }

  /**
     *
     * openId:String, stars:String, orgCode:String, eaAreaCode:String, year:int, month:int, evaluateObjType:int, startIndex:int, maxSize:int
     */
  getEvaluateRecordList (openId, stars, orgCode, eaAreaCode, year, month, evaluateObjType, startIndex, maxSize) {
    return request.post(this.baseurl + 'getEvaluateRecordList', Qs.stringify({ openId: openId, stars: stars, orgCode: orgCode, eaAreaCode: eaAreaCode, year: year, month: month, evaluateObjType: evaluateObjType, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     *
     * openId:String, cantonCode:String, streetCode:String, stationCode:String, evaluateObjType:int, year:int, month:int, startIndex:int, maxSize:int, sortOrder:boolean,likeName:String
     */
  getEvaluateRankStatistic (openId, cantonCode, streetCode, stationCode, evaluateObjType, year, month, startIndex, maxSize, sortOrder, likeName) {
    return request.post(this.baseurl + 'getEvaluateRankStatistic', Qs.stringify({ openId: openId, cantonCode: cantonCode, streetCode: streetCode, stationCode: stationCode, evaluateObjType: evaluateObjType, year: year, month: month, startIndex: startIndex, maxSize: maxSize, sortOrder: sortOrder, likeName: likeName }))
  }

  /**
     *
     * openId:String, evaluateObjType:int, year:int, month:int
     */
  getCantonEvaluateStatistic (openId, evaluateObjType, year, month) {
    return request.post(this.baseurl + 'getCantonEvaluateStatistic', Qs.stringify({ openId: openId, evaluateObjType: evaluateObjType, year: year, month: month }))
  }

  /**
     *
     * openId:String, code:String, year:int, month:int
     */
  getEvaluateResultStatistic (openId, code, year, month) {
    return request.post(this.baseurl + 'getEvaluateResultStatistic', Qs.stringify({ openId: openId, code: code, year: year, month: month }))
  }
}
