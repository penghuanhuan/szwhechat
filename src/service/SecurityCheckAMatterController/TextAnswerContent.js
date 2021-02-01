//= =========== wy.core.services.examine.answercontents.JudgeAnswer =============
import { DataPacket } from '../../base/DataPacket.js'

export class TextAnswerContent extends DataPacket {
  constructor (opts = {}) {
    super()
    this.Value = opts.Value || null
    this.Description = opts.Description || ''
    this.AttachId = opts.AttachId || ''
  }
}
