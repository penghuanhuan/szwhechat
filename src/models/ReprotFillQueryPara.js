//= =========== fixf.core.services.enterprise.ReprotFillQueryPara =============
/* eslint-disable camelcase */
import {
  QueryParameter
} from '../base/QueryParameter.js'

export class ReprotFillQueryPara extends QueryParameter {
  constructor () {
    super()
  }

    _QueryAttr_KeyId = 'keyId';
    _QueryAttr_FormluateKeyId = 'formluateKeyId';
    _QueryAttr_TemplateName = 'templateName';
    _QueryAttr_CreateDate = 'createDate';
    _QueryAttr_CreatePerson = 'createPerson';
    _QueryAttr_Tel = 'tel';
    _QueryAttr_EaAreaCode = 'eaAreaCode';
    _QueryAttr_OrgType = 'orgType';
    _QueryAttr_OrgName = 'orgName';
    _QueryAttr_OrgCode = 'orgCode';
    _QueryAttr_Status = 'status';
    _QueryAttr_CommitStatus = 'commitStatus';
    _QueryAttr_Area = 'area';
    _QueryAttr_StreetCode = 'streetCode';
    _QueryAttr_CommitteeCode = 'committeeCode';
    _QueryAttr_WorkId = 'workId';
    _QueryAttr_FillReportType = 'fillReportType';
    _QueryAttr_EaAreaName = 'eaAreaName';
    _QueryAttr_StreetName = 'streetName';
    _QueryAttr_CommitteeName = 'committeeName';
    _QueryAttr_IsUpLoadProject = 'isUpLoadProject';
    _QueryAttr_IsUpLoadEmployee = 'isUpLoadEmployee';
    _QueryAttr_ReportTypes = 'reportTypes';
    _QueryAttr_IsDelete = 'isDelete';
    _QueryAttr_TimeRange = 'timeRange';
    _OrderAttr_CreateDate = 'createDate';
    _OrderAttr_Status = 'status';
    _OrderAttr_CommitStatus = 'commitStatus';
    _OrderAttr_FillReportType = 'fillReportType';
    _OrderAttr_IsUpLoadProject = 'isUpLoadProject';
    _OrderAttr_IsUpLoadEmployee = 'isUpLoadEmployee';
    _OrderAttr_ReportTypes = 'reportTypes';
    _OrderAttr_IsDelete = 'isDelete';
    _OrderAttr_TimeRange = 'timeRange';

    /* keyIds:String[] */
    setParamByKeyId_Enum (keyIds) {
      this.addParameterByEnum(this._QueryAttr_KeyId, keyIds)
    }

    /* eaAreaCode:String */
    setParamByEaAreaCodeInEmpty (eaAreaCode) {
      this.addParameter(this._QueryAttr_EaAreaCodeInEmpty, eaAreaCode)
    }

    /* workId:String */
    setParamByWorkId (workId) {
      this.addParameter(this._QueryAttr_WorkId, workId)
    }

    /* tel:String */
    setParamByTel (tel) {
      this.addParameter(this._QueryAttr_Tel, tel)
    }

    /* keyId:String */
    setParamByKeyIdInEmpty (keyId) {
      this.addParameter(this._QueryAttr_KeyIdInEmpty, keyId)
    }

    /* formluateKeyId:String */
    setParamByFormluateKeyIdInEmpty (formluateKeyId) {
      this.addParameter(this._QueryAttr_FormluateKeyIdInEmpty, formluateKeyId)
    }

    /* createPersons:String[] */
    setParamByCreatePerson_Enum (createPersons) {
      this.addParameterByEnum(this._QueryAttr_CreatePerson, createPersons)
    }

    /* status:String */
    setParamByStatusInEmpty (status) {
      this.addParameter(this._QueryAttr_StatusInEmpty, status)
    }

    /* createPerson:String */
    setParamByCreatePerson (createPerson) {
      this.addParameter(this._QueryAttr_CreatePerson, createPerson)
    }

    /* createPerson:String */
    setParamByCreatePersonInEmpty (createPerson) {
      this.addParameter(this._QueryAttr_CreatePersonInEmpty, createPerson)
    }

    /* isUpLoadEmployee:boolean */
    setParamByIsUpLoadEmployee (isUpLoadEmployee) {
      this.addParameter(this._QueryAttr_IsUpLoadEmployee, isUpLoadEmployee)
    }

    /* tels:String[] */
    setParamByTel_Enum (tels) {
      this.addParameterByEnum(this._QueryAttr_Tel, tels)
    }

    /* orgName:String */
    setParamByOrgNameInEmpty (orgName) {
      this.addParameter(this._QueryAttr_OrgNameInEmpty, orgName)
    }

    /* commitStatus:String */
    setParamByCommitStatusInEmpty (commitStatus) {
      this.addParameter(this._QueryAttr_CommitStatusInEmpty, commitStatus)
    }

