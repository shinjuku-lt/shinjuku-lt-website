<template lang="pug">
div#slides
  v-layout(row wrap)
    v-flex(xs6)
      v-select(label="開催年月" :items="slideYMs" v-model="selected")
</template>

<script>
import {
  SLIDES
 } from '../constant/slide'
let slideYMs = []
Object.keys(SLIDES).forEach(function (month) {
  slideYMs.push({
    text: month,
    value: month
  })
}, SLIDES)
let defaultYM = slideYMs[slideYMs.length - 1]
export default {
  name: 'Slides',
  data () {
    return {
      loaded: true,
      selected: defaultYM,
      slideYMs: slideYMs,
      slides: SLIDES[defaultYM],
      test: 'border:1px solid #F0F'
    }
  },
  updated () {
    this.slides = SLIDES[this.selected]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
