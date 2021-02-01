//= =========== ps.core.services.message.NoticeMessageQueryPara =============
/* eslint-disable camelcase */
import {
  QueryParameter
} from '../base/QueryParameter.js'

export class NoticeMessageQueryPara extends QueryParameter {
  constructor () {
    super()
  }

  _QueryAttr_KeyId = 'keyId';
  _QueryAttr_Sender = 'sender';
  _QueryAttr_Receivers = 'receivers';
  _QueryAttr_Title = 'title';
  _QueryAttr_Content = 'content';
  _QueryAttr_SendTime = 'sendTime';
  _QueryAttr_ReadCount = 'readCount';
  _QueryAttr_IsDelete = 'isDelete';
  _QueryAttr_Remark = 'remark';
  _QueryAttr_IsSendSMS = 'isSendSMS';
  _OrderAttr_KeyId = 'keyId';
  _OrderAttr_Sender = 'sender';
  _OrderAttr_Receivers = 'receivers';
  _OrderAttr_Title = 'title';
  _OrderAttr_Content = 'content';
  _OrderAttr_SendTime = 'sendTime';
  _OrderAttr_ReadCount = 'readCount';
  _OrderAttr_IsDelete = 'isDelete';
  _OrderAttr_Remark = 'remark';
  _OrderAttr_IsSendSMS = 'isSendSMS';

  /* isDelete:boolean */
  setParamByIsDelete (isDelete) {
    this.addParameter(this._QueryAttr_IsDelete, isDelete)
  }

  /* startDate:Date, endDate:Date */
  setParamBySendTime_Range (startDate, endDate) {
    this.addDateParameterByRange(this._QueryAttr_SendTime, startDate, endDate)
  }

  /* keyId:String */
  setParamByKeyId (keyId) {
    this.addParameter(this._QueryAttr_KeyId, keyId)
  }

  /* title:String */
  setParamByTitle (title) {
    this.addParameter(this._QueryAttr_Title, title)
  }

  /* keyIds:String[] */
  setParamByKeyId_Enum (keyIds) {
    this.addParameterByEnum(this._QueryAttr_KeyId, keyIds)
  }

  /* sender:String */
  setParamBySender (sender) {
    this.addParameter(this._QueryAttr_Sender, sender)
  }

  /* remark:String */
  setParamByRemark (remark) {
    this.addParameter(this._QueryAttr_Remark, remark)
  }

  /* contents:String[] */
  setParamByContent_Enum (contents) {
    this.addParameterByEnum(this._QueryAttr_Content, contents)
  }

  /* content:String */
  setParamByContent (content) {
    this.addParameter(this._QueryAttr_Content, content)
  }

  /* senders:String[] */
  setParamBySender_Enum (senders) {
    this.addParameterByEnum(this._QueryAttr_Sender, senders)
  }

  /* titles:String[] */
  setParamByTitle_Enum (titles) {
    this.addParameterByEnum(this._QueryAttr_Title, titles)
  }

  /* sendTime:Date */
  setParamBySendTime (sendTime) {
    this.addParameter(this._QueryAttr_SendTime, sendTime)
  }

  /* remarks:String[] */
  setParamByRemark_Enum (remarks) {
    this.addParameterByEnum(this._QueryAttr_Remark, remarks)
  }

  /* isSendSMS:boolean */
  setParamByIsSendSMS (isSendSMS) {
    this.addParameter(this._QueryAttr_IsSendSMS, isSendSMS)
  }

  /* readCount:int */
  setParamByReadCountIncZero (readCount) {
    this.addParameterIncZero(this._QueryAttr_ReadCount, readCount)
  }

  /* readCount:int */
  setParamByReadCount (readCount) {
    this.addParameter(this._QueryAttr_ReadCount, readCount)
  }

  /* readCounts:int[] */
  setParamByReadCount_Enum (readCounts) {
    this.addParameterByEnum(this._QueryAttr_ReadCount, readCounts)
  }

  /* receivers:String[] */
  setParamByReceivers (receivers) {
    this.addParameter(this._QueryAttr_Receivers, receivers)
  }

  /* low:int, high:int */
  setParamByReadCount_Range (low, high) {
    this.addNumberParameterByRange(this._QueryAttr_ReadCount, low, high)
  }
}
