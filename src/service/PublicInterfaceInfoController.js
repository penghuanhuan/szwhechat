import request from '../static/js/request.js'

/**
 * 内容管理接口
 */
export class PublicInterfaceInfoController {
  constructor () {
    this.baseurl = 'PublicInterfaceInfoController.assx/'
  }

  /**
     * 通过机构 统一社会信用代码查询机构信息
     * orgCode:String, orgType:int
     */
  getRealtyMgeComDetail (orgCode, orgType) {
    return request.post(this.baseurl + 'getRealtyMgeComDetail', Qs.stringify({ orgCode: orgCode, orgType: orgType }))
  }

  /**
     * 验证code 是否正确
     * code:String
     */
  CheckUserInfoByCode (code) {
    return request.post(this.baseurl + 'CheckUserInfoByCode', Qs.stringify({ code: code }))
  }
}
