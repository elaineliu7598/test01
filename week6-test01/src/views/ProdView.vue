<template>
  <router-link :to="`/prods`">回到產品頁</router-link>
  <div class="container">
    <h1>單一產品</h1>
    <div>
      {{prod.description}}
    </div>
    <div class="mt-3">
      {{prod.publisher}}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      prod: []
    }
  },
  mounted () { // "-MwRgkYsUtvAuHo8Z59Y"
    // console.log(process.env.VUE_APP_API, process.env.VUE_APP_PATH)
    console.log(this.$route)
    // const id = this.$route.params.id
    const { id } = this.$route.params
    this.$http
      .get(`${process.env.VUE_APP_API}v2/api/${process.env.VUE_APP_PATH}/product/${id}`)
      .then((res) => {
        console.log(res)
        this.prod = res.data.product
      })
  }
}
</script>
