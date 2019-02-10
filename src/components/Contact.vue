<template lang="pug">
div#contact
  h2 CONTACT
  div.contents
    h3 ご参加方法
    p Shinjuku.LTは現在、会場の兼ね合いでconnpass等の外部サイトでの参加募集は行っておりません。 
    p 興味を持っていただいた方や、
    p ご質問などはお手数ですが、Shinjuku.LTのTwitterにて一度ご連絡頂ければと思います。
    p お気軽にご連絡ください！
    a(href="https://twitter.com/Shinjuku_LT?lang=ja" target="_blank") @Shinjuku_LT
  div.contents
    h3 応募条件
    p 参加条件等は特にございません。 
    P 現在の参加メンバーはエンジニアが多いですが、 
    P デザイナー、マーケター、ディレクター、ライター、etc…
    p 様々な方のご参加をお持ちしております。
    p 複数人での参加も歓迎致します。
    p まずは一度ご参加頂ければと思いますのでご連絡ください。
  div.contents
    h3 応募条件
    p Twitterのハッシュタグ
      b #shinjukult
      | で雰囲気などがわかるかもしれません。
    p 参加メンバーにエンジニアが多数いる関係でテック系のLT比率が高めです。
    p 月に一度のLT以外にも年に数回、開発合宿もしています。
    p 合宿の様子や（ただの）飲み会などメンバーの
    p 雰囲気がわかるInstagramも良ければ覗きに来てください。
    div.sns_area
      div.tw_btn
        a(href="https://twitter.com/Shinjuku_LT?lang=ja" target="_blank") <i class="fab fa-twitter"></i>
          p @Shinjuku_LT
      div.ig_btn
        a(href="https://twitter.com/Shinjuku_LT?lang=ja" target="_blank") <i class="fab fa-instagram"></i>
          p ShinjukuLT
          div.contents
  div.contents
    h3 開催場所と日時
    p 開催場所はと日時は、 
    p 月によって変わりますので
      <router-link to="/next">Next</router-link>
      | のページからご確認ください。
    p 各メンバーのオフィスをお借りしたり、会議室を予約しています。

</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {}
  }
}
</script>

<style scoped>
#contact {
  margin: 50px auto;
}
#contact h2 {
  position: relative;
  color: #333333;
  font-size: 32px;
  font-weight: 700;
  padding-bottom: 10px;
  letter-spacing: 1.2px;
  margin: 0 0 30px;
}
#contact h2:before {
  content: '';
  position: absolute;
  top: 50px;
  left: calc((100% - 20px)/2);
  width: 20px;
  height: 4px;
  background-color: #DDDDDD;
}
#contact h3 {
  display: inline-block;
  color: #333333;
  font-size: 22px;
  line-height: 32px;
  font-weight: 700;
  background: linear-gradient(transparent 60%, #ffff66 60%);
  margin: 0 0 20px;
}
#contact .contents {
  margin-top: 40px;
  line-height: 1em;
  font-weight: 700;
}
#contact .contents a {
  color: #7CC7F5;
  font-weight: 900;
}
.sns_area {
  display: inline-block;
  margin: 10px 0 30px;
  width: 50%;
  background: #F5F8FA;
  padding: 30px 100px 10px;
  border-radius: 20px;
}
.sns_area a {
  display: block;
}
.tw_btn, .ig_btn {
  float: left;
  width: 40%;
  margin: 0 5%
}
.tw_btn i, .ig_btn i {
  color: #333;
  line-height: 60px;
  font-size: 40px;
  margin: 0 0 10px;
}
</style>
