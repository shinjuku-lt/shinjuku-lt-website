import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import AboutUs from '@/components/AboutUs'
import Slides from '@/components/Slides'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top,
      redirect: '/aboutus',
      children: [
        {
          path: '/aboutus',
          name: 'AboutUs',
          component: AboutUs
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
        }
      ]
    }
  ]
})
