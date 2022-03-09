<template>
  <h1>會員登入</h1>
  <button type="button" @click="login">登入</button>
</template>

<script>
export default {
  // email 登入、寫入 cookie、轉址
  methods: {
    login () {
      console.log(this.$router)
      // $router(方法), $route(取得參數)

      // 轉址到後台
      this.$router.push('/admin/prods')
      // 為什麼是 push？因為是一個陣列的概念（推到某個路由）
      // ['/', 'login', '/admin/prods']

      // go 可以在不同頁面間游走
      // 往前一頁
      // this.$$router.go(-1)
    }
  }
}
</script>
