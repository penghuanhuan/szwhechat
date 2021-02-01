
//= =========== wy.core.services.evaluatemge.EvaluateRecord =============
import { DataPacket } from '../../base/DataPacket.js'
import { NorDataList } from '../../base/NorDataList.js'

//= =========== wy.core.services.evaluatemge.EvaluateRecordItemList =============

export class EvaluateRecord extends DataPacket {
  constructor (opts = {}) {
    super()
    this.EvaluateTime = opts.EvaluateTime || null
    this.KeyId = opts.KeyId || ''
    this.Source = opts.Source || null
    this.EvaluateObj = opts.EvaluateObj || ''
    this.Content = opts.Content || ''
    this.IsLock = opts.IsLock || null
    this.OwnerName = opts.OwnerName || ''
    this.EaHouseName = opts.EaHouseName || ''
    this.EaAreaName = opts.EaAreaName || ''
    this.StatisticalMonth = opts.StatisticalMonth || ''
    this.EvaluateObjType = opts.EvaluateObjType || null
    this.EaHouseCode = opts.EaHouseCode || ''
    this.OpenID = opts.OpenID || ''
    this.PropertyReply = opts.PropertyReply || ''
    this.CantonName = opts.CantonName || ''
    this.EvaluateObjKeyId = opts.EvaluateObjKeyId || ''
    this.PropertyReplyTime = opts.PropertyReplyTime || null
    this.TotalScore = opts.TotalScore || null
    this.Scored = opts.Scored || false
    this.EaAreaCode = opts.EaAreaCode || ''
    this.CertificateNum = opts.CertificateNum || ''
    this.Items = new EvaluateRecordItemList(opts.Items) || new EvaluateRecordItemList()
  }
}

//= =========== wy.core.services.evaluatemge.EvaluateRecordItemList =============

export class EvaluateRecordItemList extends NorDataList {
  constructor (list) {
    super()
    if (list && list._Items) {
      for (const item of list._Items) {
        this.append(new EvaluateRecordItem(item))
      }
    }
  }
}
//= =========== wy.core.services.evaluatemge.EvaluateRecordItem =============

export class EvaluateRecordItem extends DataPacket {
  constructor (opts = {}) {
    super()
    this.Score = opts.Score || null
    this.DiscontentItems = new DiscontentItemList(opts.DiscontentItems) || new DiscontentItemList()
    this.EvaluateRecordKeyID = opts.EvaluateRecordKeyID || ''
    this.Star = opts.Star || null
    this.WeightScore = opts.WeightScore || null
    this.KeyID = opts.KeyID || ''
    this.OptionID = opts.OptionID || null
    this.OptionName = opts.OptionName || ''
    this.Weights = opts.Weights || null
  }
}

//= =========== wy.core.services.evaluatemge.DiscontentItemList =============

export class DiscontentItemList extends NorDataList {
  constructor (list) {
    super()
    if (list && list._Items) {
      for (const item of list._Items) {
        this.append(new DiscontentItem(item))
      }
    }
  }
}
//= =========== wy.core.services.evaluatemge.DiscontentItem =============

export class DiscontentItem extends DataPacket {
  constructor (opts = {}) {
    super()
    this.DiscontentValue = opts.DiscontentValue || ''
    this.RecordId = opts.RecordId || ''
    this.IsElse = opts.IsElse || false
    this.DiscontentKey = opts.DiscontentKey || ''
    this.KeyId = opts.KeyId || ''
  }
}
