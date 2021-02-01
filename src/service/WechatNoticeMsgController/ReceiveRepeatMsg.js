//= =========== wy.core.services.wechatnoticemsg.ReceiveRepeatMsg =============
import {
  DataPacket
} from '../../base/DataPacket.js'
import {
  NorDataList
} from '../../base/NorDataList.js'

export class ReceiveRepeatMsg extends DataPacket {
  constructor (opts = {}) {
    super()
    this.WeCharNoticeId = opts.WeCharNoticeId || ''
    this.LoginId = opts.LoginId || ''
    this.RepeatContent = opts.RepeatContent || ''
    this.OpenId = opts.OpenId || ''
    this.KeyId = opts.KeyId || ''
    this.Repeated = opts.Repeated || false
    this.AttachMentList = new AttachMentList(opts.AttachMentList) || new AttachMentList()
    this.SendTime = opts.SendTime || null
    this.BeenSended = opts.BeenSended || false
    this.RepeatTime = opts.RepeatTime || null
    this.MettingMemberList = new MettingMemberList(opts.MettingMemberList) || new MettingMemberList()
  }
}

//= =========== wy.core.services.wechatnoticemsg.MettingMemberList =============

export class MettingMemberList extends NorDataList {
  constructor (list) {
    super()
    if (list && list._Items) {
      for (const item of list._Items) {
        this.append(new MettingMember(item))
      }
    }
  }
}
//= =========== wy.core.services.wechatnoticemsg.MettingMember =============

export class MettingMember extends DataPacket {
  constructor (opts = {}) {
    super()
    this.RepeatId = opts.RepeatId || ''
    this.OpenId = opts.OpenId || ''
    this.KeyId = opts.KeyId || ''
    this.Signed = opts.Signed || false
    this.Remark = opts.Remark || ''
    this.NoticeId = opts.NoticeId || ''
    this.Post = opts.Post || ''
    this.Phone = opts.Phone || ''
    this.Name = opts.Name || ''
    this.CertificateNum = opts.CertificateNum || ''
  }
}
