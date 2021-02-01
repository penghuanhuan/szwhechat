import { Enum } from '../base/Enum.js'
export class ComplaintSources extends Enum {
  constructor () {
    super()
    this[1] = '公众服务平台'
    this[2] = '微信公众网'
    this[3] = '电话投诉'
    this[4] = '业主意见收集'
    this[5] = '第三方渠道'
    this[99] = '其他'
  }
}
