<template lang="pug">
div#aboutus
  div.top-logo
  div.about
    h2.top-title ABOUT
    div.about-message
      p Shinjuku.LTは
        span.highlight 世界で一番LTのハードルが低い勉強会
        | を目的に開催している勉強会です。
      p 「勉強会で一番勉強になるのは、発表者」と言われることがあります。
      p ということは、発表する機会をつくることで勉強になる人が増えるのではないかという理念を元に開催しています。
      p 2016年09月に発足し、そこから毎月一回のペースで開催しています。
  div.vision
    h2.top-title VISION
    ul.vision-list
      li
        <img class="vision-image vision-image-lt" src="../assets/vision_icon_1.png">
        p.vision-message
          span LTに慣れる
      li
        <img class="vision-image vision-image-mic" src="../assets/vision_icon_2.png">
        p.vision-message
          span
            | 定期的にアウトプット
            br
            | できる環境を作る
      li
        <img class="vision-image vision-image-ear" src="../assets/vision_icon_3.png">
        p.vision-message 
          span 
            | 人の話を聞いて
            br
            | 知見を増やす
      li
        <img class="vision-image vision-image-people" src="../assets/vision_icon_4.png">
        p.vision-message
          span 
            | エンジニア・デザイナー
            br
            | 同士で
            br
            | 繋がりを持つ
  div.logo
    h2.top-title LOGO
    div.logo-wrap
      div.img-box
        <img src="../assets/logo.png">
      div.logo-message
        h3
          | ロゴに込められた意味
        p
          | Shinjuku.LTのロゴは、Nikeの“BeTrue”コレクションをサンプリングソースにして作りました。
        div.quote
          h4
            | “BeTrue”コレクション
          p
            | 多様な個性を尊重するLGBTQコミュニティへオマージュを捧げ、
          p
            | サポートする意味合いを含めたコレクション
        p
          | 性別、年齢、出身地、やってる仕事、使っている言語など…、
        p
          span.highlight
            |いろんな人がいて、垣根がないサークルを作れる勉強会を目指しています。
</template>

<script>
export default {
  name: 'AboutUs',
  data () {
    return {}
  }
}
</script>

<style scoped>
h2 {
  margin-bottom: 6px;
  font-weight: bold;
  font-size: 28px;
  color: #c96b6e;
}
ul.center {
  margin: 0;
  padding: 0;
  text-align: center;
}
ul.center li {
  list-style-type: none;
}
p {
  margin: 0 0 0 0;
}
p.italic {
  font-style: italic;
}
.full-width {
  margin-left: -200%;
  margin-right: -200%;
  padding: 0 200%;
  width: 1200px;  
  box-sizing: content-box;
}
.top-logo {
  height: 320px;
  background-image: url('../assets/main_visual.png');
  background-size: 100%;
}
div.margin-bottom {
  margin-bottom: 25px;
}
.about, .vision, .logo {
  margin-top: 80px;
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
.about-message {
  margin-top: 40px;
}
.about-message {
  line-height: 2em;
  font-weight: 600;
}
.highlight {
  display: inline-block;
  background: linear-gradient(transparent 60%, #ffff66 60%);
}

.vision-list {
  margin-top: 35px;
  padding: 0;
  display:-webkit-box;
  display:-moz-box;
  display:-ms-box;
  display:-webkit-flexbox;
  display:-moz-flexbox;
  display:-ms-flexbox;
  display:-webkit-flex;
  display:-moz-flex;
  display:-ms-flex;
  display:flex;
  -webkit-box-lines:multiple;
  -moz-box-lines:multiple;
  -webkit-flex-wrap:wrap;
  -moz-flex-wrap:wrap;
  -ms-flex-wrap:wrap;
  flex-wrap:wrap;
}

.vision-list > li {
  width: 280px;
  height: 280px;
  position: relative;
  display: inline-block;
  background: #F5F8FA;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}

.vision-list > li:nth-child(n+2) {
  margin-left: 26px;
}

.vision-message {
  height: 85px;
  font-weight: 900;
  position: absolute;
  width: 100%;
  bottom: 30px;
}
.vision-message  * {
  position: relative;
  display: inline-block;
  transform: translateY(-50%);
  top: 50%;
}

.vision-image {
  position: absolute;
  width: 80%;
  height: 80%;
  top: -5%;
  left: 10%;
}

.vision-image-mic {
  left: 14%;
}
.vision-image-ear {
  top: 0%;
}

.logo {
  margin: 80px 0 140px;
  overflow: auto;
}
.logo-wrap {
  margin: 40px 0 0;
}
.img-box {
  width: 45%;
  border: solid 1px #ccc;
  float:left;
}
.img-box img {
  width: 80%;
}
.logo-message {
  width: 52%;
  float: right;
  text-align: left;
  line-height: 2em;
}
.logo-message h3 {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  font-weight: 900;
}
.logo-message p {
  font-weight: 600;
  margin-top: 15px;
}
.quote {
  background: #F8F7F7;
  padding: 18px;
  margin: 15px 0 30px;
  border-radius: 10px;
  text-align: center;
  position: relative;
  color: #868686;
}
.quote:after {
  font-family: Font Awesome\ 5 Free;
  font-weight: 900;
  position: absolute;
  content: "\F10d";
  font-size: 30px;
  color: #E6E6E6;
  top: 10px;
  left: 20px;
}
.quote h4 {
  font-weight: bold;
  margin: 0 0 10px;
  font-size: 20px;
}
.quote p {
  font-size: 16px;
  line-height: 26px;
}
</style>
