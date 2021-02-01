<template>
  <div class="mailList" id="mailList" v-cloak v-loading='loading'>
    <div class="search bg-w">
      <div class="ub ub-pe ub-ac bor-b person-box">
        <div class="person-img" @click='enterDetail'>
          <!-- <img src="../../indexres/menu/img/header.png"> -->
          <img :src="userInfo.Headimgurl?userInfo.Headimgurl:'./img/h5_8.png'">

        </div>
        <div class="ub-f1 content-title" @click='enterDetail'>
          <div class="ft-28 col-66 col-w">{{title}}</div>
          <div class=""></div>
        </div>
        <el-button size='mini' v-if='showAddPersonBtn' plain type="primary" @click='addUser2'>新增</el-button>
        <el-button size='mini' v-if='showEmpowermentBtn' type="success" @click='addUser'>账号赋权</el-button>
        <el-button size='mini' type="danger" @click='linkToBind' v-if='userInfo.Type==="主管部门用户"'>用户统计</el-button>
      </div>
      <ul class="ub ub-ac">
        <li class="menu-style ft-30" @click='menuClick(idx)' v-bind:class="{active:active==idx}" v-for="(item,idx) of menus">
          <img v-if='idx!=0' class="menu-img" :src="item.imgType">
          {{item.Value}}
        </li>
      </ul>
      <!-- <el-autocomplete class="search-inp ub-f1" placeholder="查找关键字" size='mini' prefix-icon="el-icon-search"
          :fetch-suggestions="querySearch" :trigger-on-focus="false" @select="handleSelect" v-model="keyWord">
      </el-autocomplete> -->
    </div>
    <div class="breadcrumb bg-w ub ub-ac">
      <div class="ub-f1 breadcrumb-list col-66 ub ub-ac mar-r">
        <div class="breadcrumb-item ft-28" v-for='(item,idx) in breadcrumbList'>
          <span v-if='idx!=0'>-></span>
          <span @click='linkTo(item,true)' v-bind:class='{active:currentDept==item.NodeId}'>{{item.name}}</span>
        </div>
      </div>
      <!-- <el-button plain size='mini' icon="el-icon-search">搜索</el-button> -->
      <el-button @click='showSearch' icon="el-icon-search" circle size='mini'></el-button>
    </div>
    <div class="pad-l-20" v-if="breadcrumbList.length < 3 && isIdentityTypeBool">
      <!-- 物业处(1),  维修资金中心(2), 物业协会(3), 测试(4); -->
      <el-select style="width: 3.5rem;" size="mini" v-model="identityType" @change="handleIdentityType">
        <el-option label="全部部门" value=""></el-option>
        <!-- <el-option label="局领导" value="局领导"></el-option> -->
        <el-option label="物业处" value="物业处"></el-option>
        <el-option label="维修资金中心" value="维修资金中心"></el-option>
        <el-option label="物业协会" value="物业协会"></el-option>
        <el-option label="项目组" value="项目组"></el-option>
      </el-select>
    </div>
    <div class="content">
      <ul class="list">
        <li class="ub person-list" @click='linkTo(item)' v-for='item in tableData'>
          <div class="avatar bg-g">
            <img src="../../indexres/menu/img/header.png">
          </div>
          <div class="ub-f1">
            <div class="ft-30 ft-w col-33">
              <template v-if="item.identityType">
                <span class="tip-b bg-y" v-if="item.identityType == '物业协会'">{{item.identityType}}</span>
                <span class="tip-b bg-gr" v-else-if="item.identityType == '维修资金中心'">{{item.identityType}}</span>
                <span class="tip-b bg-99" v-else-if="item.identityType == '项目组'">{{item.identityType}}</span>
                <span class="tip-b bg-b" v-else>{{item.identityType}}</span>
              </template>
              <span class="name">&nbsp;{{item.name}}&nbsp;</span>
              <!-- <span class="tip-b bg-y">维修资金中心局领导”“物业处”“维修资金中心” “物业协会” “项目组”</span> -->
              <!-- <span class="" :class="[item.openId?'col-g':'col-r']">{{item.openId?'已绑定':'未绑定'}}</span> -->
              <span>{{item.mob1}}</span>
            </div>
            <!-- <div class="ft-28 col-99 mar-item">
            </div> -->
            <div class="ft-28 ub-f1 ub ub-ac role-box pad-t-20">
              <div class="role-item" v-for='i of item.roleType'>
                <img :src='i'>
              </div>
            </div>
          </div>
          <!-- <div class="ft-28 ub-f1 ub ub-ac role-box">
              <div class="role-item" v-for='i of item.roleType'>
                  <img :src='i'>
              </div>
          </div> -->
        </li>
        <li class="ub bor-b" @click='linkTo(item,item.Name)' v-for='(item,idx) in tableData2' :key='idx'>
          <div class="avatar bg-g">
            <img
                src="../../indexres/menu/img/mailList@2x.png">
          </div>
          <div class="ub-f1 ub ub-ac ub-pj">
            <div class="ft-32 ft-w col-33 name">{{item.Name}}</div>
            <span class="el-icon-arrow-right ft-28 col-99"></span>
          </div>
        </li>
        <el-collapse v-model="activeNames" v-if='tableData3'>
          <el-collapse-item :title="name+'('+item.length+')'" :name="name" v-for='(item,name,idx) in tableData3' :key='idx'>
            <li class="ub bor-b" @click='linkTo(i,i.Name)' v-for='(i,idx) of item'>
              <div class="avatar bg-g">
                <img
                    src="../../indexres/menu/img/mailList@2x.png">
              </div>
              <div class="ub-f1 ub ub-ac ub-pj">
                <div class="ft-32 ft-w col-33 name">{{i.Name}}</div>
                <span class="el-icon-arrow-right ft-28 col-99"></span>
              </div>
            </li>
          </el-collapse-item>
        </el-collapse>
        <div class="tx-c ft-30 col-66 no-data" :style="{ display: tableData.length==0&&tableData2.length==0?'block':'none' }">暂无数据</div>
      </ul>

    </div>

    <el-drawer
        :visible.sync="drawer"
        direction="ttb"
        size='100%'
        :with-header="false">
      <div class="drawer-content">
        <div class="ft-32">账号赋权</div>
        <div class="item-style ub ub-ac mar-t">
          <span class="ft-28"><span class="col-r">*</span>{{userInfo.Type=='物业服务企业用户'?'企业':'单位'}}：</span>
          <el-select
              class="ub-f1"
              v-model="orgCode"
              size='mini'
              @change='orgCodeChange2'
              placeholder="请选择">
            <el-option
                v-for="item in orgOptions"
                :key="item.NodeId"
                :label="item.Name"
                :value="item.NodeId">
            </el-option>
          </el-select>
        </div>
        <div class="item-style ub ub-ac ">
          <span class="ft-28"><span class="col-r">*</span>姓名：</span>
          <el-select class="ub-f1" @change='userChange' v-model="userObj" size='mini' placeholder="请选择">
            <el-option
                v-for="item in users"
                :key="item.UniqID"
                :label="item.Name"
                :value="item.UniqID">
            </el-option>
          </el-select>
        </div>

        <div class="item-style ub ub-ac">
          <span class="ft-28">角色：</span>
          <el-select class="ub-f1" multiple v-model="role" size='mini' placeholder="请选择">
            <el-option
                v-for="item in roles"
                :key="item.NodeId"
                :label="item.Name"
                :value="item.NodeId">
            </el-option>
          </el-select>
        </div>
        <div class="item-style ub ub-ac" v-if="isIdentityTypeBool">
          <span class="ft-28">部门：</span>
          <el-select class="ub-f1" size="mini" v-model="addIdentityType" placeholder="请选择">
            <el-option label="无" value=""></el-option>
            <el-option label="物业处" value="物业处"></el-option>
            <el-option label="维修资金中心" value="维修资金中心"></el-option>
            <el-option label="物业协会" value="物业协会"></el-option>
            <el-option label="项目组" value="项目组"></el-option>
          </el-select>
        </div>
        <div class="item-style ub ub-pj mar-t">
          <el-button size='mini' :disabled='disabledBtn' class="ub-f1" @click='modifyHandle' type="primary">提交</el-button>
          <el-button size='mini' class="ub-f1" @click='backHandle' type="info">返回</el-button>
        </div>
      </div>
    </el-drawer>

    <!-- 添加账号 -->
    <el-drawer
        :visible.sync="drawer2"
        direction="ttb"
        size='100%'
        :with-header="false">
      <div class="drawer-content">

        <div class="ft-32">添加账号</div>
        <div class="item-style ub ub-ac mar-t">
          <span class="ft-28"><span class="col-r">*</span>{{userInfo.Type=='物业服务企业用户'?'企业':'单位'}}：</span>
          <el-select
              class="ub-f1"
              v-model="orgCode"
              size='mini'
              @change='orgCodeChange'
              placeholder="请选择">
            <el-option
                v-for="item in orgOptions"
                :key="item.NodeId"
                :label="item.Name"
                :value="item.NodeId">
            </el-option>
          </el-select>
        </div>
        <div class="item-style ub ub-ac">
          <span class="ft-28"><span class="col-r">*</span>姓名：</span>
          <el-input class="ub-f1" size='mini' v-model="userName" placeholder="请输入"></el-input>
        </div>

        <div class="item-style ub ub-ac">
          <span class="ft-28"><span class="col-r">*</span>手机：</span>
          <el-input class="ub-f1" size='mini' v-model="phoneAdd" placeholder="请输入手机号"></el-input>
        </div>
        <div class="item-style ub ub-ac">
          <span class="ft-28"><span class="col-r">*</span>职务：</span>
          <el-select class="ub-f1" @change='mechanismChange' v-model="mechanism" size='mini' placeholder="请选择">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="item-style ub ub-ac" v-if='showArea'>
          <span class="ft-28"><span class="col-r">*</span>小区：</span>
          <el-select class="ub-f1" filterable  v-model="area" size='mini' placeholder="请选择">
            <el-option
                v-for="item in areas"
                :key="item.EaAreaCode"
                :label="item.EaAreaName"
                :value="item.EaAreaCode">
            </el-option>
          </el-select>
        </div>
        <div class="item-style ub ub-ac">
          <span class="ft-28"><span class="col-r">*</span>角色：</span>
          <el-select class="ub-f1"  multiple v-model="role" size='mini' placeholder="请选择">
            <el-option
                v-for="item in roles"
                :key="item.NodeId"
                :label="item.Name"
                :value="item.NodeId">
            </el-option>
          </el-select>
        </div>
        <div class="item-style ub ub-ac" v-if="isIdentityTypeBool">
          <span class="ft-28">部门：</span>
          <el-select class="ub-f1" size="mini" v-model="addIdentityType" placeholder="请选择">
            <el-option label="无" value=""></el-option>
            <el-option label="物业处" value="物业处"></el-option>
            <el-option label="维修资金中心" value="维修资金中心"></el-option>
            <el-option label="物业协会" value="物业协会"></el-option>
            <el-option label="项目组" value="项目组"></el-option>
          </el-select>
        </div>
        <div class="item-style ub ub-pj mar-t">
          <el-button size='mini' class="ub-f1" @click='submitHandle' type="primary">提交</el-button>
          <el-button size='mini' class="ub-f1" @click='backHandle' type="info">返回</el-button>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import { MailMgeController } from '../../service/MailMgeController/MailMgeController.js'
