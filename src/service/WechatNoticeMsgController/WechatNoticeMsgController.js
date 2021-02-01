import request from '../../static/js/request.js'

/**
 * 微信通知消息
 */
export class WechatNoticeMsgController {
  constructor () {
    this.baseurl = 'WechatNoticeMsgController.assx/'
  }

  /**
     * 获取通知消息列表  操作:0 获取所有的通知消息列表.1: 获取发送的通知列表，2: 获取用户接收的通知列表 .
     * openId:String, para:QueryParameter, startIndex:int, maxSize:int, option:int
     */
  GetWeChatNoticeMsgListByOption (openId, para, startIndex, maxSize, option) {
    return request.post(this.baseurl + 'GetWeChatNoticeMsgListByOption', Qs.stringify({ openId: openId, para: (typeof para === 'undefined' || para === null) ? '' : para.toString(), startIndex: startIndex, maxSize: maxSize, option: option }))
  }

  /**
     * 添加微信通知消息,发送通知消息
     * openId:String, msg:WeChatNoticeMsg, attachMentIds:String
     */
  SendWeChatNoticeMsg (openId, msg, attachMentIds) {
    return request.post(this.baseurl + 'SendWeChatNoticeMsg', Qs.stringify({ openId: openId, msg: (typeof msg === 'undefined' || msg === null) ? '' : msg.toString(), attachMentIds: attachMentIds }))
  }

