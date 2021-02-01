<template>
  <div id="app-index" class="account"  v-cloak v-loading="">
    <div class="content">
      <div class="content-wrapper">
        <div class="content-title">
          <div class="addr">
            <span class="city">深圳市</span>
            <i class="el-icon-d-arrow-right" type="primary"></i>
            <span class="city">{{cantonName}}</span>
            <i class="el-icon-d-arrow-right" type="primary"></i>
            <span class="city">{{streetName}}</span>
            <i class="el-icon-d-arrow-right" type="primary"></i>
            <span class="city">{{committName}}</span>
          </div>
        </div>
        <div class="cotent-detail">
          <div class="content-table">
            <el-table
                v-loading="loadingTable"
                :header-cell-style="{background:'rgb(241,243,255)'}"
                style="width: 100%"
                :data="eaAreaTableData"
            >
              <el-table-column prop="EaAreaName" fixed :cell-style="{color:'red'}" label="物业区域" align="left" :key="Math.random()"></el-table-column>
              <el-table-column label="账户类型" align="center" width="70px" :key="Math.random()">
                <template slot-scope="scope">{{scope.row.CommonAccount.AccountType == 1 ? '基本账户' : '共管账户'}} </template>
              </el-table-column>
              <el-table-column label="账户状态" align="center" width="70px" :key="Math.random()">
                <template slot-scope="scope">{{scope.row.CommonAccount.Status == 1 ? '正常' : '禁用'}} </template>
              </el-table-column>
              <el-table-column label="账户号码" align="center" width="80px" :key="Math.random()">
                <template slot-scope="scope">{{scope.row.CommonAccount.AccountCode}} </template>
              </el-table-column>
              <el-table-column label="开户行" align="center" width="80px" :key="Math.random()">
                <template slot-scope="scope">{{scope.row.CommonAccount.AccountBankName}} </template>
              </el-table-column>
              <el-table-column prop="DereictName" label="登记人" align="center" width="70px" :key="Math.random()"></el-table-column>
              <el-table-column prop="DereictTel" label="手机号码" align="center" width="80px" :key="Math.random()"></el-table-column>
              <el-table-column prop="MangerName" label="项目经理" align="center" width="70px" :key="Math.random()"></el-table-column>
              <el-table-column prop="MangerTel" label="手机号码" align="center" width="80px" :key="Math.random()"></el-table-column>
              <el-table-column prop="DereictName" label="业委会主任" align="center" width="70px" :key="Math.random()"></el-table-column>
              <el-table-column prop="DereictTel" label="手机号码" align="center" width="80px" :key="Math.random()"></el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CommonAccountBaseController } from '../../../service/CommonAccountBaseController.js?v=20200827'
import Storage from '../../../utils/storage.js?v=20200827'
import { getQueryString } from '../../../utils/wechat.js?v=20200827'
import { utils } from '../../../utils/common.js?v=20200827'
export default {
  components: {},
  props: {},
  data () {
    return {
      cantonName: '',
      streetName: '',
      committName: '',
      committCode: '',
      eaAreaNameSearch: '',
      type: 1, // 市 1，行政区 2，街道 3，社区 4
      option: 1, // 基本账户 1， 共管账户 2， 未登记 3
      loading: true,
      loadingTable: true,
      eaAreaTableData: []
    }
  },
  created () {
    this.CommonAccountBaseController = new CommonAccountBaseController()
    this.wxApi.getwxUser().then(() => {
      this.userInfo = Storage.get('userInfo')
      this.committCode = getQueryString('committCode')
      this.cantonName = decodeURI(window.location.href.split('cantonName=')[1].split('&')[0])
      this.streetName = decodeURI(window.location.href.split('streetName=')[1].split('&')[0])
      this.committName = decodeURI(window.location.href.split('committName=')[1].split('&')[0])
      this.getPublicReportAreaCenser()
    })
  },
  methods: {
    // 物业区域列表
    getPublicReportAreaCenser () {
      this.eaAreaTableData = []
      this.CommonAccountBaseController.GetCommonAccountDetailCenseList(this.userInfo.OpenId, this.committCode, '', 0, 9999, true).then(res => {
        this.eaAreaTableData = res._Items
        this.loadingTable = false
      }).catch(error => {
        this.$message({
          type: 'error',
          message: error
        })
      })
    }
  }
}
</script>

<style scoped src="./accountCommunity.scss">

</style>
