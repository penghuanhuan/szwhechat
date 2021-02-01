import request from '../static/js/request.js'

/**
 * 诚信登记管理服务
 */
export class IntegrityRegisterBaseSvr {
  constructor () {
    this.baseurl = 'IntegrityRegisterBaseSvr.assx/'
  }

  /**
     * 得到项目负责人评分
     * token:String, projectLeaderID:String
     */
  GetProjectLeaderScoring (token, projectLeaderID) {
    return request.post(this.baseurl + 'GetProjectLeaderScoring', Qs.stringify({
      token: token,
      projectLeaderID: projectLeaderID
    }))
  }

  /**
     * 跟据条件返回诚信登记列表(只返回未删除的数据)
     * token:String, param:IntegrityRegisterQueryPara, start:int, pageSize:int, detail:boolean, isPage:boolean
     */
  GetIntegrityRegisterList (token, param, start, pageSize, detail, isPage) {
    return request.post(this.baseurl + 'GetIntegrityRegisterList', Qs.stringify({
      token: token,
      param: (typeof param === 'undefined' || param === null) ? '' : param.toString(),
      start: start,
      pageSize: pageSize,
      detail: detail,
      isPage: isPage
    }))
  }

  /**
     * 编辑诚信登记
     * token:String, data:IntegrityRegister
     */
  ModifyIntegrityRegister (token, data) {
    return request.post(this.baseurl + 'ModifyIntegrityRegister', Qs.stringify({
      token: token,
      data: (typeof data === 'undefined' || data === null) ? '' : data.toString()
    }))
  }

  /**
     * 获取诚信配置信息
     * token:String
     */
  GetIntegrityConfigRoot (token) {
    return request.post(this.baseurl + 'GetIntegrityConfigRoot', Qs.stringify({
      token: token
    }))
  }

  /**
     * 新建诚信登记
     * token:String, data:IntegrityRegister
     */
  AddIntegrityRegister (token, data) {
    return request.post(this.baseurl + 'AddIntegrityRegister', Qs.stringify({
      token: token,
      data: (typeof data === 'undefined' || data === null) ? '' : data.toString()
    }))
  }

  /**
     * 编辑诚信登记Ext
     * token:String, data:IntegrityRegister
     */
  ModifyIntegrityRegisterExt (token, data) {
    return request.post(this.baseurl + 'ModifyIntegrityRegisterExt', Qs.stringify({
      token: token,
      data: (typeof data === 'undefined' || data === null) ? '' : data.toString()
    }))
  }

  /**
     * 获取企业年度评分
     * token:String, qymc:String, pfnd:int, start:int, pageSize:int
     */
  GetRealtyMgeComByYear (token, qymc, pfnd, start, pageSize) {
    return request.post(this.baseurl + 'GetRealtyMgeComByYear', Qs.stringify({
      token: token,
      qymc: qymc,
      pfnd: pfnd,
      start: start,
      pageSize: pageSize
    }))
  }

  /**
     * 跟据条件返回诚信登记统计公示列表(只返回未删除的数据)
     * token:String, param:IntegrityRegisterNoticeQueryPara, start:int, pageSize:int, detail:boolean, isPage:boolean
     */
  GetIntegrityRegisterNoticeList (token, param, start, pageSize, detail, isPage) {
    return request.post(this.baseurl + 'GetIntegrityRegisterNoticeList', Qs.stringify({
      token: token,
      param: (typeof param === 'undefined' || param === null) ? '' : param.toString(),
      start: start,
      pageSize: pageSize,
      detail: detail,
      isPage: isPage
    }))
  }

  /**
     * 编辑诚信登记统计公示
     * token:String, data:IntegrityRegisterNotice
     */
  ModifyIntegrityRegisterNotice (token, data) {
    return request.post(this.baseurl + 'ModifyIntegrityRegisterNotice', Qs.stringify({
      token: token,
      data: (typeof data === 'undefined' || data === null) ? '' : data.toString()
    }))
  }

  /**
     * 删除诚信登记
     * token:String, keyID:String, isDel:boolean
     */
  DeleteIntegrityRegister (token, keyID, isDel) {
    return request.post(this.baseurl + 'DeleteIntegrityRegister', Qs.stringify({
      token: token,
      keyID: keyID,
      isDel: isDel
    }))
  }

  /**
     * 新建诚信登记统计公示
     * token:String, data:IntegrityRegisterNotice
     */
  AddIntegrityRegisterNotice (token, data) {
    return request.post(this.baseurl + 'AddIntegrityRegisterNotice', Qs.stringify({
      token: token,
      data: (typeof data === 'undefined' || data === null) ? '' : data.toString()
    }))
  }

