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
    // 年月の降順出力
    div.slides-year(v-for="year in Object.keys(slideYMs).reverse()") {{ year }}
      div.slide-months
        div.slide-month(v-for="month in 12" :class="{'slide-month-disabled': !Object.keys(slideYMs[year]).includes(month.toString()), 'slide-month-active': selectedYearMonth[year][month]}" @click="Object.keys(slideYMs[year]).includes(month.toString())? selectYearMonth(year, month): ''") {{ ('00' + month).slice(-2) }}
      div.slide-previews(v-for="month in 12" v-if="selectedYearMonth[year][month]")
        div.slide-preview(v-for="slide in slideYMs[year][month]")
          iframe(:src="slide.page.url")
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
      slideYMs: slideYMs,
      slides: SLIDES[this.selected],
      test: 'border:1px solid #F0F',
      selectedYearMonth: {}
    }
  },
  mounted () {
    const header = this.authenticated ? {'headers': {'Authorization': 'Bearer ' + localStorage.getItem('idToken')}} : {}
    axios.get('https://shinjuku-lt-backend.now.sh/slide', header)
      .then(response => {
        SLIDES = response.data
        slideYMs = {}
        for (var yearMonth in SLIDES) {
          // 返却するパラメタ作成
          const year = yearMonth.substring(0, 4)
          const month = parseInt(yearMonth.substring(4, 6))
          if (!slideYMs[year]) {
            slideYMs[year] = {}
          }
          slideYMs[year][month] = SLIDES[yearMonth]
          if (!this.selectedYearMonth[year]) {
            this.selectedYearMonth[year] = {}
            this.selectedYearMonth[year][month] = true
          }
        }
        var keys = []
        var newHash = {}
        for (var k in slideYMs) { keys.push(k) }
        keys.reverse()
        var length = keys.length
        for (var i = 0; i < length; i++) {
          newHash[keys[i]] = slideYMs[keys[i]]
        }
        this.slideYMs = newHash
      })
  },
  methods: {
    selectYearMonth (year, month) {
      var hoge = Object.assign({}, this.selectedYearMonth)
      hoge[year] = {}
      hoge[year][month] = true
      this.selectedYearMonth = hoge
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
  padding-bottom: 8px;
  margin-top: 50px;
}
.slides-year:last-child {
  margin-bottom: 50px;
}
.slide-months {
  border-top: 2px solid #333333;
  margin-top: 10px;
  padding-top: 20px;
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
.slide-month-active {
  content: '';
  background-color: #cccccc;
  display: inline-block;
  height: 1.5em;
  width: 2em;
  margin-left: -5px;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}
.slide-month-disabled {
  color: #CCCCCC;
  cursor: default;
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
  display: inline-flex;
}
.slide-preview > iframe {
  width: 300px;
  height: 216px;
}
.slide-preview:nth-child(n + 4) {
  margin-top: 50px;
}
.slide-preview:nth-child(3n + 2) {
  margin-right: 50px;
  margin-left:  50px;
}
</style>
