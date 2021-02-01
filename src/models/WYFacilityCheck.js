import { DataPacket } from '../base/DataPacket.js'

export class WYFacilityCheck extends DataPacket {
  constructor (opts = {}) {
    super()
    this.FacilityId = opts.FacilityId || ''
    this.HandleResult = opts.HandleResult || ''
    this.IsDelete = opts.IsDelete || false
    this.KeyId = opts.KeyId || ''
    this.FacilityStatus = opts.FacilityStatus || 1
    this.StatusIntro = opts.StatusIntro || ''
    this.CheckTime = opts.CheckTime || null
    this.AttachmentID = opts.AttachmentID || ''
    this.FacilityName = opts.FacilityName || ''
    this.IsHandle = opts.IsHandle || false
  }
}
