import request from '../../static/js/request.js'

/**
 * 机构服务
 */
export class OrgBaseController {
  constructor () {
    this.baseurl = 'OrgBaseController.assx/'
  }

  /**
     * 获取业委会成员列表
     * openId:String, eaAreaCode:String, orgCode:String, startIndex:int, maxSize:int
     */
  GetOwnerCommitteMemberList (openId, eaAreaCode, orgCode, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetOwnerCommitteMemberList', Qs.stringify({ openId: openId, eaAreaCode: eaAreaCode, orgCode: orgCode, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 获取物业企业详情
     * openId:String, orgCode:String
     */
  GetRealtyMgeCom (openId, orgCode) {
    return request.post(this.baseurl + 'GetRealtyMgeCom', Qs.stringify({ openId: openId, orgCode: orgCode }))
  }

  /**
     * 根据街道办代码获取街道办名称，多个以逗号隔开
     * openId:String, streetCodes:String
     */
  FindStreetNameByStreetCode (openId, streetCodes) {
    return request.post(this.baseurl + 'FindStreetNameByStreetCode', Qs.stringify({ openId: openId, streetCodes: streetCodes }))
  }

  /**
     * 获取业委会成员详情
     * openId:String, keyId:String
     */
  GetOwnerCommitteMemberDetial (openId, keyId) {
    return request.post(this.baseurl + 'GetOwnerCommitteMemberDetial', Qs.stringify({ openId: openId, keyId: keyId }))
  }

  /**
     * 获取物业企业详情
     * openId:String, orgCode:String
     */
  GetRealtyMgeComDetail (openId, orgCode) {
    return request.post(this.baseurl + 'GetRealtyMgeComDetail', Qs.stringify({ openId: openId, orgCode: orgCode }))
  }

  /**
     * 根据业委会代码获取业委会信息
     * openId:String, orgCode:String
     */
  GetOwnerTeamByOrgCode (openId, orgCode) {
    return request.post(this.baseurl + 'GetOwnerTeamByOrgCode', Qs.stringify({ openId: openId, orgCode: orgCode }))
  }

  /**
     * 获取开发建设单位详情
     * openId:String, orgCode:String
     */
  GetBuildUnit (openId, orgCode) {
    return request.post(this.baseurl + 'GetBuildUnit', Qs.stringify({ openId: openId, orgCode: orgCode }))
  }

  /**
     * 获取物业企业列表
     * openId:String, realtyMgeComName:String, startIndex:int, maxSize:int
     */
  GetRealtyMgeComList (openId, realtyMgeComName, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetRealtyMgeComList', Qs.stringify({ openId: openId, realtyMgeComName: realtyMgeComName, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 根据居委会代码获取街道办名称，多个以逗号隔开
     * openId:String, committeCodes:String
     */
  FindCommitteeNameByCommitteeCode (openId, committeCodes) {
    return request.post(this.baseurl + 'FindCommitteeNameByCommitteeCode', Qs.stringify({ openId: openId, committeCodes: committeCodes }))
  }

  /**
     * 通过成员姓名或者业委会名称 获取业委会成员列表
     * openId:String, eaAreaName:String, peopleName:String, orgName:String, startIndex:int, maxSize:int
     */
  GetOwnerCommitteMemberListByName (openId, eaAreaName, peopleName, orgName, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetOwnerCommitteMemberListByName', Qs.stringify({ openId: openId, eaAreaName: eaAreaName, peopleName: peopleName, orgName: orgName, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 获取业委会备案对象列表
     * openId:String, eaAreaCode:String, ownerCommitteName:String, startIndex:int, maxSize:int
     */
  GetOwnerCommitteList (openId, eaAreaCode, ownerCommitteName, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetOwnerCommitteList', Qs.stringify({ openId: openId, eaAreaCode: eaAreaCode, ownerCommitteName: ownerCommitteName, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 获取业务会主任列表
     * openId:String, name:String, startIndex:int, maxSize:int
     */
  GetDirectListByPerson (openId, name, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetDirectListByPerson', Qs.stringify({ openId: openId, name: name, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 获取业委会对象列表
     * openId:String, eaAreaCode:String, ownerTeamName:String, startIndex:int, maxSize:int
     */
  GetOwnerTeamList (openId, eaAreaCode, ownerTeamName, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetOwnerTeamList', Qs.stringify({ openId: openId, eaAreaCode: eaAreaCode, ownerTeamName: ownerTeamName, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 获取机构代码和名称列表
     * openId:String, cantonCode:String, orgName:String, orgCode:String, startIndex:int, maxSize:int, orgType:int
     */
  GetOrgBasicsList (openId, cantonCode, orgName, orgCode, startIndex, maxSize, orgType) {
    return request.post(this.baseurl + 'GetOrgBasicsList', Qs.stringify({ openId: openId, cantonCode: cantonCode, orgName: orgName, orgCode: orgCode, startIndex: startIndex, maxSize: maxSize, orgType: orgType }))
  }
}
