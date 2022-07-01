<template>
<div id="app">
  <a href class="navbar-brand" @click.prevent> User </a>
  <router-link to="/home" class="nav-link">Home</router-link>
   <li class="nav-item">
          <router-link v-if="currentUser" to="/user" class="nav-link">User</router-link>
    </li>
</div>
</template>

<script>
// import loginUser from './components/loginUser.vue'
// import showUserVue from './components/showUser.vue'
import eventBus from './common/EventBus'

export default {
  computed: {
    currentUser(){
      return this.$store.state.auth.user;
    }
  }, 
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  },
  mounted() {
    eventBus.on("logout", () => {
      this.logOut();
    });
  },
  beforeUnmount() {
    eventBus.remove("logout");
  }
};

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
