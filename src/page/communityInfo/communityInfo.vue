<template>
  <div class="communityInfo bg-w" id="communityInfo" v-cloak v-loading='loading'>
    <div class="tips" v-if="arrayList.length < 1">
      <img class="center photo mtg20 mbg20 " src='../../../indexres/menu/img/no_data1.png'>
      <span style="font-size:16px;display: flex;justify-content: center;margin-bottom: 20px; margin-top: 20px;"
      >暂无数据</span>
    </div>
    <div v-for="(item,index) in arrayList" :key="index">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span class="card-header">{{ item.AreaName }}</span>
          <div class="card-icon" @click="showDetail(item) " style="float: right; padding: 3px 0;width: 30px;">
            <i class="el-icon-arrow-up" v-if="item.showIcon"></i>
            <i class="el-icon-arrow-down" v-else></i>
          </div>
          <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
        </div>
        <transition name="fade">
          <div v-show="item.showIcon">
            <div class="detail-info">
              <div class="detail-para title">物业服务企业名称</div>
              <div class="detail-para">{{ item.RealtyMgeComName }}</div>
            </div>
            <div class="detail-info">
              <div class="detail-para title">统一社会信用代码</div>
              <div class="detail-para">{{ item.RealtyMgeComCode }}</div>
            </div>
            <div class="detail-info">
              <div class="detail-para title">是否本地企业</div>
              <div class="detail-para">{{ item.IsLocal }}</div>
            </div>
            <div class="detail-info">
              <div class="detail-para title">企业法人</div>
              <div class="detail-para">{{ item.ContactPerson }}</div>
            </div>
            <div class="detail-info">
              <div class="detail-para title">业委会名称</div>
              <div class="detail-para">{{ item.OwnerTeamName }}</div>
            </div>
            <div class="detail-info">
              <div class="detail-para title">联系人</div>
              <div class="detail-para">{{ item.LegalRep }}</div>
            </div>
            <div class="detail-info">
              <div class="detail-para title">联系电话</div>
              <div class="detail-para">{{ item.ContactTel }}</div>
            </div>
            <div class="detail-info">
              <div class="detail-para title">成立日期</div>
              <div class="detail-para">{{ item.EstablishmentDate }}</div>
            </div>
            <div class="detail-info">
              <div class="detail-para title">办公电话</div>
              <div class="detail-para">{{ item.OfficePhone }}</div>
            </div>
          </div>
        </transition>
      </el-card>
    </div>
  </div>
</template>

<script>
import { WeChatArticleControllerSvr } from '../../service/WeChatArticleControllerSvr/WeChatArticleControllerSvr.js'
import { SearchControllerSvr } from '../../service/SearchControllerSvr.js'
import Storage from '../../utils/storage.js'
// import {utils} from '../../utils/common.js'
// import {getRollerHeight} from '../../utils/pullUp.js'
import { Page } from '../../models/page.js'
import filters from '../../filters/index.js'

export default {
  data () {
    return {
      weChatArticleControllerSvr:new WeChatArticleControllerSvr(),
      searchControllerSvr:new SearchControllerSvr(),
      token: '',
      openid: '',
      input: '',
      showIcon:true,
      page: new Page(),
      arrayList: [],
      loading:'',
      classId:'',
    }
  },
  filters: {
    dateFormat: filters.formatDate
  },
  created () {
    this.wxApi.getwxUser().then(() => {

      this.token=Storage.get('userInfo').Token || ''
      this.openid = Storage.get('userInfo').OpenId || ''
      this.getData()
      // this.getData()
    })
  },

  mounted () {
    // document.onscroll=()=>{
    // }
    // document.title=this.categoryCode[this.classId].title
    // this.getData()
  },

  methods: {
    showDetail(item) {
      item.showIcon = !item.showIcon
    },
    // 获取数据集合
    getcommunityInfoList () {
    },
    // 防抖

    debounce: function (fn, wait) {
      if (this.fun !== null) {
        clearTimeout(this.fun)
      }
      this.fun = setTimeout(fn, wait)
    },
    getData () {
      // this.loading=true;
      this.searchControllerSvr.GetOwnerAreaInfoList(this.openid).then(res => {
        this.loading = false
        res._Items.map((item, index) => {
          this.arrayList.push(
            Object.assign({}, item, { showIcon: true })
          )
        })
        // this.arrayList = res._Items;
      }).catch(err => {
        this.$message({
          type: 'error',
          message: err
        })
        this.loading = false
      })
    }
  },
  watch:{
    input: function (val) {
      var that = this
      this.debounce(that.getcommunityInfoList, 3000)
    }
  }
}
</script>

<style scoped src="./communityIfo.scss">

</style>
