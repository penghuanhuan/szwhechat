import request from '../../static/js/request.js'

/**
 *  平安建设
 */
export class SafeConstructionControllerSvr {
  constructor () {
    this.baseurl = 'SafeConstructionControllerSvr.assx/'
  }

  /**
     * 平安建设统计
     * openId:String, deptId:int,deptId:int ,cantonCode: String ,communityCode: String
     */
  GetSafeConstructionStatistic (openId, year, deptId, cantonCode, streetCode, communityCode) {
    return request.post(this.baseurl + 'GetSafeConstructionStatistic', Qs.stringify({
      openId: openId,
      year: year,
      deptId: deptId,
      cantonCode: cantonCode,
      streetCode: streetCode,
      communityCode: communityCode
    }))
  }

  /**
     * 平安建设统计-区级信息展示
     * openId:String, cantonCode:String, year:String
     */
  GetSafeConstructionByCantonCode (openId, cantonCode, year) {
    return request.post(this.baseurl + 'GetSafeConstructionByCantonCode', Qs.stringify({
      openId: openId,
      cantonCode: cantonCode,
      year: year
    }))
  }

  /**
     * 根据条件查询 区级 人员绑定信息列表 .
     * openId:String, cantonCode:String, userName:String, startIndex:int, maxSize:int
     */
  GetListPersonInfoOfCanton (openId, cantonCode, userName, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetListPersonInfoOfCanton', Qs.stringify({
      openId: openId,
      cantonCode: cantonCode,
      userName: userName,
      startIndex: startIndex,
      maxSiz: maxSize

    }))
  }

  /**
     * 根据条件查询 街道办 人员绑定信息列表.
     * openId:String,  cantonCode:String,streetCode:String, userName:String, startIndex:int, maxSize:int,bindState：String  0-未绑定 1-绑定  其他：
     */
  GetListPersonInfoOfStreet (openId, cantonCode, streetCode, userName, startIndex, maxSize, bindState) {
    return request.post(this.baseurl + 'GetListPersonInfoOfStreet', Qs.stringify({
      openId: openId,
      cantonCode: cantonCode,
      streetCode: streetCode,
      userName: userName,
      startIndex: startIndex,
      maxSiz: maxSize,
      bindState: bindState
    }))
  }

  /**
     * 根据条件查询 社区 人员绑定信息列表.
     * openId:String,  cantonCode:String,streetCode:String,communiteeCode:String, userName:String,
     * startIndex:int, maxSize:int,bindState：String  0-未绑定 1-绑定  其他：
     */
  GetListPersonInfoOfCommunity (openId, cantonCode, streetCode, communiteeCode, userName, startIndex, maxSize, bindState) {
    return request.post(this.baseurl + 'GetListPersonInfoOfCommunity', Qs.stringify({
      openId: openId,
      cantonCode: cantonCode,
      streetCode: streetCode,
      communiteeCode: communiteeCode,
      userName: userName,
      startIndex: startIndex,
      maxSiz: maxSize,
      bindState: bindState
    }))
  }

  /**
     * 根据条件查询 小区组织 信息列表
     * openId:String, cantonCode:String, streetCode:String, communiteeCode:String, year:String,
     * startIndex:int, maxSize:int,nameAll：String
     */
  GetListEaAreaOfOrgzation (openId, cantonCode, streetCode, communiteeCode, year, startIndex, maxSize, nameAll) {
    return request.post(this.baseurl + 'GetListEaAreaOfOrgzation', Qs.stringify({
      openId: openId,
      cantonCode: cantonCode,
      streetCode: streetCode,
      communiteeCode: communiteeCode,
      year: year,
      startIndex: startIndex,
      maxSiz: maxSize,
      nameAll: nameAll
    }))
  }
}
