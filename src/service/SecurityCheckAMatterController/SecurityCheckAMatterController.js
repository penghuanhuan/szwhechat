import request from '../../static/js/request.js'

/**
 * 安全检查服务
 */
export class SecurityCheckAMatterController {
  constructor () {
    this.baseurl = 'SecurityCheckAMatterController.assx/'
  }

  /**
     * 添加安全检查
     * openId:String, matter:SecurityCheckMatter
     */
  AddSecurityCheckMatter (openId, matter) {
    return request.post(this.baseurl + 'AddSecurityCheckMatter', Qs.stringify({ openId: openId, matter: (typeof matter === 'undefined' || matter === null) ? '' : matter.toString() }))
  }

  /**
     * 安全检查催办
     * openId:String, matterId:String, cantonCode:String, streetCode:String, committeeCode:String, eaAreaCode:String, orgCode:String
     */
  NoticWeChatMsgPush (openId, matterId, cantonCode, streetCode, committeeCode, eaAreaCode, orgCode) {
    return request.post(this.baseurl + 'NoticWeChatMsgPush', Qs.stringify({ openId: openId, matterId: matterId, cantonCode: cantonCode, streetCode: streetCode, committeeCode: committeeCode, eaAreaCode: eaAreaCode, orgCode: orgCode }))
  }

  /**
     * 通过答题卡获取答题列表
     * openId:String, cardKeyId:String, startIndex:int, maxSize:int, child:boolean, option:int
     */
  GetQuestionListByCardId (openId, cardKeyId, startIndex, maxSize, child, option) {
    return request.post(this.baseurl + 'GetQuestionListByCardId', Qs.stringify({ openId: openId, cardKeyId: cardKeyId, startIndex: startIndex, maxSize: maxSize, child: child, option: option }))
  }

  /**
     * 获取综合统计数据(统计)
     * openId:String, matterKeyId:String, cantonCode:String, streetCode:String, committeCode:String, eaAreaCode:String, orgCode:String, startDate:Date, endDate:Date, paperType:int, status:int
     */
  GetSecurityCheckMatterInfo (openId, matterKeyId, cantonCode, streetCode, committeCode, eaAreaCode, orgCode, startDate, endDate, paperType, status) {
    return request.post(this.baseurl + 'GetSecurityCheckMatterInfo', Qs.stringify({ openId: openId, matterKeyId: matterKeyId, cantonCode: cantonCode, streetCode: streetCode, committeCode: committeCode, eaAreaCode: eaAreaCode, orgCode: orgCode, startDate: startDate, endDate: endDate, paperType: paperType, status: status }))
  }

