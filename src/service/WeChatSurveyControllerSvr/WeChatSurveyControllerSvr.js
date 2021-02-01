import request from '../../static/js/request.js'

/**
 * 微信满意度调查服务接口
 */
export class WeChatSurveyControllerSvr {
  constructor () {
    this.baseurl = 'WeChatSurveyControllerSvr.assx/'
  }

  /**
     * 提交满意度调查答题结果
     * surveyId:String, openId:String, result:SurveyTemplateItemList, feedback:String, eaAreaCode:String
     */
  submitSurvey (surveyId, openId, result, feedback, eaAreaCode) {
    return request.post(this.baseurl + 'submitSurvey', Qs.stringify({ surveyId: surveyId, openId: openId, result: (typeof result === 'undefined' || result === null) ? '' : result.toString(), feedback: feedback, eaAreaCode: eaAreaCode }))
  }

  /**
     * 获取满意度调查详情
     * surveyId:String, eaAreaCode:String, openId:String, option:int
     */
  GetSurveyDetail (surveyId, eaAreaCode, openId, option) {
    return request.post(this.baseurl + 'GetSurveyDetail', Qs.stringify({ surveyId: surveyId, eaAreaCode: eaAreaCode, openId: openId, option: option }))
  }

  /**
     * 查询业主的满意度调查列表
     * openId:String, startIndex:int, maxSize:int, option:int
     */
  GetSurveyList (openId, startIndex, maxSize, option) {
    return request.post(this.baseurl + 'GetSurveyList', Qs.stringify({ openId: openId, startIndex: startIndex, maxSize: maxSize, option: option }))
  }
}
