<template>
  <div class="accountList bg-w" id="accountList" v-loading='loading'>
    <div class="header bg-w ft-30 col-66">
      <div class="wrap">
        <el-input v-model="EaAreaNameQuery" size='mini' placeholder="物业区域"  ></el-input>
        <el-input v-model="AccountCodeQuery" size='mini' placeholder="账号" ></el-input>
        <el-button type="primary" size="mini" @click="searchResult">查询</el-button>
        <el-button v-show="!showType" type="primary" size="mini" @click="addAccount">新增</el-button>
      </div>
      <div class="time" v-show="showType">
        <div class="mar-b ub ub-pj tx-c">
          <div class=" ft-32 ub-f1" v-bind:class="{ active: AccountTypeQuery==0 }" @click='changeType(0)'>全部
          </div>
          <div class=" ft-32 ub-f1" v-bind:class="{ active: AccountTypeQuery==2 }" @click='changeType(2)'>共管账户</div>
          <div class=" ft-32 ub-f1" v-bind:class="{ active: AccountTypeQuery==1 }" @click='changeType(1)'>基本账户</div>
        </div>
        <span class="item-icon" :style='{left: AccountTypeQuery==0?"16%":AccountTypeQuery==2?"49%":"82%"}'></span>
      </div>
    </div>
    <div class="line"></div>
    <div class="content  ft-28">
      <el-tabs v-model="tabType" @tab-click='tabLoad' :stretch="true">
        <div>
          <ul class="ft-30">
            <div class="time" style="display: flex;flex-direction: row-reverse;">
            </div>
            <li v-for="(item, index) in tableData" :key="index" @click="goDetail(item)">
              <div class="content">
                <div class="panel-title">
                  <div class="row-title"></div>
                  <div class="row-content">{{item.AccountName || "暂无"}}</div>
                </div>
                <div class="row">
                  <div class="row-title">账户:</div>
                  <div class="row-content">{{item.AccountCode || "暂无"}}</div>
                </div>
                <div class="row">
                  <div class="row-title">银行名称:</div>
                  <div class="row-content">{{item.AccountBankName || "暂无"}}</div>
                </div>
                <div class="row">
                  <div class="row-title">物业区域:</div>
                  <div class="row-content">{{item.EaAreaCode || "暂无"}}</div>
                </div>
              </div>
              <div class="content-right">
                <el-button size="mini">{{AccountTypeList[item.AccountType]|| "暂无"}}</el-button>
                <i class="el-icon-arrow-right"></i>
              </div>

            </li>
          </ul>

        </div>
        <ul class="ft-30">
          <div v-show="loadMore" class="loadMore">
            <el-button type="primary" round size="mini" @click="more">加载更多</el-button>
          </div>
          <div v-show="!loadMore" class="loadMore">
            <el-button v-if="tableData.length > 0" round size="mini" @click="more">暂无更多数据</el-button>
          </div>
          <div v-if="!loadMore" class="tx-c ft-30 col-66 no-data"
               :style="{ display: tableData.length>0?'none':'block' }">暂无数据</div>
        </ul>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { WeChatCommonControllerSvr } from '../../../service/WeChatCommonControllerSvr.js?v=20200827'
