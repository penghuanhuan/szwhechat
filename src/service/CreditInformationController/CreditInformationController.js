import request from '../../static/js/request.js'

/**
 * 信用信息
 */
export class CreditInformationController {
  constructor () {
    this.baseurl = 'CreditInformationController.assx/'
  }

  /**
     * 获取共管资金账户详情
     * openId:String, eaAreaCode:String, type:int
     */
  GetCommonAccountByEaAreaCode (openId, eaAreaCode, type) {
    return request.post(this.baseurl + 'GetCommonAccountByEaAreaCode', Qs.stringify({ openId: openId, eaAreaCode: eaAreaCode, type: type }))
  }

  /**
     * 获取主任良好或不良好信息列表
     * openId:String, name:String, eaAreaName:String, type:int, startIndex:int, maxSize:int, resultCount:boolean
     */
  GetBehaviorListByDirector (openId, name, eaAreaName, type, startIndex, maxSize, resultCount, likeOther) {
    return request.post(this.baseurl + 'GetBehaviorListByDirector', Qs.stringify({ openId: openId, name: name, eaAreaName: eaAreaName, type: type, startIndex: startIndex, maxSize: maxSize, resultCount: resultCount, likeOther: likeOther }))
  }

  /**
     * 获取项目经理基础信息详情
     * openId:String, uniqId:String
     */
  GetManageBaseInfo (openId, uniqId) {
    return request.post(this.baseurl + 'GetManageBaseInfo', Qs.stringify({ openId: openId, uniqId: uniqId }))
  }

  /**
     * 获取负责人良好信息列表
     * openId:String, orgName:String, type:int, startIndex:int, maxSize:int, resultCount:boolean
     */
  GetBehaviorListByManger (openId, orgName, type, startIndex, maxSize, resultCount, likeOther) {
    return request.post(this.baseurl + 'GetBehaviorListByManger', Qs.stringify({ openId: openId, orgName: orgName, type: type, startIndex: startIndex, maxSize: maxSize, resultCount: resultCount, likeOther: likeOther }))
  }

  /**
     * 获取共管账户详情列表
     * openId:String, orgCode:String, eaAreaCode:String, type:int, startIndex:int, maxSize:int, resultTotalCount:boolean
     */
  GetCommonAccountListByEaAreaCodeOrOrgName (openId, orgCode, eaAreaCode, type, startIndex, maxSize, resultTotalCount) {
    return request.post(this.baseurl + 'GetCommonAccountListByEaAreaCodeOrOrgName', Qs.stringify({ openId: openId, orgCode: orgCode, eaAreaCode: eaAreaCode, type: type, startIndex: startIndex, maxSize: maxSize, resultTotalCount: resultTotalCount }))
  }

  /**
     * 获取业委会秘书基础信息详情列表
     * openId:String, startIndex:int, maxSize:int, resultCount:boolean
     */
  GetBasicListBySecretary (openId, startIndex, maxSize, resultCount, likeOther) {
    return request.post(this.baseurl + 'GetBasicListBySecretary', Qs.stringify({ openId: openId, startIndex: startIndex, maxSize: maxSize, resultCount: resultCount, likeOther: likeOther }))
  }

  /**
     * 培训人员列表
     * openId:String, orgCode:String, eaAreaName:String, name:String, phoneNum:String, type:int, startIndex:int, maxSize:int, resultTotalCount:boolean
     */
  GetTrainResultListByEaAreaNameOrOrgName (openId, orgCode, eaAreaName, name, phoneNum, type, startIndex, maxSize, resultTotalCount) {
    return request.post(this.baseurl + 'GetTrainResultListByEaAreaNameOrOrgName', Qs.stringify({ openId: openId, orgCode: orgCode, eaAreaName: eaAreaName, name: name, phoneNum: phoneNum, type: type, startIndex: startIndex, maxSize: maxSize, resultTotalCount: resultTotalCount }))
  }

  /**
     * 获取不良好行为列表
     * openId:String, eaAreaCode:String, orgCode:String, name:String, iDCard:String, type:int, option:int, startIndex:int, maxSize:int, resultTotalCount:boolean
     */
  getBadBehaviorListByDetail (openId, eaAreaCode, orgCode, name, iDCard, type, option, startIndex, maxSize, resultTotalCount) {
    return request.post(this.baseurl + 'getBadBehaviorListByDetail', Qs.stringify({ openId: openId, eaAreaCode: eaAreaCode, orgCode: orgCode, name: name, iDCard: iDCard, type: type, option: option, startIndex: startIndex, maxSize: maxSize, resultTotalCount: resultTotalCount }))
  }

