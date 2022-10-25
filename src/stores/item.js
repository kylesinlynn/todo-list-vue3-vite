import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useItemStore = defineStore('item', () => {

    // state
    const items = ref([
        {id: 1, text: 'To learn JavaScript', done: false},
        {id: 2, text: 'To learn Python', done: false},
        {id: 3, text: 'To learn Programming Basic', done: true}
    ])

    // getters
    const doneItems = computed(() => items.value.filter(i => i.done))

    // actions
    function createItem(text) {
        items.value.push({
            id: items.value.length + 1,
            text,
            done: false
        })
    }
    function updateItem(item) {
        items.value.splice(
            items.value.indexOf(items.value.find(i => i.id === item.id)),
            1,
            item)
        console.log(items.value)
    }

    return { items, doneItems, createItem, updateItem }
})