import Storage from '../../../utils/storage.js?v=20200827'
import { utils } from '../../../utils/common.js?v=20200827'
import filters from '../../../filters/index.js?v=20200827'
import { CommonAccountBaseController } from '../../../service/CommonAccountBaseController.js?v=20200827'
export default {
  data () {
    return {
      accountType: 1,
      selectTypeOptions: [],
      AccountCodeQuery: '',
      AccountTypeList: [1, '基本账户', '共管账户', '未开设'],
      inforType: '',
      AccountTypeQueryList: [
        { label: '基本账户', value: 1 },
        { label: '共管账户', value: 2 },
        { label: '未开设', value: 3 }
      ],
      IntegrityType: '',
      AccountTypeQuery: 0,
      ReprotFillQueryPara: {},
      indexStart: 0,
      pageSize: 20,
      orgName: '',
      loadMore: true,
      userInfo: {},
      loading: false,
      type: null,
      tableData: [],
      tabTreeList: [],
      tabType: '',
      Arr: [],
      startTime: '',
      endTime: '',
      TempName: '',
      EaAreaNameQuery: '',
      showType: false
    }
  },
  filters: {
    dateFormat: filters.formatDate
  },
  created () {
    this.CommonAccountBaseController = new CommonAccountBaseController()
    this.WeChatCommonControllerSvr = new WeChatCommonControllerSvr()
    this.wxApi.getwxUser().then(() => {
      this.userInfo = Storage.get('userInfo')
      // if ( this.userInfo.RoleNames.indexOf('业委会共有资金') != -1 || this.userInfo.RoleNames.indexOf('物业区域共有资金') != -1) {
      //     window.location.href = `../accountDetail/accountDetail.html`
      // }else if (this.userInfo.Signs=='物业服务企业项目经理') {
      //     // this.AccountTypeQuery = 2
      //     // this.getDate();
      //     window.location.href=`../accountDetail/accountDetail.html`
      // }
      // else if (this.userInfo.Type=='业委会用户') {
      //     this.AccountTypeQuery = 1
      //     this.getDate();
      // }
      // else if(this.userInfo.Type=='主管部门用户') {
      //     window.location.href=`../accountCity/accountCity.html`
      // }else if(this.userInfo.Type=='街道办用户') {
      //     window.location.href=`../accountStreet/accountStreet.html?streetCode=${this.userInfo.OrgCode}&cantonName=&streetName=${encodeURI(this.userInfo.OwnerName)}`
      // }
      // else {
      //   this.open()
      // }
      const nowTime = new Date().getTime
      if (this.userInfo.RoleNames.indexOf('业委会共有资金') != -1 || this.userInfo.RoleNames.indexOf('物业区域共有资金') != -1) {
        // window.location.href = `../accountDetail/accountDetail.html?time=${nowTime}`
        window.location.replace(`../managementAccount/managementAccount.html?time=${nowTime}`)
      } else if (this.userInfo.RoleNames.indexOf('市共有资金') != -1) {
        // window.location.href=`../accountCity/accountCity.html?time=${nowTime}&code=${this.userInfo.OrgCode}&type=1&level=1`
        window.location.replace(`../accountCity/accountCity.html?time=${nowTime}&code=${this.userInfo.OrgCode}&type=1&level=1`)
      } else if (this.userInfo.RoleNames.indexOf('区共有资金') != -1) {
        // window.location.href=`../accountCity/accountCity.html?time=${nowTime}&code=${this.userInfo.OrgCode}&type=2&level=2`
        // window.location.replace(`../accountCity/accountCity.html?time=${nowTime}&code=${this.userInfo.OrgCode}&type=2&level=2`);
        window.location.href = `../accountCanton/accountCanton.html?time=${nowTime}&cantonCode=${this.userInfo.OrgCode}&type=2`
      } else if (this.userInfo.RoleNames.indexOf('街道办共有资金') != -1) {
        // window.location.href=`../accountCity/accountCity.html?time=${nowTime}&code=${this.userInfo.OrgCode}&type=3&level=3`
        // window.location.replace(`../accountCity/accountCity.html?time=${nowTime}&code=${this.userInfo.OrgCode}&type=3&level=3`);
        window.location.href = `../accountStreet/accountStreet.html?time=${nowTime}&streetCode=${this.userInfo.OrgCode}&type=3`
      }
      // else if(this.userInfo.RoleNames.indexOf('社区共有资金') != -1) {
      //     window.location.href=`../accountCommunity/accountCommunity.html?committCode=${this.userInfo.OrgCode}&cantonName=&streetName=&committName=`
      // }
      else {
        this.open()
      }
    })
  },
  mounted () {

  },
  methods: {
    changeType (value) {
      this.AccountTypeQuery = value
      this.tableData = []
      this.indexStart = 0
      this.getDate()
    },
    searchResult () {
      this.tableData = []
      this.indexStart = 0
      this.getDate()
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
    },
    goDetail (item) {
      window.location.href = `../addAccount/addAccount.html?KeyId=${item.Id}`
    },
    addAccount () {
      window.location.href = '../addAccount/addAccount.html'
    },
    more () {
      this.getDate(this.Arr)
    },
    change () {
      this.tableData = []
      this.indexStart = 0
      this.getDate()
    },
    getDate () {
      this.loading = true
      this.CommonAccountBaseController.GetCommonAccountList(
        this.userInfo.OpenId, this.AccountCodeQuery, this.EaAreaNameQuery, this.AccountTypeQuery, '', this.indexStart, this.pageSize).then(res => {
        for (var item of res._Items) {
          this.tableData.push(item)
        }
        if (this.pageSize > res._Items.length) {
          this.loadMore = false
        } else this.loadMore = true
        this.indexStart += this.pageSize
        this.loading = false
      }).catch(error => {
        this.loading = false
        this.loadMore = false
        this.$message({
          type: 'error',
          message: error
        })
      })
    },
    // 防抖
    debounce: function (fn, wait) {
      if (this.fun !== null) {
        clearTimeout(this.fun)
      }
      this.fun = setTimeout(fn, wait)
    },
    gotoDetails (item) {
      window.location.href = './integrityRegDetail/integrityRegDetail.html?KeyId=' + item.KeyID
    },
    tabLoad (row) {
      this.tableData = []
      this.Arr = []
      if (row.name === this.tabTreeList[0].Value) {
        this.Arr = this.tabTreeList[0].childList.map(function (item) {
          if (item.Value) { return item.Value }
        })
      } else if (row.name === this.tabTreeList[1].Value) {
        this.Arr = this.tabTreeList[1].childList.map(function (item) {
          if (item.Value) { return item.Value }
        })
      } else if (row.name === this.tabTreeList[2].Value) {
        this.Arr = this.tabTreeList[2].childList.map(function (item) {
          if (item.Value) { return item.Value }
        })
      }
      this.indexStart = 0
      this.getTable(this.Arr)
    }
  }
}
</script>

<style scoped src="./accountList.scss">

</style>
