import request from '../../static/js/request.js'

/**
 * 通讯录
 */
export class MailMgeController {
  constructor () {
    this.baseurl = 'MailMgeController.assx/'
  }

  /**
     * 根据部门ID获取用户列表
     * openId:String, deptId:int
     */
  GetUserOfEmpowerment (openId, deptId) {
    return request.post(this.baseurl + 'GetUserOfEmpowerment', Qs.stringify({ openId: openId, deptId: deptId }))
  }

  /**
     * 获取账号赋权的可选角色
     * openId:String, deptId:int
     */
  GetRoleOfEmpowerment (openId, deptId) {
    return request.post(this.baseurl + 'GetRoleOfEmpowerment', Qs.stringify({ openId: openId, deptId: deptId }))
  }

  /**
     * 是否显示新增用户按钮
     * openId:String
     */
  DisplayAddPersonBtn (openId) {
    return request.post(this.baseurl + 'DisplayAddPersonBtn', Qs.stringify({ openId: openId }))
  }

  /**
     * 修改用户角色
     * openId:String, userId:String, roles:String, identityType:String
     */
  ModifyRoleOfUser (openId, userId, roles, identityType) {
    return request.post(this.baseurl + 'ModifyRoleOfUser', Qs.stringify({ openId: openId, userId: userId, roles: roles, identityType: identityType }))
  }

  /**
     * 注销用户
     * openId:String, userId:String
     */
  LogoutUser (openId, userId) {
    return request.post(this.baseurl + 'LogoutUser', Qs.stringify({ openId: openId, userId: userId }))
  }

  /**
     * 未绑定用户催办
     * openId:String, deptId:int, userType:int
     */
  AccWeChatMsgPush (openId, deptId, userType) {
    return request.post(this.baseurl + 'AccWeChatMsgPush', Qs.stringify({ openId: openId, deptId: deptId, userType: userType }))
  }

  /**
     * 手动拉取维修基金库中的 业主绑定情况数据
     * openId:String
     */
  GetFixfHouseInfo (openId) {
    return request.post(this.baseurl + 'GetFixfHouseInfo', Qs.stringify({ openId: openId }))
  }

  /**
     * 获取账号统计中的列表信息
     * openId:String, userType:int, deptId:int, bind:int, userName:String, startIndex:int, maxSize:int, userFlag:Integer, nameAndMobile:String
     */
  GetAccStatisticPersonList (openId, userType, deptId, bind, userName, startIndex, maxSize, userFlag, nameAndMobile) {
    return request.post(this.baseurl + 'GetAccStatisticPersonList', Qs.stringify({ openId: openId, userType: userType, deptId: deptId, bind: bind, userName: userName, startIndex: startIndex, maxSize: maxSize, userFlag: userFlag, nameAndMobile: nameAndMobile }))
  }

  /**
     * 获取当前用户的物业区域列表
     * openId:String
     */
  GetEaAreaList (openId) {
    return request.post(this.baseurl + 'GetEaAreaList', Qs.stringify({ openId: openId }))
  }

  /**
     * 获取用户详情，用于通讯录用户详情页面
     * openId:String, userId:String
     */
  GetPersonDetail (openId, userId) {
    return request.post(this.baseurl + 'GetPersonDetail', Qs.stringify({ openId: openId, userId: userId }))
  }

  /**
     * 是否显示编辑按钮
     * openId:String, userId:String
     */
  DisplayModifyPersonBtn (openId, userId) {
    return request.post(this.baseurl + 'DisplayModifyPersonBtn', Qs.stringify({ openId: openId, userId: userId }))
  }

  /**
     * 获取账号统计中的部门列表信息
     * openId:String, deptId:int, type:int, deptName:String, option:int, startIndex:int, maxSize:int
     */
  GetAccStatisticDeptList (openId, deptId, type, deptName, option, startIndex, maxSize) {
    return request.post(this.baseurl + 'GetAccStatisticDeptList', Qs.stringify({ openId: openId, deptId: deptId, type: type, deptName: deptName, option: option, startIndex: startIndex, maxSize: maxSize }))
  }

