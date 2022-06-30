<template>
<div id="app">

  <loginUser></loginUser>
  <showUserVue></showUserVue>
</div>
</template>

<script>
import loginUser from './components/loginUser.vue'
import showUserVue from './components/showUser.vue'

export default {
  name: 'App',
  components: {
    showUserVue,
    loginUser
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
