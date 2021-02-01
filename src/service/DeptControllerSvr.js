import request from '../static/js/request.js'
/**
 * 部门管理服务
 */
export class DeptControllerSvr {
  constructor () {
    this.baseurl = 'DeptControllerSvr.assx/'
  }

  /**
     * 获取部门列表
     * token:String, deptName:String, start:int, len:int, option:int
     */
  getDeptList (token, deptName, start, len, option) {
    return request.post(this.baseurl + 'getDeptList', Qs.stringify({ token: token, deptName: deptName, start: start, len: len, option: option }))
  }
}
