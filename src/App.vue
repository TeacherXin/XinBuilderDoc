<template>
  <div>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        count: 0
      }
    }
  }
</script>

<style lang="css" scoped>
</style>