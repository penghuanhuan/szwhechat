import { DataPacket } from '../../base/DataPacket.js'
import { NorDataList } from '../../base/NorDataList.js'

export class ExamineAnswerList extends NorDataList {
  constructor (list = {}) {
    super()
    if (list && list._Items) {
      for (const item of list._Items) {
        this.append(new ExamineAnswer(item))
      }
    }
  }
}
//= =========== wy.core.services.examine.ExamineAnswer =============

export class ExamineAnswer extends DataPacket {
  constructor (opts = {}) {
    super()
    this.QuestionKeyId = opts.QuestionKeyId || ''
    this.Grade = opts.Grade || null
    this.KeyId = opts.KeyId || ''
    this.CardKeyId = opts.CardKeyId || ''
    this.Content = opts.Content || ''
    this.OperTime = opts.OperTime || null
  }
}

//= =========== wy.core.services.examine.answercontents.ExamineAnswerContentBase =============
