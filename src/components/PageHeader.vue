<template lang="pug">
div#pageHeader
  div.header_logo
    <router-link to="/aboutus">
      <img src="../assets/logo_black.svg">
    </router-link>
  ul.header_nav
    li.header_menu
      <router-link to="/members">Member</router-link>
    li.header_menu
      <router-link to="/slides">Slides</router-link>
    li.header_menu
      <router-link to="/contact">Contact</router-link>
    li.header_menu
      <router-link to="/next">Next</router-link>
    li.header_menu
      a(href="https://shinjuku-lt.github.io/" target="_blank") PodCast
      | <i class="fas fa-external-link-alt"></i>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#pageHeader {
  width: 1000px;
  line-height: 60px;
  margin: 20px auto;
}
.header_logo {
  display: inline-block;
  text-align: left;
  float: left;
  width: 150px;
}
.header_logo a {
  display: block;
}
.header_nav {
  text-align: right;
}
.header_menu {
  display: inline-block;
  margin-left: 40px;
}
.header_menu i {
  font-size: 14px;
  color: #ccc;
  margin-left: 4px;
}
.header_menu a {
  display: inline-block;
  color: #333333;
}
@media screen and (max-width: 768px) {
  #pageHeader {
    width: 100%;
    line-height: 20px;
    margin: 20px auto 10px;
  }
  .header_logo {
    width: 40%;
    float: none;
    margin: 0 0 6px;
  }
  .header_nav {
    text-align: center;
  }
  .header_menu {
    display: inline-block;
    margin: 0 6px;
  }
  .header_menu i {
    font-size: 10px;
  }
  .header_menu a {
    line-height: 20px;
    font-size: 12px;
  }
}
</style>
