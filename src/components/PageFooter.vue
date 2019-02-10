<template lang="pug">
  div#footer
    div.footer_logo
      | <img src="../assets/logo_white.svg">
    div.sns_area
      div.tw_btn
        a(href="https://twitter.com/Shinjuku_LT?lang=ja" target="_blank") <i class="fab fa-twitter"></i>
      div.ig_btn
        a(href="https://www.instagram.com/shinjukult/" target="_blank") <i class="fab fa-instagram"></i>
    ul.footer_nav
      li.footer_menu
        <router-link to="/members">Member</router-link>
      li.footer_menu
        <router-link to="/slides">Slides</router-link>
      li.footer_menu
        <router-link to="/contact">Contact</router-link>
      li.footer_menu
        <router-link to="/next">Next</router-link>
      li.footer_menu
        a(href="https://shinjuku-lt.github.io/" target="_blank") PodCast
          | <i class="fas fa-external-link-alt"></i>
      li.footer_menu
        a.login(@click="logout()" v-if="authenticated") Member Logout
        a.login(@click="login()" v-else) Member Login
</template>

<script>
import pageHeader from './PageHeader'

export default {
  props: ['auth', 'authenticated'],
  components: {
    pageHeader
  },
  name: 'Top',
  methods: {
    login () {
      this.auth.login()
    },
    logout () {
      this.auth.logout()
    }
  }
}
</script>

<style scoped>
#footer {
  background: #333;
  padding: 40px 0 20px;
}
.footer_logo {
  width: 200px;
  margin: 0 auto 20px
}
.sns_area {
  display: inline-block;
  margin: 0 0 30px;
}
.sns_area a {
  display: block;
}
.tw_btn, .ig_btn {
  background: #FFF;
  width: 60px;
  height: 60px;
  border-radius: 40px;
  float: left;
  margin: 0 10px;
}
.tw_btn i, .ig_btn i {
  color: #333;
  line-height: 60px;
}
.footer_nav {
}
.footer_menu {
  display: inline-block;
  font-size: 16px;
  line-height: 10px;
  padding: 0 20px;
  margin: 0 0 20px;
  border-left: solid 1px #fff;
  font-weight: bold;
}
.footer_menu:first-child {
  border-left: none;
}
.footer_menu a {
  color: #FFF;
}
.footer_menu a i {
  margin: 0 0 0 4px;
}
.login {
  cursor: pointer;
}
</style>
