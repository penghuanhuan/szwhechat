//= =========== fixf.core.services.estatearea.EaAreaChangeCheck =============
import { DataPacket } from '../base/DataPacket.js'
import { NorDataList } from '../base/NorDataList.js'
import { EaArea } from './EaArea.js'

export class EaAreaChangeCheck extends DataPacket {
  constructor (opts = {}) {
    super()
    this.CommitteCode = opts.CommitteCode || ''
    this.EaArea = new EaArea(opts.EaArea) || new EaArea()
    this.IsDelete = opts.IsDelete || false
    this.StreetCode = opts.StreetCode || ''
    this.CheckOper = opts.CheckOper || ''
    this.CommitteName = opts.CommitteName || ''
    this.UpdateTime = opts.UpdateTime || null
    this.CantonName = opts.CantonName || ''
    this.UpdateOper = opts.UpdateOper || ''
    this.CantonCode = opts.CantonCode || ''
    this.CheckStatus = opts.CheckStatus || null
    this.StreetName = opts.StreetName || ''
    this.CheckTime = opts.CheckTime || null
    this.EaAreaProperty = new EaAreaProperty(opts.EaAreaProperty) || new EaAreaProperty()
    this.EaAreaName = opts.EaAreaName || ''
    this.EaAreaCode = opts.EaAreaCode || ''
    this.CheckId = opts.CheckId || ''
  }
}

//= =========== fixf.core.services.estatearea.EaAreaProperty =============

export class EaAreaProperty extends DataPacket {
  constructor (opts = {}) {
    super()
    this.ServiceType = opts.ServiceType || null
    this.ParkingArea = opts.ParkingArea || ''
    this.PublicFacilityArea = opts.PublicFacilityArea || ''
    this.RealtyManageCall = opts.RealtyManageCall || ''
    this.ContractType = opts.ContractType || null
    this.MultiStoreyArea = opts.MultiStoreyArea || ''
    this.RealtyBuildTotalArea = opts.RealtyBuildTotalArea || ''
    this.ProjectTotalPeriods = opts.ProjectTotalPeriods || ''
    this.OfficeArea = opts.OfficeArea || ''
    this.ProjectPeriod = opts.ProjectPeriod || ''
    this.ProjectInCity = opts.ProjectInCity || ''
    this.RealtyAddrStreetName = opts.RealtyAddrStreetName || ''
    this.RealtyServiceArea = opts.RealtyServiceArea || ''
    this.CollectionRate = opts.CollectionRate || ''
    this.GreenArea = opts.GreenArea || ''
    this.BuildUnitOrgName = opts.BuildUnitOrgName || ''
    this.TotalHouseNum = opts.TotalHouseNum || ''
    this.KeyID = opts.KeyID || ''
    this.CommitteesName = opts.CommitteesName || ''
    this.FourToEast = opts.FourToEast || ''
    this.ContractEndTime = opts.ContractEndTime || null
    this.FourToSouth = opts.FourToSouth || ''
    this.ProjectArea = opts.ProjectArea || ''
    this.ServicePrice = opts.ServicePrice || ''
    this.OthersArea = opts.OthersArea || ''
    this.HighStoreArea = opts.HighStoreArea || ''
    this.OwnerTotalNum = opts.OwnerTotalNum || ''
    this.RealtyManage = opts.RealtyManage || ''
    this.AveragePrice = opts.AveragePrice || ''
    this.EaAreaCode = opts.EaAreaCode || ''
    this.FourToNorth = opts.FourToNorth || ''
    this.ContractStartTime = opts.ContractStartTime || null
    this.CommerceArea = opts.CommerceArea || ''
    this.OthersBuildArea = opts.OthersBuildArea || ''
    this.HouseHasIn = opts.HouseHasIn || ''
    this.EaAreaType = opts.EaAreaType || ''
    this.IsHaveCommittee = opts.IsHaveCommittee || null
    this.RealtyAddrStreetCall = opts.RealtyAddrStreetCall || ''
    this.AccessionDate = opts.AccessionDate || null
    this.FourToWest = opts.FourToWest || ''
    this.SingleVillaArea = opts.SingleVillaArea || ''
    this.BuildArea = opts.BuildArea || ''
    this.IndustArea = opts.IndustArea || ''
    this.CommitteesCall = opts.CommitteesCall || ''
    this.ProjectInProvince = opts.ProjectInProvince || ''
    this.MunicipalBuildArea = opts.MunicipalBuildArea || ''
  }
}

