<template lang="pug">
  div#contact
    div.margin-bottom
      h2 ご参加方法
      p Shinjuku.LTは現在、会場の兼ね合いでconnpass等の外部サイトでの参加募集は行っておりません。
      p お手数ですが、下記Twitterで運営のホンマークハントまで一度ご連絡頂ければと思います。
    div.margin-bottom
      h2 Twitter
      p Shinjuku.LTに興味を持っていただいた方や、ご質問など。
      p お気軽に 
        a(href="https://twitter.com/HonMarkHunt" target="t_blank") @HonMarkHunt
        |  までご連絡ください
    div.margin-bottom
      h2 ハッシュタグ
      p ハッシュタグ 
        a(href="https://twitter.com/search?q=%23shinjukult&src=typd" target="t_blank") #shinjukult
        |  で雰囲気などがわかるかもしれません。
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
div.margin-bottom {
  margin-bottom: 25px;
}
</style>