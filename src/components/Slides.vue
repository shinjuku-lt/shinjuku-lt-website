<template lang="pug">
div#slides
  v-container(fluid)
    v-layout(row wrap offset-sm3)
      v-flex(xs12)
        p 過去の ShinjukuLTで発表されたスライドです。
        | 随時こちらにアップロードしていきます！
      v-flex(xs11 sm4  offset-sm4)
        v-select(label="開催年月を選択" :items="slideYMs" v-model="selected" prepend-icon="map" hint="選択すると、対象月に発表されたスライドが閲覧できます。")
    v-container(fluid grid-list-lg class="min-reset-container")
      v-layout()
        v-flex(lg10 offset-lg1 md12 sm12 xs12)
            v-container(style="padding:0;")
              v-layout(row wrap)
                v-flex(lg4 md6 sm12 v-for="slide in slides")
                  v-card(flat)
                    iframe(:src='slide.page.url' :height='slide.page.height' class="slide-iframe")
                    p {{slide.auther}}
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
      slides: SLIDES[this.selected],
      test: 'border:1px solid #F0F'
    }
  },
  updated () {
    this.slides = SLIDES[this.selected]
  }
}
</script>

<style>
menu > .menuable__content__active {
  position: sticky !important;
}

.menu > .menu__content {
  position: sticky !important;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
