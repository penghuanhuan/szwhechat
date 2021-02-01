import request from '../../static/js/request.js'

/**
 * 大物业设备设施管理服务
 */
export class FacilityControllerSvr {
  constructor () {
    this.baseurl = 'FacilityControllerSvr.assx/'
  }

  /**
     * 删除物业区域设施设备类型关联对象
     * openId:String, eaAreaCode:String, typeCode:String
     */
  DeleteEaFacilityArea (openId, eaAreaCode, typeCode) {
    return request.post(this.baseurl + 'DeleteEaFacilityArea', Qs.stringify({ openId: openId, eaAreaCode: eaAreaCode, typeCode: typeCode }))
  }

  /**
     * 设施设备维修记录
     * openId:String, facilityID:String, facilityName:String
     */
  GetServiceRecordList (openId, facilityID, facilityName) {
    return request.post(this.baseurl + 'GetServiceRecordList', Qs.stringify({ openId: openId, facilityID: facilityID, facilityName: facilityName }))
  }

  /**
     * 获取物业区域对应设施设备类型列表
     * openId:String, eaAreaCode:String
     */
  GetTypeListByEaAreaCode (openId, eaAreaCode) {
    return request.post(this.baseurl + 'GetTypeListByEaAreaCode', Qs.stringify({ openId: openId, eaAreaCode: eaAreaCode }))
  }

  /**
     * 删除设施设备
     * openId:String, data:List
     */
  DeleteFacility (openId, data) {
    return request.post(this.baseurl + 'DeleteFacility', Qs.stringify({ openId: openId, data: data }))
  }

  /**
     * 查询设备设施
     * openId:String, id:String
     */
  SelectFacilityType (openId, id) {
    return request.post(this.baseurl + 'SelectFacilityType', Qs.stringify({ openId: openId, id: id }))
  }

  /**
     * 通过专项类型获取检查设施类型
     * openId:String, speciaType:String
     */
  GetFacilityTypeListBySpeciType (openId, speciaType) {
    return request.post(this.baseurl + 'GetFacilityTypeListBySpeciType', Qs.stringify({ openId: openId, speciaType: speciaType }))
  }

  /**
     * 更改设施设备所属对象
     * openId:String, relationId:String, relationType:int, position:String, unitName:String, codes:List
     */
  ChangeRelationID (openId, relationId, relationType, position, unitName, codes) {
    return request.post(this.baseurl + 'ChangeRelationID', Qs.stringify({ openId: openId, relationId: relationId, relationType: relationType, position: position, unitName: unitName, codes: codes }))
  }

  /**
     * 获取设施设备台账详情
     * openId:String, facilityAccountCode:String
     */
  GetFacilityAccount (openId, facilityAccountCode) {
    return request.post(this.baseurl + 'GetFacilityAccount', Qs.stringify({ openId: openId, facilityAccountCode: facilityAccountCode }))
  }

  /**
     * 获取某个物业区域下的楼栋和单元（组合成树）
     * openId:String, eaAreaCode:String
     */
  GetEaAreaTree (openId, eaAreaCode) {
    return request.post(this.baseurl + 'GetEaAreaTree', Qs.stringify({ openId: openId, eaAreaCode: eaAreaCode }))
  }

  /**
     * 获取物业区域列表
     * openId:String, keyWord:String, page:int, rows:int, cantonCode:String
     */
  GetEaAreaList (openId, keyWord, page, rows, cantonCode) {
    return request.post(this.baseurl + 'GetEaAreaList', Qs.stringify({ openId: openId, keyWord: keyWord, page: page, rows: rows, cantonCode: cantonCode }))
  }

  /**
     * 删除设施设备(逻辑)
     * openId:String, data:List
     */
  DropFacility (openId, data) {
    return request.post(this.baseurl + 'DropFacility', Qs.stringify({ openId: openId, data: data }))
  }

  /**
     * 删除设备设施
     * openId:String, id:String
     */
  DeleteFacilityType (openId, id) {
    return request.post(this.baseurl + 'DeleteFacilityType', Qs.stringify({ openId: openId, id: id }))
  }

  /**
     * 查询设施设备的安全检查记录
     * openId:String, eaFacilityId:String
     */
  GetSecurityCheckCardListByFacility (openId, eaFacilityId) {
    return request.post(this.baseurl + 'GetSecurityCheckCardListByFacility', Qs.stringify({ openId: openId, eaFacilityId: eaFacilityId }))
  }

  /**
     * 初始化设施设备类型列表
     * openId:String, eaAreaCode:String
     */
  InitTypeListByEaAreaCode (openId, eaAreaCode) {
    return request.post(this.baseurl + 'InitTypeListByEaAreaCode', Qs.stringify({ openId: openId, eaAreaCode: eaAreaCode }))
  }

