import request from '../static/js/request.js'

/**
 * 大额资金转账公示
 */
export class LargetransferMgeControllerSvr {
  constructor () {
    this.baseurl = 'LargetransferMgeControllerSvr.assx/'
  }

  /**
     * 提交大额资金转账公示
     * openID:String, largeCapitalTransfer:LargeCapitalTransfer
     */
  SubmitLargetransfer (openID, largeCapitalTransfer) {
    return request.post(this.baseurl + 'SubmitLargetransfer', Qs.stringify({ openID: openID, largeCapitalTransfer: (typeof largeCapitalTransfer === 'undefined' || largeCapitalTransfer === null) ? '' : largeCapitalTransfer.toString() }))
  }

  /**
     * 获取大额转账资金明细
     * openIdD:String, noticCode:String
     */
  GetLargetransfer (openIdD, noticCode) {
    return request.post(this.baseurl + 'GetLargetransfer', Qs.stringify({ openIdD: openIdD, noticCode: noticCode }))
  }

  /**
     * 获取大额转账资金公示列表
     * openID:String, noticeTime:Date, keyWord:String, status:String, cantonCode:String, startIndex:int, maxSize:int, totalCount:boolean
     */
  GetLargetransferList (openID, noticeTime, keyWord, status, cantonCode, startIndex, maxSize, totalCount) {
    return request.post(this.baseurl + 'GetLargetransferList', Qs.stringify({ openID: openID, noticeTime: noticeTime, keyWord: keyWord, status: status, cantonCode: cantonCode, startIndex: startIndex, maxSize: maxSize, totalCount: totalCount }))
  }

  /**
     * 撤销大额资金转账公示
     * openID:String, noticeNumber:String, option:boolean
     */
  UnDoLargetransfer (openID, noticeNumber, option) {
    return request.post(this.baseurl + 'UnDoLargetransfer', Qs.stringify({ openID: openID, noticeNumber: noticeNumber, option: option }))
  }

  /**
     * 获取业委会银行账户以及银行名称
     * openID:String
     */
  GetOwnerTeamBankNmaeAndCode (openID) {
    return request.post(this.baseurl + 'GetOwnerTeamBankNmaeAndCode', Qs.stringify({ openID: openID }))
  }

  /**
     * 获取大额转账资金公示列表 (业主)
     * openID:String, noticeTime:Date, keyWord:String, status:String, cantonCode:String, startIndex:int, maxSize:int, totalCount:boolean
     */
  GetLargetransferListByOwner (openID, noticeTime, keyWord, status, cantonCode, startIndex, maxSize, totalCount) {
    return request.post(this.baseurl + 'GetLargetransferListByOwner', Qs.stringify({ openID: openID, noticeTime: noticeTime, keyWord: keyWord, status: status, cantonCode: cantonCode, startIndex: startIndex, maxSize: maxSize, totalCount: totalCount }))
  }

  /**
     * 获取公示编码
     * openID:String
     */
  GetLargetransferCode (openID) {
    return request.post(this.baseurl + 'GetLargetransferCode', Qs.stringify({ openID: openID }))
  }
}
