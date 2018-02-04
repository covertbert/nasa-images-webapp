import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import ResultsPage from '@/pages/ResultsPage'
import IndividualResultPage from '@/pages/IndividualResultPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/search',
      name: 'ResultsPage',
      component: ResultsPage
    },
    {
      path: '/search/:id',
      name: 'IndividualResultPage',
      component: IndividualResultPage
    }
  ]
})
