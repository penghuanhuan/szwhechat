import request from '../static/js/request.js'

/**
 * 物业服务区域服务
 */
export class EaAreaController {
  constructor () {
    this.baseurl = 'EaAreaController.assx/'
  }

  /**
     * 获取物业区域详情
     * openId:String, eaAreaCode:String, detail:boolean
     */
  GetEaAreaDetail (openId, eaAreaCode, detail) {
    return request.post(this.baseurl + 'GetEaAreaDetail', Qs.stringify({
      openId: openId,
      eaAreaCode: eaAreaCode,
      detail: detail
    }))
  }
}
