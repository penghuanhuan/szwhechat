//= =========== wy.core.services.largetransfer.LargeCapitalTransfer =============
import {
  DataPacket
} from '../base/DataPacket.js'

export class LargeCapitalTransfer extends DataPacket {
  constructor (opts = {}) {
    super()
    this.TransferMoney = opts.TransferMoney || null
    this.PayeeCardNumber = opts.PayeeCardNumber || ''
    this.BankType = opts.BankType || ''
    this.BankName = opts.BankName || ''
    this.Title = opts.Title || ''
    this.TransferId = opts.TransferId || ''
    this.NoticeContent = opts.NoticeContent || ''
    this.Payee = opts.Payee || ''
    this.IsRight = opts.IsRight || false
    this.OpPerson = opts.OpPerson || ''
    this.CreateTime = opts.CreateTime || null
    this.EaAreaName = opts.EaAreaName || ''
    this.EaAreaCode = opts.EaAreaCode || ''
    this.PayAccountName = opts.PayAccountName || ''
    this.NoticeTime = opts.NoticeTime || null
    this.CardNumber = opts.CardNumber || ''
    this.NoticeNumber = opts.NoticeNumber || ''
    this.Status = opts.Status || ''
  }
}
