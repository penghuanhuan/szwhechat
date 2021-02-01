//= =========== fixf.core.services.voting.VoteQueryPara =============
/* eslint-disable camelcase */
import {
  QueryParameter
} from '../../base/QueryParameter.js'

export class VoteQueryPara extends QueryParameter {
  constructor () {
    super()
    this._QueryAttr_KeyId = 'keyId'
    this._QueryAttr_DetailIntro = 'detailIntro'
    this._QueryAttr_VoteTypeCode = 'voteTypeCode'
    this._QueryAttr_VoteTitle = 'voteTitle'
    this._QueryAttr_BeginTime = 'beginTime'
    this._QueryAttr_EndTime = 'endTime'
    this._QueryAttr_CantonCode = 'cantonCode'
    this._QueryAttr_StreetOfficeOrgCode = 'streetOfficeOrgCode'
    this._QueryAttr_ResidentsCommitteeOrgCode = 'residentsCommitteeOrgCode'
    this._QueryAttr_AreaId = 'areaId'
    this._QueryAttr_EaAreaName = 'eaAreaName'
    this._QueryAttr_VoteState = 'voteState'
    this._QueryAttr_IsDelay = 'isDelay'
    this._QueryAttr_DelayReason = 'delayReason'
    this._QueryAttr_OldEndTime = 'oldEndTime'
    this._QueryAttr_IsForDiff = 'isForDiff'
    this._QueryAttr_LoginId = 'loginId'
    this._QueryAttr_CreateTime = 'createTime'
    this._QueryAttr_WorkId = 'workId'
    this._OrderAttr_KeyId = 'keyId'
    this._OrderAttr_VoteTitle = 'voteTitle'
    this._OrderAttr_DetailIntro = 'detailIntro'
    this._OrderAttr_VoteTypeCode = 'voteTypeCode'
    this._OrderAttr_BeginTime = 'beginTime'
    this._OrderAttr_EndTime = 'endTime'
    this._OrderAttr_CantonCode = 'cantonCode'
    this._OrderAttr_AreaId = 'areaId'
    this._OrderAttr_EaAreaName = 'eaAreaName'
    this._OrderAttr_VoteState = 'voteState'
    this._OrderAttr_IsDelay = 'isDelay'
    this._OrderAttr_DelayReason = 'delayReason'
    this._OrderAttr_OldEndTime = 'oldEndTime'
    this._OrderAttr_IsForDiff = 'isForDiff'
    this._OrderAttr_LoginId = 'loginId'
    this._OrderAttr_CreateTime = 'createTime'
    this._OrderAttr_WorkId = 'workId'
  }

  /* cantonCodes:String[] */
  setParamByCantonCode_Enum (cantonCodes) {
    this.addParameterByEnum(this._QueryAttr_CantonCode, cantonCodes)
  }

  /* keyId:String */
  setParamByKeyId (keyId) {
    this.addParameter(this._QueryAttr_KeyId, keyId)
  }

  /* loginId:String */
  setParamByLoginId (loginId) {
    this.addParameter(this._QueryAttr_LoginId, loginId)
  }

  /* residentsCommitteeOrgCode:String */
  setParamByResidentsCommitteeOrgCode (residentsCommitteeOrgCode) {
    this.addParameter(this._QueryAttr_ResidentsCommitteeOrgCode, residentsCommitteeOrgCode)
  }

  /* voteTypeCode:String */
  setParamByVoteTypeCode (voteTypeCode) {
    this.addParameter(this._QueryAttr_VoteTypeCode, voteTypeCode)
  }

  /* eaAreaName:String */
  setParamByEaAreaName (eaAreaName) {
    this.addParameter(this._QueryAttr_EaAreaName, eaAreaName)
  }

  /* cantonCode:String */
  setParamByCantonCode (cantonCode) {
    this.addParameter(this._QueryAttr_CantonCode, cantonCode)
  }

  /* streetOfficeOrgCode:String */
  setParamByStreetOfficeOrgCode (streetOfficeOrgCode) {
    this.addParameter(this._QueryAttr_StreetOfficeOrgCode, streetOfficeOrgCode)
  }

  /* keyIds:String[] */
  setParamByKeyId_Enum (keyIds) {
    this.addParameterByEnum(this._QueryAttr_KeyId, keyIds)
  }

  /* endTime:Date */
  setParamByEndTime (endTime) {
    this.addParameter(this._QueryAttr_EndTime, endTime)
  }

  /* startDate:Date, endDate:Date */
  setParamByEndTime_Range (startDate, endDate) {
    this.addDateParameterByRange(this._QueryAttr_EndTime, startDate, endDate)
  }

  /* areaId:String */
  setParamByAreaId (areaId) {
    this.addParameter(this._QueryAttr_AreaId, areaId)
  }

  /* workId:String */
  setParamByWorkId (workId) {
    this.addParameter(this._QueryAttr_WorkId, workId)
  }

  /* createTime:Date */
  setParamByCreateTime (createTime) {
    this.addParameter(this._QueryAttr_CreateTime, createTime)
  }

  /* startDate:Date, endDate:Date */
  setParamByCreateTime_Range (startDate, endDate) {
    this.addDateParameterByRange(this._QueryAttr_CreateTime, startDate, endDate)
  }

