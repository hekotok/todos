<template lang="en">
    <add-to-do
        v-if="isShowModal"
        @close="isShowModal = false"
        @add-to-do="todo => todos.value.push(todo)"
    />

    <main>
        <section>
            <input />
            <button type="button" @click="isShowModal = true">
                add Todo
            </button>
        </section>
        <section>
            <to-do v-for="todo in filterToDos"/>
        </section>
    </main>
</template>

<script>
import { ref, computed } from 'vue'

import ToDo from './ToDo'
import AddToDo from './AddToDo'

export default {
    name: 'ToDoList',

    components: { ToDo, AddToDo },

    setup() {
        const isShowModal = ref(false)
        const todos = ref([])

        const filterToDos = computed(() => todos)

        return { todos, isShowModal, filterToDos }
    }
}
</script>

<style lang="scss">

</style>