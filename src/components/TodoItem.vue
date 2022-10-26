<script setup>
import { ref } from 'vue'

const props = defineProps(['item'])
const emit = defineEmits(['update'])

const text = ref(props.item.text)
const done = ref(props.item.done)

const update = ref(false)

function updateItem(text=text.value, updateText=false, toggleDone=done.value, del=false) {
  if (updateText) {
    update.value = !update.value
  }
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
      {{ props.item.id }} -
      <span v-if="update">
        <input
          type="text"
          v-model="text"
        >
      </span>
      <span v-else>
        {{ text }}
      </span>
      -
      <input
          type="checkbox"
          v-model="done"
          :checked="props.item.done"
          @change="updateItem(text)"
      >
    </p>
    <button @click="updateItem(text, true)">
      <span v-if="update">Done</span>
      <span v-else>Update</span>
    </button>
    <button @click="updateItem(text, update, done, true)">Delete</button>
  </div>
</template>

<style scoped>

</style>