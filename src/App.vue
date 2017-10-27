<template>
  <div id="app">
    <img class="logo" src="./assets/sunjuku_lt.png">
    <router-view/>
  </div>
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
  color: #2c3e50;

  position: relative;
  height: 100%;
  background: url(./assets/background.jpg) center top no-repeat;
  background-size: cover;
}

.logo {
  margin-top: 60px;
}

</style>
