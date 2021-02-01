import request from '../../static/js/request.js'

/**
 * VoteControllerSvr
 */
export class VoteControllerSvr {
  constructor () {
    this.baseurl = 'VoteControllerSvr.assx/'
  }

  /**
     *
     * openId:String, source:int, selectCandidates:VoteSelectCandidateList
     */
  submitVote (openId, source, selectCandidates) {
    return request.post(this.baseurl + 'submitVote', Qs.stringify({ openId: openId, source: source, selectCandidates: (typeof selectCandidates === 'undefined' || selectCandidates === null) ? '' : selectCandidates.toString() }))
  }

  /**
     *
     * openId:String, voteId:String, detail:boolean, child:boolean
     */
  getVote (openId, voteId, detail, child) {
    return request.post(this.baseurl + 'getVote', Qs.stringify({ openId: openId, voteId: voteId, detail: detail, child: child }))
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
     * openId:String, voteState:int, startIndex:int, maxSize:int, resultTotalCount:boolean
     */
  getOwnerVoteList (openId, voteState, startIndex, maxSize, resultTotalCount) {
    return request.post(this.baseurl + 'getOwnerVoteList', Qs.stringify({ openId: openId, voteState: voteState, startIndex: startIndex, maxSize: maxSize, resultTotalCount: resultTotalCount }))
  }
}
