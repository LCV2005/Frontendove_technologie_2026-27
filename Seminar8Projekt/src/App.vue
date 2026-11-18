<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav id="nav">
        <h1><RouterLink to="/" class="home">Home</RouterLink></h1>
        <RouterLink to="/destination/brazil">Brazil</RouterLink>
        <RouterLink to="/destination/panama">Panama</RouterLink>
        <RouterLink to="/destination/hawaii">Hawaii</RouterLink>
        <RouterLink to="/destination/jamaica">Jamaica</RouterLink>
    </nav>
  </header>
  <div class="container">
    <RouterView />
  </div>
</template>