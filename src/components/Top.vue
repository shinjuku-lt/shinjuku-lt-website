<template lang="pug">
  div#top
    div(class="header")
      header
        img(src="../assets/shinjuku_lt.png" width="25%")
        v-card
          tab
    main
      router-view
    v-footer
      span(class="text-center") ShinjukuLT
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
.header {
  background: url(../assets/background.jpg) center top no-repeat;
  margin-bottom: 16px
}
</style>


<!-- Add "scoped" attribute to limit CSS to this component only -->
