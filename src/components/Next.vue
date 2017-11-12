<template lang="pug">
div#head
  v-container(fluid)
    v-layout(row wrap)
      v-flex(xs12 md6 offset-md4)
        v-container(fluid)
          v-layout(row wrap)
            v-flex(md4 xs6)
              h2 次回開催日
              p 2017/11/12
              p Sunday
              p 13:00~
            v-flex(md4 xs6)
              h2 場所
              p 東京都杉並区高円寺北2-3-17
              |
              a(href="https://www.doorkeeper.jp/%E4%BC%9A%E5%A0%B4/vallaboratory" target="t_blank") @Val研究所
    v-layout(row wrap offset-sm3)
      v-flex(xs12 md6 offset-md3)
        iframe.map(
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.8194981954025!2d139.65022263936683!3d35.706059208395956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f28799022b3f%3A0x845f2d6f10bec5ed!2z44CSMTY2LTAwMDIg5p2x5Lqs6YO95p2J5Lim5Yy66auY5YaG5a-65YyX77yS5LiB55uu77yT4oiS77yR77yX!5e0!3m2!1sja!2sjp!4v1510250058670"
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
