import request from '../../static/js/request.js'

/**
 * 枚举服务
 */
export class EnumController {
  constructor () {
    this.baseurl = 'EnumController.assx/'
  }

  /**
     * 获取指定枚举所有映射值
     * enumName:String, isDesc:boolean
     */
  getEnum (enumName, isDesc) {
    return request.post(this.baseurl + 'getEnum', Qs.stringify({ enumName: enumName, isDesc: isDesc }))
  }

  /**
     * 获取指定枚举所有映射值 自定义键值对名称
     * enumName:String, isDesc:boolean, keyName:String, valueName:String
     */
  getEnumDefineBySelf (enumName, isDesc, keyName, valueName) {
    return request.post(this.baseurl + 'getEnumDefineBySelf', Qs.stringify({ enumName: enumName, isDesc: isDesc, keyName: keyName, valueName: valueName }))
  }
}
