//= =========== fixf.core.services.enterprise.ReprotFormulate =============
import { DataPacket } from '../base/DataPacket.js'
import { NorDataList } from '../base/NorDataList.js'

export class ReprotFormulate extends DataPacket {
  constructor (opts = {}) {
    super()
    this.FormluateName = opts.FormluateName || ''
    this.OrgWorkList = new NameValueList(opts.OrgWorkList) || new NameValueList()
    this.CreatePerson = opts.CreatePerson || ''
    this.KeyId = opts.KeyId || ''
    this.StartTime = opts.StartTime || null
    this.EndTime = opts.EndTime || null
    this.CreateDate = opts.CreateDate || null
    this.Status = opts.Status || ''
  }
}

//= =========== ps.core.commons.NameValueList =============

export class NameValueList extends NorDataList {
  constructor (list) {
    super()
    if (list && list._Items) {
      for (const item of list._Items) {
        this.append(new NameValue(item))
      }
    }
  }
}
//= =========== ps.core.commons.NameValue =============

export class NameValue extends DataPacket {
  constructor (opts = {}) {
    super()
    this.Name = opts.Name || ''
    this.Value = opts.Value || ''
  }
}
