import request from '../static/js/request.js'

export class AgencyMatterMgeSvr {
  constructor () {
    this.baseurl = 'AgencyMatterMgeSvr.assx/'
  }

  /**
     *
     * openId:String
     */
  getAgencyMatterInitData (openId) {
    return request.post(this.baseurl + 'getAgencyMatterInitData', Qs.stringify({ openId: openId }))
  }

  /**
     *
     * openId:String, evaluateRecordId:String, replyContent:String
     */
  confirmationInfoOfEvaluate (openId, evaluateRecordId, replyContent) {
    return request.post(this.baseurl + 'confirmationInfoOfEvaluate', Qs.stringify({ openId: openId, evaluateRecordId: evaluateRecordId, replyContent: replyContent }))
  }

  /**
     *
     * openId:String, noticeMsgId:String
     */
  confirmationInfo (openId, noticeMsgId) {
    return request.post(this.baseurl + 'confirmationInfo', Qs.stringify({ openId: openId, noticeMsgId: noticeMsgId }))
  }

  /**
     *
     * openId:String, noticeTypes:String, repeated:boolean, startIndex:int, maxSize:int
     */
  getgetNoticeMsgList (openId, noticeTypes, repeated, startIndex, maxSize) {
    return request.post(this.baseurl + 'getgetNoticeMsgList', Qs.stringify({ openId: openId, noticeTypes: noticeTypes, repeated: repeated, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     *
     *
     */
  GetVersion () {
    return request.post(this.baseurl + 'GetVersion', Qs.stringify({ }))
  }

  /**
     *
     * openId:String, eaAreaCode:String, starType:String, lock:int, startIndex:int, maxSize:int
     */
  getEvaluateRecordListOfEvaluatePush (openId, eaAreaCode, starType, lock, startIndex, maxSize) {
    return request.post(this.baseurl + 'getEvaluateRecordListOfEvaluatePush', Qs.stringify({ openId: openId, eaAreaCode: eaAreaCode, starType: starType, lock: lock, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     *
     * openId:String, keyId:String, child:boolean
     */
  getWeChatNoticeMsgDetail (openId, keyId, child) {
    return request.post(this.baseurl + 'getWeChatNoticeMsgDetail', Qs.stringify({ openId: openId, keyId: keyId, child: child }))
  }

  /**
     *
     * openId:String, lock:int
     */
  getEvaluatePush (openId, lock) {
    return request.post(this.baseurl + 'getEvaluatePush', Qs.stringify({ openId: openId, lock: lock }))
  }
}
