<template lang="pug">
  div#top
    shinjuku
    ul
      li: a(href="#" target="_blank") AboutUs
      li: a(href="#" target="_blank") Slide
      li: a(href="#" target="_blank") Contact
</template>

<script>
import shinjuku from './Shinjuku.vue'
export default {
  name: 'Top',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    shinjuku
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
