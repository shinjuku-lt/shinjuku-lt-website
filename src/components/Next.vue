<template lang="pug">
div#head
  v-container(fluid)
    v-layout(row wrap)
      v-flex(xs12 md6 offset-md4)
        v-container(fluid)
          v-layout(row wrap)
            v-flex(md4 xs6)
              h2 次回開催日
              p 2018/06/28
              p Wednesday
              ul(style="text-align:left")
                li 19:00 開場
                li 19:30 ~ 19:30 飲み会
                li 19:35 ~ 19:40 Good&New
                li 19:40 ~ 20:30 LT
                li 20:30 ~ 20:40 休憩
                li 20:40 ~ 21:40 LT
                li 21:40 締め・解散
            v-flex(md4 xs6)
              h2 場所
              p 〒150-0002 東京都渋谷区渋谷2-12-19 東建インターナショナルビル
              |
              a(href="https://kddi-cf.co.jp/company/" target="t_blank") @KDDIコマースフォワード株式会社 渋谷ラボ
    v-layout(row wrap offset-sm3)
      v-flex(xs12 md6 offset-md3)
        iframe.map(
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6483.489332456037!2d139.707352!3d35.658662!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9c08e8672e356523!2z5p2x5bu644Kk44Oz44K_44O844OK44K344On44OK44Or44OT44Or!5e0!3m2!1sja!2sjp!4v1528510872109"
          frameborder="0"
          style="width: 100% !important"
          )
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
  color: #3A507D;
}
p {
  margin: 0 0 0 0;
}
div.margin-bottom {
  margin-bottom: 25px;
}
iframe.map {
  width: 500px;
  height: 400px;
  border: solid 1px;
  border-color: #3A507D;
}
</style>
