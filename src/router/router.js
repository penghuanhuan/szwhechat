import Vue from 'vue'
import VueRouter from 'vue-router'
import articleList from '../page/articleList/articleList.vue'
import communityInfo from '../page/communityInfo/communityInfo.vue'
import PlotDetails from '../page/PlotDetails/PlotDetails.vue'
import creditInformation from '../page/creditInformation/creditInformation.vue'
import evaluationList from '../page/evaluationList/evaluationList.vue'
import mailList from '../page/mailList/mailList.vue'
import searchMaintenance from '../page/searchMaintenance/searchMaintenance.vue'
import repairs from '../page/repairs/repairs/vue'
import voteList from '../page/vote/voteList/voteList.vue'
import safetyChecksList from '../page/safetyCheck/safetyChecksList/safetyChecksList.vue'
import satisfaction from '../page/satisfaction/satisfaction.vue'
import propertyEvaluate from '../page/propertyEvaluate/propertyEvaluate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/articleList',
    name: 'articleList',
    component: articleList
  },
  {
    path: '/communityInfo',
    name: 'communityInfo',
    component: communityInfo
  },
  {
    path:'/PlotDetails',
    name:'PlotDetails',
    component:PlotDetails
  },
  {
    path:'/creditInformation',
    name:'creditInformation',
    component: creditInformation
  },
  {
    path:'./evaluationList',
    name:'evaluationList',
    component: evaluationList
  },
  {
    path:'/mailList',
    name:'mailList',
    component: mailList
  },
  {
    path:'searchMaintenance',
    name:'searchMaintenance',
    component: searchMaintenance
  },
  {
    path:'repairs',
    name:'repairs',
    component: repairs
  },
  {
    path:'voteList',
    name:'voteList',
    component: voteList
  },
  {
    path:'safetyChecksList',
    name:'safetyChecksList',
    component: safetyChecksList
  },
  {
    path:'/satisfaction',
    name:'satisfaction',
    component: satisfaction
  },
  {
    path:'/propertyEvaluate',
    name:'propertyEvaluate',
    component: propertyEvaluate
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
