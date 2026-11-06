<script setup>
import { RouterLink,RouterView,useRouter } from 'vue';
const route = useRouter()
function goHome(){
    router.push("/")
}
</script>
<template>
 <nav>
    <h1>{{$route.params.myjurney}}</h1>
 </nav>
 </div>
</template>