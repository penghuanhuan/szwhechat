//= =========== wy.core.services.repairmge.Repair =============
import { DataPacket } from '../base/DataPacket.js'
import { NorDataList } from '../base/NorDataList.js'

export class Repair extends DataPacket {
  constructor (opts = {}) {
    super()
    this.RepairResume = opts.RepairResume || ''
    this.RepairType = opts.RepairType || ''
    this.AttachMenIDs = opts.AttachMenIDs || ''
    this.RepairWay = opts.RepairWay || null
    this.RepairSubmitterName = opts.RepairSubmitterName || ''
    this.RepairNumber = opts.RepairNumber || ''
    this.IsDeleted = opts.IsDeleted || false
    this.RepairTime = opts.RepairTime || null
    this.RepairSubmitterPhoneNo = opts.RepairSubmitterPhoneNo || ''
    this.HandleEvaluationList = new HandleEvaluationList(opts.HandleEvaluationList) || new HandleEvaluationList()
    this.HandleStatus = opts.HandleStatus || null
    this.RepairSubmitterID = opts.RepairSubmitterID || ''
    this.Location = opts.Location || ''
    this.EaAreaName = opts.EaAreaName || ''
    this.EaAreaCode = opts.EaAreaCode || ''
  }
}

//= =========== wy.core.services.repairmge.HandleEvaluationList =============

export class HandleEvaluationList extends NorDataList {
  constructor () {
    super()
  }
}
//= =========== wy.core.services.repairmge.HandleEvaluation =============

export class HandleEvaluation extends DataPacket {
  constructor (opts = {}) {
    super()
    this.HandleTime = opts.HandleTime || null
    this.HandleContent = opts.HandleContent || ''
    this.RepairNum = opts.RepairNum || ''
    this.HandleEvaluationID = opts.HandleEvaluationID || ''
    this.AttachmentIDs = opts.AttachmentIDs || ''
    this.HandlerName = opts.HandlerName || ''
    this.SatisfactionDegree = opts.SatisfactionDegree || null
  }
}
