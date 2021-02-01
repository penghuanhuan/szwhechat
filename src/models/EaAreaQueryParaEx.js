//= =========== fixf.core.services.estatearea.EaAreaQueryParaEx =============
/* eslint-disable camelcase */
import { QueryParameter } from '../base/QueryParameter.js'

export class EaAreaQueryParaEx extends QueryParameter {
  constructor () {
    super()
  }

    _QueryAttr_EaAreaCode = 'eaAreaCode';
    _QueryAttr_LandNumber = 'landNumber';
    _QueryAttr_EaAreaName = 'eaAreaName';
    _QueryAttr_IsDelete = 'isDelete';
    _QueryAttr_CreateDate = 'createDate';
    _QueryAttr_CantonCode = 'cantonCode';
    _QueryAttr_RealtyMngOrgCode = 'realtyMngOrgCode';
    _QueryAttr_BuildUnitOrgCode = 'buildUnitOrgCode';
    _QueryAttr_OwnerTeamOrgCode = 'ownerTeamOrgCode';
    _QueryAttr_IsSelf = 'isSelf';
    _QueryAttr_Address = 'address';
    _QueryAttr_ResidentsCommitteeOrgCode = 'residentsCommitteeOrgCode';
    _QueryAttr_StreetOfficeOrgCode = 'streetOfficeOrgCode';
    _QueryAttr_IsOtherCityProject = 'isOtherCityProject';
    _OrderAttr_EaAreaCode = 'eaAreaCode';
    _OrderAttr_IsDelete = 'isDelete';
    _OrderAttr_CreateDate = 'createDate';
    _OrderAttr_CantonCode = 'cantonCode';

    /* isDelete:boolean */
    setParamByIsDelete (isDelete) {
      this.addParameter(this._QueryAttr_IsDelete, isDelete)
    }

    /* eaAreaCodes:String[] */
    setParamByEaAreaCode_Enum (eaAreaCodes) {
      this.addParameterByEnum(this._QueryAttr_EaAreaCode, eaAreaCodes)
    }

    /* address:String */
    setParamByAddress (address) {
      this.addParameter(this._QueryAttr_Address, address)
    }

    /* startDate:Date, endDate:Date */
    setParamByCreateDate_Range (startDate, endDate) {
      this.addDateParameterByRange(this._QueryAttr_CreateDate, startDate, endDate)
    }

    /* residentsCommitteeOrgCode:String */
    setParamByResidentsCommitteeOrgCode (residentsCommitteeOrgCode) {
      this.addParameter(this._QueryAttr_ResidentsCommitteeOrgCode, residentsCommitteeOrgCode)
    }

    /* cantonCodes:String[] */
    setParamByCantonCode_Enum (cantonCodes) {
      this.addParameterByEnum(this._QueryAttr_CantonCode, cantonCodes)
    }

    /* eaAreaName:String */
    setParamByEaAreaName (eaAreaName) {
      this.addParameter(this._QueryAttr_EaAreaName, eaAreaName)
    }

    /* realtyMngOrgCode:String */
    setParamByRealtyMngOrgCode (realtyMngOrgCode) {
      this.addParameter(this._QueryAttr_RealtyMngOrgCode, realtyMngOrgCode)
    }

    /* streetOfficeOrgCode:String */
    setParamByStreetOfficeOrgCode (streetOfficeOrgCode) {
      this.addParameter(this._QueryAttr_StreetOfficeOrgCode, streetOfficeOrgCode)
    }

    /* isOtherCityProject:boolean */
    setParamByIsOtherCityProject (isOtherCityProject) {
      this.addParameter(this._QueryAttr_IsOtherCityProject, isOtherCityProject)
    }

    /* ownerTeamOrgCodes:String[] */
    setParamByOwnerTeamOrgCode_Enum (ownerTeamOrgCodes) {
      this.addParameterByEnum(this._QueryAttr_OwnerTeamOrgCode, ownerTeamOrgCodes)
    }

    /* landNumber:String */
    setParamByLandNumber (landNumber) {
      this.addParameter(this._QueryAttr_LandNumber, landNumber)
    }

    /* eaAreaCode:String */
    setParamByEaAreaCodeInEmpty (eaAreaCode) {
      this.addParameter(this._QueryAttr_EaAreaCodeInEmpty, eaAreaCode)
    }

    /* isSelf:boolean */
    setParamByIsSelf (isSelf) {
      this.addParameter(this._QueryAttr_IsSelf, isSelf)
    }

    /* cantonCode:String */
    setParamByCantonCodeInEmpty (cantonCode) {
      this.addParameter(this._QueryAttr_CantonCodeInEmpty, cantonCode)
    }

