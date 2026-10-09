<script setup>
import { ref, onMounted, computed } from 'vue'

const cislo = ref(0)
const ulozenyText = ref('')
const vstupnyText = ref('')
const ulozenyText1 = ref('')
const vstupnyText1 = ref('')
const pocetStlpcov = ref(40)
const pocetRiadkov = ref(5)

const jeDlzkaViacAko10 = computed(() => {
    return vstupnyText1.value.length > 10;
});

const ulozText1 = () => {
    if (!jeDlzkaViacAko10.value) {
        ulozenyText1.value = vstupnyText1.value;
    }
};

function ulozText() {
  ulozenyText.value = vstupnyText.value
  vstupnyText.value = ''
}



function generujCislo() {
    cislo.value = Math.floor(Math.random() * 100) + 1;
}
onMounted(() => {
    generujCislo()
})
</script>

<template>
    <div style="padding: 20px; font-family: sans-serif;">
      <h1>Moje šťastné číslo je: {{ cislo }}</h1>

      <h3>Zadajte text:</h3>

      <textarea
        v-model="vstupnyText" 
        @keydown.enter.prevent="ulozText"
        placeholder="Napíšte niečo a stlačte Enter..."
        rows="4" 
        cols="50"
        style="display: block; margin-bottom: 15px;"
      ></textarea>
      <h3>Výpis z premennej:</h3>
      <div 
      v-html="ulozenyText" 
      style="border: 1px solid #ccc; padding: 10px; min-height: 40px; background: #f9f9f9;"
    ></div>

    <textarea
      v-model="vstupnyText1" 
      @keydown.enter.prevent="ulozText1"
      :disabled="jeDlzkaViacAko10"
      placeholder="Napíšte niečo a stlačte Enter..."
      rows="4" 
      cols="50"
      style="display: block; margin-bottom: 15px;"
    ></textarea>
    <h3>Výpis z premennej:</h3>
    <div 
      v-html="ulozenyText1" 
      style="border: 1px solid #ccc; padding: 10px; min-height: 40px; background: #f9f9f9;"
    ></div>
    
    </div>
  </template>