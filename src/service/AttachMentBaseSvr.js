import request from '../static/js/request.js'

export class AttachMentBaseSvr {
  constructor () {
    this.baseurl = 'AttachMentBaseSvr.assx/'
  }

  /**
     * 插入一个附件
     * token:String, attchMent:AttachMent
     */
  AddAttachMentByString (token, attchMent) {
    return request.post(this.baseurl + 'AddAttachMentByString', Qs.stringify({ token: token, attchMent: typeof attchMent === 'undefined' || attchMent === null ? '' : attchMent.toString() }))
  }

  /**
     * 更新附件对象（不包括附件内容）
     * token:String, attachMent:AttachMent
     */
  ModifyAttachMent (token, attachMent) {
    return request.post(this.baseurl + 'ModifyAttachMent', Qs.stringify({ token: token, attachMent: typeof attachMent === 'undefined' || attachMent === null ? '' : attachMent.toString() }))
  }

  /**
     * 删除附件
     * token:String, keyID:String
     */
  DeleteAttachMent (token, keyID) {
    return request.post(this.baseurl + 'DeleteAttachMent', Qs.stringify({ token: token, keyID: keyID }))
  }

  /**
     * 更新附件内容
     * token:String, keyID:String, objectContent:String
     */
  ModifyAttachMentByString (token, keyID, objectContent) {
    return request.post(this.baseurl + 'ModifyAttachMentByString', Qs.stringify({ token: token, keyID: keyID, objectContent: objectContent }))
  }

  /**
     * 更新附件内容
     * token:String, keyID:String, objectContent:byte[]
     */
  ModifyAttachMentByByteArray (token, keyID, objectContent) {
    return request.post(this.baseurl + 'ModifyAttachMentByByteArray', Qs.stringify({ token: token, keyID: keyID, objectContent: objectContent }))
  }

  /**
     * 插入一个附件
     * token:String, attchMent:AttachMent
     */
  AddAttachMentByByteArray (token, attchMent) {
    return request.post(this.baseurl + 'AddAttachMentByByteArray', Qs.stringify({ token: token, attchMent: typeof attchMent === 'undefined' || attchMent === null ? '' : attchMent.toString() }))
  }

  /**
     * 根据条件返回附件列表
     * token:String, param:AttachMentQueryPara, startIndex:int, maxSize:int
     */
  QueryAttachMentList (token, param, startIndex, maxSize) {
    return request.post(this.baseurl + 'QueryAttachMentList', Qs.stringify({ token: token, param: typeof param === 'undefined' || param === null ? '' : param.toString(), startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 获取附件信息
     * token:String, keyID:String
     */
  GetAttachMent (token, keyID) {
    return request.post(this.baseurl + 'GetAttachMent', Qs.stringify({ token: token, keyID: keyID }))
  }

  /**
     * 根据附件id获取大对象（string）
     * token:String, keyID:String
     */
  GetStringLargeObjectByKeyId (token, keyID) {
    return request.post(this.baseurl + 'GetStringLargeObjectByKeyId', Qs.stringify({ token: token, keyID: keyID }))
  }

  /**
     * 根据条件返回附件个数
     * token:String, param:AttachMentQueryPara
     */
  QueryAttachMentCount (token, param) {
    return request.post(this.baseurl + 'QueryAttachMentCount', Qs.stringify({ token: token, param: typeof param === 'undefined' || param === null ? '' : param.toString() }))
  }

  /**
     * 根据外键查询附件列表
     * token:String, refId:String, refType:String
     */
  QueryAttachMentListByRefId (token, refId, refType) {
    return request.post(this.baseurl + 'QueryAttachMentListByRefId', Qs.stringify({ token: token, refId: refId, refType: refType }))
  }

  /**
     * 根据附件id获取大对象（byte）
     * token:String, keyID:String
     */
  GetByteLargeObjectByKeyId (token, keyID) {
    return request.post(this.baseurl + 'GetByteLargeObjectByKeyId', Qs.stringify({ token: token, keyID: keyID }))
  }

  /**
     * 根据外键删除附件
     * token:String, refId:String, refType:String
     */
  DeleteAttachMentRef (token, refId, refType) {
    return request.post(this.baseurl + 'DeleteAttachMentRef', Qs.stringify({ token: token, refId: refId, refType: refType }))
  }
}
