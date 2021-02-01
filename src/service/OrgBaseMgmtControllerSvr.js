import request from '../static/js/request.js'
/**
 * 机构管理服务
 */
export class OrgBaseMgmtControllerSvr {
  constructor () {
    this.baseurl = 'OrgBaseMgmtControllerSvr.assx/'
  }

  /**
     * 新增居民委员会
     * token:String, data:ResidentsCommittee, loginId:String
     */
  AddResidentsCommittee (token, data, loginId) {
    return request.post(this.baseurl + 'AddResidentsCommittee', Qs.stringify({
      token: token,
      data: (typeof data === 'undefined' || data === null) ? '' : data.toString(),
      loginId: loginId
    }))
  }

  /**
     * 添加开发建设单位
     * token:String, data:BuildUnit, loginId:String
     */
  AddBuildUnit (token, data, loginId) {
    return request.post(this.baseurl + 'AddBuildUnit', Qs.stringify({
      token: token,
      data: (typeof data === 'undefined' || data === null) ? '' : data.toString(),
      loginId: loginId
    }))
  }

  /**
     * 修改开发建设单位
     * token:String, data:BuildUnit
     */
  UpdateBuildUnit (token, data) {
    return request.post(this.baseurl + 'UpdateBuildUnit', Qs.stringify({
      token: token,
      data: (typeof data === 'undefined' || data === null) ? '' : data.toString()
    }))
  }

  /**
     * 通过机构代码 检查该机构是否已存在,true:已存在，
     * token:String, orgCode:String, orgType:int
     */
  checkOrgExist (token, orgCode, orgType) {
    return request.post(this.baseurl + 'checkOrgExist', Qs.stringify({
      token: token,
      orgCode: orgCode,
      orgType: orgType
    }))
  }

  /**
     * 机构管理高级查询
     * token:String, page:int, rows:int, orgCode:String, cantonCode:String, orgName:String, orgType:int, paramType:int
     */
  GetOrgList (token, page, rows, orgCode, cantonCode, orgName, orgType, paramType) {
    return request.post(this.baseurl + 'GetOrgList', Qs.stringify({
      token: token,
      page: page,
      rows: rows,
      orgCode: orgCode,
      cantonCode: cantonCode,
      orgName: orgName,
      orgType: orgType,
      paramType: paramType
    }))
  }

  /**
     * 删除机构管理
     * token:String, orgCode:String, orgType:int
     */
  DeleteOrg (token, orgCode, orgType) {
    return request.post(this.baseurl + 'DeleteOrg', Qs.stringify({
      token: token,
      orgCode: orgCode,
      orgType: orgType
    }))
  }

  /**
     * 获取物业企业详情
     * token:String, orgCode:String
     */
  GetRealtyMgeComDetail (token, orgCode) {
    return request.post(this.baseurl + 'GetRealtyMgeComDetail', Qs.stringify({
      token: token,
      orgCode: orgCode
    }))
  }

  /**
     * 获取开发建设单位详情
     * token:String, code:String
     */
  GetBuildUnit (token, code) {
    return request.post(this.baseurl + 'GetBuildUnit', Qs.stringify({
      token: token,
      code: code
    }))
  }

  /**
     * 新增业主委员会
     * token:String, data:OwnerTeam, loginId:String
     */
  AddOwnerTeam (token, data, loginId) {
    return request.post(this.baseurl + 'AddOwnerTeam', Qs.stringify({
      token: token,
      data: (typeof data === 'undefined' || data === null) ? '' : data.toString(),
      loginId: loginId
    }))
  }

