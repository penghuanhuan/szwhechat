import request from '../../static/js/request.js'
/**
 * 微信内容管理接口
 */
export class WeChatArticleControllerSvr {
  constructor () {
    this.baseurl = 'WeChatArticleControllerSvr.assx/'
  }

  /**
     * 获取列表
     * openId:String, key:String, categoryCode:String, startIndex:int, maxSize:int, resultTotalCount:boolean, resultComment:boolean, resultForward:boolean, all:boolean
     */
  GetArticleList (openId, key, categoryCode, startIndex, maxSize, resultTotalCount, resultComment, resultForward, all) {
    return request.post(this.baseurl + 'GetArticleList', Qs.stringify({ openId: openId, key: key, categoryCode: categoryCode, startIndex: startIndex, maxSize: maxSize, resultTotalCount: resultTotalCount, resultComment: resultComment, resultForward: resultForward, all: all }))
  }

  /**
     * 获取文章详情
     * openId:String, articleId:String, resultComment:boolean, resultForward:boolean
     */
  GetArticleDetail (openId, articleId, resultComment, resultForward) {
    return request.post(this.baseurl + 'GetArticleDetail', Qs.stringify({ openId: openId, articleId: articleId, resultComment: resultComment, resultForward: resultForward }))
  }
}
