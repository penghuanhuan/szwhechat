import request from '../static/js/request.js'

/**
 * OpenControllerSvr
 */
export class OpenControllerSvr {
  constructor () {
    this.baseurl = 'OpenControllerSvr.assx/'
  }

  /**
   *
   * eaAreaCode:String
   */
  getOwnerTeamByEaAreaCode (eaAreaCode) {
    return request.post(this.baseurl + 'getOwnerTeamByEaAreaCode', Qs.stringify({ eaAreaCode: eaAreaCode }))
  }

  /**
   *
   * employeeNumber:String
   */
  getEmployeeDetail (employeeNumber) {
    return request.post(this.baseurl + 'getEmployeeDetail', Qs.stringify({ employeeNumber: employeeNumber }))
  }

  /**
   *
   * eaAreaCode:String
   */
  getPropertyManagerByEaAreaCode (eaAreaCode) {
    return request.post(this.baseurl + 'getPropertyManagerByEaAreaCode', Qs.stringify({ eaAreaCode: eaAreaCode }))
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
     * projectDetailsID:String
     */
  getProjectDetails (projectDetailsID) {
    return request.post(this.baseurl + 'getProjectDetails', Qs.stringify({ projectDetailsID: projectDetailsID }))
  }

  /**
   *
   * openId:String, key:String, startIndex:int, maxSize:int
   */
  getPrejectDetailList (openId, key, startIndex, maxSize) {
    return request.post(this.baseurl + 'getPrejectDetailList', Qs.stringify({ openId: openId, key: key, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
   *
   * openId:String, key:String, jobType:int, startIndex:int, maxSize:int
   */
  getEmployeeList (openId, key, jobType, startIndex, maxSize) {
    return request.post(this.baseurl + 'getEmployeeList', Qs.stringify({ openId: openId, key: key, jobType: jobType, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
   *
   * orgCode:String
   */
  getRealtyMgeComDetail (orgCode) {
    return request.post(this.baseurl + 'getRealtyMgeComDetail', Qs.stringify({ orgCode: orgCode }))
  }

  /**
   *
   * openId:String, key:String, startIndex:int, maxSize:int
   */
  getRealtyMgeComVoList (openId, key, startIndex, maxSize) {
    return request.post(this.baseurl + 'getRealtyMgeComVoList', Qs.stringify({ openId: openId, key: key, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
   *
   * openId:String, key:String, startDate:Date, endDate:Date
   */
  getTestScore (startDate, endDate) {
    return request.post(this.baseurl + 'getTestScore', Qs.stringify({ startDate: startDate, endDate: endDate }))
  }
}