    /* orgTypes:String[] */
    setParamByOrgType_Enum (orgTypes) {
      this.addParameterByEnum(this._QueryAttr_OrgType, orgTypes)
    }

    /* streetCodes:String[] */
    setParamByStreetCode_Enum (streetCodes) {
      this.addParameterByEnum(this._QueryAttr_StreetCode, streetCodes)
    }

    /* eaAreaName:String */
    setParamByEaAreaNameInEmpty (eaAreaName) {
      this.addParameter(this._QueryAttr_EaAreaNameInEmpty, eaAreaName)
    }

    /* committeeCode:String */
    setParamByCommitteeCodeInEmpty (committeeCode) {
      this.addParameter(this._QueryAttr_CommitteeCodeInEmpty, committeeCode)
    }

    /* templateName:String */
    setParamByTemplateNameInEmpty (templateName) {
      this.addParameter(this._QueryAttr_TemplateNameInEmpty, templateName)
    }

    /* eaAreaNames:String[] */
    setParamByEaAreaName_Enum (eaAreaNames) {
      this.addParameterByEnum(this._QueryAttr_EaAreaName, eaAreaNames)
    }

    /* streetName:String */
    setParamByStreetName (streetName) {
      this.addParameter(this._QueryAttr_StreetName, streetName)
    }

    /* low:int, high:int */
    setParamByFillReportType_Range (low, high) {
      this.addNumberParameterByRange(this._QueryAttr_FillReportType, low, high)
    }

    /* committeeCodes:String[] */
    setParamByCommitteeCode_Enum (committeeCodes) {
      this.addParameterByEnum(this._QueryAttr_CommitteeCode, committeeCodes)
    }

    /* streetName:String */
    setParamByStreetNameInEmpty (streetName) {
      this.addParameter(this._QueryAttr_StreetNameInEmpty, streetName)
    }

    /* committeeName:String */
    setParamByCommitteeNameInEmpty (committeeName) {
      this.addParameter(this._QueryAttr_CommitteeNameInEmpty, committeeName)
    }

    /* timeRange:String */
    setParamByTimeRange (timeRange) {
      this.addParameter(this._QueryAttr_TimeRange, timeRange)
    }

    /* fillReportType:int */
    setParamByFillReportTypeIncZero (fillReportType) {
      this.addParameterIncZero(this._QueryAttr_FillReportType, fillReportType)
    }

    /* workIds:String[] */
    setParamByWorkId_Enum (workIds) {
      this.addParameterByEnum(this._QueryAttr_WorkId, workIds)
    }

    /* committeeNames:String[] */
    setParamByCommitteeName_Enum (committeeNames) {
      this.addParameterByEnum(this._QueryAttr_CommitteeName, committeeNames)
    }

    /* timeRange:String */
    setParamByTimeRangeInEmpty (timeRange) {
      this.addParameter(this._QueryAttr_TimeRangeInEmpty, timeRange)
    }

    /* isUpLoadProject:boolean */
    setParamByIsUpLoadProject (isUpLoadProject) {
      this.addParameter(this._QueryAttr_IsUpLoadProject, isUpLoadProject)
    }

    /* orgNames:String[] */
    setParamByOrgName_Enum (orgNames) {
      this.addParameterByEnum(this._QueryAttr_OrgName, orgNames)
    }

    /* tel:String */
    setParamByTelInEmpty (tel) {
      this.addParameter(this._QueryAttr_TelInEmpty, tel)
    }

    /* workId:String */
    setParamByWorkIdInEmpty (workId) {
      this.addParameter(this._QueryAttr_WorkIdInEmpty, workId)
    }

    /* fillReportTypes:int[] */
    setParamByFillReportType_Enum (fillReportTypes) {
      this.addParameterByEnum(this._QueryAttr_FillReportType, fillReportTypes)
    }

    /* reportTypes:int */
    setParamByReportTypesIncZero (reportTypes) {
      this.addParameterIncZero(this._QueryAttr_ReportTypes, reportTypes)
    }

    /* area:String */
    setParamByAreaInEmpty (area) {
      this.addParameter(this._QueryAttr_AreaInEmpty, area)
    }

    /* orgCode:String */
    setParamByOrgCodeInEmpty (orgCode) {
      this.addParameter(this._QueryAttr_OrgCodeInEmpty, orgCode)
    }

    /* streetCode:String */
    setParamByStreetCodeInEmpty (streetCode) {
      this.addParameter(this._QueryAttr_StreetCodeInEmpty, streetCode)
    }

    /* streetNames:String[] */
    setParamByStreetName_Enum (streetNames) {
      this.addParameterByEnum(this._QueryAttr_StreetName, streetNames)
    }

    /* timeRanges:String[] */
    setParamByTimeRange_Enum (timeRanges) {
      this.addParameterByEnum(this._QueryAttr_TimeRange, timeRanges)
    }

