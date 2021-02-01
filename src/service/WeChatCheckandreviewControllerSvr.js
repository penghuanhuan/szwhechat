import request from '../static/js/request.js'

/**
 * 微信满意度调查服务接口
 */
export class WeChatCheckandreviewControllerSvr {
  constructor () {
    this.baseurl = 'WeChatCheckandreviewControllerSvr.assx/'
  }

  /**
   * 提交检查考评
   * checkAndReviewId:String, certificateNum:String, eaAreaCode:String, resultList:CheckAndReviewResultList
   */
  SubmitCheckAndReviewResult (checkAndReviewId, certificateNum, eaAreaCode, resultList) {
    return request.post(this.baseurl + 'SubmitCheckAndReviewResult', Qs.stringify({ checkAndReviewId: checkAndReviewId, certificateNum: certificateNum, eaAreaCode: eaAreaCode, resultList: (typeof resultList === 'undefined' || resultList === null) ? '' : resultList.toString() }))
  }

  /**
   * 获取正在进行的检查考评列表
   *
   */
  GetCheckandreviewList () {
    return request.post(this.baseurl + 'GetCheckandreviewList', Qs.stringify({ }))
  }

  /**
   * 获取检查考评详情
   * checkAndReviewId:String, eaAreaCode:String
   */
  GetCheckAndReviewDetail (checkAndReviewId, eaAreaCode) {
    return request.post(this.baseurl + 'GetCheckAndReviewDetail', Qs.stringify({ checkAndReviewId: checkAndReviewId, eaAreaCode: eaAreaCode }))
  }

  /**
   * 获取检查考评范围
   * checkAndReviewId:String, keyWords:String, startIndex:int, maxSize:int, option:int
   */
  GetCheckAndReviewAreaList (checkAndReviewId, keyWords, startIndex, maxSize, option) {
    return request.post(this.baseurl + 'GetCheckAndReviewAreaList', Qs.stringify({ checkAndReviewId: checkAndReviewId, keyWords: keyWords, startIndex: startIndex, maxSize: maxSize, option: option }))
  }
}
