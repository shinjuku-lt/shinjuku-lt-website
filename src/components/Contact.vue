<template lang="pug">
div#contact
  v-container(fluid)
    v-layout(row wrap offset-sm3)
      v-flex(xs12 class="margin-bottom")
        h2 ご参加方法
        p Shinjuku.LTは現在、会場の兼ね合いでconnpass等の外部サイトでの参加募集は行っておりません。
        p お手数ですが、下記Twitterで運営のホンマークハントまで一度ご連絡頂ければと思います。
      v-flex(xs12 class="margin-bottom")
        h2 参加条件
        P 参加条件等は特にございません。お気軽にご連絡ください。
        | 複数人での参加も歓迎致します。まずは一度ご参加頂ければと思いますのでご連絡ください。
      v-flex(xs12 class="margin-bottom")
        h2 Twitter
        p Shinjuku.LTに興味を持っていただいた方や、ご質問など。
        p お気軽に 
          a(href="https://twitter.com/HonMarkHunt" target="t_blank") @HonMarkHunt
          |  までご連絡ください。
      v-flex(xs12 class="margin-bottom")
        h2 ハッシュタグ
        p ハッシュタグ 
          a(href="https://twitter.com/search?q=%23shinjukult&src=typd" target="t_blank") #shinjukult
          |  で雰囲気などがわかるかもしれません。
          p 参加メンバーにエンジニアが多数いる関係でテック系のLT比率が高めです。
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
h2 {
  margin-bottom: 6px;
  font-weight: bold;
  font-size: 28px;
  color: #77B4B8;
}
p {
  margin: 0 0 0 0;
}
.margin-bottom {
  margin-bottom: 25px;
}
</style>
