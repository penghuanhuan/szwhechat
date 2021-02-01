import request from '../static/js/request.js'
/**
 * 物业区域基础数据管理
 */
export class EaAreaControllerSvr {
  constructor () {
    this.baseurl = 'EaAreaControllerSvr.assx/'
  }

  /**
     * 获取物业区域基础信息
     * openId:String, eaAreaCode:String
     */
  GetAllEaArea (openId, eaAreaCode) {
    return request.post(this.baseurl + 'GetAllEaArea', Qs.stringify({ openId: openId, eaAreaCode: eaAreaCode }))
  }

  /**
     * 获取物业区域扩展信息
     * openId:String, eaAreaCode:String
     */
  GetEaAreaProperty (openId, eaAreaCode) {
    return request.post(this.baseurl + 'GetEaAreaProperty', Qs.stringify({ openId: openId, eaAreaCode: eaAreaCode }))
  }

  /**
     * 新增物业区域对象(如果有子对像则将同时新增)
     * openId:String, eaArea:EaArea, isAddChild:boolean
     */
  AddEaArea (openId, eaArea, isAddChild) {
    return request.post(this.baseurl + 'AddEaArea', Qs.stringify({ openId: openId, eaArea: (typeof eaArea === 'undefined' || eaArea === null) ? '' : eaArea.toString(), isAddChild: isAddChild }))
  }

  /**
     * 根据条件返回物业区域列表（未删除）。
     * openId:String, param:EaAreaQueryParaEx, detail:boolean, startIndex:int, maxSize:int, resultTotalCount:boolean, showAll:boolean, option:int
     */
  GetEaAreaList (openId, param, detail, startIndex, maxSize, resultTotalCount, showAll, option) {
    return request.post(this.baseurl + 'GetEaAreaList', Qs.stringify({ openId: openId, param: (typeof param === 'undefined' || param === null) ? '' : param.toString(), detail: detail, startIndex: startIndex, maxSize: maxSize, resultTotalCount: resultTotalCount, showAll: showAll, option: option }))
  }

  /**
     * 根据物业区域的编码返回物业区域对象
     * openId:String, eaAreaCode:String, detail:boolean, child:boolean
     */
  GetEaAreaDetail (openId, eaAreaCode, detail, child) {
    return request.post(this.baseurl + 'GetEaAreaDetail', Qs.stringify({ openId: openId, eaAreaCode: eaAreaCode, detail: detail, child: child }))
  }

  /**
     * 上传
     * request:HttpServletRequest, file:MultipartFile
     */
  Upload (request, file) {
    return request.post(this.baseurl + 'Upload', Qs.stringify({ request: (typeof request === 'undefined' || request === null) ? '' : request.toString(), file: (typeof file === 'undefined' || file === null) ? '' : file.toString() }))
  }

  /**
     * 获取项目经理或者业委会的小区信息
     * openId:String
     */
  GetEaAreaForManagerOrOwnerTeam (openId) {
    return request.post(this.baseurl + 'GetEaAreaForManagerOrOwnerTeam', Qs.stringify({ openId: openId }))
  }

  /**
     * 修改物业区域对象。
     * openId:String, eaArea:EaArea, property:EaAreaProperty
     */
  ModifyEaArea (openId, eaArea, property) {
    return request.post(this.baseurl + 'ModifyEaArea', Qs.stringify({ openId: openId, eaArea: (typeof eaArea === 'undefined' || eaArea === null) ? '' : eaArea.toString(), property: (typeof property === 'undefined' || property === null) ? '' : property.toString() }))
  }

  /**
     * 删除物业区域对象。
     * openId:String, eaAreaCode:String
     */
  DeleteEaArea (openId, eaAreaCode) {
    return request.post(this.baseurl + 'DeleteEaArea', Qs.stringify({ openId: openId, eaAreaCode: eaAreaCode }))
  }
}
