<template>
<div id="app">
  <showUserVue></showUserVue>
</div>
</template>

<script>
import showUserVue from './components/showUser.vue'

export default {
  name: 'App',
  components: {
    showUserVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
