<template lang="pug">
  div#tab
    ul
      li(v-for="tab in tabs")
        v-btn(fab large :to="tab.path" :style='tab.class' style="background-color:#FFF") {{ tab.name }}
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
  font-size: 13px;
}

animalMidRed {
  background-color: #CA6B6D
}
animalGreen {
  background-color: #AEBF50
}
animalSkyBlue {
  background-color: #77B4B8
}
animialBlue {
  background-color: #3A507D
}

</style>
