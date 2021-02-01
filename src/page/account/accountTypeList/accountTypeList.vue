<template>
  <div class="accountTypeList bg-w" id="accountTypeList" v-loading='loading'>
    <div class="header bg-w ft-30 col-66">
      <div class="wrap">
        <el-input v-if="option == 3" v-model="EaAreaNameQuery" size='mini' placeholder="项目经理或业委会主任姓名" ></el-input>
        <el-input v-else v-model="EaAreaNameQuery" size='mini' placeholder="物业项目或登记人姓名" ></el-input>
        <el-button type="primary" size="mini" @click="searchResult">查询</el-button>
      </div>
    </div>
    <div class="content  ft-28">
      <div class="content-table">
        <el-table
            v-loading="loadingTable"
            :header-cell-style="{background:'rgb(241,243,255)'}"
            style="width: 100%"
            :data="tableData"
            @row-click="gotoDetails"
        >
          <el-table-column prop="EaAreaName" fixed :cell-style="{color:'red'}" label="物业项目" align="center" width="120px"></el-table-column>
          <el-table-column prop="StreetName" label="所属街道" align="center" width="120px"></el-table-column>
          <el-table-column prop="ResidentsCommitteeName" label="所属社区" align="center" width="120px"></el-table-column>
          <template v-if="option != 3">
            <el-table-column label="登记人" align="center" width="120px">
              <template slot-scope="scope">{{scope.row.CommonAccount.CreatePersonName}} </template>
            </el-table-column>
            <!-- <el-table-column prop="DereictTel" label="手机号码" align="center" width="160px"></el-table-column> -->
            <!-- <el-table-column prop="UnAssigned" label="物业企业" align="center" width="160px"></el-table-column> -->
            <el-table-column label="账户号码" align="center" width="160px">
              <template slot-scope="scope">{{scope.row.CommonAccount.AccountCode}} </template>
            </el-table-column>
            <el-table-column label="户名" align="center" width="160px">
              <template slot-scope="scope">{{scope.row.CommonAccount.AccountName}} </template>
            </el-table-column>
            <el-table-column label="开户行" align="center" width="160px">
              <template slot-scope="scope">{{scope.row.CommonAccount.AccountBankName}} </template>
            </el-table-column>
            <el-table-column label="账户类型" align="center" width="160px">
              <template slot-scope="scope">{{scope.row.CommonAccount.AccountType == 1 ? '基本账号' : '共管账户'}} </template>
            </el-table-column>
            <el-table-column label="账户状态" align="center" width="160px">
              <template slot-scope="scope">{{scope.row.CommonAccount.Status == 1 ? '正常' : '禁用'}} </template>
            </el-table-column>
          </template>
          <template v-else>
            <el-table-column prop="MangerName" label="项目经理" align="center" width="160px"></el-table-column>
            <el-table-column prop="MangerTel" label="手机号码" align="center" width="160px"></el-table-column>
            <el-table-column prop="DereictName" label="业委会主任" align="center" width="160px"></el-table-column>
            <el-table-column prop="DereictTel" label="手机号码" align="center" width="160px"></el-table-column>
          </template>
          <!--
          //业委会主人姓名.
          private String dereictName;
          //业委会主任电话.
          private String dereictTel;
          //共有资金.
          private CommonAccount commonAccount;
          //账户余额.
          private BigDecimal balance;
          //创建时间.
          private Date createTime; -->
        </el-table>
      </div>
      <ul class="ft-30">
        <div v-show="loadMore" class="loadMore">
          <el-button type="primary" round size="mini" @click="more">加载更多</el-button>
        </div>
        <div v-show="!loadMore" class="loadMore">
          <el-button v-if="tableData.length > 0" round size="mini">暂无更多数据</el-button>
        </div>
        <div v-if="!loadMore" class="tx-c ft-30 col-66 no-data"
             :style="{ display: tableData.length>0?'none':'block' }">暂无数据</div>
      </ul>
    </div>
  </div>
</template>

<script>
import Storage from '../../../utils/storage.js?v=20200827'
import { utils } from '../../../utils/common.js?v=20200827'
import filters from '../../../filters/index.js?v=20200827'
import { getQueryString } from '../../../utils/wechat.js?v=20200827'
import { CommonAccountBaseController } from '../../../service/CommonAccountBaseController.js?v=20200827'
export default {
  data () {
    return {
      indexStart: 0,
      pageSize: 20,
      loading: true,
      loadMore: true,
      userInfo: {},
      tableData: [],
      Arr: [],
      startTime: '',
      EaAreaNameQuery: ''
    }
  },
  filters: {
    dateFormat: filters.formatDate
  },
  created () {
    this.CommonAccountBaseController = new CommonAccountBaseController()
    this.wxApi.getwxUser().then(() => {
      this.userInfo = Storage.get('userInfo')
      // this.cantonName=decodeURI(window.location.href.split('cantonName=')[1].split('&')[0]);
      this.Code = getQueryString('Code')
      this.levelType = getQueryString('levelType')
      this.option = getQueryString('option')
      if (this.option == 3) {
        this.getNoDate()
      } else {
        this.getDate()
      }
    })
  },
  mounted () {

  },
  methods: {
    searchResult () {
      this.tableData = []
      this.indexStart = 0
      if (this.option == 3) {
        this.getNoDate()
      } else {
        this.getDate()
      }
    },
    more () {
      if (this.option == 3) {
        this.getNoDate()
      } else {
        this.getDate()
      }
    },
    // 基本账户、共管账户
    getDate () {
      this.loading = true
      this.CommonAccountBaseController.GetCommonAccountHaveDetailCenseList(
        this.userInfo.OpenId,
        this.Code,
        this.EaAreaNameQuery,
        this.indexStart,
        this.pageSize,
        true,
        this.levelType,
        this.option).then(res => {
        for (var item of res._Items) {
          this.tableData.push(item)
        }
        if (this.pageSize > res.TotalCount) {
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
    // 未登记账户
    getNoDate () {
      this.loading = true
      this.CommonAccountBaseController.GetCommonAccountNoDetailCenseList(
        this.userInfo.OpenId,
        this.Code,
        this.EaAreaNameQuery,
        this.indexStart,
        this.pageSize,
        true,
        this.levelType).then(res => {
        for (var item of res._Items) {
          this.tableData.push(item)
        }
        if (this.pageSize > res.TotalCount) {
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
      // window.location.href = './integrityRegDetail/integrityRegDetail.html?KeyId=' + item.KeyID;
    }
  }

}
</script>

<style scoped src="./accountTypeList.scss">

</style>
