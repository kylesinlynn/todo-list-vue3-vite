import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useItemStore = defineStore('item', () => {

    // state
    const items = ref([
        {id: 1, text: 'To learn JavaScript', done: false, delete: false},
        {id: 2, text: 'To learn Python', done: true, delete: false},
        {id: 3, text: 'To learn Programming Basic', done: true, delete: true}
    ])

    // getters
    const existingItems = computed(() => items.value.filter(i => !i.delete))

    // actions
    function createItem(text) {
        items.value.push({
            id: items.value.length + 1,
            text,
            done: false,
            delete: false
        })
    }
    function updateItem(item) {
        items.value.splice(
            items.value.indexOf(items.value.find(i => i.id === item.id)),
            1,
            item)
        console.log(items.value)
    }
    // function deleteItem(id) {
    //     items.value.splice(
    //         items.value.indexOf(items.value.find(i => i.id === id)),
    //         1)
    // }

    return { items, existingItems, createItem, updateItem }
})