<template lang="pug">
div#aboutus
  v-container(fluid)
    v-layout(row wrap offset-sm3)
      v-flex(xs12)
        v-card(flat)
          h2 Shinjuku.LTとは？
          div.margin-bottom
            p Shinjuku.LTは
              strong 世界で一番LTのハードルが低い勉強会
              | を目的に開催している勉強会です。
            p 「勉強会で一番勉強になるのは、発表者」と言われることがあります。
            p ということは、発表する機会をつくることで勉強になる人が増えるのではないかという理念を元に開催しています。
            p 2016年09月に発足し、そこから毎月一回のペースで開催しています。
      v-flex(xs12)
        v-card(flat)
          h2 目的
          div.margin-bottom
            ul.center
              li LTに慣れる
              li 定期的にアウトプットできる環境を作る
              li 人の話を聞いて知見を増やす
              li エンジニア・デザイナー同士で繋がりを持つ
      v-flex(xs12)
        v-card(flat)
          h2 ロゴ
          div.margin-bottom
            p Shinjuku.LTのロゴは、Nikeの“BeTrue”コレクションをサンプリングソースにして作りました。
            v-container(fluid)
              v-layout(row wrap)
                v-flex(xs12 sm6 offset-sm3 md4 offset-md4)
                  hr
                  v-card(flat)
                    p.italic “BeTrue”コレクション
                    p.italic 多様な個性を尊重するLGBTQコミュニティへオマージュを捧げ、サポートする意味合いを含めたコレクション
                  hr
            p 性別、年齢、出身地、やってる仕事、使っている言語など...、
            strong いろんな人がいて、垣根がないサークルを作れる勉強会を目指しています。
      v-flex(xs12)
        v-card(flat)
          h2 開催場所
          div.margin-bottom
            p
              a(href="https://www.val.co.jp/" target="t_blank") 株式会社Val研究所様 
              | 並びに
            p 同社テクニカルエバンジェリスト 
              a(href="https://twitter.com/maruyamahiakru" target="t_blank") 丸山ひかるさん 
              | に会場を提供していただいております。
            p その他会議室などを予約して開催しています。
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
div.margin-bottom {
  margin-bottom: 25px;
}
</style>
