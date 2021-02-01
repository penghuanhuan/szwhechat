<template>
  <div class="searchMaintenance bg-w" id="searchMaintenance" v-cloak v-loading='loading'>
    <div v-for="(item,index) in arrayList" :key="index">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span class="card-header">{{item.HouseAdress}}</span>
          <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
        </div>
        <div class="detail-info">
          <div class="detail-para title">所在小区</div>
          <div class="detail-para">{{item.AreaName}}</div>
        </div>
        <div class="detail-info">
          <div class="detail-para title">房屋账号</div>
          <div class="detail-para">{{item.Account}}</div>
        </div>
        <div class="detail-info">
          <div class="detail-para title">分户余额</div>
          <div class="detail-para">{{item.Blance}}</div>
        </div>
        <div class="detail-info">
          <div class="detail-para title">应交款</div>
          <div class="detail-para">{{item.ShouldMoney}}</div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { WeChatArticleControllerSvr } from '../../service/WeChatArticleControllerSvr/WeChatArticleControllerSvr.js'
import { SearchControllerSvr } from '../../service/SearchControllerSvr.js'
import Storage from '../../utils/storage.js'
import {utils} from '../../utils/common.js'
import {getRollerHeight} from '../../utils/pullUp.js'
import { Page } from '../../models/page.js'
import filters from '../../filters/index.js'
export default {
  data() {
    return {
      weChatArticleControllerSvr: new WeChatArticleControllerSvr(),
      searchControllerSvr: new SearchControllerSvr(),
      token: '',
      openid:'',
      input: '',
      page: new Page(),
      arrayList: [],
      loading:'',
      classId:'',
    }
  },
  filters: {
    dateFormat: filters.formatDate
  },
  created() {
    this.wxApi.getwxUser().then(()=>{

      this.token = Storage.get('userInfo').Token || '';
      this.openid=Storage.get('userInfo').OpenId||'';
      this.getData()

    })
    this.classId= utils.getQueryString('classId')
  },

  mounted() {

  },

  methods: {
    //获取数据集合
    getsearchMaintenanceList () {

    },
    //防抖

    debounce: function(fn, wait) {
      if (this.fun !== null) {
        clearTimeout(this.fun);
      }
      this.fun = setTimeout(fn, wait);
    },
    getData(){
      // this.loading=true;
      this.searchControllerSvr.GetOwnerFundsInfoList(this.openid).then(res => {
        this.loading=false;
        this.arrayList = res._Items;
      }).catch(err=>{
        this.$message({
          type:'error',
          message:err
        })
        this.loading=false;
      })
    }
  },
  watch: {
    input: function (val) {
      var that = this
      this.debounce(that.getsearchMaintenanceList, 3000)
    }
  },
}
</script>

<style scoped src="./searchMaintenance.scss">

</style>
