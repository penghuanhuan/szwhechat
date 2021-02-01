<template>

  <div class="evaluationList bg-w" id="evaluationList" :style="{ background: data.length>0?'#eeeeee':'#ffffff' }" v-cloak>
    <template v-for="item in data" v-if="data.length">
      <div class="itmeList" @click="enterEvaluation(item.CheckandreviewId)">
        <div class="wrapper">
          <div class="list-panel"></div>
          <div class="name-wrap nameTime">
            <div class="item-name">
              <div>
                <span class="small-tips">{{item.CheckandreviewName}}</span>
              </div>
              <div class="item-time">
                <span>开始时间：{{item.StartDate.split('T')[0]}}</span><span>结束时间：{{item.EndDate.split('T')[0]}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="item-time right-panel">
          <i class="el-icon-arrow-right"> </i>
        </div>
      </div>
    </template>
    <div class="no-data tx-c ft-30 col-66 no-data" :style="{ display: data.length==0?'block':'none' }">暂无数据</div>
  </div>
</template>

<script>
import Storage from '../../utils/storage.js'
import request from '../../static/js/request.js'
import {WeChatCheckandreviewControllerSvr} from '../../service/WeChatCheckandreviewControllerSvr.js'
export default {
  data() {
    return {
      isActive:1,
      checked:false,
      data:[],
      token:'',
    }
  },
  created() {
    this.wxApi.getwxUser().then(()=>{
      this.token = Storage.get('userInfo').Token;
      this.WeChatCheckandreviewControllerSvr=new WeChatCheckandreviewControllerSvr();
      this.WeChatCheckandreviewControllerSvr.GetCheckandreviewList().then(res=>{
        this.data=res._Items;
      });
    })

  },
  mounted() { },
  methods: {
    enterEvaluation(id){
      window.location.href='../InspectionEvaluation/InspectionEvaluation.html?CheckandreviewId='+id;
    }
  },
}
</script>

<style scoped src="evaluationList.scss">

</style>
