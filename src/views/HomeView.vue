<script setup>
import { ref, computed } from 'vue'
import { useItemStore } from '@/stores/item.js'
import { storeToRefs } from 'pinia'
import TodoItem from "@/components/TodoItem.vue";
import AddTodoItem from "@/components/AddTodoItem.vue"

const itemStore = useItemStore()
const { items, doneItems } = storeToRefs(itemStore)
const { createItem, updateItem, deleteItem } = itemStore

</script>

<template>

  <h1>Todo List</h1>

  <AddTodoItem
    @addItem="createItem"
  />

  <TodoItem
      v-for="item in items"
      :key="item.id"
      :item="item"
      @item="updateItem"
      @delete="deleteItem"
  />

</template>

<style scoped>

</style>