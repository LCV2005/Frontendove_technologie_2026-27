import './assets/main.css'


import { createApp, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
import App from './App.vue'
createApp(App).mount('#app')

onBeforeMount(() => {
  console.log('beforeMount hook');
});

onMounted(() => {
  console.log('mounted hook');
});

onBeforeUpdate(() => {
  console.log('beforeUpdate hook');
});

onUpdated(() => {
  console.log('updated hook');
});

onBeforeUnmount(() => {
  console.log('beforeUnmount hook');
});

onUnmounted(() => {
  console.log('unmounted hook');
});