  /**
     * 获取某个回复的与会人员列表
     * openId:String, repeatId:String, startIndex:int, maxSize:int
     */
  GetRepeatMeetingMemberList (openId, repeatId, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetRepeatMeetingMemberList', Qs.stringify({ openId: openId, repeatId: repeatId, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 通过openId获取某用户接收到的通知消息列表  (只查询未删除) .
     * openId:String, para:ReceiveRepeatMsgQueryPara, startIndex:int, maxSize:int
     */
  GetWeChatNoticeMsgListByReceivedByOpenId (openId, para, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetWeChatNoticeMsgListByReceivedByOpenId', Qs.stringify({ openId: openId, para: (typeof para === 'undefined' || para === null) ? '' : para.toString(), startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 生成扫码签到二维码
     * openId:String, noticeId:String
     */
  ScanNoticeSignedIn (openId, noticeId) {
    return request.post(this.baseurl + 'ScanNoticeSignedIn', Qs.stringify({ openId: openId, noticeId: noticeId }))
  }

  /**
     * 用户类型及机构代码(统计)
     * openId:String
     */
  GetUserTypeAndCode (openId) {
    return request.post(this.baseurl + 'GetUserTypeAndCode', Qs.stringify({ openId: openId }))
  }

  /**
     * 统计单条通知发布
     * openId:String, noticeId:String, name:String, code:String, codeType:int, receiveObj:int, repeated:boolean, startIndex:int, maxSize:int
     */
  GetPersonsOfReceiveRepeatMsg (openId, noticeId, name, code, codeType, receiveObj, repeated, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetPersonsOfReceiveRepeatMsg', Qs.stringify({ openId: openId, noticeId: noticeId, name: name, code: code, codeType: codeType, receiveObj: receiveObj, repeated: repeated, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 获取整个通知与会人员列表
     * openId:String, noticeId:String, startIndex:int, maxSize:int
     */
  GetNoticeMeetingMemberList (openId, noticeId, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetNoticeMeetingMemberList', Qs.stringify({ openId: openId, noticeId: noticeId, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 发送微信通知消息（单一）
     * openId:String, msg:WeChatNoticeMsg, attachMentIds:String, Code:String, type:int, ReportTypes:String, timeRange:String
     */
  SendWeChatNoticeMsgByOne (openId, msg, attachMentIds, Code, type, ReportTypes, timeRange) {
    return request.post(this.baseurl + 'SendWeChatNoticeMsgByOne', Qs.stringify({ openId: openId, msg: (typeof msg === 'undefined' || msg === null) ? '' : msg.toString(), attachMentIds: attachMentIds, Code: Code, type: type, ReportTypes: ReportTypes, timeRange: timeRange }))
  }

  /**
     * 微信通知催办
     * openId:String, noticeId:String
     */
  UrgeWeChatNoticeMsg (openId, noticeId) {
    return request.post(this.baseurl + 'UrgeWeChatNoticeMsg', Qs.stringify({ openId: openId, noticeId: noticeId }))
  }

  /**
     * 获取微信关注统计列表
     * openId:String
     */
  GetWeChatFollowStatistics (openId) {
    return request.post(this.baseurl + 'GetWeChatFollowStatistics', Qs.stringify({ openId: openId }))
  }

  /**
     * 根据当前用户获取可以发送消息的区域列表
     * openId:String
     */
  GetMsgSendRegion (openId) {
    return request.post(this.baseurl + 'GetMsgSendRegion', Qs.stringify({ openId: openId }))
  }

  /**
     * 统计单条通知发布
     * openId:String, noticeId:String, code:String, codeType:int, receiveObj:int
     */
  StatisticNotice (openId, noticeId, code, codeType, receiveObj) {
    return request.post(this.baseurl + 'StatisticNotice', Qs.stringify({ openId: openId, noticeId: noticeId, code: code, codeType: codeType, receiveObj: receiveObj }))
  }

  /**
     * 删除与会人员
     * openId:String, memberKeyId:String
     */
  DeleteMettingMember (openId, memberKeyId) {
    return request.post(this.baseurl + 'DeleteMettingMember', Qs.stringify({ openId: openId, memberKeyId: memberKeyId }))
  }

  /**
     * 获取接收通知对象详情表(企业列表统计)
     * openId:String, weCharNoticeId:String, startDate:Date, endDate:Date, orgCode:String, startIndex:int, maxSize:int
     */
  GetReceiveRepeatMsgRealtyComCenserDetail (openId, weCharNoticeId, startDate, endDate, orgCode, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetReceiveRepeatMsgRealtyComCenserDetail', Qs.stringify({ openId: openId, weCharNoticeId: weCharNoticeId, startDate: startDate, endDate: endDate, orgCode: orgCode, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 验证与会人员手机验证码
     * openId:String, noticeId:String, repeatId:String, phoneNum:String, phoneCode:String
     */
  AutherRepeatMemttingMemberPhoneCode (openId, noticeId, repeatId, phoneNum, phoneCode) {
    return request.post(this.baseurl + 'AutherRepeatMemttingMemberPhoneCode', Qs.stringify({ openId: openId, noticeId: noticeId, repeatId: repeatId, phoneNum: phoneNum, phoneCode: phoneCode }))
  }

  /**
     * 获取接收通知对象列表
     * openId:String, objType:int, objCode:String, title:String, year:int, startIndex:int, maxSize:int
     */
  GetWeChatNoticeMsgListOfEaArea (openId, objType, objCode, title, year, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetWeChatNoticeMsgListOfEaArea', Qs.stringify({ openId: openId, objType: objType, objCode: objCode, title: title, year: year, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 与会人员签到
     * openId:String, mettingMember:MettingMember, phoneCode:String
     */
  MettingMemberSigned (openId, mettingMember, phoneCode) {
    return request.post(this.baseurl + 'MettingMemberSigned', Qs.stringify({ openId: openId, mettingMember: (typeof mettingMember === 'undefined' || mettingMember === null) ? '' : mettingMember.toString(), phoneCode: phoneCode }))
  }

  /**
     * 获取通知消息的回复列表
     * openId:String, keyId:String, startIndex:int, maxSize:int
     */
  GetRepeatListByNoticeKeyId (openId, keyId, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetRepeatListByNoticeKeyId', Qs.stringify({ openId: openId, keyId: keyId, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 更新回复状态
     * openId:String, keyId:String
     */
  UpdateRepeatStatus (openId, keyId) {
    return request.post(this.baseurl + 'UpdateRepeatStatus', Qs.stringify({ openId: openId, keyId: keyId }))
  }

  /**
     * 获取当前用户的接收回复消息
     * openId:String, keyId:String
     */
  GetRepeatMsgDetail (openId, keyId) {
    return request.post(this.baseurl + 'GetRepeatMsgDetail', Qs.stringify({ openId: openId, keyId: keyId }))
  }

  /**
     * 获取接收通知对象列表(企业负责人单独统计)
     * openId:String, weCharNoticeId:String, startDate:Date, endDate:Date, objName:String, startIndex:int, maxSize:int
     */
  GetReceiveRepeatMsgRealtyComCenserDetailList (openId, weCharNoticeId, startDate, endDate, objName, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetReceiveRepeatMsgRealtyComCenserDetailList', Qs.stringify({ openId: openId, weCharNoticeId: weCharNoticeId, startDate: startDate, endDate: endDate, objName: objName, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 获取接收通知对象详情(统计)
     * openId:String, eaAreaCode:String, startDate:Date, endDate:Date, objType:int, startIndex:int, maxSize:int
     */
  GetReceiveRepeatMsgEaAreaCenserList (openId, eaAreaCode, startDate, endDate, objType, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetReceiveRepeatMsgEaAreaCenserList', Qs.stringify({ openId: openId, eaAreaCode: eaAreaCode, startDate: startDate, endDate: endDate, objType: objType, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 添加与会人员
     * openId:String, repeatId:String, mettingMember:MettingMember, sendMsg:boolean
     */
  AddmettingMember (openId, repeatId, mettingMember, sendMsg) {
    return request.post(this.baseurl + 'AddmettingMember', Qs.stringify({ openId: openId, repeatId: repeatId, mettingMember: (typeof mettingMember === 'undefined' || mettingMember === null) ? '' : mettingMember.toString(), sendMsg: sendMsg }))
  }

  /**
     * 统计单条通知发布(催办类型)
     * openId:String, noticeId:String, code:String, codeType:int
     */
  StatisticNoticeByOther (openId, noticeId, code, codeType) {
    return request.post(this.baseurl + 'StatisticNoticeByOther', Qs.stringify({ openId: openId, noticeId: noticeId, code: code, codeType: codeType }))
  }

  /**
     * 获取接收通知摘要(统计)
     * openId:String, weCharNoticeId:String
     */
  GetReceiveRepeatMsgCenserSummary (openId, weCharNoticeId) {
    return request.post(this.baseurl + 'GetReceiveRepeatMsgCenserSummary', Qs.stringify({ openId: openId, weCharNoticeId: weCharNoticeId }))
  }

  /**
     * 获取接收通知对象列表(统计)
     * openId:String, startDate:Date, endDate:Date, objType:int, cantonCode:String, streetCode:String, committCode:String, objName:String, title:String, weCharNoticeId:String, descType:int, desc:boolean, repeated:int
     */
  GetReceiveRepeatMsgCenserList (openId, startDate, endDate, objType, cantonCode, streetCode, committCode, objName, title, weCharNoticeId, descType, desc, repeated) {
    return request.post(this.baseurl + 'GetReceiveRepeatMsgCenserList', Qs.stringify({ openId: openId, startDate: startDate, endDate: endDate, objType: objType, cantonCode: cantonCode, streetCode: streetCode, committCode: committCode, objName: objName, title: title, weCharNoticeId: weCharNoticeId, descType: descType, desc: desc, repeated: repeated }))
  }

  /**
     * 获取通知消息详情
     * openId:String, keyId:String
     */
  GetWeChatNoticeMsgDetail (openId, keyId) {
    return request.post(this.baseurl + 'GetWeChatNoticeMsgDetail', Qs.stringify({ openId: openId, keyId: keyId }))
  }

  /**
     * 获取通知消息列表  (只查询未删除) .
     * openId:String, para:WeChatNoticeMsgQueryPara, startIndex:int, maxSize:int
     */
  GetWeChatNoticeMsgList (openId, para, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetWeChatNoticeMsgList', Qs.stringify({ openId: openId, para: (typeof para === 'undefined' || para === null) ? '' : para.toString(), startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 获取接收通知对象列表(企业列表统计)
     * openId:String, weCharNoticeId:String, startDate:Date, endDate:Date, objName:String, startIndex:int, maxSize:int
     */
  GetReceiveRepeatMsgRealtyComCenserList (openId, weCharNoticeId, startDate, endDate, objName, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetReceiveRepeatMsgRealtyComCenserList', Qs.stringify({ openId: openId, weCharNoticeId: weCharNoticeId, startDate: startDate, endDate: endDate, objName: objName, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 获取接收通知对象列表
     * openId:String, year:int, objType:int, objCode:String, objName:String, startIndex:int, maxSize:int
     */
  GetReceiveRepeatMsgObjList (openId, year, objType, objCode, objName, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetReceiveRepeatMsgObjList', Qs.stringify({ openId: openId, year: year, objType: objType, objCode: objCode, objName: objName, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 获取接收通知对象物业区域一级列表(单一统计)
     * openId:String, cantonCode:String, streetCode:String, committeeOrgCode:String, name:String, weCharNoticeId:String, startDate:Date, endDate:Date, objType:int, startIndex:int, maxSize:int
     */
  GetReceiveRepeatMsgEaAreaCenserOfOneList (openId, cantonCode, streetCode, committeeOrgCode, name, weCharNoticeId, startDate, endDate, objType, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetReceiveRepeatMsgEaAreaCenserOfOneList', Qs.stringify({ openId: openId, cantonCode: cantonCode, streetCode: streetCode, committeeOrgCode: committeeOrgCode, name: name, weCharNoticeId: weCharNoticeId, startDate: startDate, endDate: endDate, objType: objType, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 回复消息
     * openId:String, msg:ReceiveRepeatMsg, attachMentIds:String, isDefault:boolean
     */
  RepeatNoticeMsg (openId, msg, attachMentIds, isDefault) {
    return request.post(this.baseurl + 'RepeatNoticeMsg', Qs.stringify({ openId: openId, msg: (typeof msg === 'undefined' || msg === null) ? '' : msg.toString(), attachMentIds: attachMentIds, isDefault: isDefault }))
  }

  /**
     * 信息公开群体催办
     * openId:String, msg:WeChatNoticeMsg, cantonCode:String, streetCode:String, committCode:String, eaAreaCode:String, type:int, ReportTypes:String, timeRange:String, year:String
     */
  SendWeChatNoticeMsgByPersons (openId, msg, cantonCode, streetCode, committCode, eaAreaCode, type, ReportTypes, timeRange, year) {
    return request.post(this.baseurl + 'SendWeChatNoticeMsgByPersons', Qs.stringify({ openId: openId, msg: (typeof msg === 'undefined' || msg === null) ? '' : msg.toString(), cantonCode: cantonCode, streetCode: streetCode, committCode: committCode, eaAreaCode: eaAreaCode, type: type, ReportTypes: ReportTypes, timeRange: timeRange, year: year }))
  }

  /**
     * 获取接收通知外层对象列表(区域负责人统计)
     * openId:String, weCharNoticeId:String, startDate:Date, endDate:Date
     */
  GetReceiveRepeatMsgAreaCenserList (openId, weCharNoticeId, startDate, endDate) {
    return request.post(this.baseurl + 'GetReceiveRepeatMsgAreaCenserList', Qs.stringify({ openId: openId, weCharNoticeId: weCharNoticeId, startDate: startDate, endDate: endDate }))
  }

  /**
     * 给与会人员发送验证码
     * openId:String, noticeId:String, phoneNum:String
     */
  sendMsg2MettingMember (openId, noticeId, phoneNum) {
    return request.post(this.baseurl + 'sendMsg2MettingMember', Qs.stringify({ openId: openId, noticeId: noticeId, phoneNum: phoneNum }))
  }

  /**
     * 修改与会人员
     * openId:String, repeatId:String, mettingMember:MettingMember
     */
  ModifyMettingMember (openId, repeatId, mettingMember) {
    return request.post(this.baseurl + 'ModifyMettingMember', Qs.stringify({ openId: openId, repeatId: repeatId, mettingMember: (typeof mettingMember === 'undefined' || mettingMember === null) ? '' : mettingMember.toString() }))
  }

  /**
     * 获取当前用户下的从业人员或者业委会成员
     * openId:String, noticeId:String, repeatId:String, startIndex:int, maxSize:int
     */
  GetEmployeeOrCommitteMember (openId, noticeId, repeatId, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetEmployeeOrCommitteMember', Qs.stringify({ openId: openId, noticeId: noticeId, repeatId: repeatId, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 获取通知列表
     * openId:String, title:String, startTime:Date, endTime:Date, startIndex:int, maxSize:int
     */
  QueryWeChatNoticeMsgList (openId, title, startTime, endTime, startIndex, maxSize) {
    return request.post(this.baseurl + 'QueryWeChatNoticeMsgList', Qs.stringify({ openId: openId, title: title, startTime: startTime, endTime: endTime, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 获取接收通知对象列表(区域负责人统计)
     * openId:String, cantonCode:String, weCharNoticeId:String, startDate:Date, endDate:Date
     */
  GetReceiveRepeatMsgAreaCenserDetailList (openId, cantonCode, weCharNoticeId, startDate, endDate) {
    return request.post(this.baseurl + 'GetReceiveRepeatMsgAreaCenserDetailList', Qs.stringify({ openId: openId, cantonCode: cantonCode, weCharNoticeId: weCharNoticeId, startDate: startDate, endDate: endDate }))
  }
}
