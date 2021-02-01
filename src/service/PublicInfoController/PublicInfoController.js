import request from '../../static/js/request.js'

/**
 * 信息公开
 */
export class PublicInfoController {
  constructor () {
    this.baseurl = 'PublicInfoController.assx/'
  }

  /**
     * 获取报表附件
     * openId:String, keyId:String
     */
  getAttachment (openId, keyId) {
    return request.post(this.baseurl + 'getAttachment', Qs.stringify({ openId: openId, keyId: keyId }))
  }

  /**
     * 信息公开列表（物业区域一级）
     * openId:String, para:ReprotFillQueryPara, year:String, type:int, startIndex:int, maxSize:int
     */
  getPublicReportFillListByEaAreaDetail (openId, para, year, type, startIndex, maxSize) {
    return request.post(this.baseurl + 'getPublicReportFillListByEaAreaDetail', Qs.stringify({ openId: openId, para: (typeof para === 'undefined' || para === null) ? '' : para.toString(), year: year, type: type, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 查询公开统计（街道一级）
     * openId:String, cantonCode:String, streetCode:String, year:String, templateName:String, reportType:int
     */
  getPublicReportStreetCenser (openId, cantonCode, streetCode, year, templateName, reportType) {
    return request.post(this.baseurl + 'getPublicReportStreetCenser', Qs.stringify({ openId: openId, cantonCode: cantonCode, streetCode: streetCode, year: year, templateName: templateName, reportType: reportType }))
  }

  /**
     * 修改报表预览状态
     * openId:String, fillId:String
     */
  dropPublicReportFill (openId, fillId) {
    return request.post(this.baseurl + 'dropPublicReportFill', Qs.stringify({ openId: openId, fillId: fillId }))
  }

  /**
     * 通过报表名获取类型
     * openId:String, templateName:String
     */
  getReportTypes (openId, templateName) {
    return request.post(this.baseurl + 'getReportTypes', Qs.stringify({ openId: openId, templateName: templateName }))
  }

  /**
     * 获取配置
     * openId:String
     */
  getSysteamConfig (openId) {
    return request.post(this.baseurl + 'getSysteamConfig', Qs.stringify({ openId: openId }))
  }

  /**
     * 按钮统计显示
     * openId:String
     */
  displayBtn (openId) {
    return request.post(this.baseurl + 'displayBtn', Qs.stringify({ openId: openId }))
  }

  /**
     * 作废公开信息
     * openId:String, keyId:String
     */
  dropPublicInfo (openId, keyId) {
    return request.post(this.baseurl + 'dropPublicInfo', Qs.stringify({ openId: openId, keyId: keyId }))
  }

  /**
     * 获取时间范围
     * openId:String, keyId:String
     */
  getTimeRange (openId, keyId) {
    return request.post(this.baseurl + 'getTimeRange', Qs.stringify({ openId: openId, keyId: keyId }))
  }

  /**
     * 查询公开统计（社区一级）
     * openId:String, cantonCode:String, streetCode:String, CommitteeCode:String, year:String, templateName:String, reportType:int
     */
  getPublicReportCommittCenser (openId, cantonCode, streetCode, CommitteeCode, year, templateName, reportType) {
    return request.post(this.baseurl + 'getPublicReportCommittCenser', Qs.stringify({ openId: openId, cantonCode: cantonCode, streetCode: streetCode, CommitteeCode: CommitteeCode, year: year, templateName: templateName, reportType: reportType }))
  }

  /**
     * 添加公开信息
     * openId:String, templateName:String, data:String, attachID:String, ReportTypes:String, timeRange:String, reportingYear:String
     */
  addPublicInfo (openId, templateName, data, attachID, ReportTypes, timeRange, reportingYear) {
    return request.post(this.baseurl + 'addPublicInfo', Qs.stringify({ openId: openId, templateName: templateName, data: data, attachID: attachID, ReportTypes: ReportTypes, timeRange: timeRange, reportingYear: reportingYear }))
  }

  /**
     * 查询公开统计（物业区域一级）
     * openId:String, committeeCode:String, eaAreaName:String, templateName:String, reportType:int, year:String, startIndex:int, maxSize:int, resultTotalCount:boolean
     */
  getPublicReportAreaCenser (openId, committeeCode, eaAreaName, templateName, reportType, year, startIndex, maxSize, resultTotalCount) {
    return request.post(this.baseurl + 'getPublicReportAreaCenser', Qs.stringify({ openId: openId, committeeCode: committeeCode, eaAreaName: eaAreaName, templateName: templateName, reportType: reportType, year: year, startIndex: startIndex, maxSize: maxSize, resultTotalCount: resultTotalCount }))
  }

  /**
     * 关键字查询公开信息列表
     * openId:String, para:ReprotFillQueryPara, startDate:Date, endDate:Date, type:String, characterType:int, startIndex:int, maxSize:int
     */
  GetPublicReportFillListByKeyWord (openId, para, startDate, endDate, type, characterType, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetPublicReportFillListByKeyWord', Qs.stringify({ openId: openId, para: (typeof para === 'undefined' || para === null) ? '' : para.toString(), startDate: startDate, endDate: endDate, type: type, characterType: characterType, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 查询公开统计（行政区一级）
     * openId:String, cantonCode:String, year:String, templateName:String, reportType:int
     */
  getPublicReportCantonCenser (openId, cantonCode, year, templateName, reportType) {
    return request.post(this.baseurl + 'getPublicReportCantonCenser', Qs.stringify({ openId: openId, cantonCode: cantonCode, year: year, templateName: templateName, reportType: reportType }))
  }

  /**
     * 查询公开信息列表(物业详情一级)
     * openId:String, eaAreaCode:String, year:String, type:int, option:int
     */
  getPublicReportFillListByEaArea (openId, eaAreaCode, year, type, option) {
    return request.post(this.baseurl + 'getPublicReportFillListByEaArea', Qs.stringify({ openId: openId, eaAreaCode: eaAreaCode, year: year, type: type, option: option }))
  }

  /**
     * 查询公开信息列表(主管单位)
     * openId:String, param:ReprotFillQueryPara, startIndex:int, maxSize:int
     */
  getPublicReportFillListByManager (openId, param, startIndex, maxSize) {
    return request.post(this.baseurl + 'getPublicReportFillListByManager', Qs.stringify({ openId: openId, param: (typeof param === 'undefined' || param === null) ? '' : param.toString(), startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 查询公开信息列表(业主)
     * openId:String, param:ReprotFillQueryPara, startIndex:int, maxSize:int
     */
  getPublicReportFillListByOwner (openId, param, startIndex, maxSize) {
    return request.post(this.baseurl + 'getPublicReportFillListByOwner', Qs.stringify({ openId: openId, param: (typeof param === 'undefined' || param === null) ? '' : param.toString(), startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 删除
     * openId:String, FillId:String
     */
  deletePublicReportFill (openId, FillId) {
    return request.post(this.baseurl + 'deletePublicReportFill', Qs.stringify({ openId: openId, FillId: FillId }))
  }

  /**
     * 按钮催办显示
     * openId:String
     */
  displayCBBtn (openId) {
    return request.post(this.baseurl + 'displayCBBtn', Qs.stringify({ openId: openId }))
  }
}
