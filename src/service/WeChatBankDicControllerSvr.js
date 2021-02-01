import request from '../static/js/request.js'

/**
 * 微信银行字典接口
 */
export class WeChatBankDicControllerSvr {
  constructor () {
    this.baseurl = 'WeChatBankDicControllerSvr.assx/'
  }

  /**
   * 获取银行字典列表
   * openid:String, param:BankDictionaryQueryPara, startIndex:int, maxSize:int, resultTotalCount:boolean
   */
  GetBankDicList (openid, param, startIndex, maxSize, resultTotalCount) {
    return request.post(this.baseurl + 'GetBankDicList', Qs.stringify({ openid: openid, param: (typeof param === 'undefined' || param === null) ? '' : param.toString(), startIndex: startIndex, maxSize: maxSize, resultTotalCount: resultTotalCount }))
  }
}
