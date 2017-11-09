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
  font-family: 'Rounded Mplus 1c', Helvetica, Arial, mplus-1p-regular, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  position: relative;
  background-size: cover;
}

main {
  font-family: "Rounded Mplus 1c";
}
</style>
