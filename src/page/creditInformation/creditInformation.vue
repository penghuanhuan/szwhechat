<template>
  <div class="creditInformation bg-w" id="creditInformation" v-cloak v-loading='loading'>
    <div class="content  ft-28">
      <el-tabs v-model="objType" @tab-click='tabLoad' :stretch="true">
        <div class="mar-b ub ub-pj tx-c">
          <div class="col-w ft-28 ub-f1" @click='infoTypeChange("1")'>基本信息</div>
          <div class="col-w ft-28 ub-f1" @click='infoTypeChange("2")'>良好信息</div>
          <div class="col-w ft-28 ub-f1" @click='infoTypeChange("3")'>不良信息</div>
        </div>
        <span class="item-icon" :style='{left: infoType==1?"16%":infoType==2?"49%":"82%"}'></span>
        <el-tab-pane label="物业企业" name="1">
          <div class="data-search">
            <el-input v-model="searchValue" size='mini' placeholder="物业企业名称" clearable @clear="searchKeyWord">
              <i class="el-input__icon el-icon-search" slot="append" @click="searchKeyWord">
              </i>
            </el-input>
          </div>
          <div class="col-99 pad-b-20 pad-t-20" v-if='infoType == 1'>*列表按物业项目在管面积从大到小排列</div>
          <div class="col-99 pad-b-20 pad-t-20" v-if='infoType == 2'>*按照良好信息总计从多到少排</div>
          <div class="col-99 pad-b-20 pad-t-20" v-if='infoType == 3'>*按照不良信息总计从多到少排</div>
          <!-- 企业基本信息 v-if='infoType==1'-->
          <el-table key="objType1" v-if='infoType==1' @cell-click='cellClick' :data="tableData" style="width: 100%">
            <el-table-column prop="OrgName" label="企业名称" align='center' min-width="150" fixed :key="Math.random()"></el-table-column>
            <!-- <el-table-column prop="EvaluateScore" label="满意度得分" align='center' width="70"></el-table-column> -->
            <el-table-column prop="EvaluateRank" label="满意度排名" align='center' width="70" :key="Math.random()">
              <template slot-scope='scope'>{{scope.row.EvaluateRank != 0 && (!scope.row.EvaluateRank || scope.row.EvaluateRank == -1) ? '-' : scope.row.EvaluateRank}}</template>
            </el-table-column>
            <el-table-column prop="RealtyBuildTotalArea" label="在管面积㎡" align='center' width="95" :key="Math.random()">
              <template slot-scope='scope'>{{Number(scope.row.RealtyBuildTotalArea).toFixed(2)}}</template>
            </el-table-column>
            <el-table-column prop="RegComAccEaAreaCount" label="共有资金账户" align='center' width="70" :key="Math.random()"></el-table-column>
            <el-table-column label="信息公开率(%)" align='center' width="70">
              <template slot-scope='scope'>{{scope.row.PublicInfoDoneCount,scope.row.PublicInfoShouldCount|getProbability}}</template>
            </el-table-column>
            <el-table-column label="人员培训情况" align='center' width="70" :key="Math.random()">
              <template slot-scope='scope'>{{scope.row.EmplyeeTrainTotalCount != 0 && (!scope.row.EmplyeeTrainTotalCount || scope.row.EmplyeeTrainTotalCount == -1) ? '-' : scope.row.EmplyeeTrainTotalCount}}</template>
            </el-table-column>
            <el-table-column label="通知公告响应率(%)" align='center' width="80" :key="Math.random()">
              <template slot-scope='scope'>{{scope.row.ViewedNoticeCount,scope.row.ReceiveNoticeTotalCount|getProbability}}</template>
            </el-table-column>
            <el-table-column label="安全检查情况(%)" align='center' width="70" :key="Math.random()">
              <template slot-scope='scope'>{{scope.row.SecuritycheckQualifieCount,scope.row.SecuritycheckTotalCount|getProbability}}</template>
            </el-table-column>
            <el-table-column label="评价反馈率(%)" align='center' width="80" :key="Math.random()">
              <template slot-scope='scope'>{{scope.row.EvaResRate == '-' ? '-' : `${(Number(scope.row.EvaResRate)*100).toFixed(2)}`}}</template>
            </el-table-column>
            <el-table-column label="统计填报情况" align='center' width="80" :key="Math.random()">
              <template slot-scope='scope'>{{scope.row.ReportFillCount}}</template>
            </el-table-column>
            <el-table-column label="全国在管面积㎡" align='center' width="95" :key="Math.random()">
              <template slot-scope='scope'>{{Number(scope.row.TotalArea).toFixed(2)}}</template>
            </el-table-column>
          </el-table>

          <!-- 企业良好信息 v-if='infoType==2' -->
          <el-table key="objType2" v-if='infoType==2' @cell-click='cellClick' :data="tableData" style="width: 100%">
            <el-table-column prop="orgName" label="企业名称" align='center' min-width="150" fixed :key="Math.random()"></el-table-column>
            <el-table-column prop="green" label="绿色物业" align='center' width="70" :key="Math.random()"></el-table-column>
            <el-table-column label="幸福小区" align='center' width="70" :key="Math.random()">
              <template slot-scope='scope'>{{scope.row.happy}}</template>
            </el-table-column>
            <el-table-column prop="star" label="绿色物业星级评价" align='center' width="70" :key="Math.random()">
              <template slot-scope='scope'>{{scope.row.star}}</template>
            </el-table-column>
            <el-table-column prop="model" label="绿色物业示范项目" align='center' width="70" :key="Math.random()">
              <template slot-scope='scope'>{{scope.row.model}}</template>
            </el-table-column>
            <el-table-column label="连续六个月排名前十" align='center' width="90" :key="Math.random()">
              <template slot-scope='scope'>{{scope.row.top10}}</template>
            </el-table-column>
            <el-table-column prop="good" label="表彰信息" align='center' width="70" :key="Math.random()">
              <template slot-scope='scope'>{{scope.row.good}}</template>
            </el-table-column>
            <el-table-column prop="standard" label="标准编制" align='center' width="70" :key="Math.random()">
              <template slot-scope='scope'>{{scope.row.standard}}</template>
            </el-table-column>
          </el-table>


          <!-- 企业不良信息 v-if='infoType==3' -->
          <el-table key="objType3" v-if='infoType==3' @cell-click='cellClick' :data="tableData" style="width: 100%">
            <el-table-column prop="orgName" label="企业名称" align='center' min-width="150" fixed :key="Math.random()"></el-table-column>
            <el-table-column prop="rectification" label="责令整改" align='center' width="80" :key="Math.random()"></el-table-column>
            <el-table-column prop="punish" label="行政处罚" align='center' width="80" :key="Math.random()"></el-table-column>
            <el-table-column prop="arbitration" label="法院判决" align='center' width="80" :key="Math.random()"></el-table-column>
            <el-table-column prop="last10" label="连续六个月排名倒十" align='center' width="80" :key="Math.random()"></el-table-column>
          </el-table>

        </el-tab-pane>
        <el-tab-pane label="项目负责人" name="2">
          <div class="data-search">
            <el-input v-model="searchValue" size='mini' placeholder="项目负责人姓名/物业项目" clearable @clear="searchKeyWord">
              <i class="el-input__icon el-icon-search" slot="append" @click="searchKeyWord">
              </i>
            </el-input>
          </div>
          <div class="col-99 pad-b-20 pad-t-20" v-if='infoType == 1'>*列表按物业项目在管面积从大到小排列</div>
          <div class="col-99 pad-b-20 pad-t-20" v-if='infoType == 2'>*按照良好信息总计从多到少排</div>
          <div class="col-99 pad-b-20 pad-t-20" v-if='infoType == 3'>*按照不良信息总计从多到少排</div>
          <!-- 项目负责人基本信息 -->
          <el-table key="objType4" v-if='infoType==1' @cell-click='cellClick' :data="tableData" style="width: 100%">
            <el-table-column prop="ManageName" label="项目负责人" align='center' width="100" fixed></el-table-column>
            <el-table-column align='center' prop="EaAreaName" label="物业项目名称" min-width="150"></el-table-column>
            <!-- <el-table-column prop="EvaluateScore" label="满意度得分" align='center' width="70"></el-table-column> -->
            <el-table-column label="满意度排名" align='center' width="70">
              <template slot-scope='scope'>{{scope.row.EvaluateRank?scope.row.EvaluateRank:'-'}}</template>
            </el-table-column>
            <el-table-column prop="RealtyBuildArea" label="在管面积㎡" align='center' width="95">
              <template slot-scope='scope'>{{Number(scope.row.RealtyBuildArea).toFixed(2)}}</template>
            </el-table-column>
            <el-table-column prop="IsRegComAcc" label="登记共有资金账户" align='center' width="80">
              <template slot-scope='scope'>{{scope.row.IsRegComAcc?'是':'否'}}</template>
            </el-table-column>
            <el-table-column label="信息公开率(%)" align='center' width="70">
              <template slot-scope='scope'>{{scope.row.RealPubInfoCount,scope.row.ShouldPubInfoCount|getProbability}}</template>
            </el-table-column>
            <el-table-column label="人员培训情况" align='center' width="70">
              <template slot-scope='scope'>{{scope.row.EmplyeeTrainTotalCount}}</template>
            </el-table-column>
            <el-table-column label="通知公告响应率(%)" align='center' width="80">
              <template slot-scope='scope'>{{scope.row.ViewedNoticeCount,scope.row.ReceiveNoticeTotalCount|getProbability}}</template>
            </el-table-column>
            <el-table-column label="安全检查情况(%)" align='center' width="70">
              <template slot-scope='scope'>{{scope.row.SecuritycheckQualifieCount,scope.row.SecuritycheckTotalCount|getProbability}}</template>
            </el-table-column>
            <el-table-column label="评价反馈率(%)" align='center' width="80">
              <template slot-scope='scope'>{{scope.row.EvaResRate == '-' ? '-' : `${(Number(scope.row.EvaResRate)*100).toFixed(2)}`}}</template>
            </el-table-column>
          </el-table>

          <!-- 项目负责人良好信息 -->
          <el-table key="objType5" v-if='infoType==2' @cell-click='cellClick' :data="tableData" style="width: 100%">
            <el-table-column prop="mangerName" label="项目负责人" align='center' width="100" fixed></el-table-column>
            <el-table-column prop="eaAreaName" label="物业项目名称" align='center' min-width="150"></el-table-column>
            <el-table-column prop="green" label="绿色物业" align='center' width="70"></el-table-column>
            <el-table-column prop="happy" label="幸福小区" align='center' width="70">
              <template slot-scope='scope'>{{scope.row.happy}}</template>
            </el-table-column>
            <el-table-column prop="star" label="绿色物业星级评价" align='center' width="70" >
            </el-table-column>
            <el-table-column prop="model" label="绿色物业示范项目" align='center' width="70">
            </el-table-column>
            <el-table-column label="连续六个月排名前十" align='center' width="90">
              <template slot-scope='scope'>{{scope.row.top10}}</template>
            </el-table-column>
            <el-table-column label="表彰信息" align='center' width="70">
              <template slot-scope='scope'>{{scope.row.good}}</template>
            </el-table-column>
          </el-table>

          <!-- 项目负责人不良信息 -->
          <el-table key="objType6" v-if='infoType==3' @cell-click='cellClick' :data="tableData" style="width: 100%">
            <el-table-column prop="mangerName" label="项目负责人" align='center' width="100" fixed></el-table-column>
            <el-table-column align='center' prop="eaAreaName" label="物业项目名称" min-width="150"></el-table-column>
            <el-table-column prop="rectification" label="责令整改" align='center' width="80"></el-table-column>
            <el-table-column prop="punish" label="行政处罚" align='center' width="80"></el-table-column>
            <el-table-column prop="arbitration" label="法院判决" align='center' width="80"></el-table-column>
            <el-table-column prop="last10" label="连续六个月排名倒十" align='center' width="80"></el-table-column>
          </el-table>

        </el-tab-pane>
        <!-- v-if="isShowComter" -->
        <el-tab-pane label="业委会成员" name="3">
          <div class="data-search">
            <el-input v-model="searchValue" size='mini' placeholder="业委会成员姓名/物业项目" clearable @clear="searchKeyWord">
              <i class="el-input__icon el-icon-search" slot="append" @click="searchKeyWord">
              </i>
            </el-input>
          </div>
          <div class="col-99 pad-b-20 pad-t-20" v-if='infoType == 1'>*列表按物业项目在管面积从大到小排列</div>
          <div class="col-99 pad-b-20 pad-t-20" v-if='infoType == 2'>*按照良好信息总计从多到少排</div>
          <div class="col-99 pad-b-20 pad-t-20" v-if='infoType == 3'>*按照不良信息总计从多到少排</div>
          <!-- 业委会成员基本信息 -->
          <el-table key="objType7" v-if='infoType==1' @cell-click='cellClick' :data="tableData" style="width: 100%">
            <el-table-column prop="MasterName" label="业委会成员" align='center' width="100" fixed :key="Math.random()"></el-table-column>
            <el-table-column prop="EaAreaName" label="物业项目名称" align='center' min-width="150" :key="Math.random()"></el-table-column>
            <!-- <el-table-column prop="EvaluateScore" label="满意度得分" align='center' width="70"></el-table-column> -->
            <el-table-column label="满意度排名" align='center' width="70" :key="Math.random()">
              <template slot-scope='scope'>{{scope.row.EvaluateRank?scope.row.EvaluateRank:'-'}}</template>
            </el-table-column>
            <el-table-column prop="notViewed" label="登记共有资金账户" align='center' width="80" :key="Math.random()">
              <template slot-scope='scope'>{{scope.row.IsRegComAcc?'是':'否'}}</template>
            </el-table-column>
            <el-table-column label="信息公开率(%)" align='center' width="80" :key="Math.random()">
              <template slot-scope='scope'>{{scope.row.RealPubInfoCount,scope.row.ShouldPubInfoCount|getProbability}}</template>
            </el-table-column>
            <el-table-column label="人员培训情况" align='center' width="80" :key="Math.random()">
              <template slot-scope='scope'>{{scope.row.EmplyeeTrainTotalCount}}</template>
            </el-table-column>
            <el-table-column label="通知公告响应率(%)" align='center' width="80" :key="Math.random()">
              <template slot-scope='scope'>{{scope.row.ViewedNoticeCount,scope.row.ReceiveNoticeTotalCount|getProbability}}</template>
            </el-table-column>
            <el-table-column prop="notViewed" label="评价反馈率(%)" align='center' width="80" :key="Math.random()">
              <template slot-scope='scope'>{{scope.row.EvaResRate == '-' ? '-' : `${(Number(scope.row.EvaResRate)*100).toFixed(2)}`}}</template>
            </el-table-column>
          </el-table>

          <!-- 业委会成员良好信息 -->
          <el-table key="objType8" v-if='infoType==2' @cell-click='cellClick' :data="tableData" style="width: 100%">
            <el-table-column prop="masterName" label="业委会成员" align='center' width="100" fixed :key="Math.random()"></el-table-column>
            <el-table-column prop="eaAreaName" label="物业项目名称" align='center' min-width="150" :key="Math.random()"></el-table-column>
            <el-table-column label="连续六个月排名前十次数" align='center' width="80" :key="Math.random()">
              <template slot-scope='scope'>{{scope.row.top10}}</template>
            </el-table-column>
            <el-table-column label="表彰信息" align='center' width="80" :key="Math.random()">
              <template slot-scope='scope'>{{scope.row.good}}</template>
            </el-table-column>
          </el-table>
          <!-- 业委会成员不良信息 -->
          <el-table key="objType9" v-if='infoType==3' @cell-click='cellClick' :data="tableData" style="width: 100%">
            <el-table-column prop="masterName" label="业委会成员" align='center' width="120" fixed :key="Math.random()"></el-table-column>
            <el-table-column prop="eaAreaName" label="物业项目名称" align='center' min-width="150" :key="Math.random()"></el-table-column>
            <el-table-column prop="rectification" label="责令整改" align='center' width="80" :key="Math.random()"></el-table-column>
            <el-table-column prop="punish" label="行政处罚" align='center' width="80" :key="Math.random()"></el-table-column>
            <el-table-column prop="arbitration" label="法院判决" align='center' width="80" :key="Math.random()"></el-table-column>
            <el-table-column prop="last10" label="连续六个月排名倒十" align='center' width="80" :key="Math.random()"></el-table-column>
          </el-table>
        </el-tab-pane>
        <!-- v-if="isShowproprietor" -->
        <el-tab-pane label=" 业 主 " name="4">
          <div class="data-search">
            <el-input v-model="searchValue" size='mini' placeholder="业主姓名/物业项目" clearable @clear="searchKeyWord">
              <i class="el-input__icon el-icon-search" slot="append" @click="searchKeyWord">
              </i>
            </el-input>
          </div>
          <div class="col-99 pad-b-20 pad-t-20" v-if='infoType == 1'>*列表按物业项目在管面积从大到小排列</div>
          <div class="col-99 pad-b-20 pad-t-20" v-if='infoType == 2'>*按照良好信息总计从多到少排</div>
          <div class="col-99 pad-b-20 pad-t-20" v-if='infoType == 3'>*按照不良信息总计从多到少排</div>
          <!--业主基础信息-->
          <el-table key="objType10" v-if='infoType==1' @cell-click='cellClick' header-row-class-name='bg-g' :data="tableData" style="width: 100%">
            <el-table-column prop="eaAreaName" label="物业项目名称" align='center' min-width="150" fixed :key="Math.random()"></el-table-column>
            <el-table-column prop="peopleName" label="业主姓名" align='center' width="150" :key="Math.random()"></el-table-column>
          </el-table>

          <!-- 业主良好信息 -->
          <el-table key="objType11" v-if='infoType==2' @cell-click='cellClick' header-row-class-name='bg-g' :data="tableData" style="width: 100%">
            <el-table-column prop="eaAreaName" label="物业项目名称" align='center' min-width="150" fixed :key="Math.random()"></el-table-column>
            <el-table-column prop="peopleName" label="业主姓名" align='center' width="90" :key="Math.random()"></el-table-column>
            <el-table-column prop="good" label="表彰信息" align='center' width="90" :key="Math.random()"></el-table-column>
          </el-table>

          <!-- 业主不良信息 -->
          <el-table key="objType12" v-if='infoType==3' @cell-click='cellClick' header-row-class-name='bg-g' :data="tableData" style="width: 100%">
            <el-table-column prop="eaAreaName" label="物业项目名称" align='center' min-width="150" fixed :key="Math.random()"></el-table-column>
            <el-table-column prop="peopleName" label="业主姓名" align='center' width="90" :key="Math.random()"></el-table-column>
            <el-table-column prop="rectification" label="责令整改" align='center' width="80" :key="Math.random()"></el-table-column>
            <el-table-column prop="punish" label="行政处罚" align='center' width="90" :key="Math.random()"></el-table-column>
            <el-table-column prop="arbitration" label="法院判决" align='center' width="90" :key="Math.random()"></el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="业委会执行秘书" name="5">
          <div class="data-search">
            <el-input v-model="searchValue" size='mini' placeholder="业委会执行秘书姓名/物业项目" clearable @clear="searchKeyWord">
              <i class="el-input__icon el-icon-search" slot="append" @click="searchKeyWord">
              </i>
            </el-input>
          </div>
          <div class="col-99 pad-b-20 pad-t-20" v-if='infoType == 1'>*列表按物业项目在管面积从大到小排列</div>
          <div class="col-99 pad-b-20 pad-t-20" v-if='infoType == 2'>*按照良好信息总计从多到少排</div>
          <div class="col-99 pad-b-20 pad-t-20" v-if='infoType == 3'>*按照不良信息总计从多到少排</div>
          <!--业委会执行秘书基础信息-->
          <el-table key="objType13" v-if='infoType==1' @cell-click='cellClick' header-row-class-name='bg-g' :data="tableData" style="width: 100%">
            <el-table-column prop="eaAreaName" label="物业项目名称" align='center' min-width="150" fixed :key="Math.random()"></el-table-column>
            <el-table-column prop="peopleName" label="姓名" align='center' width="150" :key="Math.random()"></el-table-column>
            <el-table-column prop="emplyeeTrainTotalCount" label="人员培训情况" align='center' width="150" :key="Math.random()"></el-table-column>
          </el-table>

          <!-- 业委会执行秘书良好信息 -->
          <el-table key="objType14" v-if='infoType==2' @cell-click='cellClick' header-row-class-name='bg-g' :data="tableData" style="width: 100%">
            <el-table-column prop="eaAreaName" label="物业项目名称" align='center' min-width="150" fixed :key="Math.random()"></el-table-column>
            <el-table-column prop="masterName" label="姓名" align='center' width="90" :key="Math.random()"></el-table-column>
            <el-table-column prop="good" label="表彰信息" align='center' width="90" :key="Math.random()"></el-table-column>
          </el-table>

          <!-- 业委会执行秘书不良信息 -->
          <el-table key="objType15" v-if='infoType==3' @cell-click='cellClick' header-row-class-name='bg-g' :data="tableData" style="width: 100%">
            <el-table-column prop="eaAreaName" label="物业项目名称" align='center' min-width="150" fixed :key="Math.random()"></el-table-column>
            <el-table-column prop="masterName" label="姓名" align='center' width="90" :key="Math.random()"></el-table-column>
            <el-table-column prop="rectification" label="责令整改" align='center' width="80" :key="Math.random()"></el-table-column>
            <el-table-column prop="punish" label="行政处罚" align='center' width="90" :key="Math.random()"></el-table-column>
            <el-table-column prop="arbitration" label="法院判决" align='center' width="90" :key="Math.random()"></el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="业委会监事" name="6">
          <div class="data-search">
            <el-input v-model="searchValue" size='mini' placeholder="业委会监事姓名/物业项目" clearable @clear="searchKeyWord">
              <i class="el-input__icon el-icon-search" slot="append" @click="searchKeyWord">
              </i>
            </el-input>
          </div>
          <div class="col-99 pad-b-20 pad-t-20" v-if='infoType == 1'>*列表按物业项目在管面积从大到小排列</div>
          <div class="col-99 pad-b-20 pad-t-20" v-if='infoType == 2'>*按照良好信息总计从多到少排</div>
          <div class="col-99 pad-b-20 pad-t-20" v-if='infoType == 3'>*按照不良信息总计从多到少排</div>
          <!--业委会监事基本信息-->
          <el-table key="objType16" v-if='infoType==1' @cell-click='cellClick' header-row-class-name='bg-g' :data="tableData" style="width: 100%">
            <el-table-column prop="eaAreaName" label="物业项目名称" align='center' min-width="150" fixed :key="Math.random()"></el-table-column>
            <el-table-column prop="peopleName" label="姓名" align='center' width="150" :key="Math.random()"></el-table-column>
            <el-table-column prop="emplyeeTrainTotalCount" label="人员培训情况" align='center' width="150" :key="Math.random()"></el-table-column>
          </el-table>

          <!-- 业委会监事良好信息 -->
          <el-table key="objType17" v-if='infoType==2' @cell-click='cellClick' header-row-class-name='bg-g' :data="tableData" style="width: 100%">
            <el-table-column prop="eaAreaName" label="物业项目名称" align='center' min-width="150" fixed :key="Math.random()"></el-table-column>
            <el-table-column prop="masterName" label="姓名" align='center' width="90" :key="Math.random()"></el-table-column>
            <el-table-column prop="good" label="表彰信息" align='center' width="90" :key="Math.random()"></el-table-column>
          </el-table>

          <!-- 业委会监事不良信息 -->
          <el-table key="objType18" v-if='infoType==3' @cell-click='cellClick' header-row-class-name='bg-g' :data="tableData" style="width: 100%">
            <el-table-column prop="eaAreaName" label="物业项目名称" align='center' min-width="150" fixed :key="Math.random()"></el-table-column>
            <el-table-column prop="masterName" label="姓名" align='center' width="90" :key="Math.random()"></el-table-column>
            <el-table-column prop="rectification" label="责令整改" align='center' width="80" :key="Math.random()"></el-table-column>
            <el-table-column prop="punish" label="行政处罚" align='center' width="90" :key="Math.random()"></el-table-column>
            <el-table-column prop="arbitration" label="法院判决" align='center' width="90" :key="Math.random()"></el-table-column>
          </el-table>
        </el-tab-pane>
        <div class="ft-28 col-66 tx-c load-more" @click='more' v-if='loadMore'>加载更多</div>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { CreditInformationController } from '../../service/CreditInformationController/CreditInformationController.js';
