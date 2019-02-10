<template lang="pug">
  div#top
    div.header
      div.flex
        pageHeader
    main
      router-view(:authenticated="authenticated")
    pageFooter(:auth="auth" :authenticated="authenticated")
</template>

<script>
import pageHeader from './PageHeader'
import pageFooter from './PageFooter'
export default {
  props: ['auth', 'authenticated'],
  name: 'Top',
  data () {
    return {}
  },
  components: {
    pageHeader, pageFooter
  }
}
</script>

<style scoped>
.header {
  height: 120px;
}
main, .header {
  width: 1000px;
  margin: 0 auto;
}
@media screen and (max-width: 768px) {
  .header {
    height: 12vh;
  }
  main, .header {
    width: 100%;
  }
}
</style>
