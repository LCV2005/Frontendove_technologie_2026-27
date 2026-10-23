<script setup>
import Article from './Article.vue'
import { ref } from 'vue'
const articles = ref([
            {
                id: 1, title: "My journey with Vue"
            },
            {
                id: 2, title: "Bloging with Vue"
            },
            {
                id: 3, title: "Why Vue is so fun"
            },
])
</script>

<template>
<div><Article v-for="article in articles" :key="article.id" :title="article.title" :text="'Text '+article.id">
  </Article>
</div>
   
</template>
