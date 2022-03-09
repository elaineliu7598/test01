<template>
  <div class="card">
    這是一張卡片
    {{text}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: "I'm Elaine"
    }
  }
}
</script>

<style lang="scss" scoped>
.card{
  width: 500px;
  background-color: aquamarine;
}
</style>
