//= =========== wy.core.services.facilitymge.FacilityMaintain =============
import { DataPacket } from '../base/DataPacket.js'
import { NorDataList } from '../base/NorDataList.js'

export class FacilityMaintain extends DataPacket {
  constructor (opts = {}) {
    super()
    this.MaintainTime = opts.MaintainTime || null
    this.FacilityId = opts.FacilityId || ''
    this.IsDelete = opts.IsDelete || false
    this.MaintainCode = opts.MaintainCode || ''
    this.MaintainMoney = opts.MaintainMoney || null
    this.MaintainContent = opts.MaintainContent || ''
    this.MaintainSituation = opts.MaintainSituation || ''
    this.MaintainUnit = opts.MaintainUnit || ''
    this.AttachmentIds = opts.AttachmentIds || ''
    this.FacilityName = opts.FacilityName || ''
    this.MaintainPerson = opts.MaintainPerson || ''
    this.MaintainType = opts.MaintainType || null
    this.CreateDate = opts.CreateDate || null
  }
}
