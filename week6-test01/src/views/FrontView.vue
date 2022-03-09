<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/prods">Product</router-link> |
    <router-link to="/cart">Cart</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/admin/prods">後台產品列表</router-link> |
  </div>
  <h2>前台畫面</h2>
  <router-view/>
</template>
