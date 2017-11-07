<template lang="pug">
div#slides
  select(v-model="selected")
    option(v-for="slideYM in slideYMs") {{slideYM}}
  span selected: {{selected}}
  ul
    li(v-for="slide in slides") {{slide.page}} {{ slide.name }}
      iframe(:src='slide.page.url')
</template>

<script>
import {
  SLIDES
 } from '../constant/slide'
let slideYMs = []
Object.keys(SLIDES).forEach(function (month) {
  slideYMs.push(month)
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
