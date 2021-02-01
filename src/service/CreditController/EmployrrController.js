import request from '../../static/js/request.js'

/**
 * 从业人员管理
 */
export class EmployrrController {
  constructor () {
    this.baseurl = 'EmployrrController.assx/'
  }

  /**
     * 查询从业人员列表 用于诚信，只查询项目负责人
     * openId:String, name:String, orgNme:String, orgCode:String, startIndex:int, maxSize:int
     */
  GetEmployeeManagerList4Integrity (openId, name, orgNme, orgCode, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetEmployeeManagerList4Integrity', Qs.stringify({
      openId: openId,
      name: name,
      orgNme: orgNme,
      orgCode: orgCode,
      startIndex: startIndex,
      maxSize: maxSize
    }))
  }

  /**
     * 查询从业人员详情
     * openId:String, keyId:String
     */
  getEmployeeDetail (openId, keyId) {
    return request.post(this.baseurl + 'getEmployeeDetail', Qs.stringify({ openId: openId, keyId: keyId }))
  }

  /**
     * 获取项目经理列表
     * openId:String, name:String, startIndex:int, maxSize:int
     */
  GetEmployeeListByPerson (openId, name, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetEmployeeListByPerson', Qs.stringify({
      openId: openId,
      name: name,
      startIndex: startIndex,
      maxSize: maxSize
    }))
  }

  /**
     * 获取物业企业vo列表
     * openId:String, name:String, orgNme:String, orgCode:String, startIndex:int, maxSize:int
     */
  GetEmployeeList (openId, name, orgNme, orgCode, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetEmployeeList', Qs.stringify({
      openId: openId,
      name: name,
      orgNme: orgNme,
      orgCode: orgCode,
      startIndex: startIndex,
      maxSize: maxSize
    }))
  }
}
