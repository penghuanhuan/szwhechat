//= =========== wy.core.services.propertymanage.IntegrityRegister =============
import { DataPacket } from '../base/DataPacket.js'
import { NorDataList } from '../base/NorDataList.js'

export class IntegrityRegisterDoc extends DataPacket {
  constructor (opts = {}) {
    super()
    this.ImportmentSceneKey = opts.ImportmentSceneKey || ''
    this.AcceptRight = opts.AcceptRight || ''
    this.DocCode = opts.DocCode || ''
    this.IntegrityRegister = new IntegrityRegister(opts.IntegrityRegister) || new IntegrityRegister()
    this.WorkFlowTemplateName = opts.WorkFlowTemplateName || ''
    this.CreateRight = opts.CreateRight || ''
    this.EnterRight = opts.EnterRight || ''
    this.FlowFile = opts.FlowFile || ''
    this.FilingRight = opts.FilingRight || ''
    this.FirstTaskRight = opts.FirstTaskRight || ''
  }
}

//= =========== wy.core.services.propertymanage.IntegrityRegister =============

export class IntegrityRegister extends DataPacket {
  constructor (opts = {}) {
    super()
    this.IntegrityType = opts.IntegrityType || null
    this.PeopleTitle = opts.PeopleTitle || ''
    this.EnterpriseScoring = opts.EnterpriseScoring || null
    this.ObjectType = opts.ObjectType || null
    this.CantonCode = opts.CantonCode || ''
    this.OfficePhone = opts.OfficePhone || ''
    this.ActionSummary = opts.ActionSummary || ''
    this.EaAreaName = opts.EaAreaName || ''
    this.ActionFileNum = opts.ActionFileNum || ''
    this.ActionOrg = opts.ActionOrg || ''
    this.Classification = opts.Classification || ''
    this.OrgName = opts.OrgName || ''
    this.CreateMode = opts.CreateMode || null
    this.SpecificType = opts.SpecificType || null
    this.KeyID = opts.KeyID || ''
    this.Statu = opts.Statu || null
    this.ProjectLeaderID = opts.ProjectLeaderID || ''
    this.RecordName = opts.RecordName || ''
    this.StarLevel = opts.StarLevel || ''
    this.EaAreaCode = opts.EaAreaCode || ''
    this.ActionLevel = opts.ActionLevel || ''
    this.ActionName = opts.ActionName || ''
    this.Expires = opts.Expires || null
    this.RechargeStand = opts.RechargeStand || ''
    this.RoomNumber = opts.RoomNumber || ''
    this.ApproveDate = opts.ApproveDate || null
    this.ActionStartDate = opts.ActionStartDate || null
    this.PeopleName = opts.PeopleName || ''
    this.ProjectLeaderScoring = opts.ProjectLeaderScoring || null
    this.OverTime = opts.OverTime || null
    this.OrgLevel = opts.OrgLevel || ''
    this.EaAreaType = opts.EaAreaType || null
    this.UndoFileNum = opts.UndoFileNum || ''
    this.UndoPerson = opts.UndoPerson || ''
    this.OrgCode = opts.OrgCode || ''
    this.ActionDate = opts.ActionDate || null
    this.CreateDate = opts.CreateDate || null
    this.ActionDetailSummary = opts.ActionDetailSummary || ''
    this.WorkYears = opts.WorkYears || ''
    this.Address = opts.Address || ''
    this.IsDelete = opts.IsDelete || false
    this.Sex = opts.Sex || ''
    this.BuildArea = opts.BuildArea || ''
    this.PulishKeyID = opts.PulishKeyID || ''
    this.UndoTime = opts.UndoTime || null
    this.NoticeKeyID = opts.NoticeKeyID || ''
    this.ActionType = opts.ActionType || ''
    this.EvaluateSign = opts.EvaluateSign || ''
    this.UndoRemark = opts.UndoRemark || ''
    this.IdCardNum = opts.IdCardNum || ''
    this.ActionEndDate = opts.ActionEndDate || null
    this.HappenDate = opts.HappenDate || null
    this.Oper = opts.Oper || ''
    this.CellPhone = opts.CellPhone || ''
    this.IsDemoProject = opts.IsDemoProject || false
    this.Ranking = opts.Ranking || null
    this.ActionMaterialDate = opts.ActionMaterialDate || null
    this.ActionReleaseDate = opts.ActionReleaseDate || null
    this.ActionCategory = opts.ActionCategory || ''
    this.ActionName = opts.ActionName || ''
    this.ActionOrg = opts.ActionOrg || ''
  }
}
