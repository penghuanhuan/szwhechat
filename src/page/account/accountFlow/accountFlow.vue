<template>
  <div id="app-index" class="account"  v-cloak v-loading="">
    <div class="header">
      <div class="title-back">
        <div class="title-l" @click="goBack"><i class="el-icon-arrow-left"></i> 首页</div>
        <div class="title-m">小区财务信息</div>
        <div class="title-r"></div>
      </div>
      <div class="nav">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="账户流水" name="first"></el-tab-pane>
          <!-- <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane> -->
        </el-tabs>
      </div>
    </div>
    <div class="content-box">
      <div class="content-wrapper">
        <div class="content-title">
          <div class="title-l">{{EaAreaName}}</div>
          <div class="title-r">
            <img @click="handleChangeAccont" src="../../../indexres/menu/img/inspectionCir@2x.png" />
          </div>
        </div>
        <div class="content-menoy">
          <div class="addr">
            <span class="city">余额</span>
          </div>
        </div>
        <div class="statis-total">
          <div class="statis-panel"><span class="title">人民币元</span></div>
          <div class="statis-panel"><span class="title-menoy">{{Balance}}</span></div>
        </div>
        <ul class="ft-30 table-data" v-loading="loading">
          <li v-for="(item, index) in tableData" :key="index">
            <div class="data-content">
              <div class="data-title">
                <span>{{item.TransDateTime  | dateFormat('yyyy年MM月dd日 hh:mm')}}</span>
              </div>
              <div class="data-menoy">
                <span>余额：{{item.Balance}}</span>
                <span class="right-data">{{item.Direction == '贷' ? '+' : '-'}}{{item.TransMoney}}</span>
              </div>
              <div class="data-cont">
                <span>摘要：{{item.Summary}}</span>
              </div>
            </div>
          </li>
        </ul>
        <ul class="ft-30" style="height: auto;margin: 20px 0 20px 0;">
          <div class="loadMore">
            <el-link v-if="loadMore" type="primary" :underline="false" @click="more">点击加载更多</el-link>
          </div>
          <div v-if="!loadMore" class="tx-c ft-30 col-66 no-data" :style="{ display: tableData.length>0?'none':'block' }">暂无数据</div>
        </ul>
      </div>
    </div>
    <el-dialog title="切换房屋" :visible.sync="dialogTableVisible" width="85%">
      <el-table :data="accountList" highlight-current-row @current-change="handleCurrentChange" :show-header="false">
        <el-table-column property="EaAreaName"></el-table-column>
      </el-table>
    </el-dialog>
    <div class="tip-box" v-if="tipShow">
      <p>
        温馨提示：“对账户金额和收支情况有疑问的，请拨打技术支持电话：82794969
        <!-- 温馨提示：“对账户金额和收支情况有疑问的，请咨询小区共有资金账户开户单位（业委会或者物业公司，
        对物业管理政策有疑问的可咨询市住房建设局物业处83788231”；如有技术疑问，请拨打技术支持电话：82793347 -->
      </p>
    </div>
  </div>
</template>

<script>
import { Page } from '../../../models/page.js'
import { CommonAccountBaseController } from '../../../service/CommonAccountBaseController.js'
import { WeChatCommonControllerSvr } from '../../../service/WeChatCommonControllerSvr.js'
import Storage from '../../../utils/storage.js'
import { utils } from '../../../utils/common.js'
import filters from '../../../filters/index.js'
export default {
  data () {
    return {
      loading: true,
      tableData: [],
      loadMore: false,
      accountList: [],
      AccountCode: '',
      EaAreaCode: '',
      EaAreaName: '',
      Balance: 0,
      userInfo: {},
      activeName: 'first',
      dialogTableVisible: false,
      tipShow: true
    }
  },
  filters: {
    dateFormat: filters.formatDate
  },
  created () {
    this.CommonAccountBaseController = new CommonAccountBaseController()
    this.weChatCommonControllerSvr = new WeChatCommonControllerSvr()
    this.page = new Page(),
    this.wxApi.getwxUser().then(() => {
      this.userInfo = Storage.get('userInfo')
      this.weChatCommonControllerSvr.GetSettingsValue(this.userInfo.OpenId, 'enabledMaintenanceFundData').then(res => {
        if (res !== 'false') {
          this.wxApi.getOwner().then(res => {
            this.loading = false
            if (res < 1) {
              this.$confirm('请先绑定业主', '温馨提示', {
                cancelButtonText: '关闭',
                showConfirmButton: false,
                type: 'warning',
                center: true
              }).then(() => {
                history.back()
              }).catch(() => {
                history.back()
              })
              window.location.href = 'https://zjj.sz.gov.cn/wxjwx/hmfs/main/ownerBinding.jsp'
            } else {
              this.getCommonAccountTransInfoList()
            }
          })
        } else {
          this.loading = false
          if (this.token === null || this.token === undefined || this.token === '') {
            window.location.href = '../identitAuthentication/identitAuthentication.html'
          } else {
            this.getCommonAccountTransInfoList()
          }
        }
      }).catch(err => {
        this.loading = false
        this.$message({
          type: 'error',
          message: err
        })
      })
    })
    setTimeout(() => {
      this.tipShow = false
    }, 10000)
  },
  methods: {
    // 切换账号
    handleChangeAccont () {
      this.dialogTableVisible = true
    },
    handleCurrentChange (val) {
      this.dialogTableVisible = false
      this.AccountCode = val.AccountCode
      this.EaAreaCode = val.EaAreaCode
      this.EaAreaName = val.EaAreaName
      this.tableData = []
      this.Balance = 0
      this.getCommonAccountTransList()
    },
    // 返回首页
    goBack () {
      history.back()
    },
    // 类型选择
    handleClick (tab, event) {
      this.tableData = []
      this.Balance = 0
      this.getCommonAccountTransInfoList()
    },
    // 获取房屋账户
    getCommonAccountTransInfoList () {
      this.CommonAccountBaseController.GetCommonAccountTransInfoList(
        this.userInfo.OpenId
      ).then(res => {
        if (res) {
          this.AccountCode = res[0].AccountCode
          this.EaAreaCode = res[0].EaAreaCode
          this.EaAreaName = res[0].EaAreaName
          this.accountList = res
          this.getCommonAccountTransList()
        }
      }).catch(error => {
        this.$message({
          type: 'error',
          message: error
        })
      })
    },
    // 获取账户流水
    getCommonAccountTransList () {
      this.CommonAccountBaseController.GetCommonAccountTransList(
        this.userInfo.OpenId,
        this.AccountCode,
        this.EaAreaCode,
        this.EaAreaName,
        '',
        '',
        (this.page.currentPage - 1) * this.page.currtNum,
        this.page.currtNum
      ).then(res => {
        if (res) {
          for (var item of res._Items) {
            this.tableData.push(item)
          }
          if (res._Items.length == this.page.currtNum) {
            ++this.page.currentPage
            this.loadMore = true
          } else {
            this.loadMore = false
          }
          if (res._Items.length > 0) {
            this.Balance = res._Items[0].Balance
          }
        }
        this.loading = false
      }).catch(error => {
        this.$message({
          type: 'error',
          message: error
        })
      })
    },
    more () {
      this.getCommonAccountTransList()
    },
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
    }
  }
}
</script>

<style scoped src="./accountFlow.scss">

</style>
