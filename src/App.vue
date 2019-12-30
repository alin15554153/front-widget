<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <span @click="onClickBig">大屏</span>
    </div>
    <router-view/>
  </div>
</template>
<script>
  export default {
    name: 'App',
    methods: {
      onClickBig() {
        const routeData = this.$router.resolve({
          path: '/page1'
        })
        window.open(routeData.href, '_blank')
      }
    }
  }
</script>
<style lang="scss">
  html{
    font-size:12px;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
  color: #2c3e50;
}

#nav {
  padding: 0px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
