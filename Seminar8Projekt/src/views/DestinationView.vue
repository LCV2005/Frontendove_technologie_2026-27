<script setup>
import { computed } from 'vue'
import ExperienceCard from '../components/ExperienceCard.vue'
import data from '../data.json'

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
})

const destination = computed(() => data.destinations.find((item) => item.slug === props.slug))
</script>
<template>
  <template v-if="destination">
    <button class="go-back" @click="$router.push('/')">Go Back</button>

    <h1>{{ destination.name }}</h1>

    <div class="destination-details">
      <p>{{ destination.description }}</p>

      <img :src="'/images/' + destination.image" :alt="destination.name" />
    </div>
  </template>

  <div v-else>
    <button @click="$router.push('/')">Go Back</button>
    <p>Destination not found.</p>
  </div>

  <section class="experiences">
    <h2>Experiences</h2>

    <div class="cards">
      <ExperienceCard
        v-for="experience in destination.experiences"
        :key="experience.slug"
        :destination-slug="destination.slug"
        :experience="experience"
      />
    </div>
    <RouterView />
  </section>
</template>
