<template lang="pug">
  div#top
    div(class="header")
      header
        img(src="../assets/sunjuku_lt.png" width="25%")
        v-card
          tab
    main
      v-container(fluid)
      div
        v-card
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

<<style>
.header {
  background: url(../assets/background.jpg) center top no-repeat;
}
</style>


<!-- Add "scoped" attribute to limit CSS to this component only -->
