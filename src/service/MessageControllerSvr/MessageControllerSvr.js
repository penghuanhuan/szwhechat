import request from '../../static/js/request.js'

/**
 * 消息服务管理
 */
export class MessageControllerSvr {
  constructor () {
    this.baseurl = 'MessageControllerSvr.assx/'
  }

  /**
     * 设置消息为已读状态
     * keyId:String
     */
  setHasRead (keyId) {
    return request.post(this.baseurl + 'setHasRead', Qs.stringify({ keyId: keyId }))
  }

  /**
     * 获取消息明细
     * keyId:String, detail:boolean
     */
  getMessageDetail (keyId, detail) {
    return request.post(this.baseurl + 'getMessageDetail', Qs.stringify({ keyId: keyId, detail: detail }))
  }

  /**
     * 发布消息
     * sender:String, messageScope:String, receivers:List, title:String, content:String, isSendSMS:boolean
     */
  sendMessage (sender, messageScope, receivers, title, content, isSendSMS) {
    return request.post(this.baseurl + 'sendMessage', Qs.stringify({ sender: sender, messageScope: messageScope, receivers: receivers, title: title, content: content, isSendSMS: isSendSMS }))
  }

  /**
     * 获取用户详情列表
     * openId:String, loginIds:String
     */
  getUserInfoList (openId, loginIds) {
    return request.post(this.baseurl + 'getUserInfoList', Qs.stringify({ openId: openId, loginIds: loginIds }))
  }

  /**
     * 跟据条件返回消息列表
     * receiver:String, sender:String, startIndex:int, maxSize:int, detail:boolean, resultTotal:boolean
     */
  queryMessageList (receiver, sender, startIndex, maxSize, detail, resultTotal) {
    return request.post(this.baseurl + 'queryMessageList', Qs.stringify({ receiver: receiver, sender: sender, startIndex: startIndex, maxSize: maxSize, detail: detail, resultTotal: resultTotal }))
  }

  /**
     * 获取发送对象角色配置
     *
     */
  getMessageTarget () {
    return request.post(this.baseurl + 'getMessageTarget', Qs.stringify({ }))
  }
}
