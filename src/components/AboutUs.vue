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
            | 同士で繋がりを持つ
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
            | 多様な個性を尊重するLGBTQコミュニティへオマージュを捧げ、サポートする意味合いを含めたコレクション
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
.top-logo {
  height: 270px;
  background-image: url('../assets/main_visual.png');
  background-size: 100%;
  background-repeat: no-repeat;
}
.about, .vision, .logo {
  margin-top: 80px;
}
.about-message {
  margin-top: 40px;
}
.about-message {
  line-height: 2em;
  font-weight: 600;
}
.highlight {
  display: inline;
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
  width: 230px;
  height: 230px;
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
  font-weight: 700;
  position: absolute;
  width: 100%;
  bottom: 20px;
  line-height: 22px;
  font-size: 14px;
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
  margin: 80px 0 100px;
  overflow: auto;
}
.logo-wrap {
  margin: 40px 0 0;
}
.img-box {
  width: 40%;
  border: solid 1px #ccc;
  float:left;
}
.img-box img {
  width: 100%;
}
.logo-message {
  width: 56%;
  float: right;
  text-align: left;
  line-height: 2em;
}
.logo-message h3 {
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 10px;
  font-weight: 900;
}
.logo-message p {
  font-weight: 600;
  line-height: 25px;
}
.quote {
  background: #F8F7F7;
  padding: 24px 0;
  margin: 15px 0 20px;
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
  font-size: 16px;
  font-weight: 900;
}
.quote p {
  font-size: 14px;
  line-height: 22px;
  margin: 0;
  padding: 0 70px;
}
@media screen and (max-width: 750px) {
  .top-logo {
    height: 15vh;
  }
  .about, .vision, .logo {
    margin-top: 20px;
  }
  .about-message {
    margin: 10px 20px 30px;
    text-align: left;
  }
  .vision-list {
    margin-top: 0;
  }
  .vision-list > li {
    width: 24vh;
    height: 24vh;
    margin: 10px 10px 60px;
  }
  .vision-list > li:nth-child(n+2) {
    margin: 10px 10px 60px;
  }
  .vision-message {
    height: 6vh;
    bottom: -50px;
  }
  .vision-image {
    top: 5%;
  }
  .vision-image-mic {
    left: 12%;
  }
  .vision-image-ear {
    top: 8%;
  }
  .logo {
    margin: 40px 0 40px;
    overflow: auto;
  }
  .logo-wrap {
    margin: 10px 20px;
  }
  .img-box {
    width: 100%;
    float: none;
    margin: 0 0 10px;
  }
  .logo-message {
    width: 100%;
    float: none;
  }
  .logo-message h3 {
    font-size: 16px;
    margin: 0 0 2px;
  }
  .logo-message p {
    font-weight: 600;
    line-height: 25px;
    text-align: left;
  }
  .quote {
    background: #F8F7F7;
    padding: 24px 0;
    margin: 15px 0 20px;
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
    font-size: 16px;
    font-weight: 900;
  }
  .quote p {
    font-size: 13px;
    line-height: 20px;
    padding: 0 30px;
  }
}
</style>
