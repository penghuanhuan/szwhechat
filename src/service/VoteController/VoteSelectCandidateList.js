//= =========== fixf.core.services.voting.VoteSelectCandidate =============
import {
  DataPacket
} from '../../base/DataPacket.js'
import {
  NorDataList
} from '../../base/NorDataList.js'
//= =========== fixf.core.services.voting.VoteSelectCandidateList =============

export class VoteSelectCandidate extends DataPacket {
  constructor (opts = {}) {
    super()
    this.VoteMatterId = opts.VoteMatterId || ''
    this.CandiNumbers = opts.CandiNumbers || ''
  }
}
export class VoteSelectCandidateList extends NorDataList {
  constructor (list = {}) {
    super()
    for (const item of list._Items) {
      this.append(new VoteSelectCandidate(item))
    }
  }
}
