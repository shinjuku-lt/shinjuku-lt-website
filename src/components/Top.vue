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

<<style>
.header {
  background: url(../assets/background.jpg) center top no-repeat;
}
</style>


<!-- Add "scoped" attribute to limit CSS to this component only -->
