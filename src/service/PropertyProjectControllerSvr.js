import request from '../static/js/request.js'
/**
 * 物业项目管理
 */
export class PropertyProjectControllerSvr {
  constructor () {
    this.baseurl = 'PropertyProjectControllerSvr.assx/'
  }

  /**
     * 获取物业项目信息
     * openID:String
     */
  GetPropertyProjectInfo (openID) {
    return request.post(this.baseurl + 'GetPropertyProjectInfo', Qs.stringify({ openID: openID }))
  }

  /**
     * 删除物业项目
     * openID:String, propertyProjectCode:String
     */
  DeletePropertyManager (openID, propertyProjectCode) {
    return request.post(this.baseurl + 'DeletePropertyManager', Qs.stringify({ openID: openID, propertyProjectCode: propertyProjectCode }))
  }

  /**
     * 检查是否修改项目经理信息
     * openID:String, propertyProject:PropertyProject
     */
  CheeckModifyPropertyManager (openID, propertyProject) {
    return request.post(this.baseurl + 'CheeckModifyPropertyManager', Qs.stringify({ openID: openID, propertyProject: (typeof propertyProject === 'undefined' || propertyProject === null) ? '' : propertyProject.toString() }))
  }

  /**
     * 获取物业项目列表
     * openID:String, key:String, status:int, cantonCode:String, startTime:Date, endTime:Date, startIndex:int, maxSize:int, totalCount:boolean, option:int
     */
  GetPropertyProjectList (openID, key, status, cantonCode, startTime, endTime, startIndex, maxSize, totalCount, option) {
    return request.post(this.baseurl + 'GetPropertyProjectList', Qs.stringify({ openID: openID, key: key, status: status, cantonCode: cantonCode, startTime: startTime, endTime: endTime, startIndex: startIndex, maxSize: maxSize, totalCount: totalCount, option: option }))
  }

  /**
     * 获取项目信息
     * openID:String
     */
  GetProjectInfo (openID) {
    return request.post(this.baseurl + 'GetProjectInfo', Qs.stringify({ openID: openID }))
  }

  /**
     * 提交物业项目
     * openID:String, propertyProject:PropertyProject
     */
  SubmitPropertyProject (openID, propertyProject) {
    return request.post(this.baseurl + 'SubmitPropertyProject', Qs.stringify({ openID: openID, propertyProject: (typeof propertyProject === 'undefined' || propertyProject === null) ? '' : propertyProject.toString() }))
  }

  /**
     * 审核物业项目
     * openID:String, propertyProjectCode:String, reviewContent:String, reviewStatus:int
     */
  CheckPropertyProject (openID, propertyProjectCode, reviewContent, reviewStatus) {
    return request.post(this.baseurl + 'CheckPropertyProject', Qs.stringify({ openID: openID, propertyProjectCode: propertyProjectCode, reviewContent: reviewContent, reviewStatus: reviewStatus }))
  }

  /**
     * 同步物业项目
     * openID:String, propertyProjectCode:String
     */
  SynPropertyProject (openID, propertyProjectCode) {
    return request.post(this.baseurl + 'SynPropertyProject', Qs.stringify({ openID: openID, propertyProjectCode: propertyProjectCode }))
  }

  /**
     * 获取物业详情
     * openID:String, propertyProjectCode:String
     */
  GetPropertyProject (openID, propertyProjectCode) {
    return request.post(this.baseurl + 'GetPropertyProject', Qs.stringify({ openID: openID, propertyProjectCode: propertyProjectCode }))
  }

  /**
     * 通过街道办获取居委会
     * openID:String, streetOfficeCode:String
     */
  GetResidentsCommitteeListByStreetOfficeCode (openID, streetOfficeCode) {
    return request.post(this.baseurl + 'GetResidentsCommitteeListByStreetOfficeCode', Qs.stringify({ openID: openID, streetOfficeCode: streetOfficeCode }))
  }

  /**
     * 修改物业项目
     * openID:String, propertyProject:PropertyProject
     */
  ModifyPropertyProject (openID, propertyProject) {
    return request.post(this.baseurl + 'ModifyPropertyProject', Qs.stringify({ openID: openID, propertyProject: (typeof propertyProject === 'undefined' || propertyProject === null) ? '' : propertyProject.toString() }))
  }
}
