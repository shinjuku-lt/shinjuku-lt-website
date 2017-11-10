<template lang="pug">
  div#top
    v-layout(row wrap)
      v-flex(xs12)
        div(class="header")
          img(src="../assets/shinjuku_lt.png" width="25%")
          v-card
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
  height: 0px;
}
</style>


<!-- Add "scoped" attribute to limit CSS to this component only -->
