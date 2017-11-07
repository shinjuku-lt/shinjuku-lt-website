<template lang="pug">
  div#tab
    ul
      li(v-for="tab in tabs")
        router-link(:to="tab.path") {{ tab.name }}
    
</template>

<script>
import {
  TAB
} from '../constant/tab'

export default {
  name: 'Tab',
  data () {
    return {
      tabs: TAB
    }
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
