
export class SurveyTemplateItemList {
  constructor (list) {
    this.MaxID = 0
    this._Items = []
    this.TotalCount = list.length || 0
    // super();
    for (const item of list) {
      //    this.append(new SurveyTemplateItem(item));
      this._Items.push(new SurveyTemplateItem(item))
    }
  }
}
//= =========== wy.core.services.surveymge.SurveyTemplateItem =============

export class SurveyTemplateItem {
  constructor (opts = {}) {
    // super();
    this.ItemContent = opts.ItemContent || ''
    this.SurveyTemplateItemId = opts.SurveyTemplateItemId || null
    this.Choice = opts.Choice || null
  }
}
