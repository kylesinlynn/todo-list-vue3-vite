<script setup>
import { ref, computed } from 'vue'
import { useItemStore } from '@/stores/item.js'
import { storeToRefs } from 'pinia'
import TodoItem from "@/components/TodoItem.vue";
import AddTodoItem from "@/components/AddTodoItem.vue"

const itemStore = useItemStore()
const { items, existingItems } = storeToRefs(itemStore)
const { createItem, updateItem } = itemStore

</script>

<template>

  <h1>Todo List</h1>
  <div>
    <AddTodoItem
        @addItem="createItem"
    />
  </div>

  <div>
    <TodoItem
        v-for="item in existingItems"
        :key="item.id"
        :item="item"
        @update="updateItem"
    />
  </div>

</template>

<style scoped>

</style>