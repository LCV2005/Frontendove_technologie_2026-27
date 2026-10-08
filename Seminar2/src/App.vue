<script setup>
import { computed, ref } from 'vue'

const number = ref(1)

const numberClass = computed(() => {
  if (number.value > 0) return 'positive'
  if (number.value < 0) return 'negative'
  return 'zero'
})

const square = computed(() => number.value ** 2)

function increment() {
  number.value++
}

function decrement() {
  number.value--
}

function reset() {
  number.value = 0
}
</script>

<template>
  <main class="counter-page">
    <h1>Samostatná práca</h1>

    <section class="counter" aria-label="Čítač čísla">
      <h2 :class="numberClass">{{ number }}</h2>
      <p>Druhá mocnina: {{ square }}</p>

      <div class="buttons">
        <button v-if="number <= 5" type="button" @click="increment">Increment</button>
        <button v-if="number >= -5" type="button" @click="decrement">Decrement</button>
        <button type="button" @click="reset">Resetovať</button>
      </div>
    </section>
  </main>
</template>

<style scoped>
:global(*) {
  box-sizing: border-box;
}

:global(body) {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  background: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
}

.counter-page {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
}

h1 {
  margin: 0;
  color: #333333;
  font-size: clamp(2rem, 6vw, 4rem);
  text-align: center;
}

.counter {
  width: min(100%, 320px);
  border: 4px solid #222222;
}

h2 {
  margin: 0;
  padding: 1rem;
  color: #ffffff;
  font-size: 3rem;
  font-weight: 400;
  text-align: left;
}

.positive {
  background: #008f00;
}

.negative {
  background: #f00000;
}

.zero {
  background: #666666;
}

.buttons {
  display: flex;
}

button {
  flex: 1;
  min-height: 2.5rem;
  border: 1px solid #222222;
  background: #f4f4f4;
  color: #111111;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background: #dddddd;
}

button:focus-visible {
  outline: 3px solid #1976d2;
  outline-offset: 2px;
}
</style>