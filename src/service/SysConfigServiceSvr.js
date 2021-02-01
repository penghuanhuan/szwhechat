import request from '../static/js/request.js'

/**
 * 系统配置相关服务
 */
export class SysConfigServiceSvr {
  constructor () {
    this.baseurl = 'SysConfigServiceSvr.assx/'
  }

  /**
     * 获取配置列表
     * keyName:String
     */
  getRootConfig (keyName) {
    return request.post(this.baseurl + 'getRootConfig', Qs.stringify({ keyName: keyName }))
  }

  /**
     * 根据Config_settings中的的key获取value
     * openId:String, keyName:String
     */
  getSysSettingByString (openId, keyName) {
    return request.post(this.baseurl + 'getSysSettingByString', Qs.stringify({ openId: openId, keyName: keyName }))
  }

  /**
     * 根据用户角色 获取信息公开发布菜单
     * openId:String
     */
  getPublicInfoMenuByToken (openId) {
    return request.post(this.baseurl + 'getPublicInfoMenuByToken', Qs.stringify({ openId: openId }))
  }

  /**
     * 获取信息公开
     * keyName:String
     */
  getinfo (keyName) {
    return request.post(this.baseurl + 'getinfo', Qs.stringify({ keyName: keyName }))
  }

  /**
     * 获取系统相关配置
     * keyName:String
     */
  getSystemConfig (keyName) {
    return request.post(this.baseurl + 'getSystemConfig', Qs.stringify({ keyName: keyName }))
  }
}