    /* orgType:String */
    setParamByOrgTypeInEmpty (orgType) {
      this.addParameter(this._QueryAttr_OrgTypeInEmpty, orgType)
    }

    /* commitStatuss:String[] */
    setParamByCommitStatus_Enum (commitStatuss) {
      this.addParameterByEnum(this._QueryAttr_CommitStatus, commitStatuss)
    }

    /* committeeName:String */
    setParamByCommitteeName (committeeName) {
      this.addParameter(this._QueryAttr_CommitteeName, committeeName)
    }

    /* formluateKeyIds:String[] */
    setParamByFormluateKeyId_Enum (formluateKeyIds) {
      this.addParameterByEnum(this._QueryAttr_FormluateKeyId, formluateKeyIds)
    }

    /* low:int, high:int */
    setParamByReportTypes_Range (low, high) {
      this.addNumberParameterByRange(this._QueryAttr_ReportTypes, low, high)
    }

    /* createDate:Date */
    setParamByCreateDate (createDate) {
      this.addParameter(this._QueryAttr_CreateDate, createDate)
    }

    /* area:String */
    setParamByArea (area) {
      this.addParameter(this._QueryAttr_Area, area)
    }

    /* status:String */
    setParamByStatus (status) {
      this.addParameter(this._QueryAttr_Status, status)
    }

    /* keyId:String */
    setParamByKeyId (keyId) {
      this.addParameter(this._QueryAttr_KeyId, keyId)
    }

    /* isDelete:boolean */
    setParamByIsDelete (isDelete) {
      this.addParameter(this._QueryAttr_IsDelete, isDelete)
    }

    /* statuss:String[] */
    setParamByStatus_Enum (statuss) {
      this.addParameterByEnum(this._QueryAttr_Status, statuss)
    }

    /* eaAreaCode:String */
    setParamByEaAreaCode (eaAreaCode) {
      this.addParameter(this._QueryAttr_EaAreaCode, eaAreaCode)
    }

    /* eaAreaName:String */
    setParamByEaAreaName (eaAreaName) {
      this.addParameter(this._QueryAttr_EaAreaName, eaAreaName)
    }

    /* orgCodes:String[] */
    setParamByOrgCode_Enum (orgCodes) {
      this.addParameterByEnum(this._QueryAttr_OrgCode, orgCodes)
    }

    /* orgCode:String */
    setParamByOrgCode (orgCode) {
      this.addParameter(this._QueryAttr_OrgCode, orgCode)
    }

    /* eaAreaCodes:String[] */
    setParamByEaAreaCode_Enum (eaAreaCodes) {
      this.addParameterByEnum(this._QueryAttr_EaAreaCode, eaAreaCodes)
    }

    /* startDate:Date, endDate:Date */
    setParamByCreateDate_Range (startDate, endDate) {
      this.addDateParameterByRange(this._QueryAttr_CreateDate, startDate, endDate)
    }

    /* fillReportType:int */
    setParamByFillReportType (fillReportType) {
      this.addParameter(this._QueryAttr_FillReportType, fillReportType)
    }

    /* reportTypess:int[] */
    setParamByReportTypes_Enum (reportTypess) {
      this.addParameterByEnum(this._QueryAttr_ReportTypes, reportTypess)
    }

    /* templateNames:String[] */
    setParamByTemplateName_Enum (templateNames) {
      this.addParameterByEnum(this._QueryAttr_TemplateName, templateNames)
    }

    /* orgType:String */
    setParamByOrgType (orgType) {
      this.addParameter(this._QueryAttr_OrgType, orgType)
    }

    /* commitStatus:String */
    setParamByCommitStatus (commitStatus) {
      this.addParameter(this._QueryAttr_CommitStatus, commitStatus)
    }

    /* formluateKeyId:String */
    setParamByFormluateKeyId (formluateKeyId) {
      this.addParameter(this._QueryAttr_FormluateKeyId, formluateKeyId)
    }

    /* orgName:String */
    setParamByOrgName (orgName) {
      this.addParameter(this._QueryAttr_OrgName, orgName)
    }

    /* streetCode:String */
    setParamByStreetCode (streetCode) {
      this.addParameter(this._QueryAttr_StreetCode, streetCode)
    }

    /* reportTypes:int */
    setParamByReportTypes (reportTypes) {
      this.addParameter(this._QueryAttr_ReportTypes, reportTypes)
    }

    /* committeeCode:String */
    setParamByCommitteeCode (committeeCode) {
      this.addParameter(this._QueryAttr_CommitteeCode, committeeCode)
    }

    /* areas:String[] */
    setParamByArea_Enum (areas) {
      this.addParameterByEnum(this._QueryAttr_Area, areas)
    }

    /* templateName:String */
    setParamByTemplateName (templateName) {
      this.addParameter(this._QueryAttr_TemplateName, templateName)
    }
}
