<template lang="pug">
div#head
  v-container(fluid)
    v-layout(row wrap)
      v-flex(xs12 md6 offset-md4)
        v-container(fluid)
          v-layout(row wrap)
            v-flex(md4 xs6)
              h2 次回開催日
              p 2018/07/25
              p Wednesday
              ul(style="text-align:center")
                li 19:00~ : 開場
                li 19:45~21:00 : LT
                li 21:30~ : 飲み会
            v-flex(md4 xs6)
              h2 場所
              p 東京都渋谷区円山町19-1 渋谷プライムプラザ
              |
              a(href="https://www.cyberagent.co.jp/way/features/list/detail/id=13541" target="t_blank") @株式会社 サイバーエージェント CREATIVE Lounge
    v-layout(row wrap offset-sm3)
      v-flex(xs12 md6 offset-md3)
        iframe.map(
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.829864286873!2d139.69281761570687!3d35.656563180200095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b55eb1712fb%3A0x956a31b833a23cfa!2z44CSMTUwLTAwNDQg5p2x5Lqs6YO95riL6LC35Yy65YaG5bGx55S677yR77yZ4oiS77yRIOa4i-iwt-ODl-ODqeOCpOODoOODl-ODqeOCtg!5e0!3m2!1sja!2sjp!4v1531467310753"
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
