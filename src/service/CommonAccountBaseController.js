
import request from '../static/js/request.js'

/**
 * 共有资金
 */
export class CommonAccountBaseController {
  constructor () {
    this.baseurl = 'CommonAccountBaseController.assx/'
  }

  /**
     * 获取共有资金账户交易流水
     * openId:String, accountCode:String, eaAreaCode:String, eaAreaName:String, startDate:Date, endDate:Date, startIndex:int, maxSize:int
     */
  GetCommonAccountTransList (openId, accountCode, eaAreaCode, eaAreaName, startDate, endDate, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetCommonAccountTransList', Qs.stringify({ openId: openId, accountCode: accountCode, eaAreaCode: eaAreaCode, eaAreaName: eaAreaName, startDate: startDate, endDate: endDate, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 催办
     * openId:String, cantonCode:String, streetCode:String, committeeCode:String, eaAreaCode:String
     */
  NoticWeChatMsgPush (openId, cantonCode, streetCode, committeeCode, eaAreaCode) {
    return request.post(this.baseurl + 'NoticWeChatMsgPush', Qs.stringify({ openId: openId, cantonCode: cantonCode, streetCode: streetCode, committeeCode: committeeCode, eaAreaCode: eaAreaCode }))
  }

  /**
     * 获取共有资金账户业主信息
     * openId:String
     */
  GetCommonAccountTransInfoList (openId) {
    return request.post(this.baseurl + 'GetCommonAccountTransInfoList', Qs.stringify({ openId: openId }))
  }

  /**
     * 获取银行信息(通过银行表)
     * openId:String, bankName:String, startIndex:int, maxSize:int, resultTotalCount:boolean
     */
  GetBankInfoByYh (openId, bankName, startIndex, maxSize, resultTotalCount) {
    return request.post(this.baseurl + 'GetBankInfoByYh', Qs.stringify({ openId: openId, bankName: bankName, startIndex: startIndex, maxSize: maxSize, resultTotalCount: resultTotalCount }))
  }

  /**
     * 获取统计列表
     * openId:String, code:String, type:int
     */
  GetCommonAccountCenseList (openId, code, type) {
    return request.post(this.baseurl + 'GetCommonAccountCenseList', Qs.stringify({ openId: openId, code: code, type: type }))
  }

  /**
     * 修改共有资金账号
     * openId:String, commonAccount:CommonAccount
     */
  ModifyCommonAccount (openId, commonAccount) {
    return request.post(this.baseurl + 'ModifyCommonAccount', Qs.stringify({ openId: openId, commonAccount: (typeof commonAccount === 'undefined' || commonAccount === null) ? '' : commonAccount.toString() }))
  }

  /**
     * 获取无共有账户详情列表
     * openId:String, code:String, name:String, startIndex:int, maxSize:int, resultTotalCount:boolean, type:int
     */
  GetCommonAccountNoDetailCenseList (openId, code, name, startIndex, maxSize, resultTotalCount, type) {
    return request.post(this.baseurl + 'GetCommonAccountNoDetailCenseList', Qs.stringify({ openId: openId, code: code, name: name, startIndex: startIndex, maxSize: maxSize, resultTotalCount: resultTotalCount, type: type }))
  }

  /**
     * 获取银行信息
     * openId:String, bankName:String, startIndex:int, maxSize:int, resultTotalCount:boolean
     */
  GetBankInfo (openId, bankName, startIndex, maxSize, resultTotalCount) {
    return request.post(this.baseurl + 'GetBankInfo', Qs.stringify({ openId: openId, bankName: bankName, startIndex: startIndex, maxSize: maxSize, resultTotalCount: resultTotalCount }))
  }

  /**
     * 添加共有资金账号
     * openId:String, commonAccount:CommonAccount
     */
  AddCommonAccount (openId, commonAccount) {
    return request.post(this.baseurl + 'AddCommonAccount', Qs.stringify({ openId: openId, commonAccount: (typeof commonAccount === 'undefined' || commonAccount === null) ? '' : commonAccount.toString() }))
  }

  /**
     * 验证账户是否合法
     * openId:String, accountCode:String, bankId:String
     */
  CheckCommonAccountLegal (openId, accountCode, bankId) {
    return request.post(this.baseurl + 'CheckCommonAccountLegal', Qs.stringify({ openId: openId, accountCode: accountCode, bankId: bankId }))
  }

  /**
     * 获取统计总数据
     * openId:String, code:String, type:int
     */
  GetCommonAccountCenseInfo (openId, code, type) {
    return request.post(this.baseurl + 'GetCommonAccountCenseInfo', Qs.stringify({ openId: openId, code: code, type: type }))
  }

  /**
     * 获取有共有账户详情列表
     * openId:String, code:String, name:String, startIndex:int, maxSize:int, resultTotalCount:boolean, type:int, option:int
     */
  GetCommonAccountHaveDetailCenseList (openId, code, name, startIndex, maxSize, resultTotalCount, type, option) {
    return request.post(this.baseurl + 'GetCommonAccountHaveDetailCenseList', Qs.stringify({ openId: openId, code: code, name: name, startIndex: startIndex, maxSize: maxSize, resultTotalCount: resultTotalCount, type: type, option: option }))
  }

  /**
     * 模糊查询物业区域
     * openId:String, name:String, startIndex:int, maxSize:int, resultTotalCount:boolean
     */
  GetCommonAccountDetailList (openId, name, startIndex, maxSize, resultTotalCount) {
    return request.post(this.baseurl + 'GetCommonAccountDetailList', Qs.stringify({ openId: openId, name: name, startIndex: startIndex, maxSize: maxSize, resultTotalCount: resultTotalCount }))
  }

  /**
     * 删除共有资金账号
     * openId:String, keyId:String
     */
  DeleteCommonAccount (openId, keyId) {
    return request.post(this.baseurl + 'DeleteCommonAccount', Qs.stringify({ openId: openId, keyId: keyId }))
  }

  /**
     * 获取共有资金账号详情
     * openId:String, keyID:String
     */
  GetCommonAccount (openId, keyID) {
    return request.post(this.baseurl + 'GetCommonAccount', Qs.stringify({ openId: openId, keyID: keyID }))
  }

  /**
     * 获取物业区域共有账户详情列表
     * openId:String, code:String, name:String, startIndex:int, maxSize:int, resultTotalCount:boolean
     */
  GetCommonAccountDetailCenseList (openId, code, name, startIndex, maxSize, resultTotalCount) {
    return request.post(this.baseurl + 'GetCommonAccountDetailCenseList', Qs.stringify({ openId: openId, code: code, name: name, startIndex: startIndex, maxSize: maxSize, resultTotalCount: resultTotalCount }))
  }

  /**
     * 获取共有资金账号列表
     * openId:String, accountCode:String, eaAreaName:String, accountType:int, status:int, startIndex:int, maxSize:int, resultTotalCount:boolean
     */
  GetCommonAccountList (openId, accountCode, eaAreaName, accountType, status, startIndex, maxSize, resultTotalCount) {
    return request.post(this.baseurl + 'GetCommonAccountList', Qs.stringify({ openId: openId, accountCode: accountCode, eaAreaName: eaAreaName, accountType: accountType, status: status, startIndex: startIndex, maxSize: maxSize, resultTotalCount: resultTotalCount }))
  }

  /**
     * 应开账户以及项目总数查询
     * openId:String, code:String, name:String, startIndex:int, maxSize:int, resultTotalCount:boolean, type:int, option:int
     */
  GetCommonAccountAllDetailCenseList (openId, code, name, startIndex, maxSize, resultTotalCount, type, option) {
    return request.post(this.baseurl + 'GetCommonAccountAllDetailCenseList', Qs.stringify({ openId: openId, code: code, name: name, startIndex: startIndex, maxSize: maxSize, resultTotalCount: resultTotalCount, type: type, option: option }))
  }
}
