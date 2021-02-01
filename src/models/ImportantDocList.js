//= =========== fixf.core.services.businessprocess.ImportantDocList =============
import { DataPacket } from '../base/DataPacket.js'
import { NorDataList } from '../base/NorDataList.js'
export class ImportantDocList extends NorDataList {
  constructor (list) {
    super()
    if (list.length > 0) {
      for (const item of list) {
        this.append(new ImportantDoc(item))
      }
    }
  }
}
//= =========== fixf.core.services.businessprocess.ImportantDoc =============

export class ImportantDoc extends DataPacket {
  constructor (opts = {}) {
    super()
    this.FilingPage = opts.FilingPage || null
    this.FileName = opts.FileName || ''
    this.DocCode = opts.DocCode || ''
    this.IsQualified = opts.IsQualified || false
    this.KeyId = opts.KeyId || ''
    this.DocumentName = opts.DocumentName || ''
    this.DocumentValue = opts.DocumentValue || ''
    this.Content = opts.Content || ''
    this.ATContentByte = opts.ATContentByte || []
    this.AttachMentId = opts.AttachMentId || ''
  }
}
