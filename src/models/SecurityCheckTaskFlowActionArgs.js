//= =========== com.pengesoft.dwy.wechat.taskcontroller.SecurityCheckTaskFlowActionArgs =============
/* import {SecurityCheck} from './SecurityCheck'; */
import { DataPacket } from '../base/DataPacket.js'
import { NorDataList } from '../base/NorDataList.js'
//= =========== com.pengesoft.dwy.taskcontroller.securitycheckTask.SecurityCheckTaskFlowActionArgs =============

//= =========== fixf.core.services.securitycheck.SecurityCheckTask =============
export class SecurityCheckAreaList extends NorDataList {
  constructor () {
    super()
  }
}

//= =========== fixf.core.services.securitycheck.SpecialCheckList =============

export class SpecialCheckList extends NorDataList {
  constructor () {
    super()
  }
}

export class SecurityCheckTask extends DataPacket {
  constructor (opts = {}) {
    super()
    this.CcreateTime = opts.CcreateTime || null
    this.Cantons = opts.Cantons || ''
    this.Areas = opts.Areas || ''
    this.Type = opts.Type || ''
    this.CheckAreas = new SecurityCheckAreaList(opts.CheckAreas) || new SecurityCheckAreaList()
    this.WorkId = opts.WorkId || ''
    this.SecurityCheckId = opts.SecurityCheckId || ''
    this.SecurityLevel = opts.SecurityLevel || null
    this.StatreTime = opts.StatreTime || null
    this.EvaluationIndexs = opts.EvaluationIndexs || ''
    this.SpecialCheckS = new SpecialCheckList(opts.SpecialCheckS) || new SpecialCheckList()
    this.CanontName = opts.CanontName || ''
    this.Creater = opts.Creater || ''
    this.Finish = opts.Finish || null
    this.Theme = opts.Theme || ''
    this.AttachmentId = opts.AttachmentId || ''
    this.Describe = opts.Describe || ''
    this.EndTime = opts.EndTime || null
  }
}

export class SecurityCheckTaskFlowActionArgs extends DataPacket {
  constructor (opts = {}) {
    super()
    this.Summary = opts.Summary || ''
    this.BusinessData = new SecurityCheckTask(opts.BusinessData) || new SecurityCheckTask()
    this.NextOper = opts.NextOper || ''
    this.RetValue = opts.RetValue || ''
    this.FlowPara = opts.FlowPara || ''
    this.RunTime = opts.RunTime || null
    this.Runner = opts.Runner || ''
    this.Content = opts.Content || ''
    this.Opinion = opts.Opinion || ''
  }
}

//= =========== fixf.core.services.securitycheck.SecurityCheckAreaList =============

export class SecurityCheckList extends NorDataList {
  constructor () {
    super()
  }
}

//= =========== fixf.core.services.securitycheck.SecurityCheckArea =============

export class SecurityCheckArea extends DataPacket {
  constructor (opts = {}) {
    super()
    this.FinishTime = opts.FinishTime || null
    this.RealtyManageCall = opts.RealtyManageCall || ''
    this.KeyId = opts.KeyId || ''
    this.CantonName = opts.CantonName || ''
    this.RealtyManag = opts.RealtyManag || ''
    this.SecurityCheckId = opts.SecurityCheckId || ''
    this.CantonCode = opts.CantonCode || ''
    this.TypeList = new SecurityCheckList(opts.TypeList) || new SecurityCheckList()
    this.EaAreaName = opts.EaAreaName || ''
    this.EnterpriseId = opts.EnterpriseId || ''
    this.EaAreaCode = opts.EaAreaCode || ''
    this.Status = opts.Status || null
  }
}

//= =========== fixf.core.services.securitycheck.SecurityCheckList =============

//= =========== fixf.core.services.securitycheck.SecurityCheck =============

export class SecurityCheck extends DataPacket {
  constructor (opts = {}) {
    super()
    this.SecurityLevel = opts.SecurityLevel || null
    this.Score = opts.Score || null
    this.CreateId = opts.CreateId || ''
    this.Name = opts.Name || ''
    this.KeyId = opts.KeyId || ''
    this.MoldList = new SecurityCheckMoldList(opts.MoldList) || new SecurityCheckMoldList()
    this.CreateName = opts.CreateName || ''
    this.CreateDate = opts.CreateDate || null
    this.Status = opts.Status || null
  }
}

//= =========== fixf.core.services.securitycheck.SecurityCheckMoldList =============

export class SecurityCheckMoldList extends NorDataList {
  constructor () {
    super()
  }
}
//= =========== fixf.core.services.securitycheck.SecurityCheckMold =============

export class SecurityCheckMold extends DataPacket {
  constructor (opts = {}) {
    super()
    this.Name = opts.Name || ''
    this.KeyId = opts.KeyId || ''
    this.IndexList = new SecurityCheckIndexList(opts.IndexList) || new SecurityCheckIndexList()
    this.TypeId = opts.TypeId || ''
    this.Status = opts.Status || ''
  }
}

//= =========== fixf.core.services.securitycheck.SecurityCheckIndexList =============

export class SecurityCheckIndexList extends NorDataList {
  constructor () {
    super()
  }
}
//= =========== fixf.core.services.securitycheck.SecurityCheckIndex =============

export class SecurityCheckIndex extends DataPacket {
  constructor (opts = {}) {
    super()
    this.CheckType = opts.CheckType || ''
    this.Score = opts.Score || null
    this.Name = opts.Name || ''
    this.KeyId = opts.KeyId || ''
    this.ItemList = new SecurityCheckItemList(opts.ItemList) || new SecurityCheckItemList()
    this.TypeId = opts.TypeId || ''
    this.Status = opts.Status || false
  }
}

//= =========== fixf.core.services.securitycheck.SecurityCheckItemList =============

export class SecurityCheckItemList extends NorDataList {
  constructor () {
    super()
  }
}
//= =========== fixf.core.services.securitycheck.SecurityCheckItem =============

export class SecurityCheckItem extends DataPacket {
  constructor (opts = {}) {
    super()
    this.EvaluationIndexId = opts.EvaluationIndexId || ''
    this.Standard = opts.Standard || ''
    this.Deduction = opts.Deduction || null
    this.Name = opts.Name || ''
    this.Checked = opts.Checked || false
    this.KeyId = opts.KeyId || ''
  }
}

//= =========== fixf.core.services.securitycheck.SpecialCheck =============

export class SpecialCheck extends DataPacket {
  constructor (opts = {}) {
    super()
    this.FinishTime = opts.FinishTime || null
    this.RealtyManageCall = opts.RealtyManageCall || ''
    this.KeyId = opts.KeyId || ''
    this.Contetn2 = opts.Contetn2 || ''
    this.CantonName = opts.CantonName || ''
    this.RealtyManag = opts.RealtyManag || ''
    this.CantonCode = opts.CantonCode || ''
    this.Content1 = opts.Content1 || ''
    this.EaAreaName = opts.EaAreaName || ''
    this.EnterpriseId = opts.EnterpriseId || ''
    this.AttachId = opts.AttachId || ''
    this.EaAreaCode = opts.EaAreaCode || ''
    this.CheckId = opts.CheckId || ''
    this.Status = opts.Status || null
  }
}
