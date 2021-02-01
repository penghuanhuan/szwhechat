import request from '../static/js/request.js'

/**
 * 微信公共服务接口
 */
export class WeChatCommonControllerSvr {
  constructor () {
    this.baseurl = 'WeChatCommonControllerSvr.assx/'
  }

  /**
     * 获取信息公开菜单列表
     * openId:String
     */
  GetPublicInfoMenus (openId) {
    return request.post(this.baseurl + 'GetPublicInfoMenus', Qs.stringify({ openId: openId }))
  }

  /**
     * 根据小区获得社区
     * openID:String, eaAreaCode:String
     */
  GetResidentsCommitteeByEaAreaCode (openID, eaAreaCode) {
    return request.post(this.baseurl + 'GetResidentsCommitteeByEaAreaCode', Qs.stringify({ openID: openID, eaAreaCode: eaAreaCode }))
  }

  /**
     * 根据街道办获取行政区域
     * openID:String, streetCode:String
     */
  GetCantonByStreetCode (openID, streetCode) {
    return request.post(this.baseurl + 'GetCantonByStreetCode', Qs.stringify({ openID: openID, streetCode: streetCode }))
  }

  /**
     *
     * openId:String
     */
  getResidentEaArea (openId) {
    return request.post(this.baseurl + 'getResidentEaArea', Qs.stringify({ openId: openId }))
  }

  /**
     * 获取业主信息公开菜单列表
     * openId:String
     */
  GetPublicInfoMenusByOwner (openId) {
    return request.post(this.baseurl + 'GetPublicInfoMenusByOwner', Qs.stringify({ openId: openId }))
  }

  /**
     * 获取业主物业区域列表（深圳专用）
     * openId:String
     */
  GetOwnerEaAreaListSZ (openId) {
    return request.post(this.baseurl + 'GetOwnerEaAreaListSZ', Qs.stringify({ openId: openId }))
  }

  /**
     * 根据config的节点名称来获取值
     * keyName:String
     */
  GetConfigValueList (keyName) {
    return request.post(this.baseurl + 'GetConfigValueList', Qs.stringify({ keyName: keyName }))
  }

  /**
     * 获取行政区域
     * openId:String, cantonCode:String, child:boolean
     */
  GetCanton (openId, cantonCode, child) {
    return request.post(this.baseurl + 'GetCanton', Qs.stringify({ openId: openId, cantonCode: cantonCode, child: child }))
  }

  /**
     * 通过附件删除id附件（项目修改）
     * openId:String, keyId:String, projectId:String, attachId:String
     */
  DeleteAttachMentByIdOnModify (openId, keyId, projectId, attachId) {
    return request.post(this.baseurl + 'DeleteAttachMentByIdOnModify', Qs.stringify({ openId: openId, keyId: keyId, projectId: projectId, attachId: attachId }))
  }

  /**
     * 删除附件
     * openId:String, keyId:String
     */
  DeleteAttachMentById (openId, keyId) {
    return request.post(this.baseurl + 'DeleteAttachMentById', Qs.stringify({ openId: openId, keyId: keyId }))
  }

  /**
     * 根据社区获取街道办
     * openID:String, committCode:String
     */
  GetStreatOficeByCommittCode (openID, committCode) {
    return request.post(this.baseurl + 'GetStreatOficeByCommittCode', Qs.stringify({ openID: openID, committCode: committCode }))
  }

  /**
     * 获取所有行政区域
     * openID:String
     */
  GetAllCantonList (openID) {
    return request.post(this.baseurl + 'GetAllCantonList', Qs.stringify({ openID: openID }))
  }

  /**
     * 通过读取Config_settings.xml配置项的key获取value
     * openId:String, settingKey:String
     */
  GetSettingsValue (openId, settingKey) {
    return request.post(this.baseurl + 'GetSettingsValue', Qs.stringify({ openId: openId, settingKey: settingKey }))
  }

