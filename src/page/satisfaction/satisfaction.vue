<template>
  <div class="satisfaction bg-w" id="satisfaction" v-cloak v-loading='loading'>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="未参与" name="1">
        <ul class="list">
          <li class="li-style bg-w" @click='enterDetail(item.Survey.SurveyId,item.EaArea.EaAreaCode)' v-for='(item,idx) in listData'>
            <div class="title ft-30 col-33">{{item.Survey.SurveyName}}</div>
            <div class="time ft-26 col-66 ub ub-pj">
              <span class="">{{item.EaArea.EaAreaName}}</span>
              <span class="">结束时间：{{item.Survey.EndDate|getDate()}}</span>
            </div>
          </li>
        </ul>
        <div class="tx-c ft-30 col-66 no-data" :style="{ display: listData.length>0?'none':'block' }">暂无数据</div>
        <div class="ft-28 col-66 tx-c more" @click='loadingMore' v-if='listData.length<totalCount'>加载更多...</div>
      </el-tab-pane>
      <el-tab-pane label="已参与" name="2">
        <ul class="list">
          <li class="li-style bg-w" @click='enterDetail(item.Survey.SurveyId,item.EaArea.EaAreaCode)' v-for='(item,idx) in listData'>
            <div class="title ft-30 col-33">{{item.Survey.SurveyName}}</div>
            <div class="time ft-26 col-66 ub ub-pj">
              <span class="">{{item.EaArea.EaAreaName}}</span>
              <span class="">结束时间：{{item.Survey.EndDate|getDate()}}</span>
            </div>
          </li>
        </ul>
        <div class="tx-c ft-30 col-66 no-data" :style="{ display: listData.length>0?'none':'block' }">暂无数据</div>
        <div class="ft-28 col-66 tx-c more" @click='loadingMore' v-if='listData.length<totalCount'>加载更多...</div>
      </el-tab-pane>
      <el-tab-pane label="已超期" name="3">
        <ul class="list">
          <li class="li-style bg-w" @click='enterDetail(item.Survey.SurveyId,item.EaArea.EaAreaCode)' v-for='(item,idx) in listData'>
            <div class="title ft-30 col-33">{{item.Survey.SurveyName}}</div>
            <div class="time ft-26 col-66 ub ub-pj">
              <span class="">{{item.EaArea.EaAreaName}}</span>
              <span class="">结束时间：{{item.Survey.EndDate|getDate()}}</span>
            </div>
          </li>
        </ul>
        <div class="tx-c ft-30 col-66 no-data" :style="{ display: listData.length>0?'none':'block' }">暂无数据</div>
        <div class="ft-28 col-66 tx-c more" @click='loadingMore' v-if='listData.length<totalCount'>加载更多...</div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import {WeChatSurveyControllerSvr} from '../../service/WeChatSurveyControllerSvr/WeChatSurveyControllerSvr.js'
import Storage from '../../utils/storage.js'
export default {
  data(){
    return{
      activeName:'1',
      listData:[],
      totalCount:0,
      startIndex:0,
      maxSize:20,
      loading:false,
      finished:[{
        title:'小区环境满意度调查',
        starttime:'2019-05-10',
        endtime:'2019-06-01'
      }],
      token:'',
      openId:'',
      unfinished:[{
        title:'满意度调查一',
        starttime:'2019-06-10',
        endtime:'2019-07-01'
      }],
    }
  },
  created(){
    this.wxApi.getwxUser().then(()=>{
      this.token = Storage.get('userInfo').Token || '';
      this.openId = Storage.get('userInfo').OpenId||'';
      this.weChatSurveyControllerSvr = new WeChatSurveyControllerSvr()
      this.getData()
    })
  },

  mounted(){
  },
  filters:{
    getDate: function(val){
      return val.split('T')[0]
    }
  },
  methods:{
    getData(){
      this.loading=true;
      this.weChatSurveyControllerSvr.GetSurveyList( this.openId, this.startIndex, this.maxSize, parseInt(this.activeName)).then(res=>{
        // this.listData=res._Items
        this.listData=this.listData.concat(res._Items)
        this.totalCount=res.TotalCount
        this.loading=false;
      }).catch(err=>{
        this.loading=false;
      })
    },
    loadingMore(){
      this.startIndex=this.startIndex+this.maxSize
      this.getData()
    },
    handleClick(val){
      this.listData=[]
      this.getData()
    },
    enterDetail(key,code){
      window.location.href='../satisfactionSurvey/satisfactionSurvey.html?SurveyId='+key+'&EaAreaCode='+code+'&option='+parseInt(this.activeName);
    }
  },
}
</script>

<style scoped src="satisfaction.scss">

</style>
