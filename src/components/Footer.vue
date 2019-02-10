<template lang="pug">
  div#footer
    v-toolbar(height="auto" align-center style="width:101%")
      v-layout(class="header")
        v-flex
          tab
</template>

<script>
import tab from './Tab'
export default {
  name: 'Top',
  data () {
    return {}
  },
  components: {
    tab, github
  }
}
</script>

<style>
@media screen and (max-width: 420px) {
  .btn {
    width: 50px;
    height: 50px;
    font-size: 8px;
  }
  .min-reset-container{
    padding: 0 !important;
  }
  .slide-iframe{
    padding: 0 !important;
    width: 100% !important;
  }
//  .logo {
//    width: 25%;
//    margin: 20px 0 0 0 !important;
//  }
}
</style>

<style scoped>
.header {
  height: 120px;
  
  // background: url(../assets/background.jpg) center no-repeat fixed;
}
.layout.header{
  // margin: 0 !important;
}
.logo {
  width: 25%;
  margin: 40px 0 0 0;
}
div.text-center {
  color: #666;
  margin: auto;
}  
</style>