  /**
     * 删除诚信登记统计公示
     * token:String, keyID:String, isDel:boolean
     */
  DeleteIntegrityRegisterNotice (token, keyID, isDel) {
    return request.post(this.baseurl + 'DeleteIntegrityRegisterNotice', Qs.stringify({
      token: token,
      keyID: keyID,
      isDel: isDel
    }))
  }

  /**
     * 跟据条件返回诚信登记统计公示个数(只返回未删除的数据)
     * token:String, param:IntegrityRegisterNoticeQueryPara
     */
  GetIntegrityRegisterNoticeCount (token, param) {
    return request.post(this.baseurl + 'GetIntegrityRegisterNoticeCount', Qs.stringify({
      token: token,
      param: (typeof param === 'undefined' || param === null) ? '' : param.toString()
    }))
  }

  /**
     * 获取诚信登记
     * token:String, keyID:String, detail:boolean
     */
  GetIntegrityRegisterDetail (token, keyID, detail) {
    return request.post(this.baseurl + 'GetIntegrityRegisterDetail', Qs.stringify({
      token: token,
      keyID: keyID,
      detail: detail
    }))
  }

  /**
     * 得到物业服务企业评分
     * token:String, orgCode:String
     */
  GetRealtyMgeComScoring (token, orgCode) {
    return request.post(this.baseurl + 'GetRealtyMgeComScoring', Qs.stringify({
      token: token,
      orgCode: orgCode
    }))
  }

  /**
     * 获取企业年度评分
     * token:String, specificType:int
     */
  GetIntegrityField (token, specificType) {
    return request.post(this.baseurl + 'GetIntegrityField', Qs.stringify({
      token: token,
      specificType: specificType
    }))
  }

  /**
     * 更新诚信登记状态
     * token:String, keyID:String, statu:int
     */
  ModifyIntegrityRegisterStatu (token, keyID, statu) {
    return request.post(this.baseurl + 'ModifyIntegrityRegisterStatu', Qs.stringify({
      token: token,
      keyID: keyID,
      statu: statu
    }))
  }

  /**
     * 获取诚信登记统计公示
     * token:String, keyID:String, detail:boolean
     */
  GetIntegrityRegisterNoticeDetail (token, keyID, detail) {
    return request.post(this.baseurl + 'GetIntegrityRegisterNoticeDetail', Qs.stringify({
      token: token,
      keyID: keyID,
      detail: detail
    }))
  }

  /**
     * 跟据条件返回诚信登记列表(返回所有数据，包含删除的删除的数据)
     * token:String, param:IntegrityRegisterQueryPara, start:int, pageSize:int, detail:boolean, isPage:boolean
     */
  GetAllIntegrityRegisterList (token, param, start, pageSize, detail, isPage) {
    return request.post(this.baseurl + 'GetAllIntegrityRegisterList', Qs.stringify({
      token: token,
      param: (typeof param === 'undefined' || param === null) ? '' : param.toString(),
      start: start,
      pageSize: pageSize,
      detail: detail,
      isPage: isPage
    }))
  }

  /**
     * 查询诚信信息
     * token:String, objectId:String, objectType:int, specificType:int, startIdnex:int, maxSize:int
     */
  QueryIntegrityInfo (token, objectId, objectType, specificType, startIdnex, maxSize) {
    return request.post(this.baseurl + 'QueryIntegrityInfo', Qs.stringify({
      token: token,
      objectId: objectId,
      objectType: objectType,
      specificType: specificType,
      startIdnex: startIdnex,
      maxSize: maxSize
    }))
  }

  /**
     * 跟据条件返回诚信登记个数(只返回未删除的数据)
     * token:String, param:IntegrityRegisterQueryPara
     */
  GetIntegrityRegisterCount (token, param) {
    return request.post(this.baseurl + 'GetIntegrityRegisterCount', Qs.stringify({
      token: token,
      param: (typeof param === 'undefined' || param === null) ? '' : param.toString()
    }))
  }

  /**
     * 获取企业年度评分
     * token:String, objectType:int, integrityType:int
     */
  GetIntegrityDescEnum (token, objectType, integrityType) {
    return request.post(this.baseurl + 'GetIntegrityDescEnum', Qs.stringify({
      token: token,
      objectType: objectType,
      integrityType: integrityType
    }))
  }

  /**
     * 跟据条件返回诚信登记个数(返回所有数据，包含删除的删除的数据)
     * token:String, param:IntegrityRegisterQueryPara
     */
  GetAllIntegrityRegisterCount (token, param) {
    return request.post(this.baseurl + 'GetAllIntegrityRegisterCount', Qs.stringify({
      token: token,
      param: (typeof param === 'undefined' || param === null) ? '' : param.toString()
    }))
  }
}
