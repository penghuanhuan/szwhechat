<template>
  <div class="personInfo bg-g" id="personInfo" v-cloak v-loading='loading'>
    <div class="info bg-w ub ub-ac">
      <div class="avatar bg-g">
        <img :src="squareUrl">
      </div>
      <div class="ub-f1">
        <div v-if='!isEdite' class="ft-30 col-33 name ft-w">{{mailObject.psesonName}}</div>
        <el-input class="ft-30 col-33 name ft-w" v-if='isEdite' v-model="psesonName" size='small' placeholder="请输入内容"></el-input>
        <div class="ft-28 col-99">{{mailObject.deptName}} {{mailObject.job}}</div>
      </div>
      <div class="ft-30 col-33" :class="[mailObject.openId ? 'col-g' : 'col-r']">{{mailObject.openId?'已绑定':'未绑定'}}</div>
      <!-- <el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar> -->
    </div>
    <!-- <div class="remark mar-b pad-b pad-l pad-r pad-t bg-w col-33 ft-30 ft-w">
       设置备注和描述
     </div> -->
    <div class="pad-b bor-b pad-l pad-r pad-t bg-w col-33 ft-30">
      <span class="mar-r ft-w">手机</span>
      <!-- <a v-if='!mailObject.mob1'>无</a> -->
      <a v-if='!isEdite' :href="'tel:'+mailObject.mob1">{{mailObject.mob1?mailObject.mob1:''}}</a>
      <el-input class="numInput" v-if='isEdite' v-model="phone" size='small' placeholder="请输入手机号"></el-input>
    </div>
    <div class="pad-b bor-b pad-l pad-r pad-t bg-w col-33 ft-30" v-if="isIdentityTypeBool && mailObject.type == '主管部门用户'">
      <span class="mar-r ft-w">部门</span>
      <el-tag v-if='!isEdite && mailObject.identityType' size="small">{{mailObject.identityType}}</el-tag>
      <el-select class="numInput" v-if='isEdite' size="mini" v-model="addIdentityType" placeholder="请选择">
        <el-option label="无" value=""></el-option>
        <el-option label="物业处" value="物业处"></el-option>
        <el-option label="维修资金中心" value="维修资金中心"></el-option>
        <el-option label="物业协会" value="物业协会"></el-option>
        <el-option label="项目组" value="项目组"></el-option>
      </el-select>
    </div>
    <div class="pad-b ub ub-ac bor-b pad-l pad-r pad-t bg-w col-33 ft-30">
      <div class="mar-r ft-w">角色</div>
      <div class="ub-f1 ub" style="flex-wrap: wrap;">
        <span class="ft-30 line col-66" v-for='(item,idx) of roles'><img :src="item.img">{{item.value}}</span>
      </div>
    </div>
    <div class="pad-b ub ub-ac mar-b pad-l pad-r pad-t bg-w col-33 ft-30" v-if='mailObject.eaAreaName'>
      <div class="mar-r ft-w">所属项目</div>
      <div class="ub-f1 ub" style="flex-wrap: wrap;">
        {{mailObject.eaAreaName}}
      </div>
    </div>

    <div v-if='mailObject.legalRep' class="pad-b ub ub-ac pad-l bor-b pad-r pad-t bg-w col-33 ft-30">
      <div class="mar-r ft-w">法人</div>
      <div class="ub-f1">
        {{mailObject.legalRep}}
      </div>
    </div>
    <div v-if='mailObject.legalRep' class="pad-b ub ub-ac pad-l pad-r pad-t bg-w col-33 ft-30">
      <div class="mar-r ft-w">法人联系方式</div>
      <div class="ub-f1">
        <a :href="'tel:'+mailObject.mob1">{{mailObject.legalRepTel?mailObject.legalRepTel:'无'}}</a>
      </div>
    </div>

    <div  class="edite tx-c">
      <el-button v-if='showLogout' type="danger" class="edite-btn" @click='logout'>注销</el-button>
      <el-button v-if='cancellation' type="danger" class="edite-btn" @click='canceHandle'>解除绑定</el-button>
      <el-button v-if='showEditBtn' :type="isEdite?'info':'success'" @click='editHandle' class="edite-btn">{{isEdite?'取消':'编辑'}}</el-button>
      <el-button v-if='showEditBtn' type="primary" class="edite-btn" @click='submit'>提交</el-button>
    </div>
  </div>
</template>

