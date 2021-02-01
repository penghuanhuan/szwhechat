//= =========== wy.core.services.examine.ExaminePaperQueryPara =============
/* eslint-disable camelcase */
import { QueryParameter } from '../../base/QueryParameter.js'

export class ExaminePaperQueryPara extends QueryParameter {
  constructor () {
    super()
  }

    _QueryAttr_KeyId = 'keyId';
    _QueryAttr_Title = 'title';
    _QueryAttr_Type = 'type';
    _QueryAttr_Oper = 'oper';
    _OrderAttr_KeyId = 'keyId';
    _OrderAttr_Title = 'title';
    _OrderAttr_Type = 'type';

    /* types:int[] */
    setParamByType_Enum (types) {
      this.addParameterByEnum(this._QueryAttr_Type, types)
    }

    /* keyId:String */
    setParamByKeyIdInEmpty (keyId) {
      this.addParameter(this._QueryAttr_KeyIdInEmpty, keyId)
    }

    /* keyIds:String[] */
    setParamByKeyId_Enum (keyIds) {
      this.addParameterByEnum(this._QueryAttr_KeyId, keyIds)
    }

    /* titles:String[] */
    setParamByTitle_Enum (titles) {
      this.addParameterByEnum(this._QueryAttr_Title, titles)
    }

    /* opers:String[] */
    setParamByOper_Enum (opers) {
      this.addParameterByEnum(this._QueryAttr_Oper, opers)
    }

    /* low:int, high:int */
    setParamByType_Range (low, high) {
      this.addNumberParameterByRange(this._QueryAttr_Type, low, high)
    }

    /* type:int */
    setParamByTypeIncZero (type) {
      this.addParameterIncZero(this._QueryAttr_Type, type)
    }

    /* title:String */
    setParamByTitle (title) {
      this.addParameter(this._QueryAttr_Title, title)
    }

    /* oper:String */
    setParamByOperInEmpty (oper) {
      this.addParameter(this._QueryAttr_OperInEmpty, oper)
    }

    /* title:String */
    setParamByTitleInEmpty (title) {
      this.addParameter(this._QueryAttr_TitleInEmpty, title)
    }

    /* type:int */
    setParamByType (type) {
      this.addParameter(this._QueryAttr_Type, type)
    }

    /* keyId:String */
    setParamByKeyId (keyId) {
      this.addParameter(this._QueryAttr_KeyId, keyId)
    }

    /* oper:String */
    setParamByOper (oper) {
      this.addParameter(this._QueryAttr_Oper, oper)
    }
}
