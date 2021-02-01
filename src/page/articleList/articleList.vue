<template>
  <div class="articleList bg-w" id="articleList" v-cloak v-loading='loading'>
    <div class="search">
      <el-input v-model="keyWord" prefix-icon="el-icon-search" size='mini' placeholder="搜索"></el-input>
    </div>
    <ul>
      <li class=""  v-for="(item,index) in arrayList" :key="index">
        <div  @click="godetail(item.KeyId)">
          <div class="title">{{index+1}}、{{item.MianTitle}}</div>
          <div class="date">{{item.PubTime | dateFormat('yyyy-MM-dd')}} </div>
          <div class="content" v-html="item.Content || '<p>暂无</p>'"></div>
          <div class="footer" @click="godetail(item.KeyId)">
            查看详情
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
      </li>
    </ul>
    <div class="tx-c ft-30 col-66 no-data" :style="{ display: arrayList.length==0?'block':'none' }">暂无数据</div>
    <div class="bottom-button">
      <el-button plain :disabled='showButton' @click="addMore" v-show="isShow">{{buttonTip}}</el-button>
    </div>
  </div>
</template>

<script>
import { WeChatArticleControllerSvr } from '../../service/WeChatArticleControllerSvr/WeChatArticleControllerSvr.js'
import Storage from '../../utils/storage.js'
import { utils } from '../../utils/common.js'
// import { getRollerHeight } from '../../utils/pullUp.js'
import { Page } from '../../models/page.js'
import { getQueryString } from '../../utils/wechat.js'
import filters from '../../filters/index.js'
export default {
  data () {
    return {
      weChatArticleControllerSvr: new WeChatArticleControllerSvr(),
      token: '',
      isShow: false,
      openid: '',
      keyWord: '',
      page: new Page(),
      showButton: true,
      arrayList: [],
      loading: '',
      buttonTip: '点击加载更多',
      classId: '',
      categoryCode: {
        '002001': { code: '3', title: '公示公告' },
        '003001': { code: '4', title: '政策法规' },
        '007001': { code: '1', title: '办事指南' },
        '011004': { code: '5', title: '招标公告' },
        '011005': { code: '6', title: '中标公告' }
      }
    }
  },
  filters: {
    dateFormat: filters.formatDate
  },
  created () {
    this.wxApi.getwxUser().then(() => {
      this.token = Storage.get('userInfo').Token || ''
      this.openid = Storage.get('userInfo').OpenId || ''
      this.classId = getQueryString('classId')
      document.title = this.categoryCode[this.classId.split(',')[0]].title
      this.getData()
    })
    this.classId = utils.getQueryString('classId')
  },

  mounted () {
    // document.onscroll=()=>{
    // }

  },

  methods: {
    addMore () {
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
      this.weChatArticleControllerSvr.GetArticleList(Storage.get('userInfo').OpenId, this.keyWord, this.classId, (this.page.currentPage - 1) * this.page.currtNum,
        this.page.currtNum, true, false, false, true).then(res => {
        this.isShow = true
        this.isShow = res.TotalCount !== 0
        if (res.TotalCount < this.page.currtNum) {
          this.buttonTip = '没有更多了'
          this.showButton = true
        }
        for (let i = 0; i < res._Items.length; i++) {
          res._Items[i].Content = utils.htmlDecodeByRegExp(res._Items[i].Content)
        }
        this.arrayList = res._Items
      }).catch(err => {
        this.$message({
          type: 'error',
          message: err
        })
        this.loading = false
      })
    },
    godetail (key) {
      window.location.href = '../articleDetail/articleDetail.html?articleId=' + key
    }
  },
  watch: {
    keyWord: function (val) {
      var that = this
      this.debounce(that.getData, 1000)
    }
  }
}
</script>

<style scoped src="./articleList.scss">

</style>
