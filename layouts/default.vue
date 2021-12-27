<template>
  <div>
    <h1 class="route-name">{{ $route.name }}</h1>
    <div class="links">
      <nuxt-link to="/products">В каталог</nuxt-link>
      <nuxt-link to="/cart">В корзину</nuxt-link>
    </div>
    <nuxt />
  </div>
</template>

<style>
.route-name {
  text-align: center;
}
.links {
  text-align: center;
}
.links > * {
  padding: 0.5rem;
}
</style>
