//= =========== wy.core.services.wechatnoticemsg.WeChatNoticeMsgQueryPara =============
/* eslint-disable camelcase */
import { QueryParameter } from '../../base/QueryParameter.js'

export class WeChatNoticeMsgQueryPara extends QueryParameter {
  constructor () {
    super()
  }

    _QueryAttr_KeyId = 'keyId';
    _QueryAttr_Title = 'title';
    _QueryAttr_Content = 'content';
    _QueryAttr_NoticeType = 'noticeType';
    _QueryAttr_MsgType = 'msgType';
    _QueryAttr_StopDate = 'stopDate';
    _QueryAttr_CreateTime = 'createTime';
    _QueryAttr_CantonCodes = 'cantonCodes';
    _QueryAttr_StreetCodes = 'streetCodes';
    _QueryAttr_ResidentsCommitteeOrgCodes = 'residentsCommitteeOrgCodes';
    _QueryAttr_RoleCodes = 'roleCodes';
    _QueryAttr_Delete = 'delete';
    _QueryAttr_Oper = 'oper';
    _QueryAttr_OperGrpoupId = 'operGrpoupId';
    _OrderAttr_StopDate = 'stopDate';
    _OrderAttr_CreateTime = 'createTime';
    _OrderAttr_OperGrpoupId = 'operGrpoupId';

    /* noticeType:int */
    setParamByNoticeType (noticeType) {
      this.addParameter(this._QueryAttr_NoticeType, noticeType)
    }

    /* startDate:Date, endDate:Date */
    setParamByCreateTime_Range (startDate, endDate) {
      this.addDateParameterByRange(this._QueryAttr_CreateTime, startDate, endDate)
    }

    /* keyId:String */
    setParamByKeyId (keyId) {
      this.addParameter(this._QueryAttr_KeyId, keyId)
    }

    /* oper:String */
    setParamByOper (oper) {
      this.addParameter(this._QueryAttr_Oper, oper)
    }

    /* title:String */
    setParamByTitle (title) {
      this.addParameter(this._QueryAttr_Title, title)
    }

    /* createTime:Date */
    setParamByCreateTime (createTime) {
      this.addParameter(this._QueryAttr_CreateTime, createTime)
    }

    /* titles:String[] */
    setParamByTitle_Enum (titles) {
      this.addParameterByEnum(this._QueryAttr_Title, titles)
    }

    /* opers:String[] */
    setParamByOper_Enum (opers) {
      this.addParameterByEnum(this._QueryAttr_Oper, opers)
    }

    /* content:String */
    setParamByContentInEmpty (content) {
      this.addParameter(this._QueryAttr_ContentInEmpty, content)
    }

    /* keyId:String */
    setParamByKeyIdInEmpty (keyId) {
      this.addParameter(this._QueryAttr_KeyIdInEmpty, keyId)
    }

    /* cantonCodess:String[] */
    setParamByCantonCodes_Enum (cantonCodess) {
      this.addParameterByEnum(this._QueryAttr_CantonCodes, cantonCodess)
    }

    /* delete:boolean */
    setParamByDelete (deletes) {
      this.addParameter(this._QueryAttr_Delete, deletes)
    }

    /* residentsCommitteeOrgCodes:String */
    setParamByResidentsCommitteeOrgCodes (residentsCommitteeOrgCodes) {
      this.addParameter(this._QueryAttr_ResidentsCommitteeOrgCodes, residentsCommitteeOrgCodes)
    }

    /* residentsCommitteeOrgCodes:String */
    setParamByResidentsCommitteeOrgCodesInEmpty (residentsCommitteeOrgCodes) {
      this.addParameter(this._QueryAttr_ResidentsCommitteeOrgCodesInEmpty, residentsCommitteeOrgCodes)
    }

    /* residentsCommitteeOrgCodess:String[] */
    setParamByResidentsCommitteeOrgCodes_Enum (residentsCommitteeOrgCodess) {
      this.addParameterByEnum(this._QueryAttr_ResidentsCommitteeOrgCodes, residentsCommitteeOrgCodess)
    }

    /* noticeTypes:int[] */
    setParamByNoticeType_Enum (noticeTypes) {
      this.addParameterByEnum(this._QueryAttr_NoticeType, noticeTypes)
    }

