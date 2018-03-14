<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted () {
      console.log('test')
    }
  }
</script>

<style lang="scss">
  @import "assets/scss/app";
</style>
