import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '@/components/DashBoard'
import NewComputer from '@/components/NewComputer'
import EditComputer from '@/components/EditComputer'
import ViewComputer from '@/components/ViewComputer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashBoard
    },
    {
      path: '/new',
      name: 'new-computer',
      component: NewComputer
    },
    {
      path: '/edit/:computer_id',
      name: 'edit-computer',
      component: EditComputer
    },
    {
      path: '/:computer_id',
      name: 'view-computer',
      component: ViewComputer
    },
  ]
})
