import request from '../../static/js/request.js'

/**
 * 公司关联关系
 */
export class CompanyAssociationControllerSvr {
  constructor () {
    this.baseurl = 'CompanyAssociationControllerSvr.assx/'
  }

  /**
     * 获取物业企业列表
     * openId:String, realtyMgeComName:String, startIndex:int, maxSize:int
     */
  GetRealtyMgeComList (openId, realtyMgeComName, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetRealtyMgeComList', Qs.stringify({ openId: openId, realtyMgeComName: realtyMgeComName, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 获取子母公司关系详情
     * openId:String, keyID:String
     */
  GetCompanyAssociation (openId, keyID) {
    return request.post(this.baseurl + 'GetCompanyAssociation', Qs.stringify({ openId: openId, keyID: keyID }))
  }

  /**
     * 是否显示新增子母公司关系按钮
     * openId:String
     */
  DisplayAddCompanyAssociationBtn (openId) {
    return request.post(this.baseurl + 'DisplayAddCompanyAssociationBtn', Qs.stringify({ openId: openId }))
  }

  /**
     * 取消子母公司关联关系
     * openId:String, keyId:String
     */
  DropCompanyAssociation (openId, keyId) {
    return request.post(this.baseurl + 'DropCompanyAssociation', Qs.stringify({ openId: openId, keyId: keyId }))
  }

  /**
     * 修改子母公司关联关系
     * openId:String, companyAssociation:CompanyAssociation
     */
  ModifyCompanyAssociation (openId, companyAssociation) {
    return request.post(this.baseurl + 'ModifyCompanyAssociation', Qs.stringify({ openId: openId, companyAssociation: (typeof companyAssociation === 'undefined' || companyAssociation === null) ? '' : companyAssociation.toString() }))
  }

  /**
     * 获取子母公司关系列表
     * openId:String, orgCode:String, orgName:String, status:int, startIndex:int, maxSize:int, resultTotalCount:boolean, option:int
     */
  GetCompanyAssociationList (openId, orgCode, orgName, status, startIndex, maxSize, resultTotalCount, option) {
    return request.post(this.baseurl + 'GetCompanyAssociationList', Qs.stringify({ openId: openId, orgCode: orgCode, orgName: orgName, status: status, startIndex: startIndex, maxSize: maxSize, resultTotalCount: resultTotalCount, option: option }))
  }

  /**
     * 根据物业企业机构代码获取物业区域
     * openId:String, orgCode:String, startIndex:int, maxSize:int, resultTotalCount:boolean
     */
  GetEaAreaListByOrgCode (openId, orgCode, startIndex, maxSize, resultTotalCount) {
    return request.post(this.baseurl + 'GetEaAreaListByOrgCode', Qs.stringify({ openId: openId, orgCode: orgCode, startIndex: startIndex, maxSize: maxSize, resultTotalCount: resultTotalCount }))
  }

  /**
     * 添加子母公司关联关系
     * openId:String, companyAssociation:CompanyAssociation
     */
  AddCompanyAssociation (openId, companyAssociation) {
    return request.post(this.baseurl + 'AddCompanyAssociation', Qs.stringify({ openId: openId, companyAssociation: (typeof companyAssociation === 'undefined' || companyAssociation === null) ? '' : companyAssociation.toString() }))
  }

  /**
     * 解除子母公司关联关系
     * openId:String, keyId:String
     */
  ReleaseCompanyAssociation (openId, keyId) {
    return request.post(this.baseurl + 'ReleaseCompanyAssociation', Qs.stringify({ openId: openId, keyId: keyId }))
  }

  /**
     * 选择子母公司关联关系
     * openId:String, keyId:String, option:int
     */
  SelectCompanyAssociation (openId, keyId, option) {
    return request.post(this.baseurl + 'SelectCompanyAssociation', Qs.stringify({ openId: openId, keyId: keyId, option: option }))
  }
}
