<script setup>
import { RouterLink } from 'vue-router'
import data from '../data.json'
const destinations = data.destinations
</script>
<template>
  <nav id="nav">
    <h1><RouterLink class="home" :to="{ name: 'home' }">Home</RouterLink></h1>
    <ul v-for="destination in destinations" :key="destination.id">
      <RouterLink :to="{ name: 'destination', params: { slug: destination.slug } }">
        {{ destination.name }}
      </RouterLink>
    </ul>
  </nav>
</template>
