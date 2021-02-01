<template>
  <div class="addAccount" id="addAccount" v-cloak v-loading='loading'>
    <div class="account-header">
    </div>
    <div class="account-title ft-28">
      <div class="panel-title">
        <span class="title-small">共有资金</span>
      </div>
      <div class="panel-content">
        <span class="content-small">基本账户</span>
        <span class="content-small">共管账户</span>
      </div>
      <div class="panel-foot">
        <span class="foot-small special"><span class="foot-title"></span></span>
        <div class="button">
          <el-button round size="mini" style="width:3rem;background-color: rgb(60,55,52);color:#fff">共有资金账户</el-button>
        </div>
      </div>
    </div>
    <div class="content-title">
      <span class="content-small ft-32">添加共有资金账号</span>
    </div>
    <div class="content">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="110px" class="demo-ruleForm">
        <el-form-item label="户名：" prop="AccountName">
          <el-input size='small' v-model="ruleForm.AccountName"></el-input>
        </el-form-item>
        <el-form-item label="账号：" prop="AccountCode">
          <el-input size='small' v-model="ruleForm.AccountCode"></el-input>
        </el-form-item>
        <el-form-item label="银行名称：" prop="BankId">
          <el-select
              v-model="ruleForm.BankId"
              filterable
              remote
              size='small'
              reserve-keyword
              placeholder="请输入关键词"
              :remote-method="remoteMethod"
              :loading="loading">
            <el-option
                v-for="item in AccountBankList"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="账户类型：" prop="AccountType">
          <el-select v-model="ruleForm.AccountType" size="mini" placeholder="请选择">
            <el-option v-for="item in AccountTypeList" :key="item.value" :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div class="mar-t">
        <div style="display:flex;justify-content: center;width: 100%;">
          <el-button size='small' style="width: 30%;" :loading=loading type="primary" round
                     @click="submitForm('ruleForm')">
            {{KeyId ? "修改": "添加"}}
          </el-button>
          <el-button round size='small' style="width: 30%;color: #409EFF;border-color: #409EFF;" @click="resetForm('ruleForm')">重置</el-button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Storage from '../../../utils/storage.js?v=20201223'
import { utils } from '../../../utils/common.js?v=20201223'
import { CommonAccountBaseController } from '../../../service/CommonAccountBaseController.js?v=20201223'
import { CommonAccount } from '../../../models/CommonAccount.js?v=20201223'
export default {
  data () {
    return {
      loading: false,
      cantonArr: [],
      AccountBankList: [],
      userInfo: {},
      AccountTypeList: [
        { label: '基本账户', value: 1 },
        { label: '共管账户', value: 2 }
      ],
      rules: {
        AccountName: [{ required: true, message: '请输入户名', trigger: 'blur' }],
        AccountCode: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        BankId: [{ required: true, message: '请选择银行', trigger: 'blur' }],
        AccountType: [{ required: true, message: '请选择账户类型', trigger: 'blur' }]
      },
      ruleForm: new CommonAccount(),
      handleType: false
    }
  },
  computed: {

  },
  created () {
    this.KeyId = utils.getQueryString('KeyId')
    this.CommonAccountBaseController = new CommonAccountBaseController()
    console.log(JSON.stringify(Storage.get('userInfo')))
    this.wxApi.getwxUser().then(() => {
      this.userInfo = Storage.get('userInfo')
      // 1. 业委会主任和经办人员   2.项目经理和项目经办人员  3.主管部门
      if (this.userInfo.Type == '业委会用户' || this.userInfo.Signs == '物业服务企业项目经理' || this.userInfo.Signs == '物业服务企业业务经办' || this.userInfo.Type == '主管部门用户') {
        if (this.userInfo.Signs == '物业服务企业项目经理' || this.userInfo.Signs == '物业服务企业业务经办') {
          this.handleType = true
          this.ruleForm.AccountType = 2
        }
        if (this.userInfo.Type == '业委会用户') {
          this.handleType = true
          this.ruleForm.AccountType = 1
        }
        this.remoteMethod('')
        if (this.KeyId) {
          this.modifyTitle('修改共有资金账号')
          this.getDetail()
        }
      } else {
        this.open()
      }
    })
  },
  methods: {
    open () {
      this.$confirm('您没有权限访问此功能', '温馨提示', {
        cancelButtonText: '关闭',
        showConfirmButton: false,
        type: 'warning',
        center: true
      }).then(() => {
        history.back()
      }).catch(() => {
        history.back()
      })
    },
    modifyTitle (title) {
      var $body = $('body')
      var $iframe = $('<iframe style="display: none;" src="/DwyWeixinWeb/indexres/menu/img/123.png"></iframe>')
      document.title = title
      $iframe.on('load', function () {
        setTimeout(function () {
          $iframe.off('load').remove()
        }, 0)
      }).appendTo($body)
    },
    getDetail () {
      this.loading = true
      this.CommonAccountBaseController.GetCommonAccount(this.userInfo.OpenId, this.KeyId).then(res => {
        this.loading = false
        if (res) {
          this.ruleForm = res.CommonAccount
        }
      })
        .catch(err => {
          this.loading = false
          this.$message({
            type: 'error',
            message: err
          })
        })
    },
    remoteMethod (query) {
      this.AccountBankList = []
      this.CommonAccountBaseController.GetBankInfoByYh(this.userInfo.OpenId, query, 0, 20, true)
        .then(res => {
          if (res && res.length > 0) {
            for (const item of res) {
              this.AccountBankList.push({ label: item.bankName, value: item.bankId })
            }
          }
        })
        .catch(err => {
          this.$message({
            type: 'error',
            message: err
          })
        })
    },
    submitForm (formName) {
      this.loading = true
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            type: 'info',
            message: this.KeyId ? '修改共有资金账号中，请稍等...' : '添加共有资金账号中，请稍等...'
          })
          for (const item of this.AccountBankList) {
            if (item.value == this.ruleForm.BankId) {
              this.ruleForm.AccountBankName = item.label
            }
          }
          if (this.KeyId) {
            this.CommonAccountBaseController.ModifyCommonAccount(this.userInfo.OpenId, JSON.stringify(this.ruleForm)).then(res => {
              this.loading = false
              this.$message({
                message: '修改成功',
                type: 'success'
              })
              this.loading = false
              setTimeout(() => {
                window.location.href = '../accountList/accountList.html'
              }, 3000)
            }).catch(err => {
              this.$message({
                message: err,
                type: 'error'
              })
              this.loading = false
            })
          } else {
            this.CommonAccountBaseController.AddCommonAccount(this.userInfo.OpenId, this.ruleForm).then(res => {
              this.loading = false
              this.$message({
                message: '添加成功',
                type: 'success'
              })
              this.loading = false
              setTimeout(() => {
                window.location.href = '../accountList/accountList.html'
              }, 3000)
            }).catch(err => {
              this.$message({
                message: err,
                type: 'error'
              })
              this.loading = false
            })
          }
        } else {
          this.$message({
            message: '请填写完整再提交',
            type: 'error'
          })
          this.loading = false
          return false
        }
      })
    },
    resetForm (formName) {
      this.ruleForm = new CommonAccount()
    }

  }
}
</script>

<style scoped src="./addAccount.scss">

</style>
