//= =========== wy.core.services.examine.answercontents.JudgeAnswer =============
import { DataPacket } from '../../base/DataPacket.js'

export class JudgeAnswer extends DataPacket {
  constructor (opts = {}) {
    super()
    this.Result = opts.Result || null
    this.QuestionKeyId = opts.QuestionKeyId || ''
    this.Description = opts.Description || ''
    this.AttachId = opts.AttachId || ''
    this.Value = opts.Value || ''
  }
}
