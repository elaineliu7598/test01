<template>
  <router-view/>
</template>

<script>
export default {
  data () {
    return {
      api: process.env.VUE_APP_API,
      path: process.env.VUE_APP_PATH
    }
  }
}
</script>

<style lang="scss">
@import "bootstrap";
</style>
