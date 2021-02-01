import request from '../static/js/request.js'
/**
 * OwnerTeamMgeControllerSvr
 */
export class OwnerTeamMgeControllerSvr {
  constructor () {
    this.baseurl = 'OwnerTeamMgeControllerSvr.assx/'
  }

  /**
     *
     * openId:String
     */
  checkMenberRight (openId) {
    return request.post(this.baseurl + 'checkMenberRight', Qs.stringify({ openId: openId }))
  }

  /**
     *
     * openId:String, member:OwnerCommitteeMember
     */
  modifyOwnerCommitteeMember (openId, member) {
    return request.post(this.baseurl + 'modifyOwnerCommitteeMember', Qs.stringify({ openId: openId, member: (typeof member === 'undefined' || member === null) ? '' : member.toString() }))
  }

  /**
     *
     * openId:String, menberId:String, status:int
     */
  suspensionMember (openId, menberId, status) {
    return request.post(this.baseurl + 'suspensionMember', Qs.stringify({ openId: openId, menberId: menberId, status: status }))
  }

  /**
     *
     * openId:String, member:OwnerCommitteeMember
     */
  addOwnerCommitteeMember (openId, member) {
    return request.post(this.baseurl + 'addOwnerCommitteeMember', Qs.stringify({ openId: openId, member: (typeof member === 'undefined' || member === null) ? '' : member.toString() }))
  }

  /**
     *
     *
     */
  GetVersion () {
    return request.post(this.baseurl + 'GetVersion', Qs.stringify({ }))
  }

  /**
     *
     * openId:String, menberId:String
     */
  getOwnerCommitteeMemberDetail (openId, menberId) {
    return request.post(this.baseurl + 'getOwnerCommitteeMemberDetail', Qs.stringify({ openId: openId, menberId: menberId }))
  }

  /**
     *
     * openId:String, name:String, startIndex:int, maxSize:int
     */
  getOwnerOwnerTeamMemberList (openId, name, startIndex, maxSize) {
    return request.post(this.baseurl + 'getOwnerOwnerTeamMemberList', Qs.stringify({ openId: openId, name: name, startIndex: startIndex, maxSize: maxSize }))
  }
}
