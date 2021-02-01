import { DataPacket } from '../../base/DataPacket.js'
import { NorDataList } from '../../base/NorDataList.js'

export class MailObject extends DataPacket {
  constructor (opts = {}) {
    super()
    this.Phone = opts.Phone || ''
    this.OpenId = opts.OpenId || ''
    this.Name = opts.Name || ''
    this.Description = opts.Description || ''
    this.NodeType = opts.NodeType || ''
    this.Childs = new MailObjectList(opts.Childs) || new MailObjectList()
    this.NodeId = opts.NodeId || ''
    this.ParentId = opts.ParentId || ''
  }
}

//= =========== wy.core.services.wechatnoticemsg.MailObjectList =============

export class MailObjectList extends NorDataList {
  constructor (list) {
    super()
    if (list && list._Items) {
      for (const item of list._Items) {
        this.append(new MailObject(item))
      }
    }
  }
}
