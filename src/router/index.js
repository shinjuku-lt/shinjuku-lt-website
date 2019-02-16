import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import AboutUs from '@/components/AboutUs'
import Members from '@/components/Members'
import Slides from '@/components/Slides'
import Contact from '@/components/Contact'
import Next from '@/components/Next'
import Callback from '@/components/Callback'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top,
      children: [
        {
          path: '/aboutus',
          name: 'AboutUs',
          component: AboutUs
        },
        {
          path: '/members',
          name: 'Members',
          component: Members
        },
        {
          path: '/slides',
          name: 'Slides',
          component: Slides
        },
        {
          path: '/contact',
          name: 'Contact',
          component: Contact
        },
        {
          path: '/next',
          name: 'Next',
          component: Next
        },
        {
          mode: 'history',
          path: '/callback',
          name: 'Callback',
          component: Callback
        }
      ]
    // },
    // {
    //   path: '/aboutus',
    //   name: 'AboutUs',
    //   component: AboutUs
    }
  ]
})

export default router
