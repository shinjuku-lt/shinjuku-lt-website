<template lang="pug">
  div#top
    shinjuku
    tab
    router-view
</template>

<script>
import shinjuku from './Shinjuku'
import tab from './Tab'
export default {
  name: 'Top',
  data () {
    return {}
  },
  components: {
    shinjuku,
    tab
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
