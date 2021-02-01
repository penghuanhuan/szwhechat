import request from '../../static/js/request.js'
/**
 * 安全检查服务
 */
export class SecurityCheckControllerSvr {
  constructor () {
    this.baseurl = 'SecurityCheckControllerSvr.assx/'
  }

  /**
     * 专项检查区域 完成提交
     * token:String, keyId:String, attachId:String
     */
  ModifySpecialCheck (token, keyId, attachId) {
    return request.post(this.baseurl + 'ModifySpecialCheck', Qs.stringify({ token: token, keyId: keyId, attachId: attachId }))
  }

  /**
     * 提交物业区域安全检查
     * token:String, SecurityCheckAreaId:String, status:int, securityCheckId:String, data:SecurityCheckMoldList
     */
  ModifySecurityCheckAreaEx (token, SecurityCheckAreaId, status, securityCheckId, data) {
    return request.post(this.baseurl + 'ModifySecurityCheckAreaEx', Qs.stringify({ token: token, SecurityCheckAreaId: SecurityCheckAreaId, status: status, securityCheckId: securityCheckId, data: (typeof data === 'undefined' || data === null) ? '' : data.toString() }))
  }

  /**
     * 编辑检查类型
     * token:String, data:SecurityCheck
     */
  ModifySecurityCheck (token, data) {
    return request.post(this.baseurl + 'ModifySecurityCheck', Qs.stringify({ token: token, data: (typeof data === 'undefined' || data === null) ? '' : data.toString() }))
  }

  /**
     * 获取检查类型详情
     * token:String, keyId:String, isDetail:boolean
     */
  GetSecurityCheck (token, keyId, isDetail) {
    return request.post(this.baseurl + 'GetSecurityCheck', Qs.stringify({ token: token, keyId: keyId, isDetail: isDetail }))
  }

  /**
     * 新增检查类型
     * token:String, data:SecurityCheck
     */
  AddSecurityCheck (token, data) {
    return request.post(this.baseurl + 'AddSecurityCheck', Qs.stringify({ token: token, data: (typeof data === 'undefined' || data === null) ? '' : data.toString() }))
  }

  /**
     * 发布安全检查
     * token:String, data:SecurityCheckTask
     */
  PublishSecurityCheck (token, data) {
    return request.post(this.baseurl + 'PublishSecurityCheck', Qs.stringify({ token: token, data: (typeof data === 'undefined' || data === null) ? '' : data.toString() }))
  }

  /**
     * 获取物业区域安全检查列表
     * token:String, openId:String, securityCheckId:String, cantonId:String, status:int, startIndex:int, maxSize:int, totalCount:boolean, option:boolean
     */
  GetSecurityCheckAreaList (token, openId, securityCheckId, cantonId, status, startIndex, maxSize, totalCount, option) {
    return request.post(this.baseurl + 'GetSecurityCheckAreaList', Qs.stringify({ token: token, openId: openId, securityCheckId: securityCheckId, cantonId: cantonId, status: status, startIndex: startIndex, maxSize: maxSize, totalCount: totalCount, option: option }))
  }

  /**
     * 项目经理 获取安全检查列表
     * token:String, openId:String, type:int, theme:String, startIndex:int, size:int, areaStatus:int
     */
  GetOrgMgeSecurityCheckTaskList (token, openId, type, theme, startIndex, size, areaStatus) {
    return request.post(this.baseurl + 'GetOrgMgeSecurityCheckTaskList', Qs.stringify({ token: token, openId: openId, type: type, theme: theme, startIndex: startIndex, size: size, areaStatus: areaStatus }))
  }

  /**
     * 提交物业区域安全检查
     * token:String, keyId:String, status:int
     */
  ModifySecurityCheckArea (token, keyId, status) {
    return request.post(this.baseurl + 'ModifySecurityCheckArea', Qs.stringify({ token: token, keyId: keyId, status: status }))
  }

  /**
     * 获取安全检查详情
     * token:String, openId:String, keyId:String, status:int, isDetail:boolean
     */
  GetSecurityCheckTaskEx (token, openId, keyId, status, isDetail) {
    return request.post(this.baseurl + 'GetSecurityCheckTaskEx', Qs.stringify({ token: token, openId: openId, keyId: keyId, status: status, isDetail: isDetail }))
  }

  /**
     * 获取检查类型列表
     * token:String, typeName:String, securityLevel:int, status:int, startIndex:int, maxSize:int, totalCount:boolean
     */
  GetSecurityCheckList (token, typeName, securityLevel, status, startIndex, maxSize, totalCount) {
    return request.post(this.baseurl + 'GetSecurityCheckList', Qs.stringify({ token: token, typeName: typeName, securityLevel: securityLevel, status: status, startIndex: startIndex, maxSize: maxSize, totalCount: totalCount }))
  }

  /**
     * 获取安全检查详情
     * token:String, keyId:String, isDetail:boolean
     */
  GetSecurityCheckTask (token, keyId, isDetail) {
    return request.post(this.baseurl + 'GetSecurityCheckTask', Qs.stringify({ token: token, keyId: keyId, isDetail: isDetail }))
  }

  /**
     * 获取物业区域安全检查详情
     * token:String, keyId:String, isDetail:boolean, type:int
     */
  GetSecurityCheckArea (token, keyId, isDetail, type) {
    return request.post(this.baseurl + 'GetSecurityCheckArea', Qs.stringify({ token: token, keyId: keyId, isDetail: isDetail, type: type }))
  }

  /**
     * 项目经理 获取安全检查列表
     * token:String, openId:String, securityCheckId:String
     */
  GetSecurityCheckArea4EaAreaMge (token, openId, securityCheckId) {
    return request.post(this.baseurl + 'GetSecurityCheckArea4EaAreaMge', Qs.stringify({ token: token, openId: openId, securityCheckId: securityCheckId }))
  }

  /**
     * 获取安全检查列表
     * token:String, openId:String, type:String, theme:String, date:String, startIndex:int, maxSize:int, totalCount:boolean, option:boolean, isDone:boolean
     */
  GetSecurityCheckTaskList (token, openId, type, theme, date, startIndex, maxSize, totalCount, option, isDone) {
    return request.post(this.baseurl + 'GetSecurityCheckTaskList', Qs.stringify({ token: token, openId: openId, type: type, theme: theme, date: date, startIndex: startIndex, maxSize: maxSize, totalCount: totalCount, option: option, isDone: isDone }))
  }
}