export class EaHouse extends DataPacket {
  constructor (opts = {}) {
    super()
    this.RealEstateID = opts.RealEstateID || ''
    this.PubHouseOrgName = opts.PubHouseOrgName || ''
    this.HouseId = opts.HouseId || ''
    this.BuildUnitOrgCode = opts.BuildUnitOrgCode || ''
    this.EaBuildCode = opts.EaBuildCode || ''
    this.SuperAreaPrice = opts.SuperAreaPrice || null
    this.DealPrice = opts.DealPrice || null
    this.RealtyMngOrgCode = opts.RealtyMngOrgCode || ''
    this.BuyMoney = opts.BuyMoney || null
    this.Delete = opts.Delete || false
    this.FloorNum = opts.FloorNum || null
    this.Balance = new FixfAmount(opts.Balance) || new FixfAmount()
    this.PoolArea = opts.PoolArea || null
    this.Floor = opts.Floor || ''
    this.ExtendPara = opts.ExtendPara || ''
    this.PayArea = opts.PayArea || null
    this.CreateDate = opts.CreateDate || null
    this.EaBuildName = opts.EaBuildName || ''
    this.Address = opts.Address || ''
    this.ComprisingArea = opts.ComprisingArea || null
    this.Coordinate = opts.Coordinate || ''
    this.EaHouseCode = opts.EaHouseCode || ''
    this.IsHaveElevator = opts.IsHaveElevator || false
    this.RecordSaleTime = opts.RecordSaleTime || null
    this.EaUnitName = opts.EaUnitName || ''
    this.IsDelete = opts.IsDelete || false
    this.HouseType = opts.HouseType || null
    this.PubHouseOrgCode = opts.PubHouseOrgCode || ''
    this.ContractNumber = opts.ContractNumber || ''
    this.StandardPrice = opts.StandardPrice || null
    this.UpdateTime = opts.UpdateTime || null
    this.ComplementaryPrice = opts.ComplementaryPrice || null
    this.OwnerTeamOrgCode = opts.OwnerTeamOrgCode || ''
    this.SaleStatus = opts.SaleStatus || null
    this.Room = opts.Room || ''
    this.ShouldFundMoney = new FixfAmount(opts.ShouldFundMoney) || new FixfAmount()
    this.HaveElevator = opts.HaveElevator || false
    this.PayCriterion = opts.PayCriterion || ''
    this.QiuCode = opts.QiuCode || ''
    this.PropertyID = opts.PropertyID || ''
    this.EaOwners = new EaOwnerList(opts.EaOwners) || new EaOwnerList()
    this.Remarks = opts.Remarks || ''
    this.Dimensions = opts.Dimensions || null
    this.PresaleTime = opts.PresaleTime || null
  }
}

//= =========== fixf.core.services.estatearea.EaOwnerList =============

export class EaOwnerList extends NorDataList {
  constructor () {
    super()
    for (const item of list._Items) {
      this.append(new EaOwner(item))
    }
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
    this.CertificateTypeStr = opts.CertificateTypeStr || ''
    this.OwnerPhones = new EaOwnerPhoneList(opts.OwnerPhones) || new EaOwnerPhoneList()
    this.CertificateNum = opts.CertificateNum || ''
    this.Remarks = opts.Remarks || ''
    this.CertificateType = opts.CertificateType || null
    this.CreateDate = opts.CreateDate || null
  }
}

//= =========== fixf.core.services.estatearea.EaOwnerPhoneList =============

export class EaOwnerPhoneList extends NorDataList {
  constructor () {
    super()
    for (const item of list._Items) {
      this.append(new EaOwnerPhone(item))
    }
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
    this.TotalEnabledAmount = opts.TotalEnabledAmount || null
    this.MinAmountType = opts.MinAmountType || null
    this.DeviceSpAmount = opts.DeviceSpAmount || null
  }
}
