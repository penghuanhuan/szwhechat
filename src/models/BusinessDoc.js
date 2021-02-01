//= =========== fixf.core.services.businessprocess.BusinessDoc =============
// import {TaskItem} from './TaskItem';
// import {BusinessDocBody} from './BusinessDocBody';
import { DataPacket } from '../base/DataPacket.js'
import { NorDataList } from '../base/NorDataList.js'
export class BusinessDoc extends DataPacket {
  constructor (opts = {}) {
    super()
    this.BodyField3 = opts.BodyField3 || ''
    this.BodyField2 = opts.BodyField2 || ''
    this.BodyField1 = opts.BodyField1 || ''
    this.BodyField0 = opts.BodyField0 || ''
    this.BodyField7 = opts.BodyField7 || ''
    this.OwnerTeamCode = opts.OwnerTeamCode || ''
    this.BodyField6 = opts.BodyField6 || ''
    this.BodyField5 = opts.BodyField5 || ''
    this.BodyField4 = opts.BodyField4 || ''
    this.CurrentTask = new TaskItem(opts.CurrentTask) || new TaskItem()
    this.Remark = opts.Remark || ''
    this.LargeObjectID = opts.LargeObjectID || ''
    this.WorkID = opts.WorkID || ''
    this.CantonCode = opts.CantonCode || ''
    this.DocBody = new BusinessDocBody(opts.DocBody) || new BusinessDocBody()
    this.DocBodyClassName = opts.DocBodyClassName || ''
    this.DocBodyJSON = opts.DocBodyJSON || ''
    this.Contact = opts.Contact || ''
    this.ContactNumber = opts.ContactNumber || ''
    this.OverdueTime = opts.OverdueTime || null
    this.Summary = opts.Summary || ''
    this.IsDelete = opts.IsDelete || false
    this.AcceptTime = opts.AcceptTime || null
    this.DocCode = opts.DocCode || ''
    this.ApprovalTime = opts.ApprovalTime || null
    this.AcceptOper = opts.AcceptOper || ''
    this.IsSelfApply = opts.IsSelfApply || false
    this.PreAcceptStatus = opts.PreAcceptStatus || false
    this.SubmitTime = opts.SubmitTime || null
    this.CreateTime = opts.CreateTime || null
    this.OperStatus = opts.OperStatus || null
    this.BodyField9 = opts.BodyField9 || ''
    this.Oper = opts.Oper || ''
    this.BodyField8 = opts.BodyField8 || ''
    this.EndTime = opts.EndTime || null
    this.BusinessType = opts.BusinessType || null
    this.Status = opts.Status || null
  }
}

//= =========== fixf.core.services.businessprocess.BusinessDocBody =============

export class BusinessDocBody extends DataPacket {
  constructor (opts = {}) {
    super()
    this.ImportmentSceneKey = opts.ImportmentSceneKey || ''
    this.WorkFlowTemplateName = opts.WorkFlowTemplateName || ''
    this.CreateRight = opts.CreateRight || ''
    this.EnterRight = opts.EnterRight || ''
    this.AcceptRight = opts.AcceptRight || ''
    this.DocCode = opts.DocCode || ''
    this.FlowFile = opts.FlowFile || ''
    this.FilingRight = opts.FilingRight || ''
    this.FirstTaskRight = opts.FirstTaskRight || ''
  }
}

//= =========== fixf.core.services.businessprocess.TaskItem =============
// import {UUID} from './UUID';
// import {NamedValue} from './NamedValue';

export class TaskItem extends DataPacket {
  constructor (opts = {}) {
    super()
    this.WorkStatus = opts.WorkStatus || null
    this.ActionPara = opts.ActionPara || ''
    this.DocCode = opts.DocCode || ''
    this.Memo = opts.Memo || ''
    this.TaskClass = opts.TaskClass || ''
    this.BisType = opts.BisType || ''
    this.WorkName = opts.WorkName || ''
    this.WorkID = opts.WorkID || null
    this.Output = new NamedValue(opts.Output) || new NamedValue()
    this.CantonCode = opts.CantonCode || ''
    this.LastTaskID = opts.LastTaskID || null
    this.OpLevel = opts.OpLevel || null
    this.MainParaIn = new NamedValue(opts.MainParaIn) || new NamedValue()
    this.Operators = opts.Operators || ''
    this.Action = opts.Action || ''
    this.StartTime = opts.StartTime || null
    this.TaskName = opts.TaskName || ''
    this.EndTime = opts.EndTime || null
    this.Runner = opts.Runner || ''
    this.TaskID = opts.TaskID || null
    this.TaskStatus = opts.TaskStatus || null
  }
}

//= =========== pengesoft.workflow.NamedValue =============
// import {Object} from './Object';
// import {UUID} from './UUID';

export class NamedValue extends DataPacket {
  constructor (opts = {}) {
    super()
    this.Name = opts.Name || ''
    this.TypeName = opts.TypeName || ''
    this.Memo = opts.Memo || ''
    this.ObjValue = opts.ObjValue || null
    this.Value = opts.Value || ''
    this.TaskID = opts.TaskID || null
  }
}