import Storage from '../../utils/storage.js'
import {Page} from '../../models/page.js'
import {utils} from '../../utils/common.js'
export default {
  data(){
    return{
      searchValue: '',
      isShowComter:false,
      isShowproprietor:false,
      page:new Page(),
      indexStart:0,
      pageSize:20,
      objType:'1',
      tableData:[],//
      loadMore:false,
      infoType:'1',//信息类型
      loading:false,
    }
  },
  created(){
    this.CreditInformationController = new CreditInformationController()
    this.wxApi.getwxUser().then(()=>{
      this.userInfo = Storage.get('userInfo');
      this.objType = Storage.get('histeryObjType') ? Storage.get('histeryObjType') : '1';
      this.getTableDataByType(this.objType)
      if(this.userInfo.Type){
        if(this.userInfo.Type==='主管部门用户'||this.userInfo.Type==='街道办用户'||this.userInfo.Type==='居委会用户'||this.userInfo.Type==='业委会用户')
          this.isShowComter=true;
      }
      if(this.userInfo.Signs){
        if(this.userInfo.Signs.indexOf("物业服务企业项目经理") != -1)//res.Signs.indexOf("物业服务企业项目经理") != -1
          this.isShowComter=true;
      }

      this.wxApi.getOwner().then(res=>{
        if(res > 0){
          this.isShowproprietor = true;
          this.isShowComter = true;
        }
      })
    })
  },
  filters: {
    getProbability(num1,num2){
      if(num2 == 0 || num2 == null){
        return '-';
      }else if(num1 == 0 || num2 == 0){
        return 0;
      }else{
        return (parseFloat(num1)/parseFloat(num2)*100).toFixed(2)
      }
    },
  },
  watch: {
    infoType (val) {
      if (val) {
        this.indexStart=0;
        this.getTableDataByType(this.objType)
      }
    }
  },
  methods:{
    // 搜索
    searchKeyWord(){
      this.indexStart=0;
      this.tableData=[];
      this.getTableDataByType(this.objType)
    },
    // 更多数据
    more(){
      this.getTableDataByType(this.objType, true)
    },
    // 获取列表数据
    getTableDataByType(objType,loadMoreInfo = false) {
      this.loading=true
      if (!loadMoreInfo) {
        this.tableData = []
      }else {
        this.indexStart +=20
      }
      if (objType == 1 && this.infoType != "1"){// 物业企业 openId, orgName, type, startIndex, maxSize, resultCount
        this.CreditInformationController.GetBehaviorList(this.userInfo.OpenId,this.searchValue,this.infoType-1,this.indexStart,this.pageSize,true).then(res=>{
          this.loading=false
          if(res&&res._item){
            this.tableData = this.tableData.concat(res._item)
            if(res._item.length>=this.pageSize){
              this.loadMore=true
            }else{
              this.loadMore=false
            }
          }
        }).catch(error=>{
          this.loading=false
          this.$message({
            type:'error',
            message:error
          })
        })
      }else if(objType == 1 && this.infoType == "1"){
        this.CreditInformationController.GetBasicInformationList(this.userInfo.OpenId,this.searchValue,this.indexStart,this.pageSize).then(res=>{
          this.loading=false
          if(res&&res._Items){
            this.tableData = this.tableData.concat(res._Items)
            if(res._Items.length>=this.pageSize){
              this.loadMore=true
            }else{
              this.loadMore=false
            }
          }
        }).catch(error=>{
          this.loading=false
          this.$message({
            type:'error',
            message:error
          })
        })
      }else if (objType == 2  && this.infoType != "1"){
        this.CreditInformationController.GetBehaviorListByManger(this.userInfo.OpenId,'',this.infoType-1,this.indexStart,this.pageSize,true,this.searchValue).then(res=>{
          this.loading=false
          if(res&&res._item){
            this.tableData = this.tableData.concat(res._item)
            if(res._item.length>=this.pageSize){
              this.loadMore=true
            }else{
              this.loadMore=false
            }
          }
        }).catch(error=>{
          this.loading=false
          this.$message({
            type:'error',
            message:error
          })
        })
      }else if (objType == 2  && this.infoType == "1"){ //项目经理基本信息
        this.CreditInformationController.GetManageBaseInfoList(this.userInfo.OpenId,'','',this.indexStart,this.pageSize,this.searchValue).then(res=>{
          this.loading=false
          if(res&&res._Items){
            this.tableData = this.tableData.concat(res._Items)
            if(res._Items.length>=this.pageSize){
              this.loadMore=true
            }else{
              this.loadMore=false
            }
          }
        }).catch(error=>{
          this.loading=false
          this.$message({
            type:'error',
            message:error
          })
        })
      }else if (objType == 3  && this.infoType != "1"){
        this.CreditInformationController.GetBehaviorListByDirector(this.userInfo.OpenId,'','',this.infoType-1,this.indexStart,this.pageSize,true,this.searchValue).then(res=>{
          this.loading=false
          if(res&&res._item){
            this.tableData = this.tableData.concat(res._item)
            if(res._item.length>=this.pageSize){
              this.loadMore=true
            }else{
              this.loadMore=false
            }
          }
        }).catch(error=>{
          this.loading=false
          this.$message({
            type:'error',
            message:error
          })
        })
      }else if (objType == 3  && this.infoType == "1"){
        this.CreditInformationController.GetOwnerTeamMasterBaseInfoList(this.userInfo.OpenId,'','',this.indexStart,this.pageSize,this.searchValue).then(res=>{
          this.loading=false
          if(res&&res._Items){
            this.tableData = this.tableData.concat(res._Items)
            if(res._Items.length>=this.pageSize){
              this.loadMore=true
            }else{
              this.loadMore=false
            }
          }
        }).catch(error=>{
          this.loading=false
          this.$message({
            type:'error',
            message:error
          })
        })
      }else if(objType == 4 ) {
        if (this.infoType == 1) {
          this.CreditInformationController.GetBasicListByOwner(this.userInfo.OpenId,this.indexStart,this.pageSize,true,this.searchValue).then(res=>{
            this.loading=false
            if(res&&res._item){
              this.tableData = this.tableData.concat(res._item)
              if(res._item.length>=this.pageSize){
                this.loadMore=true
              }else{
                this.loadMore=false
              }
            }
          }).catch(error=>{
            this.loading=false
            this.$message({
              type:'error',
              message:error
            })
          })
        }else{
          this.CreditInformationController.GetBehaviorListByOwner(this.userInfo.OpenId,this.infoType-1,this.indexStart,this.pageSize,true,this.searchValue).then(res=>{
            this.loading=false
            if(res&&res._item){
              this.tableData = this.tableData.concat(res._item)
              if(res._item.length>=this.pageSize){
                this.loadMore=true
              }else{
                this.loadMore=false
              }
            }
          }).catch(error=>{
            this.loading=false
            this.$message({
              type:'error',
              message:error
            })
          })
        }
      }else if (objType == 5){
        if (this.infoType == 1) {
          this.CreditInformationController.GetBasicListBySecretary(this.userInfo.OpenId,this.indexStart,this.pageSize,true,this.searchValue).then(res=>{
            this.loading=false
            if(res&&res._item){
              this.tableData = this.tableData.concat(res._item)
              if(res._item.length>=this.pageSize){
                this.loadMore=true
              }else{
                this.loadMore=false
              }
            }
          }).catch(error=>{
            this.loading=false
            this.$message({
              type:'error',
              message:error
            })
          })
        }else{
          this.CreditInformationController.GetBehaviorListBySecretary(this.userInfo.OpenId, '', '', this.infoType-1, this.indexStart,this.pageSize,true,this.searchValue).then(res=>{
            this.loading=false
            if(res&&res._item){
              this.tableData = this.tableData.concat(res._item)
              if(res._item.length>=this.pageSize){
                this.loadMore=true
              }else{
                this.loadMore=false
              }
            }
          }).catch(error=>{
            this.loading=false
            this.$message({
              type:'error',
              message:error
            })
          })
        }
      }else if (objType == 6){
        if (this.infoType == 1) {
          this.CreditInformationController.GetBasicListBySupervisor(this.userInfo.OpenId,this.indexStart,this.pageSize,true,this.searchValue).then(res=>{
            this.loading = false
            if(res && res._item){
              this.tableData = this.tableData.concat(res._item)
              if(res._item.length >= this.pageSize){
                this.loadMore = true
              }else{
                this.loadMore = false
              }
            }
          }).catch(error=>{
            this.loading = false
            this.$message({
              type:'error',
              message:error
            })
          })
        }else{
          this.CreditInformationController.GetBehaviorListBySupervisor(this.userInfo.OpenId, '', '', this.infoType-1, this.indexStart,this.pageSize,true,this.searchValue).then(res=>{
            this.loading = false
            if(res && res._item){
              this.tableData = this.tableData.concat(res._item)
              if(res._item.length >= this.pageSize){
                this.loadMore = true
              }else{
                this.loadMore = false
              }
            }
          }).catch(error=>{
            this.loading=false
            this.$message({
              type:'error',
              message:error
            })
          })
        }
      }
    },
    // 主导航切换
    tabLoad(row,keyWord){
      Storage.set('histeryObjType', this.objType);
      this.searchValue = '';
      this.indexStart = 0;
      this.getTableDataByType(row.name);
    },
    // 可否通过点击的cell.property 判断进入不同页面
    cellClick(row, column, cell){
      const orgCode = row.orgCode || row.OrgCode || '';
      const orgName = encodeURI(row.orgName || row.OrgName || '');
      const eaAreaCode = row.eaAreaCode || row.EaAreaCode || '';
      const eaAreaName = encodeURI(row.eaAreaName || row.EaAreaName || '');
      const peopleName = encodeURI(row.peopleName || row.masterName || row.MasterName || row.mangerName || row.ManageName || '');
      const nickName = encodeURI(row.nickName || row.NickName || '');
      const phoneNum = row.phoneNum || '';
      const certificate = row.certificate || '';
      const keyId = row.keyID || row.keyId || row.UniqID || row.UniqId || ''
      if (column.label == '满意度得分' || column.label == '满意度排名' || column.label == '评价反馈率(%)') {
        const itemType = column.label == '评价反馈率(%)' ? 2 : 1;
        if(this.objType == 1 || this.objType == 2 || this.objType == 3){
          window.location.href = `./opinionRespondInformation/opinionRespondInformation.html?objType=${this.objType}&orgCode=${orgCode}&orgName=${orgName}&eaAreaCode=${eaAreaCode}&type=${itemType}`
        }else{
          window.location.href = `./rateDetail/rateDetail.html?objType=${this.objType}&eaAreaCode=${eaAreaCode}&eaAreaName=${eaAreaName}`
        }
      }else if (column.label == '在管面积㎡'){
        window.location.href = `./manageProject/manageProject.html?objType=${this.objType}&orgCode=${orgCode}&orgName=${orgName}&eaAreaCode=${eaAreaCode}`
      }
      else if (column.label == '共有资金账户'){
        window.location.href = `./accountRegister/accountRegister.html?objType=${this.objType}&orgCode=${orgCode}&orgName=${orgName}&eaAreaCode=${eaAreaCode}`
      }else if (column.label == '登记共有资金账户'){
        window.location.href = `./accountRegisterArea/accountRegisterArea.html?objType=${this.objType}&eaAreaCode=${eaAreaCode}&eaAreaName=${eaAreaName}`
      }else if (column.label == '信息公开率(%)'){
        window.location.href = `./informationOpen/informationOpen.html?objType=${this.objType}&orgCode=${orgCode}&orgName=${orgName}&eaAreaCode=${eaAreaCode}&eaAreaName=${eaAreaName}`
      }else if (column.label == '人员培训情况'){
        window.location.href = `./trainInformation/trainInformation.html?objType=${this.objType}&orgCode=${orgCode}&orgName=${orgName}&eaAreaCode=${eaAreaCode}&eaAreaName=${eaAreaName}&peopleName=${peopleName}&phoneNum=${phoneNum}`
      }else if (column.label == '通知公告响应率(%)'){
        if(this.objType == 1){
          window.location.href = `./noticeInformation/noticeInformation.html?orgCode=${orgCode}&orgName=${orgName}&eaAreaCode=${eaAreaCode}&eaAreaName=${eaAreaName}&nickName=${nickName}`
        }else{
          window.location.href = `./noticeInformationArea/noticeInformationArea.html?eaAreaName=${eaAreaName}&eaAreaCode=${eaAreaCode}&nickName=${nickName}`
        }
      }else if (column.label == '安全检查情况(%)'){
        if(this.objType == 1){
          window.location.href = `./safetyInformation/safetyInformation.html?objType=${this.objType}&orgCode=${orgCode}&orgName=${orgName}&eaAreaCode=${eaAreaCode}&eaAreaName=${eaAreaName}`
        }else{
          window.location.href = `./safetyInformationArea/safetyInformationArea.html?eaAreaName=${eaAreaName}&eaAreaCode=${eaAreaCode}`
        }
      }else if (column.label == '绿色物业' || column.label == '幸福小区' || column.label == '绿色物业星级评价' || column.label == '绿色物业示范项目' || column.label == '表彰信息' || column.label == '标准编制'){
        let typeNum = 1;
        switch (column.label) {
          case '绿色物业':
            typeNum = 3
            break;
          case '幸福小区':
            typeNum = 2
            break;
          case '绿色物业星级评价':
            typeNum = 5
            break;
          case '绿色物业示范项目':
            typeNum = 4
            break;
          case '表彰信息':
            typeNum = 1
            break;
          case '标准编制':
            typeNum = 7
            break;
        }
        window.location.href = `./wellHealth/wellHealth.html?objType=${this.objType}&orgCode=${orgCode}&orgName=${orgName}&eaAreaCode=${eaAreaCode}&eaAreaName=${eaAreaName}&peopleName=${peopleName}&certificate=${certificate}&option=${typeNum}`
      }else if (column.label == '责令整改' || column.label == '行政处罚' || column.label == '法院判决'){
        let typeNum = 1;
        switch (column.label) {
          case '责令整改':
            typeNum = 3
            break;
          case '行政处罚':
            typeNum = 1
            break;
          case '法院判决':
            typeNum = 2
            break;
          case '连续六个月排名倒十':
            typeNum = 4
            break;
        }
        window.location.href = `./unhealthy/unhealthy.html?objType=${this.objType}&orgCode=${orgCode}&orgName=${orgName}&eaAreaCode=${eaAreaCode}&eaAreaName=${eaAreaName}&peopleName=${peopleName}&certificate=${certificate}&option=${typeNum}`
      }else {
        window.location.href=`./propInformation/propInformation.html?objType=${this.objType}&infoType=${this.infoType}&orgCode=${orgCode}&orgName=${orgName}&eaAreaCode=${eaAreaCode}&eaAreaName=${eaAreaName}&peopleName=${peopleName}&certificate=${certificate}&keyId=${keyId}`
      }
    },
    // 基本信息 良好信息点击事件
    infoTypeChange(val){
      this.indexStart = 0;
      this.infoType = val;
    },
  },

}
</script>

<style scoped src="creditInformation.scss">

</style>
