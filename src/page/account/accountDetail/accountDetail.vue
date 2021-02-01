<template>
  <div class="accountDetail ft-30 " id="accountDetail" v-cloak v-loading='loading'>
    <div class="Information-header"></div>
    <div class="content bg-w">
      <div class="safetyInformationArea-tit ft-32 ft-w">{{detail.AccountName}}</div>
      <li>
        <div class="list ub">
          <div class="ub-f1">
            <div class="row">
              <div class="title">物业项目:</div>
              <div class="col">{{accountInfo.EaAreaName}}</div>
            </div>
            <div class="row">
              <div class="title">账户名称:</div>
              <div class="col">{{detail.AccountName}}</div>
            </div>
            <div class="row">
              <div class="title">开户银行:</div>
              <div class="col">{{detail.AccountBankName}}</div>
            </div>
            <div class="row">
              <div class="title">账户类型:</div>
              <div class="col">{{detail.AccountType == 1 ? '基本账户' : '共管账户'}}</div>
            </div>
            <div class="row">
              <div class="title">账号:</div>
              <div class="col">{{detail.AccountCode}}</div>
            </div>
            <div class="row">
              <div class="title">登记人类型:</div>
              <div class="col des-row ub ub-f1">
                <div class="">{{accountInfo.CreatePersonType}}</div>
              </div>
            </div>
            <div class="row">
              <div class="title">登记人:</div>
              <div class="col des-row ub ub-f1">
                <div class="">{{detail.CreatePersonName}}</div>
              </div>
            </div>
            <!-- <div class="row">
              <div class="title">业委会主任:</div>
              <div class="col des-row ub ub-f1">
                <div class="">{{accountInfo.DereictName}}</div>
              </div>
            </div>
            <div class="row">
              <div class="title">项目经理:</div>
              <div class="col des-row ub ub-f1">
                <div class="">{{accountInfo.MangerName}}</div>
              </div>
            </div> -->
            <div class="row">
              <div class="title">登记时间:</div>
              <div class="col des-row ub ub-f1">
                <div class="">{{detail.CreateTime | dateFormat('yyyy-MM-dd')}}</div>
              </div>
            </div>
            <div class="row">
              <div class="title">账户状态:</div>
              <div class="col des-row ub ub-f1">
                <div class="col-r" v-if="detail.Status == 2">停用</div>
                <div class="col-b" v-else>启用</div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <div class="do-btn">
        <el-button type="primary" size='mini' @click="handleAdd" v-if="!detail.Id">登记共有资金银行账户信息</el-button>
      </div>
      <div class="do-btn">
        <el-button type="primary" size='mini' @click="handleEdit" v-if="detail.Id">修改共有资金银行账户信息</el-button>
      </div>
      <div class="do-btn">
        <el-button type="primary" size='mini' @click="handleCancellation" v-if="detail.Id && detail.CreatePerson == userInfo.LoginId">{{tipTitle}}共有资金银行账户</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Storage from '../../../utils/storage.js?v=20201223'
import { utils } from '../../../utils/common.js?v=20201223'
import filters from '../../../filters/index.js?v=20201223'
import { getQueryString } from '../../../utils/wechat.js'
import { CommonAccountBaseController } from '../../../service/CommonAccountBaseController.js?v=20201223'
export default {
  data () {
    return {
      userInfo: {},
      loading: false,
      detail: {},
      accountInfo: {},
      tipTitle: '停用'
    }
  },
  computed: {

  },
  filters: {
    dateFormat: filters.formatDate
  },
  created () {
    this.CommonAccountBaseController = new CommonAccountBaseController()
    this.wxApi.getwxUser().then(() => {
      this.userInfo = Storage.get('userInfo')
      this.keyId = getQueryString('keyId')
      this.getData()
    })
  },
  mounted () {
  },
  methods: {
    // 获取详细信息openId:String, keyID:String
    getData () {
      this.CommonAccountBaseController.GetCommonAccount(this.userInfo.OpenId, this.keyId).then(res => {
        if (res) {
          this.accountInfo = res
          if (res.CommonAccount) {
            this.detail = res.CommonAccount
            this.tipTitle = this.detail.Status == 2 ? '启用' : '停用'
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
    handleAdd () {
      window.location.href = '../addAccount/addAccount.html'
    },
    handleEdit () {
      window.location.href = '../addAccount/addAccount.html?KeyId=' + this.keyId
    },
    handleCancellation () {
      this.$confirm(`您确定要${this.tipTitle}该共有资金银行账户吗?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        if (this.detail.Status != 2) { // 停用
          this.CommonAccountBaseController.DeleteCommonAccount(this.userInfo.OpenId, this.keyId).then(res => {
            this.$message({
              type: 'success',
              message: `${this.tipTitle}成功!`
            })
            this.getData()
          })
            .catch(err => {
              this.$message({
                type: 'error',
                message: err
              })
            })
        } else { // 启用
          this.detail.Status = 1
          this.CommonAccountBaseController.ModifyCommonAccount(this.userInfo.OpenId, JSON.stringify(this.detail)).then(res => {
            this.$message({
              message: `${this.tipTitle}成功!`,
              type: 'success'
            })
            this.getData()
          }).catch(err => {
            this.$message({
              message: err,
              type: 'error'
            })
          })
        }
      }).catch(() => {

      })
    }
  }
}
</script>

<style scoped>

</style>
