
import request from '../static/js/request.js'
/**
 * 业委会成员管理接口
 */
export class OwnerCommitteeMemberControllerSvr {
  constructor () {
    this.baseurl = 'OwnerCommitteeMemberControllerSvr.assx/'
  }

  /**
     * 获取执行秘书列表
     * openId:String, orgCode:String, ownerName:String, startIndex:int, maxSize:int, returnTotalCount:boolean
     */
  GetOwnerCommitteeMemberBySecretary (openId, orgCode, ownerName, startIndex, maxSize, returnTotalCount) {
    return request.post(this.baseurl + 'GetOwnerCommitteeMemberBySecretary', Qs.stringify({ openId: openId, orgCode: orgCode, ownerName: ownerName, startIndex: startIndex, maxSize: maxSize, returnTotalCount: returnTotalCount }))
  }

  /**
     * 获取业委会成员列表
     * openId:String, orgCode:String, ownerName:String, ownerPhone:String, idCard:String, startIndex:int, maxSize:int, returnTotalCount:boolean
     */
  GetOwnerCommitteeMemberList (openId, orgCode, ownerName, ownerPhone, idCard, startIndex, maxSize, returnTotalCount) {
    return request.post(this.baseurl + 'GetOwnerCommitteeMemberList', Qs.stringify({ openId: openId, orgCode: orgCode, ownerName: ownerName, ownerPhone: ownerPhone, idCard: idCard, startIndex: startIndex, maxSize: maxSize, returnTotalCount: returnTotalCount }))
  }

  /**
     * 获取业委会成员详情
     * openId:String, memberId:String
     */
  GetOwnerCommitteeMemberDateil (openId, memberId) {
    return request.post(this.baseurl + 'GetOwnerCommitteeMemberDateil', Qs.stringify({ openId: openId, memberId: memberId }))
  }

  /**
     * 修改业委会成员信息
     * openId:String, data:OwnerCommitteeMember
     */
  ModifyOwnerCommitteeMember (openId, data) {
    return request.post(this.baseurl + 'ModifyOwnerCommitteeMember', Qs.stringify({ openId: openId, data: (typeof data === 'undefined' || data === null) ? '' : data.toString() }))
  }

  /**
     * 获取业委会监事列表
     * openId:String, orgCode:String, ownerName:String, startIndex:int, maxSize:int, returnTotalCount:boolean
     */
  GetOwnerCommitteeMemberBySupervisor (openId, orgCode, ownerName, startIndex, maxSize, returnTotalCount) {
    return request.post(this.baseurl + 'GetOwnerCommitteeMemberBySupervisor', Qs.stringify({ openId: openId, orgCode: orgCode, ownerName: ownerName, startIndex: startIndex, maxSize: maxSize, returnTotalCount: returnTotalCount }))
  }
}
