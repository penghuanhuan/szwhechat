//= =========== wy.core.services.propertyproject.PropertyProject =============
import {
  DataPacket
} from '../base/DataPacket.js'

export class PropertyProject extends DataPacket {
  constructor (opts = {}) {
    super()
    this.ParcelNo = opts.ParcelNo || ''
    this.NorthScope = opts.NorthScope || ''
    this.ContactPerson = opts.ContactPerson || ''
    this.Remark = opts.Remark || ''
    this.ContactTel = opts.ContactTel || ''
    this.CantonCode = opts.CantonCode || ''
    this.WorkstationCode = opts.WorkstationCode || ''
    this.PropertyCode = opts.PropertyCode || ''
    this.PropertyManagerTel = opts.PropertyManagerTel || ''
    this.ApplicationTime = opts.ApplicationTime || null
    this.ReviewContent = opts.ReviewContent || ''
    this.SynchronizationStatus = opts.SynchronizationStatus || false
    this.SouthScope = opts.SouthScope || ''
    this.AttachmentIDs = opts.AttachmentIDs || ''
    this.EaAreaName = opts.EaAreaName || ''
    this.ProjectID = opts.ProjectID || ''
    this.StreetOfficeName = opts.StreetOfficeName || ''
    this.WestScope = opts.WestScope || ''
    this.IsDelete = opts.IsDelete || false
    this.ProjectAdress = opts.ProjectAdress || ''
    this.EastScope = opts.EastScope || ''
    this.WorkstationName = opts.WorkstationName || ''
    this.CantonName = opts.CantonName || ''
    this.Reviewer = opts.Reviewer || ''
    this.PropertyManager = opts.PropertyManager || ''
    this.PropertyName = opts.PropertyName || ''
    this.ReviewStatus = opts.ReviewStatus || null
    this.EaAreaCode = opts.EaAreaCode || ''
    this.ReviewTime = opts.ReviewTime || null
    this.StreetOfficeCode = opts.StreetOfficeCode || ''
  }
}
