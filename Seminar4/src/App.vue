<script setup>
import { ref } from 'vue'

// Použijeme len jeden reaktívny zoznam, ktorý má všetky dáta
const students = ref([
  { name: 'Anna', vek: 20, znamka: "C" },
  { name: 'Peter', vek: 22, znamka: "B" },
  { name: 'Lucia', vek: 21, znamka: "A" },
  { name: 'Martin', vek: 23, znamka: "D" }
])

// Opravené: mazeme zo správneho zoznamu (students)
const vymazElement = (index) => {
  students.value.splice(index, 1)
}
</script>

<template>
  <div>
    <ul>
      <li v-for="(item, index) in students" :key="item.name + item.vek + item.znamka">
        {{ item.name }} ({{ item.vek }} rokov) - Známka: {{ item.znamka }}
        <input type="text">
        <button v-on:click="vymazElement(index)">Vymaž</button>
      </li>
    </ul>
  </div>
</template>