  /**
     * 删除设施设备台账及逻辑删除设备
     * openId:String, accountCode:String
     */
  DeleteFacilityByOne (openId, accountCode) {
    return request.post(this.baseurl + 'DeleteFacilityByOne', Qs.stringify({ openId: openId, accountCode: accountCode }))
  }

  /**
     * 通过编码获取设施设备类型
     * openId:String, code:String
     */
  GetFacilityTypeByCode (openId, code) {
    return request.post(this.baseurl + 'GetFacilityTypeByCode', Qs.stringify({ openId: openId, code: code }))
  }

  /**
     * 获取设备设施列表
     * openId:String, startIndex:int, maxSize:int, relationId:String, relationType:int, eaFacilityTypeId:String, securityCheckId:String
     */
  GetFacilityList (openId, startIndex, maxSize, relationId, relationType, eaFacilityTypeId, securityCheckId) {
    return request.post(this.baseurl + 'GetFacilityList', Qs.stringify({ openId: openId, startIndex: startIndex, maxSize: maxSize, relationId: relationId, relationType: relationType, eaFacilityTypeId: eaFacilityTypeId, securityCheckId: securityCheckId }))
  }

  /**
     * 保存设施设备
     * openId:String, eaFacility:EaFacility, wyFacilityEx:WYFacilityEx, account:FacilityAccount
     */
  SaveFacility (openId, eaFacility, wyFacilityEx, account) {
    return request.post(this.baseurl + 'SaveFacility', Qs.stringify({ openId: openId, eaFacility: (typeof eaFacility === 'undefined' || eaFacility === null) ? '' : eaFacility.toString(), wyFacilityEx: (typeof wyFacilityEx === 'undefined' || wyFacilityEx === null) ? '' : wyFacilityEx.toString(), account: (typeof account === 'undefined' || account === null) ? '' : account.toString() }))
  }

  /**
     * 添加物业区域设施设备类型关联对象
     * openId:String, name:String, typeId:String, eaAreaCode:String
     */
  AddEaFacilityArea (openId, name, typeId, eaAreaCode) {
    return request.post(this.baseurl + 'AddEaFacilityArea', Qs.stringify({ openId: openId, name: name, typeId: typeId, eaAreaCode: eaAreaCode }))
  }

  /**
     * 通过名称获取设施设备类型
     * openId:String, name:String
     */
  GetFacilityTypeByName (openId, name) {
    return request.post(this.baseurl + 'GetFacilityTypeByName', Qs.stringify({ openId: openId, name: name }))
  }

  /**
     * 添加设备设施
     * openId:String, facilityType:FacilityType, eaAreaCode:String
     */
  AddFacilityType (openId, facilityType, eaAreaCode) {
    return request.post(this.baseurl + 'AddFacilityType', Qs.stringify({ openId: openId, facilityType: (typeof facilityType === 'undefined' || facilityType === null) ? '' : facilityType.toString(), eaAreaCode: eaAreaCode }))
  }

  /**
     * 修改设备设施
     * openId:String, facilityType:FacilityType
     */
  UpdateFacilityType (openId, facilityType) {
    return request.post(this.baseurl + 'UpdateFacilityType', Qs.stringify({ openId: openId, facilityType: (typeof facilityType === 'undefined' || facilityType === null) ? '' : facilityType.toString() }))
  }

  /**
     * 获取设备设施详情
     * openId:String, eaFacilityId:String, securityCheckId:String
     */
  GetFacilityDetail (openId, eaFacilityId, securityCheckId) {
    return request.post(this.baseurl + 'GetFacilityDetail', Qs.stringify({ openId: openId, eaFacilityId: eaFacilityId, securityCheckId: securityCheckId }))
  }

  /**
     * 获取设施设备台账列表
     * openId:String, facilityId:String, cardId:String, startIndex:int, maxSize:int, totalCount:boolean
     */
  GetFacilityAccountList (openId, facilityId, cardId, startIndex, maxSize, totalCount) {
    return request.post(this.baseurl + 'GetFacilityAccountList', Qs.stringify({ openId: openId, facilityId: facilityId, cardId: cardId, startIndex: startIndex, maxSize: maxSize, totalCount: totalCount }))
  }

  /**
     * 获取所有的设施设备
     * openId:String
     */
  GetFacilityTypeTreeData (openId) {
    return request.post(this.baseurl + 'GetFacilityTypeTreeData', Qs.stringify({ openId: openId }))
  }

  /**
     * 设施设备类型统计
     * openId:String, areaCode:String
     */
  GetStatisticsList (openId, areaCode) {
    return request.post(this.baseurl + 'GetStatisticsList', Qs.stringify({ openId: openId, areaCode: areaCode }))
  }
}
