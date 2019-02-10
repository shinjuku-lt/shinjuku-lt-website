<template lang="pug">
div#pageHeader
  div.row.wrap
    div.header_title
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
}
.header_title {
  display: inline-block;
  line-height: 120px;
  text-align: left;
  font-weight: 900;
  float: left;
}
.header_title {
  width: 150px;
}
.header_nav {
  text-align: right;
}
.header_menu {
  display: inline-block;
  margin-left: 40px;
}
.header_menu i{
  font-size: 16px;
  color: #ccc;
}
.header_menu a {
  display: inline-block;
  color: #333333;
  font-weight: 900;
  line-height: 120px;
}
.fa-external-link-alt {
  margin-left: 4px;
}
@media screen and (max-width: 750px) {
  #pageHeader {
    width: 100%;
    padding: 20px 0 0;
  }
  .header_title {
    line-height: 20px;
    text-align: center;
    float: none;
  }
  .header_title {
    width: 120px;
    line-height: 20px;
    margin: 0 0 6px;
  }
  .header_nav {
    text-align: center;
  }
  .header_menu {
    display: inline-block;
    margin: 0 10px;
  }
  .header_menu i{
    font-size: 12px;
  }
  .header_menu a {
    line-height: 20px;
    font-size: 12px;
  }
}
</style>
