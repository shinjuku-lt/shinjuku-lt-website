<template lang="pug">
  div#top
    div.header
      header
        img.logo(src="../assets/shinjuku_lt.png")
        v-card
          tab
    main
      router-view
    v-footer
      div.text-center ShinjukuLT
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

<style scoped>
.header {
  background: url(../assets/background.jpg) center top no-repeat;
  margin-bottom: 25px;
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