import { SysConfigServiceSvr } from '../../service/SysConfigServiceSvr.js'
import { WechatAuthControllerSvr } from '../../service/WechatAuthControllerSvr.js'
import { CommonControllerSvr } from '../../service/CommonControllerSvr.js'
import { utils } from '../../utils/common.js'
import Storage from '../../utils/storage.js'
import { validatePhone } from '../../utils/validate.js'
export default {
  components: {},
  props: {},
  data () {
    return {
      userName: '',
      phoneAdd: '',
      tableData: [],
      tableData2: [],
      tableData3: null,
      keyWord: '',
      userInfo: {},
      drawer: false,
      drawer2: false,
      orgCode: null,
      mechanism: '',
      orgOptions: [],
      role: [],
      noRole: [],
      roles: [],
      options: [],
      users: [],
      userObj: '',
      area: '',
      areas: [],
      NodeId: '',
      active: 0,
      showAddPersonBtn: false,
      showEmpowermentBtn: false,
      loadingMore: false,
      pageSize: 20,
      keyName: '',
      searchData: [],
      breadcrumbList: [{ name: '全部', NodeId: 0 }],
      pageIndex: 0,
      menus: [{
        Value: '全部'
      }],
      loading: false,
      showArea: false,
      title: '全部',
      currentDept: 0,
      activeNames: '',
      uniqID: '',
      selfDeptId: '',
      identityType: '', // 按单位搜索
      addIdentityType: '', // 新增、账号赋权使用（部门）
      isIdentityTypeBool: false // 判断是否有添加部门权限
    }
  },
  computed: {
    disabledBtn () {
      if (!this.userObj || !this.orgCode) {
        return true
      } else {
        return false
      }
    }
  },
  created () {
    this.mailMgeController = new MailMgeController()
    this.wechatAuthControllerSvr = new WechatAuthControllerSvr()
    this.commonControllerSvr = new CommonControllerSvr()
    this.sysConfigServiceSvr = new SysConfigServiceSvr()
    this.wxApi.getwxUser().then(() => {
      this.commonControllerSvr.GetCongfigOfOnOrOff(Storage.get('userInfo').OpenId, 6).then(res => {
        if (res) {
          this.wechatAuthControllerSvr.GetTwoWxUserByOpenId(Storage.get('userInfo').OpenId).then(resq => {
            this.userInfo = resq
            this.getCreate()
          }).catch(err => {
            this.$message({
              type: 'error',
              message: err
            })
          })
        } else {
          this.userInfo = Storage.get('userInfo')
          this.getCreate()
        }
      }).catch(err => {
        this.$message({
          type: 'error',
          message: err
        })
      })
    })
  },
  methods: {
    getCreate () {
      this.mailObject = this.getQueryStringChinese('mailObject')
      const role = this.getQueryStringChinese('role')
      this.getData(role == '全部' ? '' : role)
      this.getHeaderMune(role)
      this.displayAddPersonBtn()
      this.displayEmpowermentBtn()
      if (this.userInfo.RoleNames.split(',').indexOf('市局用户') > -1 || this.userInfo.RoleNames.split(',').indexOf('区局用户') > -1) {
        this.isIdentityTypeBool = true
      }
      if (this.userInfo.Type == '物业服务企业用户') {
        this.showArea = true
      }
    },
    getHeaderMune (role) {
      this.mailMgeController.getScreenRoleList(this.userInfo.OpenId).then(res => {
        if (res) {
          this.menus = this.menus.concat(res)
          this.menus.forEach((item) => {
            this.menus.forEach((item, idx) => {
              if (item.Value == '局领导') {
                item.imgType = './img/h5_18.png'
              }
              if (item.Value == '业主评价') {
                item.imgType = './img/h5_17.jpg'
              }
              if (item.Value == '负责人') {
                item.imgType = './img/h5_9.png'
              }
              if (item.Value == '信息公开') {
                item.imgType = './img/h5_10.png'
              }
              if (item.Value == '安全检查') {
                item.imgType = './img/h5_11.png'
              }
              if (item.Value == '通知发布') {
                item.imgType = './img/h5_12.png'
              }
              if (item.Value == '共有资金') {
                item.imgType = './img/public.jpg'
              }
              if (item.Value == '报表统计') {
                item.imgType = './img/h5_13.png'
              }
              if (item.Value == '诚信管理') {
                item.imgType = './img/h5_14.png'
              }
              if (item.Value == '疫情补贴') {
                item.imgType = './img/h5_15.jpg'
              }
              if (item.Value == '项目经理') {
                item.imgType = './img/h5_16.jpg'
              }
            })
          })
          if (role) {
            this.menus.forEach((item, idx) => {
              if (item.Value == role) {
                this.active = idx
              }
            })
          }
        }
      }).catch(err => {
        this.$message({
          type: 'error',
          message: err
        })
      })
    },
    addUser () {
      this.addIdentityType = ''
      this.users = []
      this.mailMgeController.GetDeptOfEmpowerment(this.userInfo.OpenId).then(res => {
        this.drawer = true
        this.orgOptions = res._Items
        this.orgCode = res._Items[0].NodeId
        // this.orgCodeChange(res._Items[0].NodeId)
        this.getRole()
        this.mailMgeController.GetUserOfEmpowerment(this.userInfo.OpenId, res._Items[0].NodeId).then(res => {
          this.users = res._Items
        }).catch(err => {
          this.$message({
            type: 'error',
            message: err
          })
        })
      }).catch(err => {
        this.drawer = true
        this.$message({
          type: 'error',
          message: err
        })
      })
    },
    // 获取赋权功能中的角色
    getRole () {
      this.mailMgeController.GetRoleOfEmpowerment(this.userInfo.OpenId, this.orgCode).then(res => {
        if (res) {
          this.roles = res._Items
        }
      }).catch(err => {
        this.$message({
          type: 'error',
          message: err
        })
      })
    },

    // 获取物业区域
    getEaAreaList () {
      this.mailMgeController.GetEaAreaList(this.userInfo.OpenId).then(res => {
        if (res) {
          this.areas = res._Items
        }
      })
    },
    addUser2 () {
      this.addIdentityType = ''
      this.mailMgeController.GetDepartmentsOfAddUser(this.userInfo.OpenId).then(res => {
        this.drawer2 = true
        this.orgOptions = res._Items
        this.orgCode = res._Items[0].NodeId
        this.orgCodeChange(this.orgCode)
      }).catch(err => {
        this.$message({
          type: 'error',
          message: err
        })
      })
      this.getEaAreaList()
    },
    mechanismChange (val) {
      if (val == '负责人') {
        this.roles.forEach((item) => {
          this.role.push(item.NodeId)
        })
      }
    },
    modifyHandle () {
      const temp = this.role.concat(this.noRole)
      this.mailMgeController.ModifyRoleOfUser(this.userInfo.OpenId, this.userObj, temp.join(','), this.addIdentityType).then(res => {
        this.$message({
          type: 'success',
          message: '修改成功'
        })
      }).catch(err => {
        this.$message({
          type: 'error',
          message: err
        })
      })
    },
    menuClick (idx) {
      this.identityType = ''
      this.active = idx
      if (idx == 0) {
        this.getData()
      } else {
        this.getData(this.menus[idx].Value)
      }
    },
    // 选择单位搜索
    handleIdentityType () {
      if (this.active == 0) {
        this.getData()
      } else {
        this.getData(this.menus[this.active].Value)
      }
    },
    userChange (val) {
      this.role = []
      this.noRole = []
      this.getRole()
      for (const item of this.users) {
        if (val === item.UniqID) {
          const temp = item.RoleIds
          const tempArr = []
          this.roles.forEach((i, idx) => {
            tempArr.push(i.NodeId)
            if (temp.indexOf(i.NodeId) != -1) {
              this.role.push(i.NodeId)
            }
          })
          temp.forEach((i) => {
            if (tempArr.indexOf(i) == -1) {
              this.noRole.push(i)
            }
          })
          break
        }
      }
    },
    backHandle () {
      this.userName = ''
      this.phoneAdd = ''
      this.userObj = ''
      this.users = []
      this.role = []
      this.noRole = []
      this.area = ''
      this.areas = []
      this.roles = []
      this.mechanism = ''
      this.drawer = false
      this.drawer2 = false
    },
    submitHandle () {
      if (!this.userName || !this.phoneAdd || this.role.length == 0 || !this.mechanism) {
        this.$message({
          type: 'error',
          message: '请填写完整再提交!'
        })
      } else {
        if (!validatePhone(this.phoneAdd)) {
          return this.$message({
            type: 'error',
            message: '请填写正确手机号!'
          })
        }
        if (this.mechanism == '项目经理' && this.area == '') {
          return this.$message({
            type: 'error',
            message: '至少选择一个物业区域!'
          })
        }
        this.mailMgeController.AddPerson(
          this.userInfo.OpenId,
          this.NodeId,
          this.userName,
          this.phoneAdd,
          this.role.join(','),
          this.mechanism,
          this.area,
          this.addIdentityType
        ).then(res => {
          this.$message({
            type: 'success',
            message: '添加成功'
          })
          this.backHandle()
          this.getData()
        }).catch(err => {
          this.$message({
            type: 'error',
            message: err
          })
        })
      }
    },
    // 获取职务
    getJob (val) {
      this.options = []
      this.mailMgeController.GetUserJobOfAddUser(this.userInfo.OpenId, val).then(res => {
        for (const item of res) {
          this.options.push({
            label: item,
            value: item
          })
        }
        this.mechanism = res[0]
        if (this.mechanism == '负责人') {
          this.roles.forEach((item) => {
            this.role.push(item.NodeId)
          })
        }
      })
    },

    // 获取角色
    orgCodeChange (val) {
      this.NodeId = val
      this.roles = []
      this.role = []
      this.mailMgeController.GetRolesOfAddUser(this.userInfo.OpenId, val).then(res => {
        this.getJob(val)
        if (res && res._Items) {
          this.roles = res._Items
        }
      }).catch(err => {
        this.$message({
          type: 'error',
          message: err
        })
      })
    },

    //
    orgCodeChange2 (val) {
      this.NodeId = val
      this.roles = []
      this.users = []
      this.role = []
      this.userObj = ''
      this.mailMgeController.GetUserOfEmpowerment(this.userInfo.OpenId, this.NodeId).then(res => {
        this.users = res._Items
      }).catch(err => {
        this.$message({
          type: 'error',
          message: err
        })
      })
      this.getRole()
    },
    getData (menu) {
      this.tableData = []
      this.tableData2 = []
      this.breadcrumbList = this.getQueryStringChinese('breadcrumbList') ? JSON.parse(decodeURI(this.getQueryStringChinese('breadcrumbList'))) : []
      this.loading = true
      if (this.mailObject == undefined) {
        this.mailMgeController.GetMialByDeptId(this.userInfo.OpenId, '', this.identityType, 0, menu || '', 0, -1, '')
          .then(res => {
            this.loading = false
            if (res && res.user && res.user.length > 0) {
              this.tableData = res.user
              for (const item of this.tableData) {
                const temp = item.roleName.split(',')
                item.roleType = []
                temp.forEach((i, idx) => {
                  if (i.indexOf('负责人') >= 0) {
                    item.roleType.push('./img/h5_9.png')
                  }
                  if (i.indexOf('局领导') >= 0) {
                    item.roleType.push('./img/h5_18.png')
                  }
                  if (i.indexOf('业主评价') >= 0) {
                    item.roleType.push('./img/h5_17.jpg')
                  }
                  if (i.indexOf('信息公开') >= 0) {
                    item.roleType.push('./img/h5_10.png')
                  }
                  if (i.indexOf('安全检查') >= 0) {
                    item.roleType.push('./img/h5_11.png')
                  }
                  if (i.indexOf('通知发布') >= 0) {
                    item.roleType.push('./img/h5_12.png')
                  }
                  if (i.indexOf('报表统计') >= 0) {
                    item.roleType.push('./img/h5_13.png')
                  }
                  if (i.indexOf('诚信管理') >= 0) {
                    item.roleType.push('./img/h5_14.png')
                  }
                  if (i.indexOf('疫情补贴') >= 0) {
                    item.roleType.push('./img/h5_15.jpg')
                  }
                  if (i.indexOf('项目经理') >= 0) {
                    item.roleType.push('./img/h5_16.jpg')
                  }
                  if (i.indexOf('共有资金') >= 0) {
                    item.roleType.push('./img/public.jpg')
                  }
                })
              }
            }
            if (res && res.currentDept) {
              this.currentDept = res.currentDept.NodeId
              let temp = true
              this.breadcrumbList.forEach((item, idx) => {
                if (item.NodeId == res.currentDept.NodeId) {
                  temp = false
                  this.breadcrumbList = this.breadcrumbList.splice(0, idx + 1)
                }
              })
              if (temp) {
                this.breadcrumbList.push({ name: res.currentDept.Name, NodeId: res.currentDept.NodeId })
              }
            } else {
              this.breadcrumbList = [{ name: '全部', NodeId: 0 }]
            }
            // else if(this.breadcrumbList.length==0){
            //     this.breadcrumbList.push({name:'全部',NodeId:0})
            // }
            if (res && res.eaAreaDept) {
              this.tableData3 = res.eaAreaDept
            }
            if (res && res.thisUser) {
              this.title = res.thisUser.Name
              this.uniqID = res.thisUser.UniqID
              this.selfDeptId = res.thisUser.GroupIds[0]
            }
            if (res && res.dept && res.dept._Items) {
              this.tableData2 = res.dept._Items
            }
          }).catch(err => {
            this.loading = false
            this.$message({
              type: 'error',
              message: err
            })
          })
      } else {
        this.mailMgeController.GetMialByDeptId(this.userInfo.OpenId, '', this.identityType, this.mailObject, menu || '', 0, -1, '').then(res => {
          this.loading = false
          if (res && res.user) {
            this.tableData = res.user
            for (const item of this.tableData) {
              const temp = item.roleName.split(',')
              item.roleType = []
              temp.forEach((i, idx) => {
                if (i.indexOf('负责人') >= 0) {
                  item.roleType.push('./img/h5_9.png')
                }
                if (i.indexOf('局领导') >= 0) {
                  item.roleType.push('./img/h5_18.png')
                }
                if (i.indexOf('业主评价') >= 0) {
                  item.roleType.push('./img/h5_17.jpg')
                }
                if (i.indexOf('信息公开') >= 0) {
                  item.roleType.push('./img/h5_10.png')
                }
                if (i.indexOf('安全检查') >= 0) {
                  item.roleType.push('./img/h5_11.png')
                }
                if (i.indexOf('通知发布') >= 0) {
                  item.roleType.push('./img/h5_12.png')
                }
                if (i.indexOf('报表统计') >= 0) {
                  item.roleType.push('./img/h5_13.png')
                }
                if (i.indexOf('诚信管理') >= 0) {
                  item.roleType.push('./img/h5_14.png')
                }
                if (i.indexOf('疫情补贴') >= 0) {
                  item.roleType.push('./img/h5_15.jpg')
                }
                if (i.indexOf('项目经理') >= 0) {
                  item.roleType.push('./img/h5_16.jpg')
                }
                if (i.indexOf('共有资金') >= 0) {
                  item.roleType.push('./img/public.jpg')
                }
              })
            }
          }
          if (res && res.currentDept) {
            this.currentDept = res.currentDept.NodeId
            let temp = true
            this.breadcrumbList.forEach((item, idx) => {
              if (item.NodeId == res.currentDept.NodeId) {
                temp = false
                this.breadcrumbList = this.breadcrumbList.splice(0, idx + 1)
              }
            })
            if (temp) {
              this.breadcrumbList.push({ name: res.currentDept.Name, NodeId: res.currentDept.NodeId })
            }
          } else {
            this.breadcrumbList = [{ name: '全部', NodeId: 0 }]
          }
          // else if(this.breadcrumbList.length==0){
          //     this.breadcrumbList.push({name:'全部',NodeId:0})
          // }
          if (res && res.eaAreaDept) {
            this.tableData3 = res.eaAreaDept
          }
          if (res && res.thisUser) {
            this.title = res.thisUser.Name
            this.uniqID = res.thisUser.UniqID
            this.selfDeptId = res.thisUser.GroupIds[0]
          }
          if (res && res.dept && res.dept._Items) {
            this.tableData2 = res.dept._Items
          }
        }).catch(err => {
          this.$message({
            type: 'error',
            message: err
          })
          this.loading = false
        })
      }
    },
    linkTo (item, preson) {
      if (!preson) {
        window.location.href = './personInfo/personInfo.html?mailObject=' + item.uniqID + '&selfDeptId=' + this.selfDeptId
      } else {
        window.location.href = './mailList.html?mailObject=' + item.NodeId + '&role=' + this.menus[this.active].Value + '&breadcrumbList=' + encodeURI(JSON.stringify(this.breadcrumbList))
      }
    },
    linkToBind () {
      const nowTime = new Date().getTime()
      window.location.href = `../bindingStatistics/bindingStatistics.html?time=${nowTime}`
    },
    enterDetail () {
      window.location.href = './personInfo/personInfo.html?mailObject=' + this.uniqID
    },
    loadMore () {
      this.pageIndex += this.pageSize
      this.mailMgeController.GetMialByDeptId(this.userInfo.OpenId, this.keyName, this.identityType, 0, '全部', this.pageIndex, this.pageSize, '')
        .then(res => {
          if (res.user) {
            if (this.searchData.length > 0 && res.user.length <= this.pageSize) {
              this.loadingMore = true
            } else {
              this.loadingMore = false
            }
            for (const item of res.user) {
              const temp = item.roleName.split(',')
              item.roleType = []
              temp.forEach((i, idx) => {
                if (i.indexOf('负责人') >= 0) {
                  item.roleType.push('./img/h5_9.png')
                }
                if (i.indexOf('信息公开') >= 0) {
                  item.roleType.push('./img/h5_10.png')
                }
                if (i.indexOf('安全检查') >= 0) {
                  item.roleType.push('./img/h5_11.png')
                }
                if (i.indexOf('通知发布') >= 0) {
                  item.roleType.push('./img/h5_12.png')
                }
                if (i.indexOf('报表统计') >= 0) {
                  item.roleType.push('./img/h5_13.png')
                }
                if (i.indexOf('诚信管理') >= 0) {
                  item.roleType.push('./img/h5_14.png')
                }
                if (i.indexOf('共有资金') >= 0) {
                  item.roleType.push('./img/public.jpg')
                }
              })
            }
            this.searchData = this.searchData.concat(res.user)
          }
          this.loading = false
        }).catch(err => {
          this.$message({
            type: 'error',
            message: err
          })
          this.loading = false
        })
    },
    // 是否显示新增按钮
    displayAddPersonBtn () {
      this.mailMgeController.DisplayAddPersonBtn(this.userInfo.OpenId).then(res => {
        this.showAddPersonBtn = res
      }).catch(err => {
        this.$message({
          type: 'error',
          message: err
        })
      })
    },
    // 是否显示赋权按钮
    displayEmpowermentBtn () {
      this.mailMgeController.DisplayEmpowermentBtn(this.userInfo.OpenId).then(res => {
        this.showEmpowermentBtn = res
      }).catch(err => {
        this.$message({
          type: 'error',
          message: err
        })
      })
    },
    showSearch () {
      window.location.href = './search/search.html?selfDeptId=' + this.selfDeptId
    },

    querySearch (queryString, cb) {
      var restaurants = this.restaurants
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
      // 调用 callback 返回建议列表的数据
      cb(results)
    },

    createFilter (queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) >= 0)
      }
    },

    handleSelect () {

    },

    getQueryStringChinese (name) {
      const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
      const r = window.location.search.substr(1).match(reg)
      if (r != null) return decodeURI(r[2])
      return null
    }
  }

}
</script>

<style scoped src="./mailList.scss">

</style>