  /**
     * 获取文件Base64
     * openId:String, attachMentId:String
     */
  GetAttachMentBase64Str (openId, attachMentId) {
    return request.post(this.baseurl + 'GetAttachMentBase64Str', Qs.stringify({ openId: openId, attachMentId: attachMentId }))
  }

  /**
     * 从微信下载文件并保存
     * access_token:String, media_id:String
     */
  SaveWeChatServiceFile (access_token, media_id) {
    return request.post(this.baseurl + 'SaveWeChatServiceFile', Qs.stringify({ access_token: access_token, media_id: media_id }))
  }

  /**
     * 获取物业区域名称以及所属行政区域名
     * openID:String, eaAreaCode:String
     */
  GetNameAndCantonByCode (openID, eaAreaCode) {
    return request.post(this.baseurl + 'GetNameAndCantonByCode', Qs.stringify({ openID: openID, eaAreaCode: eaAreaCode }))
  }

  /**
     * 获取项目经理或者业委会的小区信息
     * openId:String
     */
  GetEaAreaForManagerOrOwnerTeam (openId) {
    return request.post(this.baseurl + 'GetEaAreaForManagerOrOwnerTeam', Qs.stringify({ openId: openId }))
  }

  /**
     * 通过外键主键获取附件列表
     * openId:String, refId:String
     */
  GetAttachMentListByRefId (openId, refId) {
    return request.post(this.baseurl + 'GetAttachMentListByRefId', Qs.stringify({ openId: openId, refId: refId }))
  }

  /**
     * 验证是否是区局用户
     * openId:String
     */
  CheckIsRegionalUserAndBackCantonList (openId) {
    return request.post(this.baseurl + 'CheckIsRegionalUserAndBackCantonList', Qs.stringify({ openId: openId }))
  }

  /**
     * 获取行政区域
     * openID:String
     */
  GetCantonList (openID) {
    return request.post(this.baseurl + 'GetCantonList', Qs.stringify({ openID: openID }))
  }

  /**
     * 获取物业区域列表（深圳专用,如果是项目经理又是业主则全部取出来去重）
     * openId:String
     */
  GetOwnerAndManagerOrOwnerTeamEaAreaListSZ (openId) {
    return request.post(this.baseurl + 'GetOwnerAndManagerOrOwnerTeamEaAreaListSZ', Qs.stringify({ openId: openId }))
  }

  /**
     * 根据行政区域获取街道办
     * openID:String, cantonCode:String
     */
  GetStreatOficeListByCantonCode (openID, cantonCode) {
    return request.post(this.baseurl + 'GetStreatOficeListByCantonCode', Qs.stringify({ openID: openID, cantonCode: cantonCode }))
  }

  /**
     * 根据行政区域获取所有街道办
     * openID:String, cantonCode:String
     */
  GetAllStreatOficeListByCantonCode (openID, cantonCode) {
    return request.post(this.baseurl + 'GetAllStreatOficeListByCantonCode', Qs.stringify({ openID: openID, cantonCode: cantonCode }))
  }

  /**
     * 获取文件Base64(连同id一同返回)
     * openId:String, attachMentId:String
     */
  GetAttachMentBase64StrSecend (openId, attachMentId) {
    return request.post(this.baseurl + 'GetAttachMentBase64StrSecend', Qs.stringify({ openId: openId, attachMentId: attachMentId }))
  }

  /**
     * 通过街道办获取居委会
     * openID:String, streetOfficeCode:String
     */
  GetResidentsCommitteeListByStreetOfficeCode (openID, streetOfficeCode) {
    return request.post(this.baseurl + 'GetResidentsCommitteeListByStreetOfficeCode', Qs.stringify({ openID: openID, streetOfficeCode: streetOfficeCode }))
  }

  /**
     * 通过主键获取附件
     * openId:String, keyId:String, out:boolean
     */
  GetAttachMentByKeyId (openId, keyId, out) {
    return request.post(this.baseurl + 'GetAttachMentByKeyId', Qs.stringify({ openId: openId, keyId: keyId, out: out }))
  }
}
