//= =========== wy.core.services.checkandreviewmge.CheckAndReviewResultList =============
import {
  NorDataList
} from '../base/NorDataList.js'
import {
  DataPacket
} from '../base/DataPacket.js'
export class CheckAndReviewResultList extends NorDataList {
  constructor () {
    super()
  }
}
//= =========== wy.core.services.checkandreviewmge.CheckAndReviewResult =============

export class CheckAndReviewResult extends DataPacket {
  constructor (opts = {}) {
    super()
    this.IP = opts.IP || ''
    this.Examiner = opts.Examiner || ''
    this.EvaluationItem = new CheckAndReviewTemplateItem(opts.EvaluationItem) || new CheckAndReviewTemplateItem()
    this.Score = opts.Score || null
    this.Attachment = opts.Attachment || ''
    this.ScoreTime = opts.ScoreTime || null
    this.Place = opts.Place || ''
    this.EaAreaCode = opts.EaAreaCode || ''
    this.CheckAndReviewId = opts.CheckAndReviewId || ''
    this.CheckAndReviewResultId = opts.CheckAndReviewResultId || ''
    this.Remarks = opts.Remarks || ''
  }
}

//= =========== wy.core.services.checkandreviewmge.CheckAndReviewTemplateItem =============

export class CheckAndReviewTemplateItem extends DataPacket {
  constructor (opts = {}) {
    super()
    this.Number = opts.Number || null
    this.Score = opts.Score || null
    this.Question = opts.Question || ''
    this.Questions = new CheckAndReviewQuestionList(opts.Questions) || new CheckAndReviewQuestionList()
    this.Description = opts.Description || ''
    this.Classification = opts.Classification || ''
  }
}

//= =========== wy.core.services.checkandreviewmge.CheckAndReviewQuestionList =============

export class CheckAndReviewQuestionList extends NorDataList {
  constructor () {
    super()
  }
}
//= =========== wy.core.services.checkandreviewmge.CheckAndReviewQuestion =============

export class CheckAndReviewQuestion extends DataPacket {
  constructor (opts = {}) {
    super()
    this.Number = opts.Number || ''
    this.OptionName = opts.OptionName || ''
    this.SingleScore = opts.SingleScore || null
    this.Frequency = opts.Frequency || null
  }
}
