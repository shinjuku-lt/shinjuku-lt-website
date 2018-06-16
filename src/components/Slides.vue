<template lang="pug">
div#slides
  v-container(fluid)
    v-layout(row wrap offset-sm3)
      v-flex(xs12)
        v-card(flat)
          h2.tabtitle 発表内容について
          div.margin-bottom
            v-flex(xs12 sm6 offset-sm3 md4 offset-md4)
              p
                b 垣根がないサークルを作れる勉強会を目指しています
              | 内容はテック系に限らず、マネジメント、デザイン、キャリアについて…など発表内容について制限はありません。
              p LTといえば基本的に5分ですが、ShinjukuLTでは5分の制限も設けておりません。そのためボリューミーなスライドもございます。
      v-flex(xs12)
        v-card(flat)
          h2.tabtitle スライド
          div.margin-bottom
            p 過去の ShinjukuLTで発表されたスライドです。
            | 随時こちらにアップロードしていきます！
      v-flex(xs11 sm4  offset-sm4)
        v-select(label="開催年月を選択" :items="slideYMs" v-show="selectShow" v-model="selected" prepend-icon="map" hint="選択すると、対象月に発表されたスライドが閲覧できます。")
    v-container(fluid grid-list-lg class="min-reset-container")
      v-layout()
        v-flex(lg10 offset-lg1 md12 sm12 xs12)
            v-container(style="padding:0;")
              v-layout(row wrap)
                v-flex(lg4 md6 sm12 v-for="(slide, index) in slides" :key="index")
                  v-card(flat)
                    iframe(:src='slide.page.url' :height='slide.page.height' class="slide-iframe")
                    p {{slide.auther}}
</template>

<script>
import axios from 'axios'
let SLIDES = {}
let slideYMs = []
let defaultYM = slideYMs[slideYMs.length - 1]
export default {
  name: 'Slides',
  data () {
    return {
      loaded: true,
      selected: defaultYM,
      selectShow: false,
      slideYMs: slideYMs,
      slides: SLIDES[this.selected],
      test: 'border:1px solid #F0F'
    }
  },
  mounted () {
    axios.get('http://private-3507cc-mnuma.apiary-mock.com/v1/slide')
      .then(response => {
        SLIDES = response.data
        slideYMs = []
        Object.keys(SLIDES).forEach(function (month) {
          slideYMs.push({
            text: month,
            value: month
          })
        }, SLIDES)
        this.slideYMs = slideYMs
      })
  },
  updated () {
    this.slides = SLIDES[this.selected]
  },
  watch: {
    slideYMs: function (val) {
      this.selectShow = true
    }
  }
}
</script>

<style>
h2.tabtitle {
  margin-bottom: 6px;
  font-weight: bold;
  font-size: 28px;
  color: #aebf50;
}

div.margin-bottom {
  margin-bottom: 25px;
}

menu > .menuable__content__active {
  position: sticky !important;
}

.menu > .menu__content {
  position: sticky !important;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
