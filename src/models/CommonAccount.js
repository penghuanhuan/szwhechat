//= =========== fixf.core.services.commonaccount.CommonAccount =============
import {
  NorDataList
} from '../base/NorDataList.js'
import {
  DataPacket
} from '../base/DataPacket.js'

export class CommonAccount extends DataPacket {
  constructor (opts = {}) {
    super()
    this.AccountCode = opts.AccountCode || ''
    this.BankId = opts.BankId || ''
    this.Balance = opts.Balance || null
    this.AccountName = opts.AccountName || ''
    this.AccountType = opts.AccountType || null
    this.Id = opts.Id || ''
    this.AccountBankName = opts.AccountBankName || ''
    this.EaAreaCode = opts.EaAreaCode || ''
    this.Status = opts.Status || null
  }
}
