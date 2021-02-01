import request from '../static/js/request.js'
/**
 * InformationOpenControllerSvr
 */
export class InformationOpenControllerSvr {
  constructor () {
    this.baseurl = 'InformationOpenControllerSvr.assx/'
  }

  /**
     *
     * openId:String, eaAreaCode:String
     */
  getOwnerCommitteeByCode (openId, eaAreaCode) {
    return request.post(this.baseurl + 'getOwnerCommitteeByCode', Qs.stringify({ openId: openId, eaAreaCode: eaAreaCode }))
  }

  /**
     *
     * openId:String, projectDetailsID:String
     */
  getProjectDetails (openId, projectDetailsID) {
    return request.post(this.baseurl + 'getProjectDetails', Qs.stringify({ openId: openId, projectDetailsID: projectDetailsID }))
  }

  /**
     *
     * openId:String, eaAreaCode:String
     */
  getEmployeeByCode (openId, eaAreaCode) {
    return request.post(this.baseurl + 'getEmployeeByCode', Qs.stringify({ openId: openId, eaAreaCode: eaAreaCode }))
  }

  /**
     *
     * openId:String, employeeNumber:String
     */
  getEmployeeDetail (openId, employeeNumber) {
    return request.post(this.baseurl + 'getEmployeeDetail', Qs.stringify({ openId: openId, employeeNumber: employeeNumber }))
  }

  /**
     *
     * openId:String, orgCode:String, startIndex:int, maxSize:int
     */
  getEmployeeByOrgCode (openId, orgCode, startIndex, maxSize) {
    return request.post(this.baseurl + 'getEmployeeByOrgCode', Qs.stringify({ openId: openId, orgCode: orgCode, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     *
     * openId:String, orgCode:String, startIndex:int, maxSize:int
     */
  getPrejectList (openId, orgCode, startIndex, maxSize) {
    return request.post(this.baseurl + 'getPrejectList', Qs.stringify({ openId: openId, orgCode: orgCode, startIndex: startIndex, maxSize: maxSize }))
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
     * openId:String, areaName:String, cantonName:String, startIndex:int, maxSize:int
     */
  getPrejectDetailList (openId, areaName, cantonName, startIndex, maxSize) {
    return request.post(this.baseurl + 'getPrejectDetailList', Qs.stringify({ openId: openId, areaName: areaName, cantonName: cantonName, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     *
     * openId:String, orgCode:String
     */
  getRealtyMgeComDetail (openId, orgCode) {
    return request.post(this.baseurl + 'getRealtyMgeComDetail', Qs.stringify({ openId: openId, orgCode: orgCode }))
  }

  /**
     *
     * openId:String, realtyMgeComName:String, startIndex:int, maxSize:int
     */
  getRealtyMgeComVoList (openId, realtyMgeComName, startIndex, maxSize) {
    return request.post(this.baseurl + 'getRealtyMgeComVoList', Qs.stringify({ openId: openId, realtyMgeComName: realtyMgeComName, startIndex: startIndex, maxSize: maxSize }))
  }
}
