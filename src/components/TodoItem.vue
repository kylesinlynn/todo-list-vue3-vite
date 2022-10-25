<script setup>
import { ref } from 'vue'

const props = defineProps(['item'])
const emit = defineEmits(['item'])

const done = ref(props.item.done)
</script>

<template>
  <div>
    <p>
      {{ props.item.id }} - {{ props.item.text }} -
      <input
          type="checkbox"
          v-model="done"
          :checked="props.item.done"
          @change="() => emit('item', {id: props.item.id, text: props.item.text, done})"
      >
    </p>
  </div>
</template>

<style scoped>

</style>