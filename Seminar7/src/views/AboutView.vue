<script setup>
import { ref } from 'vue';
const users = ref([
      { id: 1, name: 'Blondie', text: 'He is good' },
      { id: 2, name: 'Sentenza', text: 'He is bad' },
      { id: 3, name: 'Tuco', text: 'He is ugly' }]
);
</script>

<template>
  <div class="about">
    <h1 style="margin-bottom: 30px;">All users</h1>
    <div style="padding-bottom: 10px;" v-for="user in users" :key="user.id">
      <RouterLink :to="'about/' + user.name">{{ user.name }}        </RouterLink>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    display: flex;
    align-items: center;
  }
} </style>