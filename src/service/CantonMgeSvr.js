import request from '../static/js/request.js'

/**
 * 行政区域管理服务
 */
export class CantonMgeSvr {
  constructor () {
    this.baseurl = 'CantonMgeSvr.assx/'
  }

  /**
     * 添加行政区域
     * token:String, cantonCode:String, cantonName:String, parentCantonCode:String, isMainCity:boolean, officeLocation:String, accpetUnit:String, workPlace:String, publicTel:String
     */
  AddCanton (token, cantonCode, cantonName, parentCantonCode, isMainCity, officeLocation, accpetUnit, workPlace, publicTel) {
    return request.post(this.baseurl + 'AddCanton', Qs.stringify({ token: token, cantonCode: cantonCode, cantonName: cantonName, parentCantonCode: parentCantonCode, isMainCity: isMainCity, officeLocation: officeLocation, accpetUnit: accpetUnit, workPlace: workPlace, publicTel: publicTel }))
  }

  /**
     * 获取子行政区域列表
     * token:String, cantonCode:String, child:boolean
     */
  GetChildCantonList (token, cantonCode, child) {
    return request.post(this.baseurl + 'GetChildCantonList', Qs.stringify({ token: token, cantonCode: cantonCode, child: child }))
  }

  /**
     * 根据条件获得行政区域列表
     * token:String, param:CantonQueryPara, child:boolean
     */
  GetCantonList (token, param, child) {
    return request.post(this.baseurl + 'GetCantonList', Qs.stringify({ token: token, param: (typeof param === 'undefined' || param === null) ? '' : param.toString(), child: child }))
  }

  /**
     * 获取行政区域
     * token:String, cantonCode:String, child:boolean
     */
  GetCanton (token, cantonCode, child) {
    return request.post(this.baseurl + 'GetCanton', Qs.stringify({ token: token, cantonCode: cantonCode, child: child }))
  }

  /**
     * 删除行政区域
     * token:String, cantonCode:String
     */
  DeleteCanton (token, cantonCode) {
    return request.post(this.baseurl + 'DeleteCanton', Qs.stringify({ token: token, cantonCode: cantonCode }))
  }

  /**
     * 编辑行政区域
     * token:String, cantonCode:String, cantonName:String, parentCantonCode:String, isMainCity:boolean, officeLocation:String, accpetUnit:String, workPlace:String, publicTel:String
     */
  ModifyCanton (token, cantonCode, cantonName, parentCantonCode, isMainCity, officeLocation, accpetUnit, workPlace, publicTel) {
    return request.post(this.baseurl + 'ModifyCanton', Qs.stringify({ token: token, cantonCode: cantonCode, cantonName: cantonName, parentCantonCode: parentCantonCode, isMainCity: isMainCity, officeLocation: officeLocation, accpetUnit: accpetUnit, workPlace: workPlace, publicTel: publicTel }))
  }
}
