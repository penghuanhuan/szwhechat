<template>
  <div id="app-index" class="account"  v-cloak v-loading="">
    <div class="content">
      <div class="content-wrapper">
        <div class="content-title">
          <div class="addr">
            <span class="city" @click="getTypeData(1)">深圳市</span>
            <!-- <i class="el-icon-d-arrow-right" type="primary" v-if="type > 1"></i>
            <span class="city" v-if="type > 1" @click="getTypeData(2)">{{cantonName}}</span>
            <i class="el-icon-d-arrow-right" type="primary" v-if="type > 2"></i>
            <span class="city" v-if="type > 2" @click="getTypeData(3)">{{streetName}}</span>
            <i class="el-icon-d-arrow-right" type="primary" v-if="type > 3"></i>
            <span class="city" v-if="type > 3">{{committName}}</span> -->
          </div>
        </div>
        <div class="statis-total" v-if="type < 4">
          <div class="statis-panel"><span class="title">物业项目总数:</span><span class="panel-content">{{totolParam.EaAreaCount}}个</span></div>
          <div class="statis-panel"><span class="title">基本账户数:</span><span class="panel-content">{{totolParam.Basic}}个</span></div>
          <div class="statis-panel"><span class="title">共管账户数:</span><span class="panel-content">{{totolParam.Common}}个</span></div>
          <div class="statis-panel"><span class="title">应开共有资金账户数:</span><span class="panel-content">{{totolParam.ShouldCommitt}}个</span></div>
          <div class="statis-panel"><span class="title">已开共有资金账户数:</span><span class="panel-content">{{totolParam.Assigned}}个</span></div>
          <div class="statis-panel"><span class="title">未开共有资金账户数:</span><span class="panel-content">{{totolParam.UnAssigned}}个</span></div>
        </div>
        <div class="cotent-detail">
          <div class="statis-search" v-if="type < 4">
            <el-input v-model="eaAreaNameSearch" size='mini' placeholder="物业项目" ></el-input>
            <el-button type="primary" size="mini" @click="eaAreaSearchResult">查询</el-button>
          </div>
          <div class="content-table">
            <!-- <template v-if="type < 4"> -->
            <el-table
                show-summary
                v-loading="loadingTable"
                :header-cell-style="{background:'rgb(241,243,255)'}"
                style="width: 100%"
                :data="tableData"
                @row-click="goNextSteps"
                :default-sort = "{prop: 'Assigned', order: 'descending'}"
            >
              <el-table-column prop="Name" fixed :cell-style="{color:'red'}" :label="labelName" align="center" :key="Math.random()"></el-table-column>
              <el-table-column prop="EaAreaCount" label="项目总数（个）" align="center" width="90px" :key="Math.random()"></el-table-column>
              <el-table-column align="center" label="应开共有资金账户数">
                <el-table-column prop="ShouldCommitt" align="center" label="总数" :key="Math.random()"></el-table-column>
                <el-table-column prop="Assigned" align="center" label="已开数" :key="Math.random()"></el-table-column>
                <el-table-column prop="UnAssigned" align="center" label="未开数" :key="Math.random()"></el-table-column>
                <el-table-column align="center" label="开户率(%)" width="120px" sortable :sort-method="setSortRule" :key="Math.random()">
                  <template slot-scope="scope">
                    {{scope.row.Assigned | getProbability(scope.row.ShouldCommitt)}}
                  </template>
                </el-table-column>
              </el-table-column>
              <el-table-column align="center" label="共有资金账户数">
                <el-table-column prop="Basic" align="center" label="基本账户" :key="Math.random()"></el-table-column>
                <el-table-column prop="Common" align="center" label="共管账户" :key="Math.random()"></el-table-column>
              </el-table-column>
              <el-table-column prop="Exceptions" label="异常账户数" align="center" width="70px" :key="Math.random()"></el-table-column>
            </el-table>
            <!-- </template> -->
            <!-- 物业区域列表 -->
            <!-- <template v-else>
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
            </template> -->
            <!-- 物业区域列表 -->
          </div>
        </div>
        <el-dialog
            :title="dialogTitle"
            :visible.sync="dialogVisible"
            width="95%"
            :before-close="handleClose">
          <div class="accountTypeList">
            <div class="header" v-if="!isEaAreaSearch">
              <div class="search-box">
                <el-input v-if="option == 5" v-model="EaAreaNameQuery" size='mini' placeholder="物业项目、项目经理或业委会主任姓名" ></el-input>
                <el-input v-else v-model="EaAreaNameQuery" size='mini' placeholder="物业项目或登记人姓名" ></el-input>
                <el-button type="primary" size="mini" @click="searchResult">查询</el-button>
              </div>
            </div>
            <div class="content-data  ft-28">
              <div class="content-table">
                <el-table
                    v-loading="loadingTable"
                    :header-cell-style="{background:'rgb(241,243,255)'}"
                    :data="tableDataList"
                    border
                >
                  <el-table-column prop="EaAreaName" fixed label="物业项目" align="center" width="80px" :key="Math.random()"></el-table-column>
                  <el-table-column prop="CantonName" label="行政区域" align="center" width="100px" :key="Math.random()"></el-table-column>
                  <el-table-column prop="StreetName" label="所属街道" align="center" width="100px" :key="Math.random()"></el-table-column>
                  <el-table-column prop="ResidentsCommitteeName" label="所属社区" align="center" width="100px" :key="Math.random()"></el-table-column>
                  <el-table-column prop="RealtyMgeComName" label="物业企业" align="center" width="100px" :key="Math.random()"></el-table-column>
                  <template v-if="option != 5 && totleOption == 0 || isEaAreaSearch">
                    <el-table-column label="登记人" align="center" width="90px" :key="Math.random()">
                      <template slot-scope="scope">{{scope.row.CommonAccount ? scope.row.CommonAccount.CreatePersonName : ''}} </template>
                    </el-table-column>
                    <el-table-column label="账户号码" align="center" width="120px" :key="Math.random()">
                      <template slot-scope="scope">{{scope.row.CommonAccount ? scope.row.CommonAccount.AccountCode : ''}} </template>
                    </el-table-column>
                    <el-table-column label="户名" align="center" width="100px" :key="Math.random()">
                      <template slot-scope="scope">{{scope.row.CommonAccount ? scope.row.CommonAccount.AccountName : ''}} </template>
                    </el-table-column>
                    <el-table-column label="开户行" align="center" width="100px" :key="Math.random()">
                      <template slot-scope="scope">{{scope.row.CommonAccount ? scope.row.CommonAccount.AccountBankName : ''}} </template>
                    </el-table-column>
                    <el-table-column label="账户类型" align="center" width="100px" :key="Math.random()">
                      <template slot-scope="scope">{{!scope.row.CommonAccount ? '' : scope.row.CommonAccount.AccountType == 1 ? '基本账号' : '共管账户'}} </template>
                    </el-table-column>
                    <el-table-column label="账户状态" align="center" width="100px" :key="Math.random()">
                      <template slot-scope="scope">{{!scope.row.CommonAccount ? '' : scope.row.CommonAccount.Status == 1 ? '正常' : '禁用'}} </template>
                    </el-table-column>
                  </template>
                  <template v-show="option == 5 || totleOption != 0 || isEaAreaSearch">
                    <el-table-column prop="MangerName" label="项目经理" align="center" width="100px" :key="Math.random()"></el-table-column>
                    <el-table-column prop="MangerTel" label="手机号码" align="center" width="120px" :key="Math.random()"></el-table-column>
                    <el-table-column prop="DereictName" label="业委会主任" align="center" width="100px" :key="Math.random()"></el-table-column>
                    <el-table-column prop="DereictTel" label="手机号码" align="center" width="120px" :key="Math.random()"></el-table-column>
                  </template>
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
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import { CommonAccountBaseController } from '../../../service/CommonAccountBaseController.js'
import Storage from '../../../utils/storage.js'
import { getQueryString } from '../../../utils/wechat.js?v=20200827'
import { utils } from '../../../utils/common.js'
export default {
  components: {},
  props: {},
  data () {
    return {
      cantonName: '',
      streetName: '',
      committName: '',
      cityCode: '',
      cantonCode: '',
      streetCode: '',
      code: '',
      eaAreaNameSearch: '',
      type: 1, // 市 1，行政区 2，街道 3，社区 4
      level: 1, // 市 1，行政区 2，街道 3，社区 4//判断是哪一层级的共有资金标签
      option: 1, // 基本账户 1， 共管账户 2， 未登记 3
      labelName: '行政区域',
      loading: true,
      loadingTable: true,
      tableData: [],
      eaAreaTableData: [],
      totolParam: {
        EaAreaCount: 0,
        Basic: 0,
        Common: 0,
        ShouldCommitt: 0,
        Assigned: 0,
        UnAssigned: 0
      },
      dialogVisible: false, // 弹框相关数据
      tableDataList: [],
      indexStart: 0,
      pageSize: 20,
      loadDialoging: true,
      loadMore: true,
      rowCode: '',
      EaAreaNameQuery: '',
      dialogTitle: '',
      totleOption: 1, // 应开账户数 1， 项目总数 2
      isEaAreaSearch: false // 判断是否是直接物业项目名称搜索
    }
  },
  filters: {
    getProbability (num1, num2) {
      if (num1 == 0 || num2 == 0) {
        return 0
      } else {
        return (parseFloat(num1) / parseFloat(num2) * 100).toFixed(2)
      }
    }
  },
  created () {
    this.CommonAccountBaseController = new CommonAccountBaseController()
    this.wxApi.getwxUser().then(() => {
      this.userInfo = Storage.get('userInfo')
      this.type = Number(getQueryString('type')) || 1
      this.level = Number(getQueryString('level')) || 1
      this.code = this.type == 1 ? '' : getQueryString('code')
      if (this.level == 1) {
        this.cityCode = this.code
      } else if (this.level == 2) {
        this.cantonCode = this.code
      } else if (this.level == 3) {
        this.streetCode = this.code
      }
      this.getLableName(this.type)
      this.getData()
    })
  },
  methods: {
    // 点击顶部导航
    getTypeData (type) {
      if (type >= this.level) {
        this.$nextTick(() => {
          this.type = type
          if (this.type == 1) {
            this.code = this.cityCode
          } else if (this.type == 2) {
            this.code = this.cantonCode
          } else if (this.type == 3) {
            this.code = this.streetCode
          }
          console.log(this.eaAreaTableData)
          this.getData()
        })
      } else {
        this.$message({
          type: 'error',
          message: '对不起您没有权限访问此层级'
        })
      }
    },
    getLableName (type) {
      switch (type) {
        case 1:
          this.labelName = '行政区域'
          break
        case 2:
          this.labelName = '街道办'
          break
        case 3:
          this.labelName = '社区'
          break
        case 4:
          this.labelName = '物业区域'
          break
      }
    },
    // 排序scope.row.Assigned | getProbability(scope.row.ShouldCommitt)
    setSortRule (obj1, obj2) {
      let num1 = 0
      const num2 = 0
      if (obj1.Assigned == 0 || obj1.ShouldCommitt == 0) {
        num1 = 0
      } else {
        num1 = (parseFloat(obj1.Assigned) / parseFloat(obj1.ShouldCommitt) * 100).toFixed(2)
      }
      if (obj2.Assigned == 0 || obj2.ShouldCommitt == 0) {
        num1 = 0
      } else {
        num1 = (parseFloat(obj2.Assigned) / parseFloat(obj2.ShouldCommitt) * 100).toFixed(2)
      }
      if (num1 > num2) {
        return -1
      } else if (num1 < num2) {
        return 1
      } else {
        return 0
      }
    },
    getData () {
      this.tableData = []
      this.CommonAccountBaseController.GetCommonAccountCenseList(this.userInfo.OpenId, this.code, this.type).then(res => {
        this.tableData = res.Infos
        this.cantonName = res.CantonName || ''
        this.streetName = res.StreetName || ''
        this.committName = res.CommittName || ''
        if (res.Infos.length > 0) {
          this.totolParam = {
            EaAreaCount: 0,
            Basic: 0,
            Common: 0,
            ShouldCommitt: 0,
            Assigned: 0,
            UnAssigned: 0
          }
          res.Infos.forEach(item => {
            this.totolParam.EaAreaCount += item.EaAreaCount
            this.totolParam.Basic += item.Basic
            this.totolParam.Common += item.Common
            this.totolParam.ShouldCommitt += item.ShouldCommitt
            this.totolParam.Assigned += item.Assigned
            this.totolParam.UnAssigned += item.UnAssigned
          })
        }
        this.loadingTable = false
      }).catch(error => {
        this.$message({
          type: 'error',
          message: error
        })
      })
    },
    // 物业区域列表
    getPublicReportAreaCenser () {
      this.eaAreaTableData = []
      this.CommonAccountBaseController.GetCommonAccountDetailCenseList(this.userInfo.OpenId, this.code, '', 0, 9999, true).then(res => {
        this.eaAreaTableData = res._Items
        this.loadingTable = false
      }).catch(error => {
        this.$message({
          type: 'error',
          message: error
        })
      })
    },
    //  以下放弹框相关代码
    // 物业区域查询openId:String, accountCode:String, eaAreaName:String, accountType:int, status:int, startIndex:int, maxSize:int, resultTotalCount:boolean
    eaAreaSearchResult () {
      if (this.eaAreaNameSearch != '') {
        this.tableDataList = []
        this.indexStart = 0
        this.getEaAreaSearchResult()
      } else {
        this.$alert('请输入查询条件', '提示', {
          confirmButtonText: '确定',
          callback: action => {

          }
        })
      }
    },
    // openId:String, name:String, startIndex:int, maxSize:int, resultTotalCount:boolean
    getEaAreaSearchResult () {
      this.loadDialoging = true
      this.CommonAccountBaseController.GetCommonAccountDetailList(
        this.userInfo.OpenId,
        this.eaAreaNameSearch,
        this.indexStart,
        this.pageSize,
        true
      ).then(res => {
        this.isEaAreaSearch = true
        this.dialogTitle = `${this.eaAreaNameSearch}-搜索结果`
        this.dialogVisible = true
        for (var item of res._Items) {
          this.tableDataList.push(item)
        }
        if (this.pageSize > res.TotalCount) {
          this.loadMore = false
        } else this.loadMore = true
        this.indexStart += this.pageSize
        this.loadDialoging = false
        this.loadingTable = false
      }).catch(error => {
        this.loadDialoging = false
        this.loadMore = false
        this.$message({
          type: 'error',
          message: error
        })
      })
    },
    goNextSteps (row, column, cell) {
      this.EaAreaNameQuery = ''
      this.isEaAreaSearch = false
      if (column.label == '基本账户' || column.label == '共管账户' || column.label == '异常账户数' || column.label == '已开数' || column.label == '未开数' || column.label == '总数' || column.label == '项目总数（个）') {
        this.totleOption = 0
        this.dialogTitle = column.label
        this.tableDataList = []
        this.indexStart = 0
        this.pageSize = 20
        this.rowCode = row.Code
        this.dialogVisible = true
      }
      switch (column.label) {
        case '基本账户':
          this.option = 1
          this.getDialogDate()
          // window.location.href = `../accountTypeList/accountTypeList.html?Code=${row.Code}&levelType=${1}&option=${1}`
          break
        case '共管账户':
          this.option = 2
          this.getDialogDate()
          break
        case '已开数':
          this.totleOption = 3
          this.getDialogTotleDate()
          break
        case '异常账户数':
          this.option = 4
          this.getDialogDate()
          break
        case '未开数':
          this.option = 5
          this.getDialogNoDate()
          break
        case '总数':
          this.totleOption = 1
          this.getDialogTotleDate()
          break
        case '项目总数（个）':
          this.totleOption = 2
          this.getDialogTotleDate()
          break
        default:
          window.location.href = `../accountCanton/accountCanton.html?cantonCode=${row.Code}&type=2`
          // if(this.type < 3) {
          //   this.type++;
          //   this.code = row.Code;
          //   if(this.type == 1) {
          //     this.cityCode = this.code;
          //   }else if(this.type == 2) {
          //     this.cantonCode = this.code;
          //   }else if(this.type == 3) {
          //     this.streetCode = this.code;
          //   }
          //   this.getLableName(this.type);
          //   this.getData();
          // }else {
          //   this.type++;
          //   this.code = row.Code;
          //   this.committName = row.Name;
          //   this.getPublicReportAreaCenser();
          //   // window.location.href=`../accountCommunity/accountCommunity.html?committCode=${row.Code}&cantonName=${encodeURI(this.cantonName)}&streetName=${encodeURI(this.streetName)}&committName=${encodeURI(row.Name)}`
          // }
          break
      }
    },
    handleClose () {
      this.dialogVisible = false
    },
    searchResult () {
      this.tableDataList = []
      this.indexStart = 0
      if (this.totleOption != 0) {
        this.getDialogTotleDate()
      } else {
        if (this.option == 5) {
          this.getDialogNoDate()
        } else {
          this.getDialogDate()
        }
      }
    },
    more () {
      if (this.totleOption != 0) {
        this.getDialogTotleDate()
      } else {
        if (this.option == 5) {
          this.getDialogNoDate()
        } else {
          this.getDialogDate()
        }
      }
    },
    // 基本账户、共管账户、已开数、异常账户数
    getDialogDate (rowCode) {
      this.loadDialoging = true
      this.CommonAccountBaseController.GetCommonAccountHaveDetailCenseList(
        this.userInfo.OpenId,
        this.rowCode,
        this.EaAreaNameQuery,
        this.indexStart,
        this.pageSize,
        true,
        this.type,
        this.option
      ).then(res => {
        for (var item of res._Items) {
          this.tableDataList.push(item)
        }
        if (this.pageSize > res.TotalCount) {
          this.loadMore = false
        } else this.loadMore = true
        this.indexStart += this.pageSize
        this.loadDialoging = false
        this.loadingTable = false
      }).catch(error => {
        this.loadDialoging = false
        this.loadMore = false
        this.$message({
          type: 'error',
          message: error
        })
      })
    },
    // 未登记账户
    getDialogNoDate (rowCode) {
      this.loadDialoging = true
      this.CommonAccountBaseController.GetCommonAccountNoDetailCenseList(
        this.userInfo.OpenId,
        this.rowCode,
        this.EaAreaNameQuery,
        this.indexStart,
        this.pageSize,
        true,
        this.type
      ).then(res => {
        for (var item of res._Items) {
          this.tableDataList.push(item)
        }
        if (this.pageSize > res.TotalCount) {
          this.loadMore = false
        } else this.loadMore = true
        this.indexStart += this.pageSize
        this.loadDialoging = false
        this.loadingTable = false
      }).catch(error => {
        this.loadDialoging = false
        this.loadMore = false
        this.$message({
          type: 'error',
          message: error
        })
      })
    },
    // 总数、已开数、项目总数（个）openId:String, code:String, name:String, startIndex:int, maxSize:int, resultTotalCount:boolean, type:int, option:int
    getDialogTotleDate (rowCode) {
      this.loadDialoging = true
      this.CommonAccountBaseController.GetCommonAccountAllDetailCenseList(
        this.userInfo.OpenId,
        this.rowCode,
        this.EaAreaNameQuery,
        this.indexStart,
        this.pageSize,
        true,
        this.type,
        this.totleOption
      ).then(res => {
        for (var item of res._Items) {
          this.tableDataList.push(item)
        }
        if (this.pageSize > res.TotalCount) {
          this.loadMore = false
        } else this.loadMore = true
        this.indexStart += this.pageSize
        this.loadDialoging = false
        this.loadingTable = false
      }).catch(error => {
        this.loadDialoging = false
        this.loadMore = false
        this.$message({
          type: 'error',
          message: error
        })
      })
    }
  }
}
</script>

<style scoped src="./accountCity.scss">

</style>
