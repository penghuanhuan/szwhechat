//= =========== fixf.core.services.estatearea.EaArea =============
import { DataPacket } from '../base/DataPacket.js'
import { NorDataList } from '../base/NorDataList.js'

export class EaArea extends DataPacket {
  constructor (opts = {}) {
    super()
    this.Address = opts.Address || ''
    this.BuildUnitOrgCode = opts.BuildUnitOrgCode || ''
    this.IsDelete = opts.IsDelete || false
    this.ResidentsCommitteeOrgCode = opts.ResidentsCommitteeOrgCode || ''
    this.OwnerTeamOrgCode = opts.OwnerTeamOrgCode || ''
    this.RealtyMngOrgCode = opts.RealtyMngOrgCode || ''
    this.CantonCode = opts.CantonCode || ''
    this.EaBuilds = opts.EaBuilds || null
    this.Location = opts.Location || ''
    this.EaAreaName = opts.EaAreaName || ''
    this.StreetOfficeOrgCode = opts.StreetOfficeOrgCode || ''
    this.EaAreaCode = opts.EaAreaCode || ''
    this.IsSelf = opts.IsSelf || false
    this.Remarks = opts.Remarks || ''
    this.CreateDate = opts.CreateDate || ''
    this.LandNumber = opts.LandNumber || ''
    this.EaAreaExternalCode = opts.EaAreaExternalCode || ''
  }
}

//= =========== fixf.core.services.estatearea.EaBuildList ============

export class EaBuildList extends NorDataList {
  constructor () {
    super()
  }
}
//= =========== fixf.core.services.estatearea.EaBuild =============

export class EaBuild extends DataPacket {
  constructor (opts = {}) {
    super()
    this.EaBuildName = opts.EaBuildName || ''
    this.Address = opts.Address || ''
    this.IsDelete = opts.IsDelete || false
    this.BuildAge = opts.BuildAge || ''
    this.EaBuildCode = opts.EaBuildCode || ''
    this.EaHouses = opts.EaHouses || null
    this.HouseMade = opts.HouseMade || null
    this.IndepBuild = opts.IndepBuild || false
    this.IncludeBasement = opts.IncludeBasement || false
    this.ProjectCost = opts.ProjectCost || null
    this.RegDimensions = opts.RegDimensions || null
    this.TotalFloor = opts.TotalFloor || null
    this.CaseName = opts.CaseName || ''
    this.EaAreaCode = opts.EaAreaCode || ''
    this.ProjectId = opts.ProjectId || ''
    this.Remarks = opts.Remarks || ''
    this.CreateDate = opts.CreateDate || null
  }
}

export class EaHouseList extends NorDataList {
  constructor () {
    super()
  }
}
//= =========== fixf.core.services.estatearea.EaHouse =============

export class EaHouse extends DataPacket {
  constructor (opts = {}) {
    super()
    this.RealEstateID = opts.RealEstateID || ''
    this.HouseId = opts.HouseId || ''
    this.EaBuildCode = opts.EaBuildCode || ''
    this.BuyMoney = opts.BuyMoney || null
    this.FloorNum = opts.FloorNum || null
    this.PoolArea = opts.PoolArea || null
    this.Floor = opts.Floor || ''
    this.PayArea = opts.PayArea || null
    this.CreateDate = opts.CreateDate || null
    this.Address = opts.Address || ''
    this.ComprisingArea = opts.ComprisingArea || null
    this.Coordinate = opts.Coordinate || ''
    this.EaHouseCode = opts.EaHouseCode || ''
    this.IsHaveElevator = opts.IsHaveElevator || false
    this.RecordSaleTime = opts.RecordSaleTime || null
    this.EaUnitName = opts.EaUnitName || ''
    this.IsDelete = opts.IsDelete || false
    this.HouseType = opts.HouseType || null
    this.ContractNumber = opts.ContractNumber || ''
    this.SaleStatus = opts.SaleStatus || null
    this.Room = opts.Room || ''
    this.ShouldFundMoney = opts.ShouldFundMoney || null
    this.PayCriterion = opts.PayCriterion || ''
    this.PropertyID = opts.PropertyID || ''
    this.EaOwners = opts.EaOwners || null
    this.Remarks = opts.Remarks || ''
    this.Dimensions = opts.Dimensions || null
    this.PresaleTime = opts.PresaleTime || null
  }
}

export class EaOwnerList extends NorDataList {
  constructor () {
    super()
  }
}
//= =========== fixf.core.services.estatearea.EaOwner =============

export class EaOwner extends DataPacket {
  constructor (opts = {}) {
    super()
    this.QQ = opts.QQ || ''
    this.PassWord = opts.PassWord || ''
    this.LoginId = opts.LoginId || ''
    this.EaHouseCode = opts.EaHouseCode || ''
    this.OwnerPhone = opts.OwnerPhone || ''
    this.WeiXinID = opts.WeiXinID || ''
    this.OwnerEmail = opts.OwnerEmail || ''
    this.WeiXin = opts.WeiXin || ''
    this.OwnerName = opts.OwnerName || ''
    this.OwnerPhones = opts.OwnerPhones || null
    this.CertificateNum = opts.CertificateNum || ''
    this.Remarks = opts.Remarks || ''
    this.CertificateType = opts.CertificateType || null
    this.CreateDate = opts.CreateDate || null
  }
}

export class EaOwnerPhoneList extends NorDataList {
  constructor () {
    super()
  }
}
//= =========== fixf.core.services.estatearea.EaOwnerPhone =============

export class EaOwnerPhone extends DataPacket {
  constructor (opts = {}) {
    super()
    this.CertificStatus = opts.CertificStatus || false
    this.PhoneNumber = opts.PhoneNumber || ''
    this.IsMain = opts.IsMain || false
    this.KeyID = opts.KeyID || ''
    this.CertificWay = opts.CertificWay || null
    this.CertificateNum = opts.CertificateNum || ''
    this.RightLevel = opts.RightLevel || null
  }
}

//= =========== fixf.core.common.FixfAmount =============

export class FixfAmount extends DataPacket {
  constructor (opts = {}) {
    super()
    this.DailySpAmount = opts.DailySpAmount || null
    this.ExtendSpAmount = opts.ExtendSpAmount || null
    this.PubHouseSpAmount = opts.PubHouseSpAmount || null
    this.MaxAmountType = opts.MaxAmountType || null
    this.NormalAmount = opts.NormalAmount || null
    this.MinAmountType = opts.MinAmountType || null
    this.DeviceSpAmount = opts.DeviceSpAmount || null
  }
}

//= =========== fixf.core.common.EFixfAmountType =============

export class EFixfAmountType extends DataPacket {
  constructor (opts = {}) {
    super()
    this.InfoString = opts.InfoString || ''
    this.Value = opts.Value || null
    this.DeclaringClass = opts.DeclaringClass || null
  }
}
