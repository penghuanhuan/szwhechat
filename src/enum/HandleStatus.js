import { Enum } from '../base/Enum.js'
export class HandleStatus extends Enum {
  constructor () {
    super()
    this[-1] = '超时'
    this[-2] = '撤销'
    this[1] = '待处理'
    this[2] = '待评价'
    this[3] = '已评价'
  }
}