  /**
     * 物业企业小区评价情况
     * openId:String, orgCode:String, eaAreaCode:String, startIndex:int, maxSize:int,type:int
     * type--》 用户类型:  1-企业 2-项目经理 3-业委会成员 4-业主   5-业委会秘书 6-业委会监事   EIntegrityObjectType
     */
  GetCreditInfoOfEaAreaEvaList (openId, orgCode, eaAreaCode, startIndex, maxSize, type) {
    return request.post(this.baseurl + 'GetCreditInfoOfEaAreaEvaList', Qs.stringify({ openId: openId, orgCode: orgCode, eaAreaCode: eaAreaCode, startIndex: startIndex, maxSize: maxSize, type: type }))
  }

  /**
     * 获取安全检查详情列表
     * openId:String, orgCode:String, eaAreaCode:String, type:int, startIndex:int, maxSize:int, resultTotalCount:boolean
     */
  GetSecuritycheckListByEaAreaCodeOrOrgCode (openId, orgCode, eaAreaCode, type, startIndex, maxSize, resultTotalCount) {
    return request.post(this.baseurl + 'GetSecuritycheckListByEaAreaCodeOrOrgCode', Qs.stringify({ openId: openId, orgCode: orgCode, eaAreaCode: eaAreaCode, type: type, startIndex: startIndex, maxSize: maxSize, resultTotalCount: resultTotalCount }))
  }

  /**
     * 获取安全检查列表
     * openId:String, eaAreaCode:String, type:int, startIndex:int, maxSize:int, resultTotalCount:boolean
     */
  GetSecuritycheckCardListByEaAreaCode (openId, eaAreaCode, type, startIndex, maxSize, resultTotalCount) {
    return request.post(this.baseurl + 'GetSecuritycheckCardListByEaAreaCode', Qs.stringify({ openId: openId, eaAreaCode: eaAreaCode, type: type, startIndex: startIndex, maxSize: maxSize, resultTotalCount: resultTotalCount }))
  }

