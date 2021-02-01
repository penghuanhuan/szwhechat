<template>
  <div class="securityCheckList bg-w" id="securityCheckList" v-cloak>
    <div>
      <li v-for="item in checkList" @click="goarea(item.KeyId,item.MatterStatus,item.CardKeyId,item.PaperType)">
        <div class="header">
          <div class="title">{{item.Title}}</div>
          <div class="type">{{exeStatus[item.MatterStatus?item.MatterStatus:item.Status]}}</div>
        </div>
        <div class="list ub">
          <div class="ub-f1">
            <div class="row">
              <div class="title">检查类型:</div>
              <div class="col">{{item.PaperType==1?'安全检查':'专项检查'}}</div>
            </div>
            <div class="row" v-if='type'>
              <div class="title">检查小区:</div>
              <div class="col">{{item.EaAreaName}}</div>
            </div>
            <div class="row">
              <div class="title">检查时间:</div>
              <div class="col">
                {{item.StartTime | dateFormat('yyyy-MM-dd')}}至{{item.EndTime | dateFormat('yyyy-MM-dd')}}</div>
            </div>
            <div class="row" v-if='item.EndDesc!==null&&item.PaperType==1&&Type!=="街道办用户"&&Type!=="居委会用户"'>
              <div class="title">是否合格:</div>
              <div class="col">{{item.EndDesc}}</div>
            </div>
            <div class="row">
              <div class="title">检查说明:</div>
              <div class="col des-row ub ub-f1" @click='showMore'>
                <div class="">{{item.Description?item.Description:'-'}}</div>
              </div>
            </div>
          </div>
          <div class="list-grade" ><span class=" ">{{item.Status==3? "已提交": item.Status==9?"已取消":"未提交"}}</span></div>
        </div>
      </li>
      <div class="tx-c ft-30 col-66 no-data" :style="{ display: checkList.length>0?'none':'block' }">暂无数据</div>
    </div>
    <!-- <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="true" v-show="showDetail">
      <el-tab-pane label="检查中" name="2" v-loading='loading'>
        <li v-for="item in checkList" @click="goarea(item.KeyId,item.MatterStatus,item.CardKeyId,item.PaperType)">
          <div class="header">
            <div class="title">{{item.Title}}</div>
            <div class="type">{{exeStatus[item.MatterStatus?item.MatterStatus:item.Status]}}</div>
          </div>
          <div class="list ub">
            <div class="ub-f1">
              <div class="row">
                <div class="title">检查类型:</div>
                <div class="col">{{item.PaperType==1?'安全检查':'专项检查'}}</div>
              </div>
              <div class="row" v-if='type'>
                <div class="title">检查小区:</div>
                <div class="col">{{item.EaAreaName}}</div>
              </div>
              <div class="row">
                <div class="title">检查时间:</div>
                <div class="col">
                  {{item.StartTime | dateFormat('yyyy-MM-dd')}}至{{item.EndTime | dateFormat('yyyy-MM-dd')}}</div>
              </div>
              <div class="row" v-if='item.Status==2&&type==true'>
                <div class="title">任务分配:</div>
                <div class="col" @click='showDialog(item)'>
                  <el-link icon="el-icon-edit">查看/编辑</el-link>
                </div>
              </div>
              <div class="row" v-if='item.EndDesc!==null&&item.PaperType==1&&type==true'>
                <div class="title">是否合格:</div>
                <div class="col">{{item.EndDesc}}</div>
              </div>
              <div class="row">
                <div class="title">检查说明:</div>
                <div class="col des-row ub ub-f1" @click='showMore'>
                  <div class="">{{item.Description?item.Description:'-'}}</div>
                </div>
              </div>
            </div>
            <div class="list-grade" v-if='item.Grade'><span class="score col-66">{{item.Grade}}</span><span
                class="ft-26 col-66"> 分</span></div>
          </div>
        </li>
        <div class="tx-c ft-30 col-66 no-data" :style="{ display: checkList.length>0?'none':'block' }">暂无数据</div>
      </el-tab-pane>
      <el-tab-pane label="已结束" name="4" v-loading='loading'>
        <li v-for="item in checkList" @click="goarea(item.KeyId,item.MatterStatus,item.CardKeyId,item.PaperType)">
          <div class="header">
            <div class="title">{{item.Title}}</div>
            <div class="type">{{exeStatus[item.MatterStatus?item.MatterStatus:item.Status]}}</div>
          </div>
          <div class="list ub">
            <div class="ub-f1">
              <div class="row">
                <div class="title">检查类型:</div>
                <div class="col">{{item.PaperType==1?'安全检查':'专项检查'}}</div>
              </div>
              <div class="row" v-if='type'>
                <div class="title">检查小区:</div>
                <div class="col">{{item.EaAreaName}}</div>
              </div>
              <div class="row">
                <div class="title">检查时间:</div>
                <div class="col">
                  {{item.StartTime | dateFormat('yyyy-MM-dd')}}至{{item.EndTime | dateFormat('yyyy-MM-dd')}}</div>
              </div>
              <div class="row" v-if='item.EndDesc!==null&&item.PaperType==1&&type==true'>
                <div class="title">是否合格:</div>
                <div class="col">{{item.EndDesc}}</div>
              </div>
              <div class="row">
                <div class="title">检查说明:</div>
                <div class="col des-row ub ub-f1" @click='showMore'>
                  <div class="">{{item.Description?item.Description:'-'}}</div>
                </div>
              </div>
            </div>
            <div class="list-grade" v-if='item.Grade'><span class="score col-66">{{item.Grade}}</span><span
                class="ft-26 col-66"> 分</span></div>
          </div>
        </li>
        <div class="tx-c ft-30 col-66 no-data" :style="{ display: checkList.length>0?'none':'block' }">暂无数据</div>
      </el-tab-pane>
    </el-tabs> -->
    <el-dialog title="任务分配" :visible.sync="dialogVisible" width="80%">
      <!-- <span>这是一段信息</span> -->
      <div class="">
        <el-checkbox-group v-model="groupValue">
          <el-checkbox :label='item.LoginId' v-for='(item,index) in checkGroup' :key='index'>
            {{item.Description?item.FullName+"("+item.Description+")":item.FullName}}</el-checkbox>
        </el-checkbox-group>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" size='mini' v-if='type' @click="submit">确 定</el-button>
        <el-button size='mini' @click="handleClose">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import request from '../../../static/js/request.js'
