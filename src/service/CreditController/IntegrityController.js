import request from '../../static/js/request.js'

/**

/**
 * 诚信管理服务
 */
export class IntegrityController {
  constructor () {
    this.baseurl = 'IntegrityController.assx/'
  }

  /**
     * 修改业务单
     * openId:String, docCode:String, summary:String, cantonCode:String, remark:String, docBodyJSON:String, importantDocs:ImportantDocList
     */
  modifyIntegrityRegisterDoc (openId, docCode, summary, cantonCode, remark, docBodyJSON, importantDocs) {
    return request.post(this.baseurl + 'modifyIntegrityRegisterDoc', Qs.stringify({ openId: openId, docCode: docCode, summary: summary, cantonCode: cantonCode, remark: remark, docBodyJSON: docBodyJSON, importantDocs: (typeof importantDocs === 'undefined' || importantDocs === null) ? '' : importantDocs.toString() }))
  }

  /**
     * 新增诚信登记业务单
     * openId:String, doc:BusinessDoc, docBody:IntegrityRegisterDoc, importantDocs:ImportantDocList
     */
  addIntegrityRegisterDoc (openId, doc, docBody, importantDocs) {
    return request.post(this.baseurl + 'addIntegrityRegisterDoc', Qs.stringify({ openId: openId, doc: (typeof doc === 'undefined' || doc === null) ? '' : doc.toString(), docBody: (typeof docBody === 'undefined' || docBody === null) ? '' : docBody.toString(), importantDocs: (typeof importantDocs === 'undefined' || importantDocs === null) ? '' : importantDocs.toString() }))
  }

  /**
     * 获取配置文件
     * openId:String, scene:String
     */
  getImportantConfigList (openId, scene) {
    return request.post(this.baseurl + 'getImportantConfigList', Qs.stringify({ openId: openId, scene: scene }))
  }

  /**
     * 查询诚信信息
     * openId:String, objectId:String, objectType:int, specificType:int, startIdnex:int, maxSize:int
     */
  QueryIntegrityInfo (openId, objectId, objectType, specificType, startIdnex, maxSize) {
    return request.post(this.baseurl + 'QueryIntegrityInfo', Qs.stringify({ openId: openId, objectId: objectId, objectType: objectType, specificType: specificType, startIdnex: startIdnex, maxSize: maxSize }))
  }

  /**
     * 获取诚信配置信息
     * openId:String
     */
  GetIntegrityConfigRoot (openId) {
    return request.post(this.baseurl + 'GetIntegrityConfigRoot', Qs.stringify({ openId: openId }))
  }

  /**
     * 撤销诚信登记
     * openId:String, keyId:String, fileNum:String, remark:String, undoPerson:String
     */
  UndoIntegrityRegister (openId, keyId, fileNum, remark, undoPerson) {
    return request.post(this.baseurl + 'UndoIntegrityRegister', Qs.stringify({ openId: openId, keyId: keyId, fileNum: fileNum, remark: remark, undoPerson: undoPerson }))
  }

  /**
     * 通过id获取单个诚信登记记录
     * openId:String, keyID:String
     */
  getIntegrityRegister (openId, keyID) {
    return request.post(this.baseurl + 'getIntegrityRegister', Qs.stringify({ openId: openId, keyID: keyID }))
  }

  /**
     * 提交诚信登记业务单
     * openId:String, doc:BusinessDoc, taskName:String, workFlowTemplateName:String, docBody:IntegrityRegisterDoc, importantDocs:ImportantDocList
     */
  submiteIntegrityDoc (openId, doc, taskName, workFlowTemplateName, docBody, importantDocs) {
    return request.post(this.baseurl + 'submiteIntegrityDoc', Qs.stringify({ openId: openId, doc: (typeof doc === 'undefined' || doc === null) ? '' : doc.toString(), taskName: taskName, workFlowTemplateName: workFlowTemplateName, docBody: (typeof docBody === 'undefined' || docBody === null) ? '' : docBody.toString(), importantDocs: (typeof importantDocs === 'undefined' || importantDocs === null) ? '' : importantDocs.toString() }))
  }

  /**
     * 获取符合条件的诚信登记信息列表
     * openId:String, objectType:int, integrityType:int, specificType:int, orgName:String, startTime:String, endTime:String, startIndex:int, maxSize:int
     */
  getIntegrityList (openId, objectType, integrityType, specificType, orgName, startTime, endTime, startIndex, maxSize) {
    return request.post(this.baseurl + 'getIntegrityList', Qs.stringify({ openId: openId, objectType: objectType, integrityType: integrityType, specificType: specificType, orgName: orgName, startTime: startTime, endTime: endTime, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 诚信登记查询
     * openId：string,eaAreaCode:string,option:string
     */
  QueryIntegrityRegisterByEaAreaCode (openId, eaAreaCode, option) {
    return request.post(this.baseurl + 'QueryIntegrityRegisterByEaAreaCode', Qs.stringify({
      openId: openId,
      eaAreaCode: eaAreaCode,
      option: option
    }))
    // return new Promise((resolve, reject) => {
    //     const httpParams = new HttpParams()
    //         .set('openId',openId)
    //         .set('eaAreaCode',eaAreaCode)
    //         .set('option',(typeof option === 'undefined' || option == null) ? '' : option.toString());
    //     that.httpClient.post<JSONObject>(this.baseurl + 'QueryIntegrityRegisterByEaAreaName', httpParams, {headers: this.header})
    //         .subscribe(res => {
    //             resolve(new JSONObject(res);
    //         }, err => {
    //             reject(err);
    //         )};
  }
}
