<template>
  <div class="search bg-w" id="search" v-cloak v-loading='loading'>
    <div class="search-content">
      <div class="ub ub-ac search-content-box" v-if='!nodeId'>
        <el-input class="mar-r" v-model='keyName' size='small' placeholder="请输入用户名称或部门"><i slot="prefix" class="el-input__icon el-icon-search"></i></el-input>
        <el-button type="primary" @click='searchHandle' size='mini'>搜索</el-button>
      </div>
      <div class="search-content-list">
        <div class="breadcrumb bg-w ub ub-ac" v-if='breadcrumbList.length>0'>
          <div class="ub-f1 breadcrumb-list col-66 ub ub-ac mar-r">
            <div class="breadcrumb-item ft-28" v-for='(item,idx) in breadcrumbList'>
              <span v-if='idx!=0'>-></span>
              <span @click='linkTosearch(item,true)' v-bind:class='{active:nodeId==item.Value}'>{{item.Name}}</span>
            </div>
          </div>
        </div>
        <ul class="list">
          <!-- 部门 -->
          <li class="ub bor-b" @click='linkToDept(item)' v-for='(item,idx) in deptData' :key='idx'>
            <div class="avatar bg-g">
              <img
                  src="../../../indexres/menu/img/mailList@2x.png">
            </div>
            <div class="ub-f1 ub ub-ac ub-pj">
              <div class="ft-32 ft-w col-33 name">{{item.Name}}</div>
              <span class="el-icon-arrow-right ft-28 col-99"></span>
            </div>
          </li>

          <!-- 人员 -->
          <li class="ub person-list" @click='linkTo(item)' v-for='item in searchData'>
            <div class="avatar bg-g">
              <img
                  src="../../../indexres/menu/img/header.png">
            </div>
            <div class="ub-f1">
              <div class="ft-30 ft-w col-33 name">{{item.name||item.Name}}</div>
              <div class="ft-28 col-99">{{item.mob1}}</div>
            </div>
            <div class="ft-28 ub-f1 ub ub-ac role-box">
              <div class="role-item" v-for='i of item.roleType'>
                <img :src='i'>
              </div>
            </div>
          </li>

          <el-collapse v-model="activeNames" v-if='tableData3'>
            <el-collapse-item :title="name+'('+item.length+')'" :name="name" v-for='(item,name,idx) in tableData3' :key='idx'>
              <li class="ub bor-b" @click='linkToDept(i)' v-for='(i,idx) of item'>
                <div class="avatar bg-g">
                  <img
                      src="../../../indexres/menu/img/mailList@2x.png">
                </div>
                <div class="ub-f1 ub ub-ac ub-pj">
                  <div class="ft-32 ft-w col-33 name">{{i.Name}}</div>
                  <span class="el-icon-arrow-right ft-28 col-99"></span>
                </div>
              </li>
            </el-collapse-item>
          </el-collapse>

          <div class="loadingMore ft-28 col-99 tx-c" @click='loadMore' v-if='loadingMore&&searchData.length>0'>加载更多</div>
          <div class="tx-c ft-30 col-66 no-data" :style="{ display: searchData.length==0&&deptData.length==0?'block':'none' }">暂无数据</div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Storage from '../../../utils/storage.js'
