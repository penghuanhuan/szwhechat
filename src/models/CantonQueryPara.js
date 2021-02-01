//= =========== fixf.core.services.common.CantonQueryPara =============
/* eslint-disable camelcase */
import { QueryParameter } from '../base/QueryParameter.js'
export class CantonQueryPara extends QueryParameter {
  constructor () {
    super()
  }

    _QueryAttr_CantonCode = 'cantonCode';
    _QueryAttr_CantonName = 'cantonName';
    _QueryAttr_ParentCantonCode = 'parentCantonCode';
    _QueryAttr_IsMainCity = 'isMainCity';
    _QueryAttr_OfficeLocation = 'officeLocation';
    _QueryAttr_AccpetUnit = 'accpetUnit';
    _QueryAttr_WorkPlace = 'workPlace';
    _QueryAttr_PublicTel = 'publicTel';
    _OrderAttr_CantonCode = 'cantonCode';
    _OrderAttr_CantonName = 'cantonName';
    _OrderAttr_ParentCantonCode = 'parentCantonCode';
    _OrderAttr_IsMainCity = 'isMainCity';
    _OrderAttr_AccpetUnit = 'accpetUnit';
    _OrderAttr_WorkPlace = 'workPlace';
    _OrderAttr_PublicTel = 'publicTel';

    /* cantonCodes:String[] */
    setParamByCantonCode_Enum (cantonCodes) {
      this.addParameterByEnum(this._QueryAttr_CantonCode, cantonCodes)
    }

    /* parentCantonCode:String */
    setParamByParentCantonCode (parentCantonCode) {
      this.addParameter(this._QueryAttr_ParentCantonCode, parentCantonCode)
    }

    /* isMainCity:boolean */
    setParamByIsMainCity (isMainCity) {
      this.addParameter(this._QueryAttr_IsMainCity, isMainCity)
    }

    /* cantonCode:String */
    setParamByCantonCode (cantonCode) {
      this.addParameter(this._QueryAttr_CantonCode, cantonCode)
    }

    /* cantonName:String */
    setParamByCantonName (cantonName) {
      this.addParameter(this._QueryAttr_CantonName, cantonName)
    }

    /* cantonNames:String[] */
    setParamByCantonName_Enum (cantonNames) {
      this.addParameterByEnum(this._QueryAttr_CantonName, cantonNames)
    }

    /* parentCantonCodes:String[] */
    setParamByParentCantonCode_Enum (parentCantonCodes) {
      this.addParameterByEnum(this._QueryAttr_ParentCantonCode, parentCantonCodes)
    }

    /* officeLocation:String */
    setParamByOfficeLocation (officeLocation) {
      this.addParameter(this._QueryAttr_OfficeLocation, officeLocation)
    }

    /* officeLocations:String[] */
    setParamByOfficeLocation_Enum (officeLocations) {
      this.addParameterByEnum(this._QueryAttr_OfficeLocation, officeLocations)
    }

    /* accpetUnit:String */
    setParamByAccpetUnit (accpetUnit) {
      this.addParameter(this._QueryAttr_AccpetUnit, accpetUnit)
    }

    /* accpetUnits:String[] */
    setParamByAccpetUnit_Enum (accpetUnits) {
      this.addParameterByEnum(this._QueryAttr_AccpetUnit, accpetUnits)
    }

    /* workPlace:String */
    setParamByWorkPlace (workPlace) {
      this.addParameter(this._QueryAttr_WorkPlace, workPlace)
    }

    /* workPlaces:String[] */
    setParamByWorkPlace_Enum (workPlaces) {
      this.addParameterByEnum(this._QueryAttr_WorkPlace, workPlaces)
    }

    /* publicTel:String */
    setParamByPublicTel (publicTel) {
      this.addParameter(this._QueryAttr_PublicTel, publicTel)
    }

    /* publicTels:String[] */
    setParamByPublicTel_Enum (publicTels) {
      this.addParameterByEnum(this._QueryAttr_PublicTel, publicTels)
    }
}