  /**
     * 是否显示赋权按钮
     * openId:String
     */
  DisplayEmpowermentBtn (openId) {
    return request.post(this.baseurl + 'DisplayEmpowermentBtn', Qs.stringify({ openId: openId }))
  }

  /**
     * 通过部门ID获取通讯录
     * openId:String, userName:String, identityType:String, deptId:int, role:String, startIndex:int, maxSize:int, option:int
     */
  GetMialByDeptId (openId, userName, identityType, deptId, role, startIndex, maxSize, option) {
    return request.post(this.baseurl + 'GetMialByDeptId', Qs.stringify({ openId: openId, userName: userName, identityType: identityType, deptId: deptId, role: role, startIndex: startIndex, maxSize: maxSize, option: option }))
  }

  /**
     * 判断是否显示注销按钮
     * openId:String, uerrId:String
     */
  DisplayLogoutUserBtn (openId, uerrId) {
    return request.post(this.baseurl + 'DisplayLogoutUserBtn', Qs.stringify({ openId: openId, uerrId: uerrId }))
  }

  /**
     * 修改用户信息
     * openId:String, userId:String, mob:String, name:String, identityType:String
     */
  ModifyPerson (openId, userId, mob, name, identityType) {
    return request.post(this.baseurl + 'ModifyPerson', Qs.stringify({ openId: openId, userId: userId, mob: mob, name: name, identityType: identityType }))
  }

  /**
     * 获取新增用户中的职务
     * openId:String, dept:int
     */
  GetUserJobOfAddUser (openId, dept) {
    return request.post(this.baseurl + 'GetUserJobOfAddUser', Qs.stringify({ openId: openId, dept: dept }))
  }

  /**
     * 获取账号赋权可选部门
     * openId:String
     */
  GetDeptOfEmpowerment (openId) {
    return request.post(this.baseurl + 'GetDeptOfEmpowerment', Qs.stringify({ openId: openId }))
  }

  /**
     * 未绑定用户催办
     * openId:String
     */
  CreateEaAreaOfExternalCode (openId) {
    return request.post(this.baseurl + 'CreateEaAreaOfExternalCode', Qs.stringify({ openId: openId }))
  }

  /**
     * 根据部门ID获取用户列表
     * openId:String, deptId:int
     */
  GetUsersByDeptId (openId, deptId) {
    return request.post(this.baseurl + 'GetUsersByDeptId', Qs.stringify({ openId: openId, deptId: deptId }))
  }

  /**
     * 获取物业区域部门列表
     * openId:String
     */
  GetEaAreaDeptList (openId) {
    return request.post(this.baseurl + 'GetEaAreaDeptList', Qs.stringify({ openId: openId }))
  }

  /**
     * 获取添加用户时所选择的部门
     * openId:String
     */
  GetDepartmentsOfAddUser (openId) {
    return request.post(this.baseurl + 'GetDepartmentsOfAddUser', Qs.stringify({ openId: openId }))
  }

  /**
     * 账户统计
     * openId:String, deptId:int
     */
  AccStatistic (openId, deptId) {
    return request.post(this.baseurl + 'AccStatistic', Qs.stringify({ openId: openId, deptId: deptId }))
  }

  /**
     * 获取配置列表
     * openId:String
     */
  getScreenRoleList (openId) {
    return request.post(this.baseurl + 'getScreenRoleList', Qs.stringify({ openId: openId }))
  }

  /**
     * 新增用户
     * openId:String, deptId:int, name:String, phone:String, roles:String, job:String, areas:String, identityType:String
     */
  AddPerson (openId, deptId, name, phone, roles, job, areas, identityType) {
    return request.post(this.baseurl + 'AddPerson', Qs.stringify({ openId: openId, deptId: deptId, name: name, phone: phone, roles: roles, job: job, areas: areas, identityType: identityType }))
  }

  /**
     * 获取添加用户时角色配置
     * openId:String, deptId:int
     */
  GetRolesOfAddUser (openId, deptId) {
    return request.post(this.baseurl + 'GetRolesOfAddUser', Qs.stringify({ openId: openId, deptId: deptId }))
  }
}
