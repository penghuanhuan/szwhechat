//= =========== fixf.core.services.securitycheck.SecurityCheckArea =============
import { DataPacket } from '../base/DataPacket.js'
import { NorDataList } from '../base/NorDataList.js'

export class SecurityCheckArea extends DataPacket {
  constructor (opts = {}) {
    super()
    this.FinishTime = opts.FinishTime || null
    this.RealtyManageCall = opts.RealtyManageCall || ''
    this.KeyId = opts.KeyId || ''
    this.CantonName = opts.CantonName || ''
    this.RealtyManag = opts.RealtyManag || ''
    this.SecurityCheckId = opts.SecurityCheckId || ''
    this.CantonCode = opts.CantonCode || ''
    this.ItemList = new SecurityEvaltionList(opts.ItemList) || new SecurityEvaltionList()
    this.EaAreaName = opts.EaAreaName || ''
    this.EnterpriseId = opts.EnterpriseId || ''
    this.EaAreaCode = opts.EaAreaCode || ''
    this.Status = opts.Status || null
  }
}

//= =========== fixf.core.services.securitycheck.SecurityEvaltionList =============

export class SecurityEvaltionList extends NorDataList {
  constructor () {
    super()
  }
}
//= =========== fixf.core.services.securitycheck.SecurityEvaltion =============

export class SecurityEvaltion extends DataPacket {
  constructor (opts = {}) {
    super()
    this.MarkingTime = opts.MarkingTime || null
    this.Scorer = opts.Scorer || ''
    this.Ddeduct = opts.Ddeduct || null
    this.KeyId = opts.KeyId || ''
    this.IndexList = new EvaluationIndexList(opts.IndexList) || new EvaluationIndexList()
    this.EvaltionName = opts.EvaltionName || ''
    this.EvaltionId = opts.EvaltionId || ''
    this.SecurityCheckId = opts.SecurityCheckId || ''
  }
}

//= =========== fixf.core.services.securitycheck.EvaluationIndexList =============

//= =========== fixf.core.services.securitycheck.EvaluationIndex =============

export class EvaluationIndex extends DataPacket {
  constructor (opts = {}) {
    super()
    this.CheckType = opts.CheckType || ''
    this.Standard = opts.Standard || ''
    this.Score = opts.Score || null
    this.Meet = opts.Meet || false
    this.Name = opts.Name || ''
    this.KeyId = opts.KeyId || ''
    this.ItemList = new EvaluationItemList(opts.ItemList) || new EvaluationItemList()
    this.TypeId = opts.TypeId || ''
  }
}

//= =========== fixf.core.services.securitycheck.EvaluationItemList =============

//= =========== fixf.core.services.securitycheck.EvaluationItem =============

export class EvaluationItem extends DataPacket {
  constructor (opts = {}) {
    super()
    this.EvaluationIndexId = opts.EvaluationIndexId || ''
    this.Deduction = opts.Deduction || null
    this.Name = opts.Name || ''
    this.Checked = opts.Checked || false
    this.KeyId = opts.KeyId || ''
  }
}
