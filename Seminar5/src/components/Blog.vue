<script setup>
import Article from './Article.vue'
</script>

<template>
  <section>
    <h1>Blog</h1>

    <Article
      title="Prvy clanok"
      text="Toto je obsah prveho clanku."
    />
    <Article
      title="Druhy clanok"
      text="Toto je obsah druheho clanku."
    />
    <Article
      title="Treti clanok"
      text="Toto je obsah tretieho clanku."
    />
  </section>
</template>