  /**
     * 获取物业企业基础信息列表
     * openId:String, orgName:String, startIndex:int, maxSize:int
     */
  GetBasicInformationList (openId, orgName, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetBasicInformationList', Qs.stringify({ openId: openId, orgName: orgName, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 获取业委会秘书良好或不良好信息列表
     * openId:String, name:String, eaAreaName:String, type:int, startIndex:int, maxSize:int, resultCount:boolean
     */
  GetBehaviorListBySecretary (openId, name, eaAreaName, type, startIndex, maxSize, resultCount, likeOther) {
    return request.post(this.baseurl + 'GetBehaviorListBySecretary', Qs.stringify({ openId: openId, name: name, eaAreaName: eaAreaName, type: type, startIndex: startIndex, maxSize: maxSize, resultCount: resultCount, likeOther: likeOther }))
  }

  /**
     * 获取业主基础信息详情    type 用户角色类型  4-业主   5-业委会秘书   如果为5则 secretaryName必填
     * openId:String, eaAreaCode:String,type: Integer ,secretaryName: String
     */
  GetBasicDetailByOwner (openId, eaAreaCode, type, secretaryName) {
    return request.post(this.baseurl + 'GetBasicDetailByOwner', Qs.stringify({ openId: openId, eaAreaCode: eaAreaCode, type: type, secretaryName: secretaryName }))
  }

  /**
     * 获取信息报表公开列表
     * openId:String, eaAreaCode:String, type:int, startIndex:int, maxSize:int, resultTotalCount:boolean
     */
  GetPublicReportFillListByEaAreaCode (openId, eaAreaCode, type, startIndex, maxSize, resultTotalCount) {
    return request.post(this.baseurl + 'GetPublicReportFillListByEaAreaCode', Qs.stringify({ openId: openId, eaAreaCode: eaAreaCode, type: type, startIndex: startIndex, maxSize: maxSize, resultTotalCount: resultTotalCount }))
  }

  /**
     * 获取信息公开详情列表
     * openId:String, orgCode:String, eaAreaCode:String, date:Date, type:int, startIndex:int, maxSize:int, resultTotalCount:boolean
     */
  GetPublicInfoListByEaAreaCodeOrOrgCode (openId, orgCode, eaAreaCode, date, type, startIndex, maxSize, resultTotalCount) {
    return request.post(this.baseurl + 'GetPublicInfoListByEaAreaCodeOrOrgCode', Qs.stringify({ openId: openId, orgCode: orgCode, eaAreaCode: eaAreaCode, date: date, type: type, startIndex: startIndex, maxSize: maxSize, resultTotalCount: resultTotalCount }))
  }

  /**
     * 获取负责人良好或不良好信息详情
     * openId:String, eaAreaCode:String, type:int
     */
  GetBehaviorDetailByManger (openId, eaAreaCode, type) {
    return request.post(this.baseurl + 'GetBehaviorDetailByManger', Qs.stringify({ openId: openId, eaAreaCode: eaAreaCode, type: type }))
  }

  /**
     * 获取项目经理基础信息列表
     * openId:String, eaAreaName:String, manageName:String, startIndex:int, maxSize:int
     */
  GetManageBaseInfoList (openId, eaAreaName, manageName, startIndex, maxSize, likeOther) {
    return request.post(this.baseurl + 'GetManageBaseInfoList', Qs.stringify({ openId: openId, eaAreaName: eaAreaName, manageName: manageName, startIndex: startIndex, maxSize: maxSize, likeOther: likeOther }))
  }

  /**
     * 获取在管面积，在管数量详情列表
     * openId:String, orgCode:String, eaAreaCode:String, type:int, startIndex:int, maxSize:int, resultTotalCount:boolean
     */
  GetEaAreaInfoListByEaAreaCodeOrOrgCode (openId, orgCode, eaAreaCode, type, startIndex, maxSize, resultTotalCount) {
    return request.post(this.baseurl + 'GetEaAreaInfoListByEaAreaCodeOrOrgCode', Qs.stringify({ openId: openId, orgCode: orgCode, eaAreaCode: eaAreaCode, type: type, startIndex: startIndex, maxSize: maxSize, resultTotalCount: resultTotalCount }))
  }

  /**
     * 获取业委会主任基础信息详情
     * openId:String, eaAreaCode:String
     */
  GetOwnerTeamMasterBaseInfo (openId, eaAreaCode) {
    return request.post(this.baseurl + 'GetOwnerTeamMasterBaseInfo', Qs.stringify({ openId: openId, eaAreaCode: eaAreaCode }))
  }

  /**
     * 获取业主评价物业区域业主反馈率详情
     * openId:String, eaAreaCode:String, evaluateObjType:int
     */
  GetEvaluateResRateDetail (openId, eaAreaCode, evaluateObjType) {
    return request.post(this.baseurl + 'GetEvaluateResRateDetail', Qs.stringify({ openId: openId, eaAreaCode: eaAreaCode, evaluateObjType: evaluateObjType }))
  }

  /**
     * 获取业主良好或不良好信息列表
     * openId:String, type:int, startIndex:int, maxSize:int, resultCount:boolean
     */
  GetBehaviorListByOwner (openId, type, startIndex, maxSize, resultCount, likeOther) {
    return request.post(this.baseurl + 'GetBehaviorListByOwner', Qs.stringify({ openId: openId, type: type, startIndex: startIndex, maxSize: maxSize, resultCount: resultCount, likeOther: likeOther }))
  }

  /**
     * 获取通知列表
     * openId:String, nickName:String, eaAreaCode:String, endTime:Date, title:String, startIndex:int, maxSize:int
     */
  GetWeChatNoticeMsgList (openId, nickName, eaAreaCode, endTime, title, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetWeChatNoticeMsgList', Qs.stringify({ openId: openId, nickName: nickName, eaAreaCode: eaAreaCode, endTime: endTime, title: title, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 获取主任良好或不良好信息详情
     * openId:String, eaAreaCode:String, type:int
     */
  GetBehaviorDetailByDirector (openId, eaAreaCode, type) {
    return request.post(this.baseurl + 'GetBehaviorDetailByDirector', Qs.stringify({ openId: openId, eaAreaCode: eaAreaCode, type: type }))
  }

  /**
     * 获取物业企业基础信息详情
     * openId:String, orgCode:String
     */
  GetBasicInformation (openId, orgCode) {
    return request.post(this.baseurl + 'GetBasicInformation', Qs.stringify({ openId: openId, orgCode: orgCode }))
  }

  /**
     * 获取业委会秘书良好或不良好信息详情
     * openId:String, keyID:String, type:int
     */
  GetBehaviorDetailBySecretary (openId, keyID, type) {
    return request.post(this.baseurl + 'GetBehaviorDetailBySecretary', Qs.stringify({ openId: openId, keyID: keyID, type: type }))
  }

  /**
     * 获取业主基础信息列表
     * openId:String, startIndex:int, maxSize:int, resultCount:boolean
     */
  GetBasicListByOwner (openId, startIndex, maxSize, resultCount, likeOther) {
    return request.post(this.baseurl + 'GetBasicListByOwner', Qs.stringify({ openId: openId, startIndex: startIndex, maxSize: maxSize, resultCount: resultCount, likeOther: likeOther }))
  }

  /**
     * 获取企业良好信息详情
     * openId:String, orgCode:String, type:int
     */
  GetBehaviorDetail (openId, orgCode, type) {
    return request.post(this.baseurl + 'GetBehaviorDetail', Qs.stringify({ openId: openId, orgCode: orgCode, type: type }))
  }

  /**
     * 获取企业项目经理通知公告情况
     * openId:String, orgCode:String, endTime:Date, startIndex:int, maxSize:int
     */
  GetCreditInfoOfPersonNoticeList (openId, orgCode, endTime, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetCreditInfoOfPersonNoticeList', Qs.stringify({ openId: openId, orgCode: orgCode, endTime: endTime, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 获取业主良好或不良好信息详情
     * openId:String, name:String, IDCard:String, eaAreaCode:String, type:int
     */
  GetBehaviorDetailByOwner (openId, name, IDCard, eaAreaCode, type) {
    return request.post(this.baseurl + 'GetBehaviorDetailByOwner', Qs.stringify({ openId: openId, name: name, IDCard: IDCard, eaAreaCode: eaAreaCode, type: type }))
  }

  /**
     * 获取企业良好信息列表
     * openId:String, orgName:String, type:int, startIndex:int, maxSize:int, resultCount:boolean
     */
  GetBehaviorList (openId, orgName, type, startIndex, maxSize, resultCount) {
    return request.post(this.baseurl + 'GetBehaviorList', Qs.stringify({ openId: openId, orgName: orgName, type: type, startIndex: startIndex, maxSize: maxSize, resultCount: resultCount }))
  }

  /**
     * 获取良好行为列表
     * openId:String, eaAreaCode:String, orgCode:String, name:String, iDCard:String, type:int, option:int, startIndex:int, maxSize:int, resultTotalCount:boolean
     */
  GetGoodBehaviorListByDetail (openId, eaAreaCode, orgCode, name, iDCard, type, option, startIndex, maxSize, resultTotalCount) {
    return request.post(this.baseurl + 'GetGoodBehaviorListByDetail', Qs.stringify({ openId: openId, eaAreaCode: eaAreaCode, orgCode: orgCode, name: name, iDCard: iDCard, type: type, option: option, startIndex: startIndex, maxSize: maxSize, resultTotalCount: resultTotalCount }))
  }

  /**
     * 获取业委会主任基础信息列表
     * openId:String, eaAreaName:String, masterName:String, startIndex:int, maxSize:int
     */
  GetOwnerTeamMasterBaseInfoList (openId, eaAreaName, masterName, startIndex, maxSize, likeOther) {
    return request.post(this.baseurl + 'GetOwnerTeamMasterBaseInfoList', Qs.stringify({ openId: openId, eaAreaName: eaAreaName, masterName: masterName, startIndex: startIndex, maxSize: maxSize, likeOther: likeOther }))
  }

  /**
     * 获取业委会监事良好或不良好信息列表
     * openId:String, name:String, eaAreaName:String, type:int, startIndex:int, maxSize:int, resultCount:boolean
     */
  GetBehaviorListBySupervisor (openId, name, eaAreaName, type, startIndex, maxSize, resultCount, likeOther) {
    return request.post(this.baseurl + 'GetBehaviorListBySupervisor', Qs.stringify({ openId: openId, name: name, eaAreaName: eaAreaName, type: type, startIndex: startIndex, maxSize: maxSize, resultCount: resultCount, likeOther: likeOther }))
  }

  /**
     * 获取业委会监事基础信息详情列表
     * openId:String, startIndex:int, maxSize:int, resultCount:boolean
     */
  GetBasicListBySupervisor (openId, startIndex, maxSize, resultCount, likeOther) {
    return request.post(this.baseurl + 'GetBasicListBySupervisor', Qs.stringify({ openId: openId, startIndex: startIndex, maxSize: maxSize, resultCount: resultCount, likeOther: likeOther }))
  }

  /**
     * 获取业委会监事基础信息详情列表
     * openId:String, eaAreaCode:String
     */
  GetBasicDetailBySupervisor (openId, eaAreaCode, supervisorName) {
    return request.post(this.baseurl + 'GetBasicDetailBySupervisor', Qs.stringify({ openId: openId, eaAreaCode: eaAreaCode, supervisorName: supervisorName }))
  }

  /**
     * 获取业委会监事良好或不良好信息详情
     * openId:String, keyID:String, type:int
     */
  GetBehaviorDetailBySupervisor (openId, keyID, type) {
    return request.post(this.baseurl + 'GetBehaviorDetailBySupervisor', Qs.stringify({ openId: openId, keyID: keyID, type: type }))
  }
}
