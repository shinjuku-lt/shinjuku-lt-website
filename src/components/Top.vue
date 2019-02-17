<template lang="pug">
  div#top
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
main {
  margin: 0 auto;
}
@media screen and (max-width: 768px) {
  main {
    width: 100%;
  }
}
</style>