  /**
     * 获取物业企业在管项目列表
     * token:String, orgCode:String, startIndex:int, maxSize:int
     */
  GetPrejectList (token, orgCode, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetPrejectList', Qs.stringify({
      token: token,
      orgCode: orgCode,
      startIndex: startIndex,
      maxSize: maxSize
    }))
  }

  /**
     * 查询街道办下的居委会列表
     * token:String, streetOfficeCode:String
     */
  GetResidentsCommitteeByStreetOfficeCode (token, streetOfficeCode) {
    return request.post(this.baseurl + 'GetResidentsCommitteeByStreetOfficeCode', Qs.stringify({
      token: token,
      streetOfficeCode: streetOfficeCode
    }))
  }

  /**
     * 获取街道办事处详情
     * token:String, code:String
     */
  GetStreetOffice (token, code) {
    return request.post(this.baseurl + 'GetStreetOffice', Qs.stringify({
      token: token,
      code: code
    }))
  }

  /**
     * 修改审计单位
     * token:String, data:AssessmentOrg
     */
  UpdateAssessmentOrg (token, data) {
    return request.post(this.baseurl + 'UpdateAssessmentOrg', Qs.stringify({
      token: token,
      data: (typeof data === 'undefined' || data === null) ? '' : data.toString()
    }))
  }

  /**
     * 获取物业企业vo列表
     * token:String, realtyMgeComName:String, realtyMgeComRegisteredArea:String, realtyMgeComAddress:String, startIndex:int, maxSize:int
     */
  GetRealtyMgeComVoList (token, realtyMgeComName, realtyMgeComRegisteredArea, realtyMgeComAddress, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetRealtyMgeComVoList', Qs.stringify({
      token: token,
      realtyMgeComName: realtyMgeComName,
      realtyMgeComRegisteredArea: realtyMgeComRegisteredArea,
      realtyMgeComAddress: realtyMgeComAddress,
      startIndex: startIndex,
      maxSize: maxSize
    }))
  }

  /**
     * 获取机构代码和名称列表
     * token:String, cantonCode:String, orgName:String, orgCode:String, startIndex:int, maxSize:int, orgType:int
     */
  GetOrgBasicsList (token, cantonCode, orgName, orgCode, startIndex, maxSize, orgType) {
    return request.post(this.baseurl + 'GetOrgBasicsList', Qs.stringify({
      token: token,
      cantonCode: cantonCode,
      orgName: orgName,
      orgCode: orgCode,
      startIndex: startIndex,
      maxSize: maxSize,
      orgType: orgType
    }))
  }

  /**
     * 获取业主委员会详情
     * token:String, code:String
     */
  GetOwnerTeam (token, code) {
    return request.post(this.baseurl + 'GetOwnerTeam', Qs.stringify({
      token: token,
      code: code
    }))
  }

  /**
     * 获取居民委员会详情
     * token:String, code:String
     */
  GetResidentsCommittee (token, code) {
    return request.post(this.baseurl + 'GetResidentsCommittee', Qs.stringify({
      token: token,
      code: code
    }))
  }

  /**
     * 获取物业企业详情
     * token:String, code:String
     */
  GetRealtyMgeCom (token, code) {
    return request.post(this.baseurl + 'GetRealtyMgeCom', Qs.stringify({
      token: token,
      code: code
    }))
  }

  /**
     * 新增施工单位
     * token:String, data:Construction, loginId:String
     */
  AddConstruction (token, data, loginId) {
    return request.post(this.baseurl + 'AddConstruction', Qs.stringify({
      token: token,
      data: (typeof data === 'undefined' || data === null) ? '' : data.toString(),
      loginId: loginId
    }))
  }

  /**
     * 获取施工单位详情对象
     * token:String, code:String
     */
  GetConstruction (token, code) {
    return request.post(this.baseurl + 'GetConstruction', Qs.stringify({
      token: token,
      code: code
    }))
  }

  /**
     * 修改街道办事处
     * token:String, data:StreetOffice
     */
  UpdateStreetOffice (token, data) {
    return request.post(this.baseurl + 'UpdateStreetOffice', Qs.stringify({
      token: token,
      data: (typeof data === 'undefined' || data === null) ? '' : data.toString()
    }))
  }

  /**
     * 添加物业企业
     * token:String, data:RealtyMgeCom, loginId:String
     */
  AddRealtyMgeCom (token, data, loginId) {
    return request.post(this.baseurl + 'AddRealtyMgeCom', Qs.stringify({
      token: token,
      data: (typeof data === 'undefined' || data === null) ? '' : data.toString(),
      loginId: loginId
    }))
  }

  /**
     * 新增审计单位
     * token:String, data:AssessmentOrg, loginId:String
     */
  AddAssessmentOrg (token, data, loginId) {
    return request.post(this.baseurl + 'AddAssessmentOrg', Qs.stringify({
      token: token,
      data: (typeof data === 'undefined' || data === null) ? '' : data.toString(),
      loginId: loginId
    }))
  }

  /**
     * 修改居民委员会
     * token:String, data:ResidentsCommittee
     */
  UpdateResidentsCommittee (token, data) {
    return request.post(this.baseurl + 'UpdateResidentsCommittee', Qs.stringify({
      token: token,
      data: (typeof data === 'undefined' || data === null) ? '' : data.toString()
    }))
  }

  /**
     * 修改施工单位
     * token:String, data:Construction
     */
  UpdateConstruction (token, data) {
    return request.post(this.baseurl + 'UpdateConstruction', Qs.stringify({
      token: token,
      data: (typeof data === 'undefined' || data === null) ? '' : data.toString()
    }))
  }

  /**
     * 新增街道办事处
     * token:String, data:StreetOffice, loginId:String
     */
  AddStreetOffice (token, data, loginId) {
    return request.post(this.baseurl + 'AddStreetOffice', Qs.stringify({
      token: token,
      data: (typeof data === 'undefined' || data === null) ? '' : data.toString(),
      loginId: loginId
    }))
  }

  /**
     * 获取审计单位详情
     * token:String, code:String
     */
  GetAssessmentOrg (token, code) {
    return request.post(this.baseurl + 'GetAssessmentOrg', Qs.stringify({
      token: token,
      code: code
    }))
  }

  /**
     * 修改物业企业
     * token:String, data:RealtyMgeCom
     */
  UpdateRealtyMgeCom (token, data) {
    return request.post(this.baseurl + 'UpdateRealtyMgeCom', Qs.stringify({
      token: token,
      data: (typeof data === 'undefined' || data === null) ? '' : data.toString()
    }))
  }

  /**
     * 修改物业企业联系人信息
     * @param token
     * @param contactPerson
     * @param contactNumber
     * @param code
     * @param orgCode
     * @returns {*}
     * @constructor
     */
  UpdateRealtyMgeComByContact (token, contactPerson, contactNumber, code, orgCode) {
    return request.post(this.baseurl + 'UpdateRealtyMgeComByContact', Qs.stringify({
      token: token,
      contactPerson: contactPerson,
      contactNumber: contactNumber,
      code: code,
      orgCode: orgCode
    }))
  }

  /**
     * 修改业主委员会
     * token:String, data:OwnerTeam
     */
  UpdateOwnerTeam (token, data) {
    return request.post(this.baseurl + 'UpdateOwnerTeam', Qs.stringify({
      token: token,
      data: (typeof data === 'undefined' || data === null) ? '' : data.toString()
    }))
  }
}
