import { DataPacket } from '../../base/DataPacket.js'
import { NorDataList } from '../../base/NorDataList.js'

export class ExamineQuestionList extends NorDataList {
  constructor () {
    super()
    for (const item of list._Items) {
      this.append(new ExamineQuestion(item))
    }
  }
}
//= =========== wy.core.services.examine.ExamineQuestion =============

export class ExamineQuestion extends DataPacket {
  constructor (opts = {}) {
    super()
    this.CaculatePolicyName = opts.CaculatePolicyName || ''
    this.Code = opts.Code || ''
    this.Description = opts.Description || ''
    this.KeyId = opts.KeyId || ''
    this.ChildList = new ExamineQuestionList(opts.ChildList) || new ExamineQuestionList()
    this.Title = opts.Title || ''
    this.PaperKeyId = opts.PaperKeyId || ''
    this.Score = opts.Score || null
    this.ParentKeyId = opts.ParentKeyId || ''
    this.AnswerContent = opts.AnswerContent || ''
    this.QuestionTypeDefine = opts.QuestionTypeDefine || ''
    this.QuestionType = opts.QuestionType || ''
  }
}