import Storage from '../../../utils/storage.js'
import { Page } from '../../../models/page.js'
import filters from '../../../filters/index.js'
import { getQueryString } from '../../../utils/wechat.js'
import { getRollerHeight } from '../../../utils/pullUp.js'
import {EnumController} from '../../../service/EnumController/EnumController.js' //获取枚举公共服务
import {CommonControllerSvr} from '../../../service/CommonControllerSvr.js' //
import { SecurityCheckAMatterController } from '../../../service/SecurityCheckAMatterController/SecurityCheckAMatterController.js'
export default {
  data: {
    input2: '',
    token: '',
    showDetail: false,
    page: new Page(),
    checkList: [],
    checkGroup:[],
    groupValue:[],
    cardKeyId:'',
    enterpriseId: '',
    openid:'',
    type:null,
    theme:'',
    activeName:'2',
    loading:false,
    dialogVisible:false,
    exeStatus:{

    }
  },
  filters: {
    dateFormat: filters.formatDate
  },
  computed: {
    isDone() {
      return this.activeName=='2' ? false : true;
    },
  },
  created() {
    this.securityCheckAMatterController = new SecurityCheckAMatterController()
    this.commonControllerSvr=new CommonControllerSvr()
    this.enumController = new EnumController()

    this.wxApi.getwxUser().then(()=>{
      this.enumController.getEnum('wy.core.services.examine.EExamineMatterStatus').then(res=>{
        for( let item of res){
          this.exeStatus[item.value]=item.label
        }
        // this.exeStatus[2]='检查中'
      })
      let RoleNames= Storage.get('userInfo').RoleNames;
      if(RoleNames&&RoleNames.indexOf('安全检查')>=0){
        this.enterpriseId = Storage.get('userInfo').CertificateNum;
        this.openid=Storage.get('userInfo').OpenId;
        this.Type=Storage.get('userInfo').Type;
        if (this.Type == "主管部门用户") {
          window.location.href="../../../page/saftCheckStatistics/saftCheckStatistics.html"
        }else if (this.Type == "项目经理"){
          this.showDetail=true
        }
        this.token = Storage.get('userInfo').Token;
        this.type=Storage.get('userInfo').Type==='物业服务企业用户'; //是否为企业用户
        if(this.type){
          this.getList();
        }else{
          this.getData()
        }
      }else{
        this.open()
        // window.location.href='../../noPower/noPower.html'
      }

      window.onscroll = () => {
        if (getRollerHeight() == 0) {
          this.page.currentPage++;
          if(this.type){
            this.getList();
          }else{
            this.getData()
          }
        }
      }
    })
  },
  mounted() {
  },
  methods: {
    handleClick() {
      this.page.currentPage=1;
      this.checkList=[];
      if(this.type){
        this.getList();
      }else{
        this.getData()
      }
    },
    linkTo(keyId,cardKeyId,paperType){
      let e =window.event||event;
      e.stopPropagation()
      window.location.href='../editCheckterm/editCheckterm.html?keyId=' + keyId +'&CardKeyId='+cardKeyId+'&paperType='+paperType
    },
    open() {
      this.$alert('您没有权限访问此功能', '提示', {
        confirmButtonText: '确定',
        callback: action => {
          history.go(-1)
        }
      });
      this.$confirm('您没有权限访问此功能', '温馨提示', {
        cancelButtonText: '关闭',
        showConfirmButton:false,
        type: 'warning',
        center: true
      }).then(() => {
        history.back()
      }).catch(() => {
        history.back()
      });
    },
    showMore(e){
      e.stopPropagation()
      if(e.target.className==''){
        e.target.className='show-more'
      }else{
        e.target.className=''
      }
    },
    showDialog(item){
      this.groupValue=[]
      let e =window.event||event;
      e.stopPropagation()
      if(item.SecondOper){
        for(let i of item.SecondOper.split(',')){
          if(i!=''){
            this.groupValue.push(i)
          }
        }
      }else{
        this.groupValue=[]
      }
      this.cardKeyId=item.CardKeyId
      this.commonControllerSvr.GetOrgUserList(this.openid, item.OrgCode, 0, -1).then(res=>{
        this.checkGroup=res._Items
      }).catch(err=>{
        this.$message({
          type:'error',
          message:err
        })
      })
      this.dialogVisible=true
    },
    submit(){
      this.securityCheckAMatterController.ModifyCardTaskOpers(this.openid, this.cardKeyId, this.groupValue.join(',')).then(res=>{
        this.$message({
          type:'success',
          message:'提交成功'
        })
        this.groupValue=[];
        this.checkList=[];
        this.page.currentPage=1;
        if(this.type){
          this.getList();
        }else{
          this.getData()
        }
        this.dialogVisible=false
      }).catch(err=>{
        this.$message({
          type:'error',
          message:err
        })
      })
      // this.getData()
    },
    handleClose(){
      this.checkGroup=[]
      this.dialogVisible=false
    },
    // 项目经理获取答题卡
    getList() {
      this.loading=true;
      this.securityCheckAMatterController.GetCardListByRealtyComUser(this.openid, this.activeName, 0,(this.page.currentPage-1)*this.page.currtNum,
        this.page.currtNum).then(res => {
        this.loading=false;
        if(res&&res.length>0){
          this.checkList = this.checkList.concat(res);
        }
      }).catch(err => {
        if(err==="用户未绑定！") {
          this.open();
        }else {
          this.$message({message: err, type: 'error'})
        }
        this.loading=false;
      })
    },
    // 项目经理获取答题卡
    getData(){
      this.loading=true;
      this.securityCheckAMatterController.GetSecurityCheckMatterList(this.openid, '' ,0, 0,(this.page.currentPage-1)*this.page.currtNum,
        this.page.currtNum).then(res=>{
        this.loading=false;
        if(res&&res._Items.length>0){
          res._Items.forEach(element => {
            this.checkList.push({...element.SecurityCheckMatter,...element.Status})
          });
          // this.checkList = this.checkList.concat(res._Items);
        }
      }).catch(err => {
        if(err==="用户未绑定") {
          this.open();
        }else
        {
          this.$message({ message: err, type: 'error' })}
        this.loading=false;
      })
    },
    goarea(keyId,matterStatus,cardKeyId,paperType) {
      if(this.type===true){
        window.location.href = '../securityCheckDetail/securityCheckDetail.html?keyId=' + keyId +'&CardKeyId='+cardKeyId+'&matterStatus='+matterStatus+'&paperType='+paperType;
      }else{
        window.location.href = './selectArea/selectArea.html?keyId=' + keyId+'&matterStatus='+matterStatus+'&paperType='+paperType;
      }

      // this.securityCheckAMatterController.GetCardListByMatterKeyId(this.openid, keyId, 0, -1).then(res=>{
      //   let cardKeyId = res._Items[0].KeyId
      //   if(res._Items.length>1){
      //     window.location.href = './selectArea/selectArea.html?keyId=' + keyId+'&matterStatus='+matterStatus;
      //   }else{
      //     window.location.href = '../securityCheckDetail/securityCheckDetail.html?keyId=' + keyId +'&CardKeyId='+cardKeyId+'&matterStatus='+matterStatus;
      //   }
      // })

    }

  }
}
</script>

<style scoped sec="./safetyChecksList.scss">

</style>
