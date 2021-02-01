<template>
  <div class="accountRegister bg-w" id="accountRegister" v-cloak v-loading='loading'>
    <div class="header"></div>
    <div class="content bg-w">
      <div class="ft-32 ft-w mar-t col-33 mar-b">企业名称：{{title}}</div>
      <el-table
        @cell-click='cellClick'
        header-row-class-name='bg-g'
        :data="tableData"
        style="width: 100%;">
        <el-table-column
          fixed
          align='left'
          prop="EaAreaName"
          label="物业项目"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="AccountType"
          label-class-name=''
          label="类型"
          align='center'
          width="100">
        </el-table-column>
        <el-table-column
          prop="AccountCode"
          label-class-name=''
          label="登记账户"
          align='center'
          width="100">
        </el-table-column>
        <el-table-column
          prop="CreateTime"
          label-class-name=''
          label="登记时间"
          align='center'
          width="100">
          <template slot-scope='scope'>{{scope.row.CreateTime|getDate}}</template>
        </el-table-column>
      </el-table>
      <div class="ft-28 col-66 tx-c load-more" @click='more' v-if='loadMore'>加载更多</div>
    </div>
  </div>
</template>

<script>
import Storage from '../../../utils/storage.js'
import {utils} from '../../../utils/common.js'
import {CreditInformationController} from '../../../service/CreditInformationController/CreditInformationController.js'
import filters from '../../../filters/index.js'
export default {
  data(){
    return{
      loading:false,
      indexStart: 0,
      loadMore: false,
      pageSize: 20,
      tableData:[],
      title:'',
    }
  },
  created(){
    this.CreditInformationController = new CreditInformationController()
    this.objType = utils.getQueryString('objType')
    this.orgCode = utils.getQueryString('orgCode')
    this.eaAreaCode = utils.getQueryString('eaAreaCode')
    this.wxApi.getwxUser().then(()=>{
      this.userInfo = Storage.get('userInfo')
      this.title = utils.getQueryStringChinese('orgName')
      this.getList()
    })
  },
  filters: {
    getDate(val){
      if(val){
        return val.substring(0,10)
      }
    }
  },
  watch: {

  },
  mounted(){
  },

  methods:{
    more () {
      this.getList()
    },
    // 获取数据openId:String, orgCode:String, eaAreaCode:String, type:int, startIndex:int, maxSize:int, resultTotalCount:boolean
    getList () {
      this.CreditInformationController.GetCommonAccountListByEaAreaCodeOrOrgName(
        this.userInfo.OpenId,
        this.orgCode,
        this.eaAreaCode,
        this.objType,
        this.indexStart,
        this.pageSize,
        true
      ).then(res=>{
        if (res._Item.length > 0) {
          this.tableData = this.tableData.concat(res._Item)
          this.indexStart +=20
          if(res._Item.length>=this.pageSize){
            this.loadMore=true
          }else{
            this.loadMore=false
          }
        }
      }).catch(error=>{
        this.$message({
          type:'error',
          message:error
        })
      })
    },
    cellClick(row){
      window.location.href=`../accountRegisterArea/accountRegisterArea.html?eaAreaCode=${row.EaAreaCode}&objType=2&eaAreaName=${this.title}`
    }
  },

}
</script>

<style scoped src="accountRegister.scss">

</style>
