<script setup>
import { ref } from 'vue'

const emit = defineEmits(['addItem'])
const text = ref('')
const blank = ref(false)

function addItem() {
  if (!text.value) {
    blank.value = true
  } else {
    emit('addItem', text.value)
    blank.value = false
    text.value = ''
  }
}
</script>

<template>

  <form @submit.prevent="addItem">
    <div v-if="blank">Item cannot be blank.</div>
    <input type="text" v-model="text" placeholder="Enter your item...">
    <button type="submit">Add</button>
  </form>

</template>

<style scoped>

</style>