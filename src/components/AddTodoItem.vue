<script setup>
import { ref } from 'vue'

const emit = defineEmits(['addItem'])
const text = ref('')
</script>

<template>

  <form @submit.prevent="_ => emit('addItem', text)">
    <input type="text" v-model.lazy="text">
    <button type="submit">Add</button>
  </form>

</template>

<style scoped>

</style>