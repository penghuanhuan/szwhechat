//= =========== fixf.core.services.voting.VoteDetailList =============

//= =========== fixf.core.services.voting.VoteDetail =============
import {
  DataPacket
} from '../../base/DataPacket.js'
import {
  NorDataList
} from '../../base/NorDataList.js'
export class VoteDetailList extends NorDataList {
  constructor (list) {
    super()
    for (const item of list._Items) {
      this.append(new VoteDetail(item))
    }
  }
}

export class VoteDetail extends DataPacket {
  constructor (opts = {}) {
    super()
    this.IP = opts.IP || ''
    this.VoteMatterId = opts.VoteMatterId || ''
    this.KeyId = opts.KeyId || ''
    this.OriginalRecord = opts.OriginalRecord || ''
    this.Source = opts.Source || null
    this.VoteId = opts.VoteId || ''
    this.CandiNumbers = opts.CandiNumbers || ''
    this.VoteTime = opts.VoteTime || null
    this.OwnerPaperNum = opts.OwnerPaperNum || ''
    this.VotePaperNum = opts.VotePaperNum || ''
    this.CreateTime = opts.CreateTime || null
    this.VoteHouseId = opts.VoteHouseId || ''
  }
}
