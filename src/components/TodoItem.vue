<script setup>
import { ref } from 'vue'

const props = defineProps(['item'])
const emit = defineEmits(['update'])

const text = ref(props.item.text)
const done = ref(props.item.done)

function updateItem(text=text.value, toggleDone=done.value, del=false) {
  emit('update', {
    id: props.item.id,
    text,
    done: toggleDone,
    delete: del
  })
}
</script>

<template>
  <div>
    <p>
      {{ props.item.id }} - {{ text }} -
      <input
          type="checkbox"
          v-model="done"
          :checked="props.item.done"
          @change="updateItem"
      >
    </p>
    <button @click="updateItem(text, done, true)">Delete</button>
  </div>
</template>

<style scoped>

</style>