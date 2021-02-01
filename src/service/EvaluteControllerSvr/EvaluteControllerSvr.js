import request from '../../static/js/request.js'

/**
 * 微信评价服务
 */
export class EvaluteControllerSvr {
  constructor () {
    this.baseurl = 'EvaluteControllerSvr.assx/'
  }

  /**
     * 获取不满意 选择项,type 1物管，2业委会
     * type:int
     */
  GetDiscontentItemMap (type) {
    return request.post(this.baseurl + 'GetDiscontentItemMap', Qs.stringify({ type: type }))
  }

  /**
     * 获取业主评价三星一下选择其他的列表
     * openId:String, cantonCode:String, streetOfficeOrgCode:String, residentsCommitteeOrgCode:String, eaAresCode:String, year:int, month:int, evaluateObjType:int, discontentKey:String, startIndex:int, maxSize:int
     */
  GetAreaDiscontentItemOfIsElseList (openId, cantonCode, streetOfficeOrgCode, residentsCommitteeOrgCode, eaAresCode, year, month, evaluateObjType, discontentKey, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetAreaDiscontentItemOfIsElseList', Qs.stringify({ openId: openId, cantonCode: cantonCode, streetOfficeOrgCode: streetOfficeOrgCode, residentsCommitteeOrgCode: residentsCommitteeOrgCode, eaAresCode: eaAresCode, year: year, month: month, evaluateObjType: evaluateObjType, discontentKey: discontentKey, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 获取业主房屋数量（深圳）
     * openId:String
     */
  GetOwnerEaHouseCountByOpenId (openId) {
    return request.post(this.baseurl + 'GetOwnerEaHouseCountByOpenId', Qs.stringify({ openId: openId }))
  }

  /**
     * 获取评价详情
     * keyId:String
     */
  GetEvaluateDetial (keyId) {
    return request.post(this.baseurl + 'GetEvaluateDetial', Qs.stringify({ keyId: keyId }))
  }

  /**
     * 获取评价记录列表(每日)
     * openId:String, orgCode:String, eaAreaCode:String, year:int, month:int, day:int, scored:boolean, evaluateObjType:int, startIndex:int, maxSize:int
     */
  GetEaAreaEvaluateRecordOfDayList (openId, orgCode, eaAreaCode, year, month, day, scored, evaluateObjType, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetEaAreaEvaluateRecordOfDayList', Qs.stringify({ openId: openId, orgCode: orgCode, eaAreaCode: eaAreaCode, year: year, month: month, day: day, scored: scored, evaluateObjType: evaluateObjType, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 获取物业区域信息
     * openId:String
     */
  GetResidentEaArea (openId) {
    return request.post(this.baseurl + 'GetResidentEaArea', Qs.stringify({ openId: openId }))
  }

  /**
     * 通过小区,业委会获取评价
     * code:String, date:int, startIndex:int, maxSize:int, eEvaluateObjType:int, name:String, dates:Date, datee:Date, nums:double, nume:double, item:boolean, sort:boolean
     */
  GetEvaluateListByEaAreaCode (code, date, startIndex, maxSize, eEvaluateObjType, name, dates, datee, nums, nume, item, sort) {
    return request.post(this.baseurl + 'GetEvaluateListByEaAreaCode', Qs.stringify({ code: code, date: date, startIndex: startIndex, maxSize: maxSize, eEvaluateObjType: eEvaluateObjType, name: name, dates: dates, datee: datee, nums: nums, nume: nume, item: item, sort: sort }))
  }

  /**
     * 获取所有行政区域
     *
     */
  GetCantonList () {
    return request.post(this.baseurl + 'GetCantonList', Qs.stringify({ }))
  }

  /**
     * 获取街道办详情
     * orgCode:String
     */
  GetResidentsCommitteeDetail (orgCode) {
    return request.post(this.baseurl + 'GetResidentsCommitteeDetail', Qs.stringify({ orgCode: orgCode }))
  }

  /**
     * 根据行政区域获取街道办
     * cantonCode:String
     */
  GetStreatOficeListByCantonCode (cantonCode) {
    return request.post(this.baseurl + 'GetStreatOficeListByCantonCode', Qs.stringify({ cantonCode: cantonCode }))
  }

  /**
     * 获取评价项,type   1小区，2业委会
     * keyId:String, orgCode:String, eaAreaCode:String, certificateNum:String, openID:String, type:int
     */
  GetEvaluationColumn (keyId, orgCode, eaAreaCode, certificateNum, openID, type) {
    return request.post(this.baseurl + 'GetEvaluationColumn', Qs.stringify({ keyId: keyId, orgCode: orgCode, eaAreaCode: eaAreaCode, certificateNum: certificateNum, openID: openID, type: type }))
  }

  /**
     * 获取业主评价详细统计
     * openId:String, cantonCode:String, streetOfficeOrgCode:String, residentsCommitteeOrgCode:String, eaAresCode:String, year:int, month:int, evaluateObjType:int
     */
  GetEvaAreaStatistics (openId, cantonCode, streetOfficeOrgCode, residentsCommitteeOrgCode, eaAresCode, year, month, evaluateObjType) {
    return request.post(this.baseurl + 'GetEvaAreaStatistics', Qs.stringify({ openId: openId, cantonCode: cantonCode, streetOfficeOrgCode: streetOfficeOrgCode, residentsCommitteeOrgCode: residentsCommitteeOrgCode, eaAresCode: eaAresCode, year: year, month: month, evaluateObjType: evaluateObjType }))
  }

  /**
     * 获取业主评价历史列表
     * year:int, month:int, certificateNum:String, openID:String, evaluateObjType:int, startIndex:int, maxSize:int, scored:boolean
     */
  GetOwnerEvaluateRecordList (year, month, certificateNum, openID, evaluateObjType, startIndex, maxSize, scored) {
    return request.post(this.baseurl + 'GetOwnerEvaluateRecordList', Qs.stringify({ year: year, month: month, certificateNum: certificateNum, openID: openID, evaluateObjType: evaluateObjType, startIndex: startIndex, maxSize: maxSize, scored: scored }))
  }

  /**
     * 添加业主评价记录
     * record:EvaluateRecord, anonymous:boolean
     */
  AddEvaluateRecord (record, anonymous) {
    return request.post(this.baseurl + 'AddEvaluateRecord', Qs.stringify({ record: (typeof record === 'undefined' || record === null) ? '' : record.toString(), anonymous: anonymous }))
  }

  /**
     * 获取排行
     * openId:String, year:int, month:int, evaluateObjType:int, orgName:String, startIndex:int, maxSize:int
     */
  GetEvaluateRank (openId, year, month, evaluateObjType, orgName, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetEvaluateRank', Qs.stringify({ openId: openId, year: year, month: month, evaluateObjType: evaluateObjType, orgName: orgName, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 获取评价记录列表
     * openId:String, orgCode:String, eaAreaCode:String, year:int, month:int, scored:boolean, evaluateObjType:int, startIndex:int, maxSize:int
     */
  GetEaAreaEvaluateRecordList (openId, orgCode, eaAreaCode, year, month, scored, evaluateObjType, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetEaAreaEvaluateRecordList', Qs.stringify({ openId: openId, orgCode: orgCode, eaAreaCode: eaAreaCode, year: year, month: month, scored: scored, evaluateObjType: evaluateObjType, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 获取业主评价内容列表
     * openId:String, eaAresCode:String, year:int, month:int, evaluateObjType:int, startIndex:int, maxSize:int,replyFlag:int
     */
  GetEvaluateRecordContentList (openId, eaAresCode, year, month, evaluateObjType, startIndex, maxSize, replyFlag) {
    return request.post(this.baseurl + 'GetEvaluateRecordContentList', Qs.stringify({ openId: openId, eaAresCode: eaAresCode, year: year, month: month, evaluateObjType: evaluateObjType, startIndex: startIndex, maxSize: maxSize, replyFlag: replyFlag }))
  }

  /**
     * 获取机构全市平均分
     * orgType:int, year:int, month:int
     */
  GetOrgAvgRangking (orgType, year, month) {
    return request.post(this.baseurl + 'GetOrgAvgRangking', Qs.stringify({ orgType: orgType, year: year, month: month }))
  }

  /**
     * 获取业主评价-->快速回复模板列表
     * openId:String, eaAresCode:String, year:int, month:int, evaluateObjType:int, startIndex:int, maxSize:int,replyFlag:int
     */
  GetQuickReplyTemplateList (openId, id, mbType) {
    return request.post(this.baseurl + 'GetQuickReplyTemplateList', Qs.stringify({ openId: openId, id: id, mbType: mbType }))
  }

  /**
     * 评价详情页面是否显示回复按钮
     * token:String, orgCode:String, eaAreaCode:String, evaluateObjType:int
     */
  DisplayReplyBtn (token, orgCode, eaAreaCode, evaluateObjType) {
    return request.post(this.baseurl + 'DisplayReplyBtn', Qs.stringify({ token: token, orgCode: orgCode, eaAreaCode: eaAreaCode, evaluateObjType: evaluateObjType }))
  }
}