import { Page } from '../../../models/page.js'
import { utils } from '../../../utils/common.js'
import { MailMgeController } from '../../../service/MailMgeController/MailMgeController.js'
import { getRollerHeight } from '../../../utils/pullUp.js'
export default {
  components: {},
  props: {},
  data () {
    return {
      searchData: [],
      deptData: [],
      keyName: '',
      loadingMore: false,
      loading: false,
      nodeId: '',
      page: new Page(),
      breadcrumbList: [],
      tableData3: [],
      activeNames: ''
    }
  },
  created () {
    this.wxApi.getwxUser().then(() => {
      this.userInfo = Storage.get('userInfo')
      this.nodeId = utils.getQueryString('NodeId')
      this.selfDeptId = utils.getQueryString('selfDeptId') || ''
      this.mailMgeController = new MailMgeController()
      if (this.nodeId) { // 有nodeid 查部门下的人员
        this.getData()
        // this.getDept()
      }
      window.onscroll = () => {
        if (getRollerHeight() == 0) {
          this.loadMore()
        }
      }
    })
  },

  mounted () {

  },

  methods: {
    getData () {
      this.loading = true
      // if(this.nodeId){
      //     this.mailMgeController.GetUsersByDeptId(this.userInfo.OpenId,this.nodeId).then(res=>{
      //         this.loading=false
      //         res.forEach((i,idx)=>{
      //             i.roleType=[]
      //             if(i.roleName.indexOf('负责人')>=0){
      //                 i.roleType.push('../img/h5_9.png')
      //             }
      //             if(i.roleName.indexOf('局领导')>=0){
      //                 i.roleType.push('../img/h5_18.png')
      //             }
      //             if(i.roleName.indexOf('业主评价')>=0){
      //                 i.roleType.push('../img/h5_17.jpg')
      //             }
      //             if(i.roleName.indexOf('信息公开')>=0){
      //                 i.roleType.push('../img/h5_10.png')
      //             }
      //             if(i.roleName.indexOf('安全检查')>=0){
      //                 i.roleType.push('../img/h5_11.png')
      //             }
      //             if(i.roleName.indexOf('通知发布')>=0){
      //                 i.roleType.push('../img/h5_12.png')
      //             }
      //             if(i.roleName.indexOf('报表统计')>=0){
      //                 i.roleType.push('../img/h5_13.png')
      //             }
      //             if(i.roleName.indexOf('诚信管理')>=0){
      //                 i.roleType.push('../img/h5_14.png')
      //             }
      //             if(i.roleName.indexOf('疫情补贴')>=0){
      //                 i.roleType.push('../img/h5_15.jpg')
      //             }
      //             if(i.roleName.indexOf('项目经理')>=0){
      //                 i.roleType.push('../img/h5_16.jpg')
      //             }
      //         })
      //         this.searchData=res
      //     }).catch(err=>{
      //         this.$message({
      //             type:'error',
      //             message:err
      //         })
      //         this.loading=false
      //     })

      // }else{
      this.mailMgeController.GetMialByDeptId(this.userInfo.OpenId, this.keyName, '', this.nodeId || 0, '',
        (this.page.currentPage - 1) * this.page.currtNum,
        this.page.currtNum, '')
        .then(res => {
          if (res.user) {
            if (res.user.length > 0 && res.user.length == this.page.currtNum) {
              this.loadingMore = true
            } else {
              this.loadingMore = false
            }
            if (this.nodeId) {
              this.searchData = res.user
            } else {
              this.searchData = this.searchData.concat(res.user)
            }
            // this.searchData=res.user
            for (const item of this.searchData) {
              const temp = item.roleName.split(',')
              item.roleType = []
              temp.forEach((i, idx) => {
                if (i.indexOf('负责人') >= 0) {
                  item.roleType.push('../img/h5_9.png')
                }
                if (i.indexOf('局领导') >= 0) {
                  item.roleType.push('../img/h5_18.png')
                }
                if (i.indexOf('信息公开') >= 0) {
                  item.roleType.push('../img/h5_10.png')
                }
                if (i.indexOf('安全检查') >= 0) {
                  item.roleType.push('../img/h5_11.png')
                }
                if (i.indexOf('通知发布') >= 0) {
                  item.roleType.push('../img/h5_12.png')
                }
                if (i.indexOf('报表统计') >= 0) {
                  item.roleType.push('../img/h5_13.png')
                }
                if (i.indexOf('诚信管理') >= 0) {
                  item.roleType.push('../img/h5_14.png')
                }
                if (i.indexOf('疫情补贴') >= 0) {
                  item.roleType.push('../img/h5_15.jpg')
                }
                if (i.indexOf('项目经理') >= 0) {
                  item.roleType.push('../img/h5_16.jpg')
                }
              })
            }
          }
          if (res.dept) {
            this.deptData = res.dept._Items
          }
          if (res.navigation) {
            this.breadcrumbList = res.navigation
          }
          if (res && res.eaAreaDept) {
            this.tableData3 = res.eaAreaDept
            // this.searchData=this.searchData.concat(res.eaAreaDept)
          }
          this.loading = false
        }).catch(err => {
          this.$message({
            type: 'error',
            message: err
          })
          this.loading = false
        })
      // }
    },

    searchHandle () {
      this.page.currentPage = 1
      this.searchData = []
      this.deptData = []
      this.getData()
    },

    getDept () {
      this.mailMgeController.GetMialByDeptId(this.userInfo.OpenId, this.keyName, '', this.nodeId, '',
        (this.page.currentPage - 1) * this.page.currtNum,
        this.page.currtNum, '')
        .then(res => {
          if (res.dept) {
            this.deptData = res.dept._Items
          }
          this.loading = false
        }).catch(err => {
          this.$message({
            type: 'error',
            message: err
          })
          this.loading = false
        })
    },

    loadMore () {
      this.page.currentPage++
      this.getData()
    },

    linkTo (item) {
      window.location.href = '../personInfo/personInfo.html?mailObject=' + (item.uniqID ? item.uniqID : item.UniqID) + '&selfDeptId=' + this.selfDeptId
    },

    linkToDept (item) {
      window.location.href = `./search.html?NodeId=${item.NodeId}`
    },
    linkTosearch (item) {
      // window.location.href='./search.html?NodeId='+item.Value
    }

  }

}
</script>

<style scoped src="./search.scss">

</style>
