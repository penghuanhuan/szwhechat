import request from '../static/js/request.js'

export class QueryControllerSvr {
  constructor () {
    this.baseurl = 'QueryControllerSvr.assx/'
  }

  /**
     * 查询物业服务合同列表
     * openID:String, propertyName:String, eaAreaName:String, startTime:Date, endTime:Date, startIndex:int, maxSize:int
     */
  GetPropertyContractList (openID, propertyName, eaAreaName, startTime, endTime, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetPropertyContractList', Qs.stringify({ openID: openID, propertyName: propertyName, eaAreaName: eaAreaName, startTime: startTime, endTime: endTime, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 获取培训结果详情
     * openID:String, trainResultId:String
     */
  GetTrainResultDetail (openID, trainResultId) {
    return request.post(this.baseurl + 'GetTrainResultDetail', Qs.stringify({ openID: openID, trainResultId: trainResultId }))
  }

  /**
     * 获取业务单列表
     * openID:String, businessDocName:String, businessDocType:int, createStartTime:Date, createEndTime:Date, oper:String, status:int, startIndex:int, maxSize:int
     */
  GetBusinessDocList (openID, businessDocName, businessDocType, createStartTime, createEndTime, oper, status, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetBusinessDocList', Qs.stringify({ openID: openID, businessDocName: businessDocName, businessDocType: businessDocType, createStartTime: createStartTime, createEndTime: createEndTime, oper: oper, status: status, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 获取业委会备案详情
     * openID:String, keyID:String
     */
  GetOwnerCommitteeDetail (openID, keyID) {
    return request.post(this.baseurl + 'GetOwnerCommitteeDetail', Qs.stringify({ openID: openID, keyID: keyID }))
  }

  /**
     * 获取培训结果列表
     * openID:String, empName:String, idNumber:String, testStartTime:Date, testEndTime:Date, eaAreaName:String, orgName:String, startIndex:int, maxSize:int, resultTotalCount:boolean
     */
  GetTrainResultList (openID, empName, idNumber, testStartTime, testEndTime, eaAreaName, orgName, startIndex, maxSize, resultTotalCount) {
    return request.post(this.baseurl + 'GetTrainResultList', Qs.stringify({ openID: openID, empName: empName, idNumber: idNumber, testStartTime: testStartTime, testEndTime: testEndTime, eaAreaName: eaAreaName, orgName: orgName, startIndex: startIndex, maxSize: maxSize, resultTotalCount: resultTotalCount }))
  }

  /**
     * 获取业委会备案列表
     * openID:String, orgName:String, eaAreaName:String, startTime:Date, endTime:Date, startIndex:int, maxSize:int
     */
  GetOwnerCommitteeList (openID, orgName, eaAreaName, startTime, endTime, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetOwnerCommitteeList', Qs.stringify({ openID: openID, orgName: orgName, eaAreaName: eaAreaName, startTime: startTime, endTime: endTime, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 获取物业服务合同详情
     * openID:String, contractID:String
     */
  GetPropertyContractDetail (openID, contractID) {
    return request.post(this.baseurl + 'GetPropertyContractDetail', Qs.stringify({ openID: openID, contractID: contractID }))
  }
}
