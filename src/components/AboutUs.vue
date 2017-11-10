<template lang="pug">
  div#aboutus
    v-card
      h2 Shinjuku.LTとは？
      p 
      | Shinjuku.LTは 
      strong 世界で一番LTのハードルが低い勉強会 
      | を目的に開催している勉強会です。
      br
      | 勉強会で一番勉強になるのは、発表者と言われることがあります。
      br
      | ということは、発表する機会をつくるこで勉強になる人が増えるのではないかという理念を元に開催しています。
      h2 目的
      ul(style="list-style-type: none")
        li LTに慣れる
        li 定期的にアウトプットできる環境を作る
        li 人の話を聞いて知見を増やす
        li エンジニア同士で仲良くなりたい
      h2 開催場所
      p 
      |
      a(href="https://www.val.co.jp/") 株式会社Val研究所様 
      | 並びに同テクニカルエバンジェリストの
      a(href="https://twitter.com/maruyamahiakru") 丸山ひかるさん
      | に会場を提供していただいております。
</template>

<script>
export default {
  name: 'AboutUs',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
