<template>
  <div>
    <h3>来自全局的变量num</h3>
    <p>{{ num }}</p>
    <a-button @click="add">+</a-button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const num = ref(0)
const add = () => {
  num.value++
}
</script>
<style scoped></style>
