<template lang="pug">
div#tab
  v-container(fluid class="min-reset-container")
    v-layout(row wrap)
      v-flex(md8 offset-md2 xs12)
        v-container(fluid grid-list-lg class="min-reset-container")
          v-layout()
            v-flex(md4 xs6 v-for="tab in tabs")
              v-btn(fab :to="tab.path" :style='tab.style' style="background-color:#FFF") {{ tab.name }}
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
@media screen and (min-width: 960px) {
  .btn {
    width: 80px;
    height: 80px;
    font-size: 16px;
  }
}
@media screen and (max-width: 400px) {
  .btn {
    width: 50px;
    height: 50px;
    font-size: 8px;
  }
  .min-reset-container{
    padding: 0 !important;
  }
}

#tab{
  margin-top: 20px;
  padding-bottom: 20px;
}
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
  font-size: 11px;
  font-weight: bold;
}
</style>
