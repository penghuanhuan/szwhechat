import request from '../../static/js/request.js'

/**
 * 安全检查导出服务
 */
export class SecurityCheckAMatterOutController {
  constructor () {
    this.baseurl = 'SecurityCheckAMatterOutController.assx/'
  }

  /**
     * 导出总体专项电梯数据
     * openId:String, matterKeyId:String, cantonCode:String, streetCode:String, comitteCode:String, eaAreaCode:String
     */
  ExportAllComLiftSecurityCheckCardListByFacility (openId, matterKeyId, cantonCode, streetCode, comitteCode, eaAreaCode) {
    return request.post(this.baseurl + 'ExportAllComLiftSecurityCheckCardListByFacility', Qs.stringify({ openId: openId, matterKeyId: matterKeyId, cantonCode: cantonCode, streetCode: streetCode, comitteCode: comitteCode, eaAreaCode: eaAreaCode }))
  }

  /**
     * 导出专项电动自行车数据
     * openId:String, matterKeyId:String, cantonCode:String, streetCode:String, comitteCode:String, eaAreaCode:String
     */
  ExportBicycleSecurityCheckCardListByFacility (openId, matterKeyId, cantonCode, streetCode, comitteCode, eaAreaCode) {
    return request.post(this.baseurl + 'ExportBicycleSecurityCheckCardListByFacility', Qs.stringify({ openId: openId, matterKeyId: matterKeyId, cantonCode: cantonCode, streetCode: streetCode, comitteCode: comitteCode, eaAreaCode: eaAreaCode }))
  }

  /**
     * 导出专项新能源汽车数据
     * openId:String, matterKeyId:String, cantonCode:String, streetCode:String, comitteCode:String, eaAreaCode:String
     */
  ExportCarSecurityCheckCardListByFacility (openId, matterKeyId, cantonCode, streetCode, comitteCode, eaAreaCode) {
    return request.post(this.baseurl + 'ExportCarSecurityCheckCardListByFacility', Qs.stringify({ openId: openId, matterKeyId: matterKeyId, cantonCode: cantonCode, streetCode: streetCode, comitteCode: comitteCode, eaAreaCode: eaAreaCode }))
  }

  /**
     * 导出细化专项电梯数据
     * openId:String, matterKeyId:String, cantonCode:String, streetCode:String, comitteCode:String, eaAreaCode:String
     */
  ExportCareLiftSecurityCheckCardListByFacility (openId, matterKeyId, cantonCode, streetCode, comitteCode, eaAreaCode) {
    return request.post(this.baseurl + 'ExportCareLiftSecurityCheckCardListByFacility', Qs.stringify({ openId: openId, matterKeyId: matterKeyId, cantonCode: cantonCode, streetCode: streetCode, comitteCode: comitteCode, eaAreaCode: eaAreaCode }))
  }

  /**
     * 导出企业专项电梯数据
     * openId:String, matterKeyId:String
     */
  ExportRealComLiftSecurityCheckCardListByFacility (openId, matterKeyId) {
    return request.post(this.baseurl + 'ExportRealComLiftSecurityCheckCardListByFacility', Qs.stringify({ openId: openId, matterKeyId: matterKeyId }))
  }

  /**
     * 导出专项泳池数据
     * openId:String, matterKeyId:String, cantonCode:String, streetCode:String, comitteCode:String, eaAreaCode:String
     */
  ExportPoolSecurityCheckCardListByFacility (openId, matterKeyId, cantonCode, streetCode, comitteCode, eaAreaCode) {
    return request.post(this.baseurl + 'ExportPoolSecurityCheckCardListByFacility', Qs.stringify({ openId: openId, matterKeyId: matterKeyId, cantonCode: cantonCode, streetCode: streetCode, comitteCode: comitteCode, eaAreaCode: eaAreaCode }))
  }

  /**
     * 导出防风防汛数据
     * openId:String, matterKeyId:String, cantonCode:String, streetCode:String, comitteCode:String, eaAreaCode:String
     */
  ExportDefenseSecurityCheckCardListByFacility (openId, matterKeyId, cantonCode, streetCode, comitteCode, eaAreaCode) {
    return request.post(this.baseurl + 'ExportDefenseSecurityCheckCardListByFacility', Qs.stringify({ openId: openId, matterKeyId: matterKeyId, cantonCode: cantonCode, streetCode: streetCode, comitteCode: comitteCode, eaAreaCode: eaAreaCode }))
  }

  /**
     * 常规检查总体情况导出
     * openId:String, matterKeyId:String, cantonCode:String, streetCode:String, comitteCode:String, eaAreaCode:String
     */
  ExportSecurityCheck (openId, matterKeyId, cantonCode, streetCode, comitteCode, eaAreaCode) {
    return request.post(this.baseurl + 'ExportSecurityCheck', Qs.stringify({ openId: openId, matterKeyId: matterKeyId, cantonCode: cantonCode, streetCode: streetCode, comitteCode: comitteCode, eaAreaCode: eaAreaCode }))
  }

  /**
     * 导出专项有限空间数据
     * openId:String, matterKeyId:String, cantonCode:String, streetCode:String, comitteCode:String, eaAreaCode:String
     */
  ExportEnclosedAreaSecurityCheckCardListByFacility (openId, matterKeyId, cantonCode, streetCode, comitteCode, eaAreaCode) {
    return request.post(this.baseurl + 'ExportEnclosedAreaSecurityCheckCardListByFacility', Qs.stringify({ openId: openId, matterKeyId: matterKeyId, cantonCode: cantonCode, streetCode: streetCode, comitteCode: comitteCode, eaAreaCode: eaAreaCode }))
  }
}
