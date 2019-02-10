<template lang="pug">
div#pageHeader
  div.row.wrap
    div.header_title
      <router-link to="/aboutus">
        <img src="../assets/logo_black.svg" width="150" height="120">
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
        a(href="/podcast" target="_blank") PodCast
          | <i class="fas fa-external-link-alt"></i>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (min-width: 1200px) {
  .btn {
    // width: 80px;
    // height: 80px;
    // font-size: 16px;
  }
}
@media screen and (max-width: 400px) {
  .btn {
    width: 50px;
    height: 50px;
    font-size: 8px;
  }
  .min-reset-container{
    padding: 0 !important;
  }
}
h1, h2 {
  font-weight: normal;
}
a {
  display: inline-block;
  color: #333333;
  font-weight: 900;
  line-height: 120px;
}
.header_title {
  display: inline-block;
  height: 120px;
  line-height: 120px;
  text-align: left;
  font-weight: 900;
  float: left;
}
.header_nav {
  display: inline-block;
  float: right;
  text-align: right;
}
.header_menu {
  display: inline-block;
  margin-left: 40px; 
}
.fa-external-link-alt {
  margin-left: 4px;
}
.clearfix::after{
  content: "";
  display: block;
  clear: both;
}
#pageHeader {
  width: 1200px;
}
</style>
