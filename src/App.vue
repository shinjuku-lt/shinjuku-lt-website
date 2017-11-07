<template lang="pug">
  div#app
    router-view
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;

  position: relative;
  height: 100%;
  background: url(./assets/background.jpg) center top no-repeat;
  background-size: cover;
}

.logo {
  margin-top: 60px;
}

</style>
