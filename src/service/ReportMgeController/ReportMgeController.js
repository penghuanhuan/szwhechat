import request from '../../static/js/request.js'

/**
 * 报表服务
 */
export class ReportMgeController {
  constructor () {
    this.baseurl = 'ReportMgeController.assx/'
  }

  /**
   * 获取报表pdf  .
   * openId:String, reportName:String, param:ReportParam
   */
  getReportPDFContent (openId, reportName, param) {
    return request.post(this.baseurl + 'getReportPDFContent', Qs.stringify({ openId: openId, reportName: reportName, param: (typeof param === 'undefined' || param === null) ? '' : param.toString() }))
  }

  /**
   * 获取报表excel  .
   * openId:String, reportName:String, param:ReportParam
   */
  getReportExcelContent (openId, reportName, param) {
    return request.post(this.baseurl + 'getReportExcelContent', Qs.stringify({ openId: openId, reportName: reportName, param: (typeof param === 'undefined' || param === null) ? '' : param.toString() }))
  }

  /**
   * 获取调用报表接口所需参数  .
   * openId:String, reportName:String, param:ReportParam, isEdit:boolean
   */
  getReportFileParam (openId, reportName, param, isEdit) {
    return request.post(this.baseurl + 'getReportFileParam', Qs.stringify({ openId: openId, reportName: reportName, param: (typeof param === 'undefined' || param === null) ? '' : param.toString(), isEdit: isEdit }))
  }

  /**
   * 获取 编辑报表 类型内容  .
   * openId:String, reportName:String, param:ReportParam
   */
  getReportHmtlContentOfEdit (openId, reportName, param) {
    return request.post(this.baseurl + 'getReportHmtlContentOfEdit', Qs.stringify({ openId: openId, reportName: reportName, param: (typeof param === 'undefined' || param === null) ? '' : param.toString() }))
  }

  /**
   * 获取报表html内容
   * openId:String, reportName:String, param:ReportParam
   */
  getReportHmtlContent (openId, reportName, param) {
    return request.post(this.baseurl + 'getReportHmtlContent', Qs.stringify({ openId: openId, reportName: reportName, param: (typeof param === 'undefined' || param === null) ? '' : param.toString() }))
  }
}
