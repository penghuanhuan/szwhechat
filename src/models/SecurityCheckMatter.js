//= =========== wy.core.services.securitycheckmatter.SecurityCheckMatter =============
import {
  NorDataList
} from '../base/NorDataList.js'
import {
  DataPacket
} from '../base/DataPacket.js'

export class SecurityCheckMatter extends DataPacket {
  constructor (opts = {}) {
    super()
    this.CantonCodeArr = opts.CantonCodeArr || ''
    this.PaperType = opts.PaperType || null
    this.Description = opts.Description || ''
    this.KeyId = opts.KeyId || ''
    this.Title = opts.Title || ''
    this.PaperKeyId = opts.PaperKeyId || ''
    this.SpecialType = opts.SpecialType || null
    this.AreaArr = opts.AreaArr || ''
    this.MultipleAnswer = opts.MultipleAnswer || false
    this.Oper = opts.Oper || ''
    this.StartTime = opts.StartTime || null
    this.EndTime = opts.EndTime || null
    this.OperTime = opts.OperTime || null
    this.Status = opts.Status || null
  }
}

export class ExaminePaper extends DataPacket {
  constructor (opts = {}) {
    super()
    this.Description = opts.Description || ''
    this.KeyId = opts.KeyId || ''
    this.Oper = opts.Oper || ''
    this.Title = opts.Title || ''
    this.Type = opts.Type || null
  }
}

//= =========== wy.core.services.examine.ExamineQuestionList =============

export class ExamineQuestionList extends NorDataList {
  constructor () {
    super()
    for (const item of list._Items) {
      this.append(new ExamineQuestion(item))
    }
  }
}

export class ExamineQuestion extends DataPacket {
  constructor (opts = {}) {
    super()
    this.CaculatePolicyName = opts.CaculatePolicyName || ''
    this.Code = opts.Code || ''
    this.Description = opts.Description || ''
    this.KeyId = opts.KeyId || ''
    this.Title = opts.Title || ''
    this.PaperKeyId = opts.PaperKeyId || ''
    this.Score = opts.Score || null
    this.ParentKeyId = opts.ParentKeyId || ''
    this.AnswerContent = opts.AnswerContent || ''
    this.Ignore = opts.Ignore || false
    this.QuestionTypeDefine = opts.QuestionTypeDefine || ''
    this.QuestionType = opts.QuestionType || ''
    this.Changed = opts.Changed || false
  }
}
