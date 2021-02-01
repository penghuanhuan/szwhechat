//= =========== wy.core.services.wechatnoticemsg.WeChatNoticeMsg =============
import {
  DataPacket
} from '../../base/DataPacket.js'
import {
  NorDataList
} from '../../base/NorDataList.js'

export class WeChatNoticeMsg extends DataPacket {
  constructor (opts = {}) {
    super()
    this.CantonCodes = opts.CantonCodes || ''
    this.reportOption = opts.reportOption || ''
    this.MsgType = opts.MsgType || null
    this.KeyId = opts.KeyId || ''
    this.NoticeType = opts.NoticeType || null
    this.ReceiverRepeatMsgList = new ReceiveRepeatMsgList(opts.ReceiverRepeatMsgList) || new ReceiveRepeatMsgList()
    this.RoleCodes = opts.RoleCodes || ''
    this.NoticeMsgURL = opts.NoticeMsgURL || ''
    this.Title = opts.Title || ''
    this.Delete = opts.Delete || false
    this.Content = opts.Content || ''
    this.ResidentsCommitteeOrgCodes = opts.ResidentsCommitteeOrgCodes || ''
    this.CreateTime = opts.CreateTime || null
    this.OperName = opts.OperName || ''
    this.NoticePlace = opts.NoticePlace || ''
    this.Oper = opts.Oper || ''
    this.StreetCodes = opts.StreetCodes || ''
    this.StopDate = opts.StopDate || null
  }
}

//= =========== wy.core.services.wechatnoticemsg.ReceiveRepeatMsgList =============

export class ReceiveRepeatMsgList extends NorDataList {
  constructor (list) {
    super()
    if (list && list._Items) {
      for (const item of list._Items) {
        this.append(new ReceiveRepeatMsg(item))
      }
    }
  }
}
//= =========== wy.core.services.wechatnoticemsg.ReceiveRepeatMsg =============

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

//= =========== ps.core.services.common.AttachMentList =============

export class AttachMentList extends NorDataList {
  constructor (list) {
    super()
    if (list && list._Items) {
      for (const item of list._Items) {
        this.append(new AttachMent(item))
      }
    }
  }
}
//= =========== ps.core.services.common.AttachMent =============

export class AttachMent extends DataPacket {
  constructor (opts = {}) {
    super()
    this.FileName = opts.FileName || ''
    this.IsDelete = opts.IsDelete || false
    this.RefType = opts.RefType || ''
    this.KeyID = opts.KeyID || ''
    this.LargeObjectId = opts.LargeObjectId || ''
    this.ATContentByte = opts.ATContentByte || []
    this.ATContentString = opts.ATContentString || ''
    this.CreateTime = opts.CreateTime || null
    this.FileSize = opts.FileSize || null
    this.RefID = opts.RefID || ''
    this.FileType = opts.FileType || ''
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
    this.OrgName = opts.OrgName || ''
    this.OpenId = opts.OpenId || ''
    this.KeyId = opts.KeyId || ''
    this.Signed = opts.Signed || false
    this.Remark = opts.Remark || ''
    this.NoticeId = opts.NoticeId || ''
    this.Post = opts.Post || ''
    this.Phone = opts.Phone || ''
    this.OrgCode = opts.OrgCode || ''
    this.Name = opts.Name || ''
    this.Checked = opts.Checked || false
    this.CertificateNum = opts.CertificateNum || ''
  }
}