  /* eaAreaNames:String[] */
  setParamByEaAreaName_Enum (eaAreaNames) {
    this.addParameterByEnum(this._QueryAttr_EaAreaName, eaAreaNames)
  }

  /* loginIds:String[] */
  setParamByLoginId_Enum (loginIds) {
    this.addParameterByEnum(this._QueryAttr_LoginId, loginIds)
  }

  /* voteTitle:String */
  setParamByVoteTitle (voteTitle) {
    this.addParameter(this._QueryAttr_VoteTitle, voteTitle)
  }

  /* voteTitles:String[] */
  setParamByVoteTitle_Enum (voteTitles) {
    this.addParameterByEnum(this._QueryAttr_VoteTitle, voteTitles)
  }

  /* detailIntro:String */
  setParamByDetailIntro (detailIntro) {
    this.addParameter(this._QueryAttr_DetailIntro, detailIntro)
  }

  /* detailIntros:String[] */
  setParamByDetailIntro_Enum (detailIntros) {
    this.addParameterByEnum(this._QueryAttr_DetailIntro, detailIntros)
  }

  /* voteTypeCodes:String[] */
  setParamByVoteTypeCode_Enum (voteTypeCodes) {
    this.addParameterByEnum(this._QueryAttr_VoteTypeCode, voteTypeCodes)
  }

  /* beginTime:Date */
  setParamByBeginTime (beginTime) {
    this.addParameter(this._QueryAttr_BeginTime, beginTime)
  }

  /* startDate:Date, endDate:Date */
  setParamByBeginTime_Range (startDate, endDate) {
    this.addDateParameterByRange(this._QueryAttr_BeginTime, startDate, endDate)
  }

  /* areaIds:String[] */
  setParamByAreaId_Enum (areaIds) {
    this.addParameterByEnum(this._QueryAttr_AreaId, areaIds)
  }

  /* voteState:int */
  setParamByVoteState (voteState) {
    this.addParameter(this._QueryAttr_VoteState, voteState)
  }

  /* voteState:int */
  setParamByVoteStateIncZero (voteState) {
    this.addParameterIncZero(this._QueryAttr_VoteState, voteState)
  }

  /* low:int, high:int */
  setParamByVoteState_Range (low, high) {
    this.addNumberParameterByRange(this._QueryAttr_VoteState, low, high)
  }

  /* voteStates:int[] */
  setParamByVoteState_Enum (voteStates) {
    this.addParameterByEnum(this._QueryAttr_VoteState, voteStates)
  }

  /* isDelay:int */
  setParamByIsDelay (isDelay) {
    this.addParameter(this._QueryAttr_IsDelay, isDelay)
  }

  /* isDelay:int */
  setParamByIsDelayIncZero (isDelay) {
    this.addParameterIncZero(this._QueryAttr_IsDelay, isDelay)
  }

  /* low:int, high:int */
  setParamByIsDelay_Range (low, high) {
    this.addNumberParameterByRange(this._QueryAttr_IsDelay, low, high)
  }

  /* isDelays:int[] */
  setParamByIsDelay_Enum (isDelays) {
    this.addParameterByEnum(this._QueryAttr_IsDelay, isDelays)
  }

  /* delayReason:String */
  setParamByDelayReason (delayReason) {
    this.addParameter(this._QueryAttr_DelayReason, delayReason)
  }

  /* delayReasons:String[] */
  setParamByDelayReason_Enum (delayReasons) {
    this.addParameterByEnum(this._QueryAttr_DelayReason, delayReasons)
  }

  /* oldEndTime:Date */
  setParamByOldEndTime (oldEndTime) {
    this.addParameter(this._QueryAttr_OldEndTime, oldEndTime)
  }

  /* startDate:Date, endDate:Date */
  setParamByOldEndTime_Range (startDate, endDate) {
    this.addDateParameterByRange(this._QueryAttr_OldEndTime, startDate, endDate)
  }

  /* isForDiff:int */
  setParamByIsForDiff (isForDiff) {
    this.addParameter(this._QueryAttr_IsForDiff, isForDiff)
  }

  /* isForDiff:int */
  setParamByIsForDiffIncZero (isForDiff) {
    this.addParameterIncZero(this._QueryAttr_IsForDiff, isForDiff)
  }

  /* low:int, high:int */
  setParamByIsForDiff_Range (low, high) {
    this.addNumberParameterByRange(this._QueryAttr_IsForDiff, low, high)
  }

  /* isForDiffs:int[] */
  setParamByIsForDiff_Enum (isForDiffs) {
    this.addParameterByEnum(this._QueryAttr_IsForDiff, isForDiffs)
  }

  /* workIds:String[] */
  setParamByWorkId_Enum (workIds) {
    this.addParameterByEnum(this._QueryAttr_WorkId, workIds)
  }

  /* residentsCommitteeOrgCodes:String[] */
  setParamByResidentsCommitteeOrgCode_Enum (residentsCommitteeOrgCodes) {
    this.addParameterByEnum(this._QueryAttr_ResidentsCommitteeOrgCode, residentsCommitteeOrgCodes)
  }

  /* streetOfficeOrgCodes:String[] */
  setParamByStreetOfficeOrgCode_Enum (streetOfficeOrgCodes) {
    this.addParameterByEnum(this._QueryAttr_StreetOfficeOrgCode, streetOfficeOrgCodes)
  }
}
