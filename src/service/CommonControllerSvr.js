import request from '../static/js/request.js'

/**
 * 公共方法服务接口
 */
export class CommonControllerSvr {
  constructor () {
    this.baseurl = 'CommonControllerSvr.assx/'
  }

  /**
     * 根据业务单编号获取业务单运行记录
     * token:String, docCode:String, workID:String
     */
  GetRunRecordListByDocCode (token, docCode, workID) {
    return request.post(this.baseurl + 'GetRunRecordListByDocCode', Qs.stringify({ token: token, docCode: docCode, workID: workID }))
  }

  /**
     * 获取下拉框中物业区域列表
     * openId:String, keyWord:String, page:int, rows:int, cantonCode:String
     */
  GetEaAreaList (openId, keyWord, page, rows, cantonCode) {
    return request.post(this.baseurl + 'GetEaAreaList', Qs.stringify({ openId: openId, keyWord: keyWord, page: page, rows: rows, cantonCode: cantonCode }))
  }

  /**
     * 根据config的接点名称来获取值
     * keyNameList:String
     */
  getConfigValueHashMap (keyNameList) {
    return request.post(this.baseurl + 'getConfigValueHashMap', Qs.stringify({ keyNameList: keyNameList }))
  }

  /**
     * 根据业务单编号获取要件列表
     * token:String, docCode:String
     */
  GetImportantDocList (token, docCode) {
    return request.post(this.baseurl + 'GetImportantDocList', Qs.stringify({ token: token, docCode: docCode }))
  }

  /**
     * 清理可清理缓存列表
     * openId:String
     */
  CleanRedisCache (openId) {
    return request.post(this.baseurl + 'CleanRedisCache', Qs.stringify({ openId: openId }))
  }

  /**
     * 发短信
     * phone:String
     */
  SendMessages (phone) {
    return request.post(this.baseurl + 'SendMessages', Qs.stringify({ phone: phone }))
  }

  /**
     * 获取系统相关配置
     * keyName:String
     */
  getSystemConfig (keyName) {
    return request.post(this.baseurl + 'getSystemConfig', Qs.stringify({ keyName: keyName }))
  }

  /**
     * 获取机构用户列表
     * openId:String, orgCode:String, startIndex:int, maxSize:int
     */
  GetOrgUserList (openId, orgCode, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetOrgUserList', Qs.stringify({ openId: openId, orgCode: orgCode, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 获取机构用户列表
     * openId:String, orgCode:String, mbType:String  6-权限管理用户信息开关
     */
  GetCongfigOfOnOrOff (openId, mbType) {
    return request.post(this.baseurl + 'GetCongfigOfOnOrOff', Qs.stringify({ openId: openId, mbType: mbType }))
  }
}