  /**
     * 检查列表(统计)
     * openId:String, title:String, cantonCode:String, paperType:int, status:int, startIndex:int, maxSize:int
     */
  GetSecurityCheckMatterCensusList (openId, title, cantonCode, paperType, status, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetSecurityCheckMatterCensusList', Qs.stringify({ openId: openId, title: title, cantonCode: cantonCode, paperType: paperType, status: status, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 动态生成电梯检查项
     * openId:String, cardKeyId:String, eaAreaCode:String
     */
  DynamicallyGenerateElevatorCheckItems (openId, cardKeyId, eaAreaCode) {
    return request.post(this.baseurl + 'DynamicallyGenerateElevatorCheckItems', Qs.stringify({ openId: openId, cardKeyId: cardKeyId, eaAreaCode: eaAreaCode }))
  }

  /**
     *  查询专项类型列表
     * openId:String, name:String, code:String, startIndex:int, maxSize:int
     */
  QuerySpecialTypeList (openId, name, code, startIndex, maxSize) {
    return request.post(this.baseurl + 'QuerySpecialTypeList', Qs.stringify({ openId: openId, name: name, code: code, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 通过检查事项Id，获取答题卡列表
     * openId:String, keyId:String, startIndex:int, maxSize:int
     */
  GetCardListByMatterKeyId (openId, keyId, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetCardListByMatterKeyId', Qs.stringify({ openId: openId, keyId: keyId, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 保存答案列表
     * openId:String, list:ExamineAnswerList, cardKeyId:String, delQuestionKeyId:String[], submit:boolean
     */
  SaveAnswerList (openId, list, cardKeyId, delQuestionKeyId, submit) {
    return request.post(this.baseurl + 'SaveAnswerList', Qs.stringify({ openId: openId, list: (typeof list === 'undefined' || list === null) ? '' : list.toString(), cardKeyId: cardKeyId, delQuestionKeyId: delQuestionKeyId, submit: submit }))
  }

  /**
     * 获取安全检查详情
     * openId:String, keyId:String
     */
  GetSecurityCheckMatter (openId, keyId) {
    return request.post(this.baseurl + 'GetSecurityCheckMatter', Qs.stringify({ openId: openId, keyId: keyId }))
  }

  /**
     * 预加载项目设施设备台账
     * openId:String, cardKeyId:String, eaAreaCode:String, option:int
     */
  LoadOriginalFacilities (openId, cardKeyId, eaAreaCode, option) {
    return request.post(this.baseurl + 'LoadOriginalFacilities', Qs.stringify({ openId: openId, cardKeyId: cardKeyId, eaAreaCode: eaAreaCode, option: option }))
  }

  /**
     * 删除
     * openId:String, cardKeyId:String, questionKeyId:String, answerId:String
     */
  DeleteAnswer (openId, cardKeyId, questionKeyId, answerId) {
    return request.post(this.baseurl + 'DeleteAnswer', Qs.stringify({ openId: openId, cardKeyId: cardKeyId, questionKeyId: questionKeyId, answerId: answerId }))
  }

  /**
     * 通过用户opneId，获取答题卡列表,仅用与物管企业
     * openId:String, status:int, paperType:int, startIndex:int, maxSize:int
     */
  GetCardListByRealtyComUser (openId, status, paperType, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetCardListByRealtyComUser', Qs.stringify({ openId: openId, status: status, paperType: paperType, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 通过试题id 获取子试题列表
     * openId:String, cardKeyId:String, opers:String
     */
  ModifyCardTaskOpers (openId, cardKeyId, opers) {
    return request.post(this.baseurl + 'ModifyCardTaskOpers', Qs.stringify({ openId: openId, cardKeyId: cardKeyId, opers: opers }))
  }

  /**
     * 获取总统计列表(统计)
     * openId:String, cantonCode:String, streetCode:String, committeeCode:String, paperType:int, status:int, startDate:Date, endDate:Date, option:int
     */
  GetCenerAllList (openId, cantonCode, streetCode, committeeCode, paperType, status, startDate, endDate, option) {
    return request.post(this.baseurl + 'GetCenerAllList', Qs.stringify({ openId: openId, cantonCode: cantonCode, streetCode: streetCode, committeeCode: committeeCode, paperType: paperType, status: status, startDate: startDate, endDate: endDate, option: option }))
  }

  /**
     * 获取物业区域列表列表(一般统计)
     * openId:String, matterKeyId:String, cantonCode:String, streetCode:String, comitteCode:String, keyWord:String, bind:int, cardStatus:int, orgCode:String, paparType:int, specialType:int, startIndex:int, maxSize:int, option:int
     */
  GetCommonSecurityCheckCardByFacility (openId, matterKeyId, cantonCode, streetCode, comitteCode, keyWord, bind, cardStatus, orgCode, paparType, specialType, startIndex, maxSize, option) {
    return request.post(this.baseurl + 'GetCommonSecurityCheckCardByFacility', Qs.stringify({ openId: openId, matterKeyId: matterKeyId, cantonCode: cantonCode, streetCode: streetCode, comitteCode: comitteCode, keyWord: keyWord, bind: bind, cardStatus: cardStatus, orgCode: orgCode, paparType: paparType, specialType: specialType, startIndex: startIndex, maxSize: maxSize, option: option }))
  }

  /**
     * 获取物业区域列表列表(统计)
     * openId:String, matterKeyId:String, comitteCode:String, eaAreaName:String, cardStatus:int, startIndex:int, maxSize:int, child:boolean
     */
  GetCardListByMatterKeyIdAndCantonCode (openId, matterKeyId, comitteCode, eaAreaName, cardStatus, startIndex, maxSize, child) {
    return request.post(this.baseurl + 'GetCardListByMatterKeyIdAndCantonCode', Qs.stringify({ openId: openId, matterKeyId: matterKeyId, comitteCode: comitteCode, eaAreaName: eaAreaName, cardStatus: cardStatus, startIndex: startIndex, maxSize: maxSize, child: child }))
  }

  /**
     * 修改答案
     * openId:String, cardKeyId:String, questionKeyId:String, answerKeyId:String, content:String
     */
  ModifyAnswer (openId, cardKeyId, questionKeyId, answerKeyId, content) {
    return request.post(this.baseurl + 'ModifyAnswer', Qs.stringify({ openId: openId, cardKeyId: cardKeyId, questionKeyId: questionKeyId, answerKeyId: answerKeyId, content: content }))
  }

  /**
     * 获取总统计列表物业区内部(统计)
     * openId:String, eaAreaCode:String, cardStatus:int, startIndex:int, maxSize:int, child:boolean
     */
  GetCardListByEaAreaCode (openId, eaAreaCode, cardStatus, startIndex, maxSize, child) {
    return request.post(this.baseurl + 'GetCardListByEaAreaCode', Qs.stringify({ openId: openId, eaAreaCode: eaAreaCode, cardStatus: cardStatus, startIndex: startIndex, maxSize: maxSize, child: child }))
  }

  /**
     * 通过试题id 获取子试题列表， option：选项：0:所有试题，1: 未忽略的试题，2：忽略的试题 .
     * openId:String, cardKeyId:String, questionKeyId:String, startIndex:int, maxSize:int, child:boolean, option:int
     */
  GetChildQuestionListByQuestionKeyId (openId, cardKeyId, questionKeyId, startIndex, maxSize, child, option) {
    return request.post(this.baseurl + 'GetChildQuestionListByQuestionKeyId', Qs.stringify({ openId: openId, cardKeyId: cardKeyId, questionKeyId: questionKeyId, startIndex: startIndex, maxSize: maxSize, child: child, option: option }))
  }

  /**
     * 获取检查行政区街道列表(统计)
     * openId:String, matterKeyId:String, cantonCode:String, streetCode:String, option:int
     */
  GetSecurityCheckMatterTypeList (openId, matterKeyId, cantonCode, streetCode, option) {
    return request.post(this.baseurl + 'GetSecurityCheckMatterTypeList', Qs.stringify({ openId: openId, matterKeyId: matterKeyId, cantonCode: cantonCode, streetCode: streetCode, option: option }))
  }

  /**
     * 获取用户检查列表
     * openId:String, title:String, paperType:int, status:int, startIndex:int, maxSize:int
     */
  GetSecurityCheckMatterList (openId, title, paperType, status, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetSecurityCheckMatterList', Qs.stringify({ openId: openId, title: title, paperType: paperType, status: status, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 获取物业区域列表详情(企业专项设备统计)
     * openId:String, matterKeyId:String, orgName:String, specialType:int, startIndex:int, maxSize:int
     */
  GetLiftSecurityCheckCardListByFacilityAndRealtyMgeCom (openId, matterKeyId, orgName, specialType, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetLiftSecurityCheckCardListByFacilityAndRealtyMgeCom', Qs.stringify({ openId: openId, matterKeyId: matterKeyId, orgName: orgName, specialType: specialType, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 完成考评
     * openId:String, cardKeyId:String, workId:String
     */
  FinishMatter (openId, cardKeyId, workId) {
    return request.post(this.baseurl + 'FinishMatter', Qs.stringify({ openId: openId, cardKeyId: cardKeyId, workId: workId }))
  }

  /**
     * 找到指定问题的所有最顶级父问题
     * openId:String, cardKeyId:String, questionKeyId:String
     */
  GetQuestionTopFatherQuestion (openId, cardKeyId, questionKeyId) {
    return request.post(this.baseurl + 'GetQuestionTopFatherQuestion', Qs.stringify({ openId: openId, cardKeyId: cardKeyId, questionKeyId: questionKeyId }))
  }

  /**
     * 保存答案
     * openId:String, cardKeyId:String, questionKeyId:String, content:String
     */
  SaveAnswer (openId, cardKeyId, questionKeyId, content) {
    return request.post(this.baseurl + 'SaveAnswer', Qs.stringify({ openId: openId, cardKeyId: cardKeyId, questionKeyId: questionKeyId, content: content }))
  }

  /**
     * 获取物业区域列表详情(专项设备统计)
     * openId:String, matterKeyId:String, eaAraeCode:String, specialType:int, startIndex:int, maxSize:int, option:int
     */
  GetLiftSecurityCheckCardDetailByFacility (openId, matterKeyId, eaAraeCode, specialType, startIndex, maxSize, option) {
    return request.post(this.baseurl + 'GetLiftSecurityCheckCardDetailByFacility', Qs.stringify({ openId: openId, matterKeyId: matterKeyId, eaAraeCode: eaAraeCode, specialType: specialType, startIndex: startIndex, maxSize: maxSize, option: option }))
  }

  /**
     * 编辑是否忽略问题
     * openId:String, cardKeyId:String, questionKeyId:String, ignore:boolean
     */
  OperQuestionIgnoreStatus (openId, cardKeyId, questionKeyId, ignore) {
    return request.post(this.baseurl + 'OperQuestionIgnoreStatus', Qs.stringify({ openId: openId, cardKeyId: cardKeyId, questionKeyId: questionKeyId, ignore: ignore }))
  }

  /**
     * 通过用户opneId，获取需完成答题卡数量,仅用与物管企业
     * openId:String, paperType:int
     */
  GetShouldDoCardCountByRealtyComUser (openId, paperType) {
    return request.post(this.baseurl + 'GetShouldDoCardCountByRealtyComUser', Qs.stringify({ openId: openId, paperType: paperType }))
  }

  /**
     * 查询试卷列表
     * openId:String, param:ExaminePaperQueryPara, startIndex:int, maxSize:int, retChild:boolean, retTotal:boolean
     */
  QueryPaperByList (openId, param, startIndex, maxSize, retChild, retTotal) {
    return request.post(this.baseurl + 'QueryPaperByList', Qs.stringify({ openId: openId, param: (typeof param === 'undefined' || param === null) ? '' : param.toString(), startIndex: startIndex, maxSize: maxSize, retChild: retChild, retTotal: retTotal }))
  }

  /**
     * 获取物业区域列表列表(专项电梯统计)
     * openId:String, matterKeyId:String, cantonCode:String, streetCode:String, comitteCode:String, keyWord:String, longTime:int, haveLift:int, bind:int, cardStatus:int, liftCountMin:int, liftCountMax:int, orgCode:String, specialType:int, startIndex:int, maxSize:int
     */
  GetLiftSecurityCheckCardByFacility (openId, matterKeyId, cantonCode, streetCode, comitteCode, keyWord, longTime, haveLift, bind, cardStatus, liftCountMin, liftCountMax, orgCode, specialType, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetLiftSecurityCheckCardByFacility', Qs.stringify({ openId: openId, matterKeyId: matterKeyId, cantonCode: cantonCode, streetCode: streetCode, comitteCode: comitteCode, keyWord: keyWord, longTime: longTime, haveLift: haveLift, bind: bind, cardStatus: cardStatus, liftCountMin: liftCountMin, liftCountMax: liftCountMax, orgCode: orgCode, specialType: specialType, startIndex: startIndex, maxSize: maxSize }))
  }
}
