<template lang="pug">
  div#top
    v-toolbar(height="auto" align-center)
      v-layout(class="header")
        v-flex
          img(src="../assets/shinjuku_lt.png" width="25%")
          tab
    v-flex(xs12)
      main
      router-view
</template>

<script>
import tab from './Tab'
export default {
  name: 'Top',
  data () {
    return {}
  },
  components: {
    tab
  }
}
</script>

<style>
@media screen and (max-width: 400px) {
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
  background: url(../assets/background.jpg) center top no-repeat;
}
.layout.header{
  margin: 0 !important;
}
.logo {
  width: 20%;
  margin: 40px 0 10px 0;
}
.footer {
  margin-top: 80px;
  width: 100%;
  background-color: #CACACA
}
div.text-center {
  color: #666;
  margin: auto;
}  
</style>