<script>
import Storage from '../../../utils/storage.js'
import { Page } from '../../../models/page.js'
import { utils } from '../../../utils/common.js'
import { validatePhone } from '../../../utils/validate.js'
import { MailMgeController } from '../../../service/MailMgeController/MailMgeController.js'
import { WechatAuthControllerSvr } from '../../../service/WechatAuthControllerSvr.js'
const cityOptions = []
export default {
  components: {},
  props: {},
  data () {
    return {
      squareUrl: '../../../indexres/menu/img/header.png',
      userInfo: {},
      mailObject: {
        deptId: '',
        deptName: '',
        job: '',
        mob1: '',
        openId: '',
        psesonName: '',
        role: '',
        userId: ''
      },
      isEdite: false,
      key: '',
      showEditBtn: false,
      showLogout: false,
      phone: '',
      psesonName: '',
      loading: false,
      roles: [],
      cancellation: false,
      selfDeptId: '',
      addIdentityType: '', // 新增、账号赋权使用（部门）
      isIdentityTypeBool: false // 判断是否有添加部门权限
    }
  },
  created () {
    this.wxApi.getwxUser().then(() => {
      this.userInfo = Storage.get('userInfo')
      this.mailMgeController = new MailMgeController()
      this.wechatAuthControllerSvr = new WechatAuthControllerSvr()
      this.key = utils.getQueryString('mailObject')
      this.selfDeptId = utils.getQueryString('selfDeptId')
      if (this.userInfo.RoleNames.split(',').indexOf('市局用户') > -1 || this.userInfo.RoleNames.split(',').indexOf('区局用户') > -1) {
        this.isIdentityTypeBool = true
      }
      this.mailMgeController.GetPersonDetail(this.userInfo.OpenId, this.key).then(res => {
        if (res) {
          this.mailObject = res
          if (this.mailObject.openId == this.userInfo.OpenId) {
            this.cancellation = true
          }
          if (res.userId) {
            this.displayLogoutBtn(res.userId)
          }

          const arr = this.mailObject.role && this.mailObject.role != '' ? this.mailObject.role.split(',') : []
          arr.forEach((i, idx) => {
            if (i.indexOf('负责人') >= 0) {
              this.roles.push({
                img: '../img/h5_9.png',
                value: i
              })
            }
            if (i.indexOf('局领导') >= 0) {
              this.roles.push({
                img: '../img/h5_18.png',
                value: i
              })
            }
            if (i.indexOf('业主评价') >= 0) {
              this.roles.push({
                img: '../img/h5_17.jpg',
                value: i
              })
            }
            if (i.indexOf('信息公开') >= 0) {
              this.roles.push({
                img: '../img/h5_10.png',
                value: i
              })
            }
            if (i.indexOf('安全检查') >= 0) {
              this.roles.push({
                img: '../img/h5_11.png',
                value: i
              })
            }
            if (i.indexOf('通知发布') >= 0) {
              this.roles.push({
                img: '../img/h5_12.png',
                value: i
              })
            }
            if (i.indexOf('报表统计') >= 0) {
              this.roles.push({
                img: '../img/h5_13.png',
                value: i
              })
            }
            if (i.indexOf('诚信管理') >= 0) {
              this.roles.push({
                img: '../img/h5_14.png',
                value: i
              })
            }
            if (i.indexOf('疫情补贴') >= 0) {
              this.roles.push({
                img: '../img/h5_15.jpg',
                value: i
              })
            }
            if (i.indexOf('项目经理') >= 0) {
              this.roles.push({
                img: '../img/h5_16.jpg',
                value: i
              })
            }
            if (i.indexOf('共有资金') >= 0) {
              this.roles.push({
                img: '../img/public.jpg',
                value: i
              })
            }
          })
        }
      }).catch(err => {
        this.$message({
          type: 'error',
          message: err
        })
      })
      this.displayModifyPersonBtn()
    })
  },

  mounted () {

  },

  methods: {
    logout () {
      this.$confirm('是否确定要注销？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.mailMgeController.LogoutUser(this.userInfo.OpenId, this.mailObject.userId).then(res => {
          this.$message({
            type: 'success',
            message: '注销成功'
          })
          setTimeout(() => {
            window.history.go(-1)
          }, 1000)
        }).catch(err => {
          this.$message({
            type: 'error',
            message: err
          })
        })
      }).catch(() => {

      })
    },
    getQueryStringChinese (name) {
      const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
      const r = window.location.search.substr(1).match(reg)
      if (r != null) return decodeURI(r[2])
      return null
    },
    displayLogoutBtn (userId) {
      this.mailMgeController.DisplayLogoutUserBtn(this.userInfo.OpenId, userId).then(res => {
        this.showLogout = res
      }).catch(err => {
        this.$message({
          type: 'error',
          message: err
        })
      })
    },
    displayModifyPersonBtn () {
      this.mailMgeController.DisplayModifyPersonBtn(this.userInfo.OpenId, this.key).then(res => {
        this.showEditBtn = res
      }).catch(err => {
        this.$message({
          type: 'error',
          message: err
        })
      })
    },
    editHandle () {
      this.isEdite = !this.isEdite
      if (this.mailObject.mob1) {
        this.phone = this.mailObject.mob1
      }
      this.psesonName = this.mailObject.psesonName
    },
    submit () {
      if (validatePhone(this.phone)) {
        this.psesonName = this.psesonName.replace(/\s+/g, '')
        if (this.psesonName == '' || this.psesonName == null) {
          this.$message({
            type: 'warning',
            message: '请输入人员名称'
          })
          return
        }
        // if(!this.addIdentityType) {
        //   this.$message({
        //     type:'warning',
        //     message:'请选择部门'
        //   })
        //   return;
        // }

        this.loading = true
        this.mailMgeController.ModifyPerson(this.userInfo.OpenId, this.key, this.phone, this.psesonName, this.addIdentityType).then(res => {
          if (res) {
            this.mailObject = res
            this.isEdite = false
            this.$message({
              type: 'success',
              message: '修改成功'
            })
          } else {
            this.$message({
              type: 'warning',
              message: '手机号已被使用'
            })
          }
          this.loading = false
        }).catch(err => {
          this.loading = false
          this.isEdite = false
          this.$message({
            type: 'error',
            message: err
          })
        })
      } else {
        this.$message({
          type: 'warning',
          message: '请填写正确手机格式'
        })
      }
    },

    // 账号注销
    canceHandle () {
      this.$confirm('确认解除绑定？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.wechatAuthControllerSvr.WechatUnBind(this.userInfo.OpenId).then(res => {
          this.$message({ message: '解除成功', type: 'success', duration: 1500 })
          setTimeout(() => {
            window.location.href = 'https://zjj.sz.gov.cn/wxjwx/hmfs/main/wyjgMenu.jsp'
          }, 1500)
        }).catch(err => {
          this.$message({
            type: 'error',
            message: err
          })
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        })
      })
    }
  }
}
</script>

<style scoped src="./personInfo.scss">

</style>
