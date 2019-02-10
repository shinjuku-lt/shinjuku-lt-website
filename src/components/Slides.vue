<template lang="pug">
  div#slides
    h2.top-title Slides
    div.slides-message
      | 内容はテック系に限らず、マネジメント、デザイン、キャリアについて…など
      br
      | 発表内容について制限はありません。
      br
      | LTといえば基本的に5分ですが、
      br
      | ShinjukuLTでは5分の制限も設けておりません。
      br
      | そのためボリューミーなスライドもございます。
      br
      br
      | 過去の ShinjukuLTで発表されたスライドです。
      br
      | 随時こちらにアップロードしていきます！
    //- span {{ slideYMs }}
    div.slides-year(v-for="slide in slideYMs") {{ slide.key }}
    //- div.slides-year(v-for="(slide, index) in slides" :key="index") {{ slide.year }}
      div.slide-months
        div.slide-month.slide-month-disabled 12
        div.slide-month.slide-month-disabled 11
        div.slide-month.slide-month-selected 10


    //- div.slides-year 2019
    //- div.slide-months
    //-   div.slide-month.slide-month-disabled 12
    //-   div.slide-month.slide-month-disabled 11
    //-   div.slide-month.slide-month-selected 10
    //-   div.slide-month 09
    //-   div.slide-month 08
    //-   div.slide-month 07
    //-   div.slide-month 06
    //-   div.slide-month 05
    //-   div.slide-month 04
    //-   div.slide-month 03
    //-   div.slide-month 02
    //-   div.slide-month 01
    //- div.slide-previews
    //-   div.slide-preview
    //-   div.slide-preview
    //-   div.slide-preview
    //-   div.slide-preview
    //-   div.slide-preview

    //- div.slides-year 2018
    //- div.slide-months
    //-   div.slide-month 12
    //-   div.slide-month 11
    //-   div.slide-month 10
    //-   div.slide-month 09
    //-   div.slide-month 08
    //-   div.slide-month 07
    //-   div.slide-month 06
    //-   div.slide-month 05
    //-   div.slide-month 04
    //-   div.slide-month 03
    //-   div.slide-month 02
    //-   div.slide-month 01
    //- div.slide-previews
    //-   div.slide-preview
</template>

<script>
import axios from 'axios'
let SLIDES = {}
let slideYMs = []
let defaultYM = slideYMs[slideYMs.length - 1]

export default {
  props: ['authenticated'],
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
    const header = this.authenticated ? {'headers': {'Authorization': 'Bearer ' + localStorage.getItem('idToken')}} : {}
    axios.get('https://shinjuku-lt-backend.now.sh/slide', header)
      .then(response => {
        SLIDES = response.data
        slideYMs = []
        Object.keys(SLIDES).forEach(function (yearMonth) {
          let tmpSlides = []
          // 年月別のスライド集約
          SLIDES[yearMonth].forEach(function (slide) {
            tmpSlides.push({
              type: slide.type,
              presenter: slide.presenter,
              url: slide.page.url,
              width: slide.page.width,
              height: slide.page.height
            })
          })
          // 返却するパラメタ作成
          const year = yearMonth.substring(0, 4)
          const month = parseInt(yearMonth.substring(4, 6))
          slideYMs.push({
            [year]: {[month]: tmpSlides}
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
#slides {
  margin-top: 50px;
}
.top-title {
  display: inline-block;
  position: relative;
  color: #333333;
  font-size: 32px;
  font-weight: 900;
  padding-bottom: 10px;
  letter-spacing: 1.2px;
  margin: 0px;
}
.top-title:before {
  content: '';
  position: absolute;
  top: 50px;
  left: calc((100% - 20px)/2);
  width: 20px;
  height: 4px;
  background-color: #DDDDDD;
}
.slides-message {
  margin-top: 40px;
  line-height: 2em;
  font-weight: 600;
}
.slides-year {
  font-size: 22px;
  font-weight: 900;
  text-align: left;
  border-bottom: 2px solid #333333;
  padding-bottom: 8px;
  margin-top: 50px;
}
.slides-year:last-child {
  margin-bottom: 50px;
}
.slide-months {
  margin-top: 26px;
  text-align: left;
}
.slide-month {
  font-size: 20px;
  font-weight: 900;
  height: 27px;
  width: 27px;
  display: inline-block;
  text-align: center;
  cursor: pointer;
}
.slide-month-selected:before {
  content: '';
  background-color: #cccccc;
  height: 1.5em;
  width: 2em;
  margin-left: -5px;
  position: absolute;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}
.slide-month-disabled {
  color: #CCCCCC;
  cursor: none;
}
.slide-month:nth-child(n+2){
  margin-left: 20px;
}
.slide-previews {
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
}
.slide-preview {
  width: 360px;
  height: 260px;
  background-color: #e3e3e3;
  display: inline-flex;
}
.slide-preview:nth-child(n + 4) {
  margin-top: 50px;
}
.slide-preview:nth-child(3n + 2) {
  margin-right: 60px;
  margin-left:  60px;
}
</style>
