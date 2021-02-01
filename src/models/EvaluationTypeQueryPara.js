//= =========== fixf.core.services.securitycheck.EvaluationTypeQueryPara =============
/* eslint-disable camelcase */
import { QueryParameter } from '../base/QueryParameter.js'

export class EvaluationTypeQueryPara extends QueryParameter {
  constructor () {
    super()
  }

    _QueryAttr_KeyId = 'keyId';
    _QueryAttr_Name = 'name';
    _QueryAttr_SecurityLevel = 'securityLevel';
    _QueryAttr_CreateDate = 'createDate';
    _QueryAttr_CreateId = 'createId';
    _QueryAttr_CreateName = 'createName';
    _QueryAttr_Score = 'score';
    _QueryAttr_Statu = 'statu';

    /* name:String */
    setParamByName (name) {
      this.addParameter(this._QueryAttr_Name, name)
    }

    /* keyId:String */
    setParamByKeyId (keyId) {
      this.addParameter(this._QueryAttr_KeyId, keyId)
    }

    /* statu:int */
    setParamByStatu (statu) {
      this.addParameter(this._QueryAttr_Statu, statu)
    }

    /* keyIds:String[] */
    setParamByKeyId_Enum (keyIds) {
      this.addParameterByEnum(this._QueryAttr_KeyId, keyIds)
    }

    /* startDate:Date, endDate:Date */
    setParamByCreateDate_Range (startDate, endDate) {
      this.addDateParameterByRange(this._QueryAttr_CreateDate, startDate, endDate)
    }

    /* names:String[] */
    setParamByName_Enum (names) {
      this.addParameterByEnum(this._QueryAttr_Name, names)
    }

    /* createDate:Date */
    setParamByCreateDate (createDate) {
      this.addParameter(this._QueryAttr_CreateDate, createDate)
    }

    /* securityLevel:int */
    setParamBySecurityLevel (securityLevel) {
      this.addParameter(this._QueryAttr_SecurityLevel, securityLevel)
    }

    /* securityLevel:int */
    setParamBySecurityLevelIncZero (securityLevel) {
      this.addParameterIncZero(this._QueryAttr_SecurityLevel, securityLevel)
    }

    /* low:int, high:int */
    setParamBySecurityLevel_Range (low, high) {
      this.addNumberParameterByRange(this._QueryAttr_SecurityLevel, low, high)
    }

    /* securityLevels:int[] */
    setParamBySecurityLevel_Enum (securityLevels) {
      this.addParameterByEnum(this._QueryAttr_SecurityLevel, securityLevels)
    }

    /* createId:String */
    setParamByCreateId (createId) {
      this.addParameter(this._QueryAttr_CreateId, createId)
    }

    /* createIds:String[] */
    setParamByCreateId_Enum (createIds) {
      this.addParameterByEnum(this._QueryAttr_CreateId, createIds)
    }

    /* createName:String */
    setParamByCreateName (createName) {
      this.addParameter(this._QueryAttr_CreateName, createName)
    }

    /* createNames:String[] */
    setParamByCreateName_Enum (createNames) {
      this.addParameterByEnum(this._QueryAttr_CreateName, createNames)
    }

    /* score:double */
    setParamByScoreIncZero (score) {
      this.addParameterIncZero(this._QueryAttr_Score, score)
    }

    /* low:double, high:double */
    setParamByScore_Range (low, high) {
      this.addNumberParameterByRange(this._QueryAttr_Score, low, high)
    }

    /* scores:double[] */
    setParamByScore_Enum (scores) {
      this.addParameterByEnum(this._QueryAttr_Score, scores)
    }

    /* statu:int */
    setParamByStatuIncZero (statu) {
      this.addParameterIncZero(this._QueryAttr_Statu, statu)
    }

    /* low:int, high:int */
    setParamByStatu_Range (low, high) {
      this.addNumberParameterByRange(this._QueryAttr_Statu, low, high)
    }

    /* status:int[] */
    setParamByStatu_Enum (status) {
      this.addParameterByEnum(this._QueryAttr_Statu, status)
    }

    /* score:double */
    setParamByScore (score) {
      this.addParameter(this._QueryAttr_Score, score)
    }
}
