<template>
  <div class="main" id="repairs" v-cloak>
    <div class="border1 mtg20 plr20 out-wrap header-content">
      <div class=" title-text"><i class="el-icon-location"></i>所在小区</div>
      <div class="slect-wrap">
        <el-select v-model="repairData.EaAreaCode" size='medium' filterable placeholder="请选择小区">
          <el-option v-for="item in plotNameList" :key="item.EaAreaCode" :label="item.EaAreaName"
                     :value="item.EaAreaCode">
          </el-option>
        </el-select>
      </div>
    </div>

    <div class="out-wrap">
      <span class="text bg ft-32 plr20 fc">
        <div class="title-repaire"><i class="el-icon-s-comment"></i>请选择或输入报修问题</div>
      </span>
      <el-input class="plr20 input-defined" v-model="inputRepairType" size='small' style="margin-top: 4px;" maxlength="20" show-word-limit
                placeholder="还可以在这里输入报修问题">
      </el-input>
      <div class="plr20 check-content">
        <el-checkbox-group v-model="checkedList" @change="groupChange">
          <el-checkbox class="mt" v-for="(item, index) in checkList" :key="index" :label=item border></el-checkbox>
        </el-checkbox-group>
      </div>
      <el-input class="input mt plr20 pb10" type="textarea" :rows="5" placeholder="报修问题可以在这里简述"
                v-model="repairData.RepairResume" clearable>
      </el-input>
      <div class="">
        <span class="text mt bg ft-32 plr20 fc">
          <div class="title-repaire"><i class="el-icon-picture"></i>添加照片（最多三张）</div>
        </span>
        <div class="bg-w img-wrap">
          <div class="ub ub-ac ub-f1 plr20">
            <el-upload class="mtg20 mbg10 item-img" action="https://jsonplaceholder.typicode.com/posts/" :limit='3'
                       :on-remove="removeImgs" :http-request='addImg' :file-list="uploadImgs" list-type="picture-card">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" alt="">
            </el-dialog>
          </div>
        </div>
        <div class="main plr20 pb50">
          <el-button v-if="!repairData.EaAreaCode || !repairData.RepairType" class="mt ft-32 plr20 ml-mr" type="primary"
                     size='medium' @click='submit()' disabled>提交</el-button>
          <el-button v-if="repairData.EaAreaCode && repairData.RepairType" class="mt ft-32 plr20 ml-mr" type="primary"
                     size='medium' @click='submit()'>提交</el-button>
          <el-link class="mt ft-32 plr20 " :underline="false" type="primary" @click="enterRepairsHistory()">查看报修历史
          </el-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from '../../static/js/request.js'
import Storage from '../../utils/storage.js'
import { WeChatCommonControllerSvr } from '../../service/WeChatCommonControllerSvr.js'
import { RepairController } from '../../service/RepairController.js'
import { Repair } from '../../models/Repair.js'
import { getUser } from '../../utils/wechat.js'
import { imageApi } from '../../utils/imageApi.js'
export default {
  data() {
    return{
      maxSize: 3,
      dialogVisible: false,
      src: '../../indexres/menu/img/icon-app-xj.png',
      uploadImgs: [],
      userInfoToken: '',
      token: '',
      userInfo: {},
      accessToken: '',
      inputRepairType: '',
      checkedList: [],
      checkList: [],
      checkboxName: '',
      weChatCommonControllerSvr : new WeChatCommonControllerSvr(),
      imageApi: new imageApi(),
      repairController: new RepairController(),
      repairData: new Repair(),
      AttachMenIDs: [],
      plotNameList: [],
      checkboxList: [],
    }
  },
  created() {
    this.wxApi.getwxUser().then(() => {
      this.userInfo = Storage.get('userInfo');
      this.getRepairQuestion();
      this.getPlotName();

    })
  },
  mounted() {
    let inp = document.querySelector('.el-upload__input')
    inp.setAttribute('type', 'button')
    inp.onclick = () => {
      this.addImg(3)
    }
  },
  methods: {
    success() {
      this.$message({
        showClose: true,
        message: '提交成功',
        type: 'success'
      });
    },
    mistake(text) {
      this.$message({
        showClose: true,
        message: text,
        type: 'error'
      });
    },
    addImg(maxSize) {
      if (maxSize - this.uploadImgs.length <= 0) return this.$message({
        type: 'error',
        message: '最多上传' + maxSize + '张图片'
      });
      this.imageApi.chooseImage(maxSize - this.uploadImgs.length, (res) => {
        this.imageApi.uploadImage(res, (childRes, index) => {
          this.uploadImgs.push({ url: res[index], serverId: childRes.serverId })
          this.updatePhoto(childRes.serverId);
        })
      })
    },
    removeImgs(file, files) {
      let index = this.uploadImgs.indexOf(file)
      this.uploadImgs.splice(index, 1)
      this.AttachMenIDs.splice(index, 1)
    },
    getPlotName() {
      this.weChatCommonControllerSvr.getResidentEaArea(this.userInfo.OpenId).then(res => {
        this.plotNameList = res._Items;
      })
    },
    updatePhoto(mediaId) {
      this.weChatCommonControllerSvr.SaveWeChatServiceFile(this.userInfo.AccessToken, mediaId).then(res => {
        // this.repairData.AttachMenIDs += res + ',';
        this.AttachMenIDs.push(res)
      }).catch(err => {
        this.mistake("图片提交失败，请重新提交");
      })
    },
    getRepairQuestion() {
      this.repairController.GetRepairQuestion().then(res => {
        this.checkList = res;
      })
    },
    checkboxSub() {
      for (var i = 0; i < (this.checkboxList).length; i++) {
        if (this.checkboxList[i].checked == true)
          this.checkboxState = true;
        break;
      }
    },
    groupChange() {
      var RepairType = "";
      for (var i = 0; i < this.checkedList.length; i++) {
        RepairType += this.checkedList[i] + ",";
      }
      RepairType += this.inputRepairType;
      this.repairData.RepairType = RepairType;
    },
    submit() {
      if (this.repairData.EaAreaCode == "") {
        this.mistake("提交失败,请选择小区");
        return;
      }
      if (this.repairData.RepairType == "") {
        this.mistake("提交失败，请选择报修问题");
        return;
      }
      // this.repairData.AttachMenIDs = this.repairData.AttachMenIDs.substring(0, this.repairData.AttachMenIDs.length - 1)
      this.repairData.AttachMenIDs = this.AttachMenIDs.join()
      this.repairData.RepairWay = 3;
      this.repairData.HandleStatus = 0;
      for (var i = 0; i < this.plotNameList.length; i++) {
        if (this.repairData.EaAreaCode == this.plotNameList[i].EaAreaCode) {
          this.repairData.EaAreaName = this.plotNameList[i].EaAreaName;
        }
      }

      this.repairController.AddRepair(this.userInfo.OpenId, this.repairData).then(res => {
        if (res == 'SUCCESS') {
          this.success();
          setTimeout(() => {
            this.enterRepairsHistory();
          }, 1000)
        } else {
          this.mistake("提交失败，请重新提交");
        }
      }).catch(err => {
        this.mistake("提交失败，请重新提交");
      })
    },
    enterRepairsHistory() {
      var url = "./repairsHistory/repairsHistory.html";
      window.location.href = url;
    }
  }
}
</script>

<style scoped src="repairs.scss">

</style>
