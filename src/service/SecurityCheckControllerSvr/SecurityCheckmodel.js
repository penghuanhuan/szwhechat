//= =========== fixf.core.services.securitycheck.SecurityCheckMoldList =============
import { DataPacket } from '../../base/DataPacket.js'
import { NorDataList } from '../../base/NorDataList.js'
export class SecurityCheckMoldList extends NorDataList {
  constructor () {
    super()
  }
}
//= =========== fixf.core.services.securitycheck.SecurityCheckMold =============

export class SecurityCheckMold extends DataPacket {
  constructor (opts = {}) {
    super()
    this.Grade = opts.Grade || null
    this.Name = opts.Name || ''
    this.KeyId = opts.KeyId || ''
    this.IndexList = opts.IndexList || null
    this.TypeId = opts.TypeId || ''
    this.Status = opts.Status || ''
  }
}

//= =========== fixf.core.services.securitycheck.SecurityCheckIndexList =============

export class SecurityCheckIndexList extends NorDataList {
  constructor () {
    super()
  }
}
//= =========== fixf.core.services.securitycheck.SecurityCheckIndex =============

export class SecurityCheckIndex extends DataPacket {
  constructor (opts = {}) {
    super()
    this.CheckType = opts.CheckType || ''
    this.Score = opts.Score || null
    this.Grade = opts.Grade || null
    this.Name = opts.Name || ''
    this.KeyId = opts.KeyId || ''
    this.ItemList = opts.ItemList || null
    this.TypeId = opts.TypeId || ''
    this.Status = opts.Status || false
  }
}

//= =========== fixf.core.services.securitycheck.SecurityCheckItemList =============

export class SecurityCheckItemList extends NorDataList {
  constructor () {
    super()
  }
}
//= =========== fixf.core.services.securitycheck.SecurityCheckItem =============

export class SecurityCheckItem extends DataPacket {
  constructor (opts = {}) {
    super()
    this.EvaluationIndexId = opts.EvaluationIndexId || ''
    this.Standard = opts.Standard || ''
    this.Deduction = opts.Deduction || null
    this.Name = opts.Name || ''
    this.Checked = opts.Checked || null
    this.KeyId = opts.KeyId || ''
  }
}
