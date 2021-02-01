<template>
  <div class="voteList" id="voteList" v-cloak>
    <div class="head">
      <div class="head-tab">
        <div class="left" :class='{active: active === 3}' @click="checkCurrent">当前投票</div>
        <div class="right" :class='{active: active === 5}' @click="checkHistory">历史投票</div>
      </div>
    </div>
    <div class="container" v-loading='isLoading' v-infinite-scroll="addLoadVote"
         :infinite-scroll-disabled="loadDisabled" :infinite-scroll-immediate="false" infinite-scroll-delay="500">
      <!-- <div class="currVote" v-if="active === 3"> -->
      <div class="currVote">
        <div class="vote" v-for="(item,idx) in myVote" :key="idx" @click="toVoting(item.KeyId)">
          <div class="voteTitle">{{ item.VoteTitle }}</div>
          <div class="voteContent">
            <div class="voteInCode">投票编号：{{ item.KeyId }}</div>
            <div class="project">小区名称：{{ item.EaAreaName }}</div>
            <div class="content">
              <div style="display:flex;justify-content: space-between;">
                <div class="core">
                  议题内容：{{ item.VoteTitle }}
                </div>
                <div class="el-icon-arrow-right"></div>
                <!-- <div>〉</div> -->
              </div>
            </div>
            <div class="range">投票范围：{{ item.Range && item.Range.RangeIntro }}</div>
            <div class="startTime">开始时间：{{ item.BeginTime | dateFilter }}</div>
            <div class="endTime">结束时间：{{ item.EndTime | dateFilter }}</div>
          </div>
        </div>
      </div>
      <div style="text-align: center;" v-if="isNoData"><img src="../../../indexres/menu/img/no_data_vote.png"
                                                            alt="暂无数据"></div>
      <div class="other" v-if="addLoading">加载中...</div>
      <div class="other" v-if="noMore">没有更多了</div>
    </div>
  </div>
</template>

<script>
// import { VoteQueryPara } from '../../../service/VoteController/VoteQueryPara.js';
import { VoteControllerSvr } from '../../../service/VoteController/VoteControllerSvr.js';
import { getUser } from '../../../utils/wechat.js';
import Storage from '../../../utils/storage.js'
export default {
  data() {
    return {
      isNoData: false,
      isLoading: false,
      active: 3,
      noMore: true, // 默认情况先禁止滚动加载
      addLoading: false,
      startIdx: 0, // 记录滚动加载开始的位置
      addSize: 2, // 每次滚动到底部  添加的数量
      myVote: []
    }
  },
  created() {
    this.voteController = new VoteControllerSvr();
  },
  mounted() {
    this.wxApi.getwxUser().then(()=>{
      this.userInfo = Storage.get('userInfo');
      this.getVoteList(0,5,3);
    })

  },
  methods: {
    // 列表内容滚动到指定位置 scrollTop
    toScrollTop (top) {
      let container = document.getElementsByClassName('container')[0];
      container.scrollTop = top;
    },
    // 指向投票页面
    toVoting(keyId) {
      if(this.active === 3) {
        window.location.href = "../voting/voting.html?keyId=" + keyId;
      } else if (this.active === 5){
        window.location.href = "../voteDetail/voteDetail.html?keyId=" + keyId;
      }
    },
    // 获取投票列表 第三个参数是查询的投票状态
    getVoteList (start,size,status) {
      this.isLoading = true;
      this.noMore = true; // 初步切换tab时  要把无限滚动的disabled打开 避免获取投票列表加载过慢时 无限滚动的响应函数一直响应
      this.toScrollTop(0); // 列表滚动到顶部
      // let voteQueryPara = new VoteQueryPara();
      // voteQueryPara.setParamByVoteState(status); // 3 为正在表决  4 为询异(可查看不能进行投票)  5 为已完成
      this.voteController.getOwnerVoteList(this.userInfo.OpenId, status,start,size,true).then(res => {
        this.noMore = false; // 打开无限滚动
        // this.startIdx = res._Items.length; // 获取的是实际返回长度 下面获取的是理论返回长度
        this.startIdx = size;
        this.myVote = res._Items;
        this.isLoading = false;
        if (!res._Items.length) { // 为空 则显示'没有更多了' 且不再进行无限滚动函数的加载
          this.noMore = true;
          this.isNoData = true; // 放出no_data的img图
          return ;
        }
      });
    },
    // 内部格式化添加滚动数据的方法
    resetAdd() {
      this.startIdx = 0;
      this.addLoading = false;
      this.noMore = false;
      this.isNoData = false;
    },
    // 点击当前投票的tab
    checkCurrent() {
      this.active = 3;
      this.resetAdd();
      this.getVoteList(0,5,3);
      // this.getVoteList(0,5,3);
    },
    // 点击历史投票的tab
    checkHistory() {
      this.active = 5;
      this.resetAdd();
      this.getVoteList(0,5,5);
      // let title = document.getElementsByTagName('title')[0];
      // title.innerText = '历史投票';
    },
    // 滚动到底部 所触发的方法
    addLoadVote() {
      this.addLoading = true;
      // let voteQueryPara = new VoteQueryPara();
      // voteQueryPara.setParamByVoteState(this.active); // 3 为正在表决  4 为询异(可查看不能进行投票)  5 为已完成
      this.voteController.getOwnerVoteList( this.userInfo.OpenId, this.active, this.startIdx,this.addSize,false).then(res => {
        this.addLoading = false;
        if (!res._Items.length) { // 为空 则显示'没有更多了'
          this.noMore = true;
          return ;
        }
        this.startIdx = this.startIdx + this.addSize;
        this.myVote.push(...res._Items);
      });
    }
  },
  computed:{
    loadDisabled () { // 滚动到底部时是否禁止加载    当获取到下一份数据之前或者之后没数据了  都是disabled为true
      return this.addLoading || this.noMore;
    }
  },
  filters: {
    dateFilter(val) {
      return val.split('T')[0] + ' ' + val.split('T')[1];
    }
  }
}
</script>

<style scoped src="voteList.scss">

</style>
