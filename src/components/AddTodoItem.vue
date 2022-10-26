<script setup>
import { ref } from 'vue'

const emit = defineEmits(['addItem'])
const text = ref('')

function addItem() {
  emit('addItem', text.value)
  text.value = ''
}
</script>

<template>

  <form @submit.prevent="addItem">
    <input type="text" v-model="text">
    <button type="submit">Add</button>
  </form>

</template>

<style scoped>

</style>