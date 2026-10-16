<script setup>
import { ref } from 'vue'

const students = ref([
  { name: 'Anna', vek: 20, znamka: "C" },
  { name: 'Peter', vek: 22, znamka: "B" },
  { name: 'Lucia', vek: 21, znamka: "A" },
  { name: 'Martin', vek: 23, znamka: "D" }
])

const vymazElement = (index) => {
  students.value.splice(index, 1)
}
</script>

<template>
  <div>
    <table v-if="students.length > 0" border="1" cellpadding="8">
      <thead>
        <tr>
          <th>Meno</th>
          <th>Vek</th>
          <th>Znamka</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in students" :key="item.name + item.vek + item.znamka">
          <td>{{ item.name }}</td>
          <td>{{ item.vek }}</td>
          <td>{{ item.znamka }}</td>
          <td>
            <input type="text" placeholder="Poznámka...">
            <button @click="vymazElement(index)">Vymaž</button>
          </td>
        </tr>
      </tbody>
    </table>

    <p v-else>Nenašli sa študenti</p>
  </div>
</template>