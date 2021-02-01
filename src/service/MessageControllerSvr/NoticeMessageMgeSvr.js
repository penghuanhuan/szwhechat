import request from '../../static/js/request.js'

/**
 * 通知消息服务
 */
export class NoticeMessageMgeSvr {
  constructor () {
    this.baseurl = 'NoticeMessageMgeSvr.assx/'
  }

  /**
   * 设置消息为已读状态
   * token:String, keyId:String
   */
  setHasRead (token, keyId) {
    return request.post(this.baseurl + 'setHasRead', Qs.stringify({
      token: token,
      keyId: keyId
    }))
  }

  /**
   * 删除消息
   * token:String, keyId:String
   */
  deleteNoticeMessage (token, keyId) {
    return request.post(this.baseurl + 'deleteNoticeMessage', Qs.stringify({
      token: token,
      keyId: keyId
    }))
  }

  /**
   * 获取消息明细
   * token:String, keyId:String, detail:boolean
   */
  getNoticeMessageDetail (token, keyId, detail) {
    return request.post(this.baseurl + 'getNoticeMessageDetail', Qs.stringify({
      token: token,
      keyId: keyId,
      detail: detail
    }))
  }

  /**
   * 跟据条件返回消息列表
   * token:String, param:NoticeMessageQueryPara, startIndex:int, maxSize:int, detail:boolean, isDelete:boolean, resultTotal:boolean
   */
  queryNoticeMessageList (token, param, startIndex, maxSize, detail, isDelete, resultTotal) {
    return request.post(this.baseurl + 'queryNoticeMessageList', Qs.stringify({
      token: token,
      param: (typeof param === 'undefined' || param === null) ? '' : param.toString(),
      startIndex: startIndex,
      maxSize: maxSize,
      detail: detail,
      isDelete: isDelete,
      resultTotal: resultTotal
    }))
  }

  /**
   * 跟据条件返回消息个数
   * token:String, param:NoticeMessageQueryPara, isDelete:boolean
   */
  queryNoticeMessageCount (token, param, isDelete) {
    return request.post(this.baseurl + 'queryNoticeMessageCount', Qs.stringify({
      token: token,
      param: (typeof param === 'undefined' || param === null) ? '' : param.toString(),
      isDelete: isDelete
    }))
  }

  /**
   * 发送消息
   * token:String, sender:String, receivers:String[], title:String, content:String, operLink:String, tag:String, remark:String
   */
  sendNoticeMessage (token, sender, receivers, title, content, operLink, tag, remark) {
    return request.post(this.baseurl + 'sendNoticeMessage', Qs.stringify({
      token: token,
      sender: sender,
      receivers: receivers,
      title: title,
      content: content,
      operLink: operLink,
      tag: tag,
      remark: remark
    }))
  }
}
