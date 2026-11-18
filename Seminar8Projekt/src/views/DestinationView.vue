<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import data from '../data.json'

const route = useRoute()

const destination = computed(() =>
data.destinations.find(item => item.slug === route.params.destination)
)
</script>

<template>
  <div v-if="destination" class="destination-page">
    <button @click="$router.push('/')">Go Back</button>

    <h1>{{ destination.name }}</h1>

    <div class="destination-content">
      <p>{{ destination.description }}</p>
      <img
        :src="'/images/' + destination.image"
        :alt="destination.name"
      >
    </div>

    
  </div>
</template>