    /* operGrpoupId:String */
    setParamByOperGrpoupId (operGrpoupId) {
      this.addParameter(this._QueryAttr_OperGrpoupId, operGrpoupId)
    }

    /* keyIds:String[] */
    setParamByKeyId_Enum (keyIds) {
      this.addParameterByEnum(this._QueryAttr_KeyId, keyIds)
    }

    /* contents:String[] */
    setParamByContent_Enum (contents) {
      this.addParameterByEnum(this._QueryAttr_Content, contents)
    }

    /* content:String */
    setParamByContent (content) {
      this.addParameter(this._QueryAttr_Content, content)
    }

    /* title:String */
    setParamByTitleInEmpty (title) {
      this.addParameter(this._QueryAttr_TitleInEmpty, title)
    }

    /* low:int, high:int */
    setParamByNoticeType_Range (low, high) {
      this.addNumberParameterByRange(this._QueryAttr_NoticeType, low, high)
    }

    /* noticeType:int */
    setParamByNoticeTypeIncZero (noticeType) {
      this.addParameterIncZero(this._QueryAttr_NoticeType, noticeType)
    }

    /* oper:String */
    setParamByOperInEmpty (oper) {
      this.addParameter(this._QueryAttr_OperInEmpty, oper)
    }

    /* msgType:int */
    setParamByMsgType (msgType) {
      this.addParameter(this._QueryAttr_MsgType, msgType)
    }

    /* low:int, high:int */
    setParamByMsgType_Range (low, high) {
      this.addNumberParameterByRange(this._QueryAttr_MsgType, low, high)
    }

    /* msgType:int */
    setParamByMsgTypeIncZero (msgType) {
      this.addParameterIncZero(this._QueryAttr_MsgType, msgType)
    }

    /* roleCodes:String */
    setParamByRoleCodes (roleCodes) {
      this.addParameter(this._QueryAttr_RoleCodes, roleCodes)
    }

    /* startDate:Date, endDate:Date */
    setParamByStopDate_Range (startDate, endDate) {
      this.addDateParameterByRange(this._QueryAttr_StopDate, startDate, endDate)
    }

    /* cantonCodes:String */
    setParamByCantonCodesInEmpty (cantonCodes) {
      this.addParameter(this._QueryAttr_CantonCodesInEmpty, cantonCodes)
    }

    /* streetCodes:String */
    setParamByStreetCodesInEmpty (streetCodes) {
      this.addParameter(this._QueryAttr_StreetCodesInEmpty, streetCodes)
    }

    /* stopDate:Date */
    setParamByStopDate (stopDate) {
      this.addParameter(this._QueryAttr_StopDate, stopDate)
    }

    /* streetCodes:String */
    setParamByStreetCodes (streetCodes) {
      this.addParameter(this._QueryAttr_StreetCodes, streetCodes)
    }

    /* streetCodess:String[] */
    setParamByStreetCodes_Enum (streetCodess) {
      this.addParameterByEnum(this._QueryAttr_StreetCodes, streetCodess)
    }

    /* roleCodes:String */
    setParamByRoleCodesInEmpty (roleCodes) {
      this.addParameter(this._QueryAttr_RoleCodesInEmpty, roleCodes)
    }

    /* roleCodess:String[] */
    setParamByRoleCodes_Enum (roleCodess) {
      this.addParameterByEnum(this._QueryAttr_RoleCodes, roleCodess)
    }

    /* operGrpoupId:String */
    setParamByOperGrpoupIdInEmpty (operGrpoupId) {
      this.addParameter(this._QueryAttr_OperGrpoupIdInEmpty, operGrpoupId)
    }

    /* operGrpoupIds:String[] */
    setParamByOperGrpoupId_Enum (operGrpoupIds) {
      this.addParameterByEnum(this._QueryAttr_OperGrpoupId, operGrpoupIds)
    }

    /* cantonCodes:String */
    setParamByCantonCodes (cantonCodes) {
      this.addParameter(this._QueryAttr_CantonCodes, cantonCodes)
    }

    /* msgTypes:int[] */
    setParamByMsgType_Enum (msgTypes) {
      this.addParameterByEnum(this._QueryAttr_MsgType, msgTypes)
    }
}
