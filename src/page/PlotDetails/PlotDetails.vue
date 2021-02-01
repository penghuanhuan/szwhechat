<template>
  <div class="policiesDetail" id="policiesDetail" v-cloak>
    <div class="header-title">{{article.MianTitle}}</div>
    <div class="author">
      <div class="author">发布者：{{article.Author}}</div>
      <div class="time">{{article.PubTime | dateFormat('yyyy-MM-dd')}}</div>
    </div>
    <div class="content" v-html="article.Content"></div>
  </div>
</template>

<script>
import request from '../../static/js/request.js'
import { WeChatArticleControllerSvr } from '../../service/WeChatArticleControllerSvr/WeChatArticleControllerSvr.js'
import Storage from '../../utils/storage.js'
import { getQueryString } from '../../utils/wechat.js'
import filters from '../../filters/index.js'
export default {
  data() {
    return {
      weChatArticleControllerSvr: new WeChatArticleControllerSvr(),
      token: '',
      articleId: '',
      article: {}
    }
  },
  filters: {
    dateFormat: filters.formatDate
  },
  created() {
    this.wxApi.getwxUser().then(()=>{
      this.token = Storage.get('userInfo').Token || '';
      this.articleId = getQueryString('articleId')
      this.weChatArticleControllerSvr.GetArticleDetail( this.articleId, false, false).then(res => {
        this.article = res
      })
    })

  },

  mounted() {

  },

  methods: {},
}
</script>

<style scoped src="./PlotDetails.scss">

</style>
