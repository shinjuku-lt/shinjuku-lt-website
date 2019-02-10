<template lang="pug">
  div#top
    // github
    v-layout(class="header")
      v-flex
        pageHeader
    v-flex(xs12)
      div.logo
      main
        router-view
      pageFooter(:auth="auth" :authenticated="authenticated")
</template>

<script>
import pageHeader from './PageHeader'
import pageFooter from './PageFooter'
import github from './Github'
export default {
  props: ['auth', 'authenticated'],
  name: 'Top',
  data () {
    return {}
  },
  components: {
    pageHeader, pageFooter, github
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
  height: 380px;
  background-image: url('../assets/main_visual.png');
  background-size: 100%;
}
div.text-center {
  color: #666;
  margin: auto;
}
main, .header {
  width: 1200px;
  margin: 0 auto;
}
</style>
