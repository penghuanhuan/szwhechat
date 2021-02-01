import { DataPacket } from './DataPacket.js'
export class QueryParameter extends DataPacket {
  constructor () {
    super()
  }

  /**
   * 添加一个查询参数，将在Map中创建名为“name”的项(数值类型为0时不会加入条件)
   * @param {string} name 参数名称
   * @param value 参数值
   */
  addParameter (name, value) {
    if (value !== 0) this[name] = value
  }

  /**
   * 添加一个查询参数，将在Map中创建名为“name”的项(数值类型为0时也会加入条件)
   * @param {string} name 参数名称
   * @param value 参数值
   */
  addParameterIncZero (name, value) {
    this[name] = value
  }

  /**
   * 添加一个日期范围查询参数，将在Map中创建名为“name_S”、“name_E”的项
   * @param {string} name 参数名称
   * @param {Date} startDate 最小值
   * @param {Date} endDate 最大值
   */
  addDateParameterByRange (name, startDate, endDate) {
    this.addParameter(name + '_S', startDate)
    this.addParameter(name + '_E', endDate)
  }

  /**
   * 添加一个数值范围查询参数，将在Map中创建名为“name_L”、“name_H”的项
   * @param {string} name 参数名称
   * @param {number} low 最小值
   * @param {number} high 最大值
   */
  addNumberParameterByRange (name, low, high) {
    this.addParameter(name + '_L', low)
    this.addParameter(name + '_H', high)
  }

  /**
   * 添加一个枚举查询参数，将在Map中创建名为“name_Enum”的项
   * @param {string} name 参数名称
   * @param {Array<any>} values 枚举值数组
   */
  addParameterByEnum (name, values) {
    this.addParameter(name + '_Enum', values)
  }

  /**
   * 添加一个多属性查询参数，将在Map中创建名为“name”的项
   *
   * @param {string} name 参数名称
   * @param {string} attrName 属性名
   * @param attrValue 属性值
   */
  addMulAttrParameter (name, attrName, attrValue) {
    if (typeof this[name] === 'undefined') {
      this.addParameter(name, {})
    }
    this[name][attrName] = attrValue
  }

  /**
   * 添加一个查询排序条件,将在Map中创建名为“_orderBys”的项
   * @param {string} name 名称
   * @param {boolean} isAsc true为升序，false为降序
   */
  addOrderBy (name, isAsc) {
    if (typeof this._orderBys === 'undefined') {
      this.addParameter('_orderBys', new Array())
    }
    this._orderBys.push(isAsc ? name : name + '_D')
  }

  toString () {
    const obj = {}
    for (const key in this) {
      if (
        typeof this[key] !== 'function' &&
        key.substr(0, 10) !== '_QueryAttr' &&
        key.substr(0, 10) !== '_OrderAttr' &&
        this[key] !== ''
      ) {
        obj[String(key)] = this[key]
      }
    }
    return JSON.stringify(obj)
  }
}
