//= =========== com.pengesoft.dwy.wechat.complaintmge.domain.ComplaintTaskFlowActionArgs =============
import { DataPacket } from '../base/DataPacket.js'
import { NorDataList } from '../base/NorDataList.js'

export class ComplaintTaskFlowActionArgs extends DataPacket {
  constructor (opts = {}) {
    super()
    this.Summary = opts.Summary || ''
    this.BusinessData = new Complaint(opts.BusinessData) || new Complaint()
    this.NextOper = opts.NextOper || ''
    this.RetValue = opts.RetValue || ''
    this.FlowPara = opts.FlowPara || ''
    this.RunTime = opts.RunTime || null
    this.Runner = opts.Runner || ''
    this.Content = opts.Content || ''
    this.Opinion = opts.Opinion || ''
  }
}

//= =========== wy.core.services.complaintmge.Complaint =============

export class Complaint extends DataPacket {
  constructor (opts = {}) {
    super()
    this.ComplaintPersonID = opts.ComplaintPersonID || ''
    this.ComplaintContent = opts.ComplaintContent || ''
    this.ComplaintPersonTel = opts.ComplaintPersonTel || ''
    this.ComplaintNumber = opts.ComplaintNumber || ''
    this.ComplaintPersonMail = opts.ComplaintPersonMail || ''
    this.WorkID = opts.WorkID || ''
    this.ComplaintPersonName = opts.ComplaintPersonName || ''
    this.ComplaintDate = opts.ComplaintDate || null
    this.ComplaintSource = opts.ComplaintSource || null
    this.ComplaintType = opts.ComplaintType || null
    this.HandleEvaluationList = new HandleEvaluationList(opts.HandleEvaluationList) || new HandleEvaluationList()
    this.HandleStatus = opts.HandleStatus || null
    this.IsPublic = opts.IsPublic || false
    this.AttachmentIDs = opts.AttachmentIDs || ''
    this.Location = opts.Location || ''
    this.EaAreaName = opts.EaAreaName || ''
    this.EaAreaCode = opts.EaAreaCode || ''
    this.ComplaintEndTime = opts.ComplaintEndTime || null
  }
}

//= =========== wy.core.services.complaintmge.HandleEvaluationList =============

export class HandleEvaluationList extends NorDataList {
  constructor () {
    super()
  }
}
//= =========== wy.core.services.complaintmge.HandleEvaluation =============

export class HandleEvaluation extends DataPacket {
  constructor (opts = {}) {
    super()
    this.HandleTime = opts.HandleTime || null
    this.HandleContent = opts.HandleContent || ''
    this.HandleEvaluationID = opts.HandleEvaluationID || ''
    this.HandlerID = opts.HandlerID || ''
    this.AttachmentIDs = opts.AttachmentIDs || ''
    this.ComplaintNumber = opts.ComplaintNumber || ''
    this.SatisfactionDegree = opts.SatisfactionDegree || null
  }
}