    /* createDate:Date */
    setParamByCreateDate (createDate) {
      this.addParameter(this._QueryAttr_CreateDate, createDate)
    }

    /* ownerTeamOrgCode:String */
    setParamByOwnerTeamOrgCodeInEmpty (ownerTeamOrgCode) {
      this.addParameter(this._QueryAttr_OwnerTeamOrgCodeInEmpty, ownerTeamOrgCode)
    }

    /* residentsCommitteeOrgCode:String */
    setParamByResidentsCommitteeOrgCodeInEmpty (residentsCommitteeOrgCode) {
      this.addParameter(this._QueryAttr_ResidentsCommitteeOrgCodeInEmpty, residentsCommitteeOrgCode)
    }

    /* buildUnitOrgCode:String */
    setParamByBuildUnitOrgCodeInEmpty (buildUnitOrgCode) {
      this.addParameter(this._QueryAttr_BuildUnitOrgCodeInEmpty, buildUnitOrgCode)
    }

    /* streetOfficeOrgCode:String */
    setParamByStreetOfficeOrgCodeInEmpty (streetOfficeOrgCode) {
      this.addParameter(this._QueryAttr_StreetOfficeOrgCodeInEmpty, streetOfficeOrgCode)
    }

    /* streetOfficeOrgCodes:String[] */
    setParamByStreetOfficeOrgCode_Enum (streetOfficeOrgCodes) {
      this.addParameterByEnum(this._QueryAttr_StreetOfficeOrgCode, streetOfficeOrgCodes)
    }

    /* residentsCommitteeOrgCodes:String[] */
    setParamByResidentsCommitteeOrgCode_Enum (residentsCommitteeOrgCodes) {
      this.addParameterByEnum(this._QueryAttr_ResidentsCommitteeOrgCode, residentsCommitteeOrgCodes)
    }

    /* realtyMngOrgCode:String */
    setParamByRealtyMngOrgCodeInEmpty (realtyMngOrgCode) {
      this.addParameter(this._QueryAttr_RealtyMngOrgCodeInEmpty, realtyMngOrgCode)
    }

    /* cantonCode:String */
    setParamByCantonCode (cantonCode) {
      this.addParameter(this._QueryAttr_CantonCode, cantonCode)
    }

    /* eaAreaCode:String */
    setParamByEaAreaCode (eaAreaCode) {
      this.addParameter(this._QueryAttr_EaAreaCode, eaAreaCode)
    }

    /* buildUnitOrgCode:String */
    setParamByBuildUnitOrgCode (buildUnitOrgCode) {
      this.addParameter(this._QueryAttr_BuildUnitOrgCode, buildUnitOrgCode)
    }

    /* ownerTeamOrgCode:String */
    setParamByOwnerTeamOrgCode (ownerTeamOrgCode) {
      this.addParameter(this._QueryAttr_OwnerTeamOrgCode, ownerTeamOrgCode)
    }

    /* eaAreaName:String */
    setParamByEaAreaNameInEmpty (eaAreaName) {
      this.addParameter(this._QueryAttr_EaAreaNameInEmpty, eaAreaName)
    }

    /* eaAreaNames:String[] */
    setParamByEaAreaName_Enum (eaAreaNames) {
      this.addParameterByEnum(this._QueryAttr_EaAreaName, eaAreaNames)
    }

    /* landNumber:String */
    setParamByLandNumberInEmpty (landNumber) {
      this.addParameter(this._QueryAttr_LandNumberInEmpty, landNumber)
    }

    /* buildUnitOrgCodes:String[] */
    setParamByBuildUnitOrgCode_Enum (buildUnitOrgCodes) {
      this.addParameterByEnum(this._QueryAttr_BuildUnitOrgCode, buildUnitOrgCodes)
    }

    /* address:String */
    setParamByAddressInEmpty (address) {
      this.addParameter(this._QueryAttr_AddressInEmpty, address)
    }

    /* realtyMngOrgCodes:String[] */
    setParamByRealtyMngOrgCode_Enum (realtyMngOrgCodes) {
      this.addParameterByEnum(this._QueryAttr_RealtyMngOrgCode, realtyMngOrgCodes)
    }

    /* addresss:String[] */
    setParamByAddress_Enum (addresss) {
      this.addParameterByEnum(this._QueryAttr_Address, addresss)
    }

    /* landNumbers:String[] */
    setParamByLandNumber_Enum (landNumbers) {
      this.addParameterByEnum(this._QueryAttr_LandNumber, landNumbers)
    }
}
