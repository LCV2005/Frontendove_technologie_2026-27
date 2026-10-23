<script setup>
const props = defineProps({
  title: String,
  text: String,
})
</script>

<template>
  <article>
    <h2>{{ props.title }}</h2>
    <p>{{ props.text }}</p>
  </article>
</template>
