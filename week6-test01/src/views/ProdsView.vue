<template>
  <div class="container">
    <h1>產品列表</h1>
    <table class="table">
      <thead></thead>
      <tbody>
        <tr v-for="(prod, key) in prods" :key="key+'1'">
          <td>{{prod.title}}</td>
          <td>{{prod.author}}</td>
          <td>{{prod.category}}</td>
          <td><router-link :to="`/prod/${prod.id}`">詳目頁</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      prods: []
    }
  },
  mounted () {
    // console.log(process.env.VUE_APP_API, process.env.VUE_APP_PATH)
    this.$http
      .get(`${process.env.VUE_APP_API}v2/api/${process.env.VUE_APP_PATH}/products/all`)
      .then((res) => {
        console.log(res)
        this.prods = res.data.products
      })
  }
}
</script>
