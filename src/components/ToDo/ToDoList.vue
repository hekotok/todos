<template lang="en">
    <transition name="modal-slide" mode="in-out">
        <add-to-do
            v-if="isShowModal"
            @close="isShowModal = false"
            @add-todo="todo => todos.push(todo)"
        />
    </transition>

    <main>
        <section>
            <input-field
                v-model="todoTitle"
                tabindex="0"
                placeholder="Find a todo"
            />
            <action-button @click="isShowModal = true">
                Add Todo
            </action-button>
        </section>
        <section class="todos-container">
            <to-do v-for="todo in filterTodos" :todo="todo"/>
        </section>
    </main>
</template>

<script>
import { ref, reactive, computed } from 'vue'

import ToDo from './ToDo'
import AddToDo from './AddToDo'

export default {
    name: 'ToDoList',

    components: { ToDo, AddToDo },

    setup() {
        const isShowModal = ref(false)
        const todos = reactive([])

        const filterTodos = computed(() => todos)

        return { todos, isShowModal, filterTodos }
    }
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';
main {
    gap: 20px
}

section {
    @include flex-position(center, center);

    &:first-child {
        margin-bottom: 20px;
    }
}

.todos-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.modal-slide {
    &-enter-active, &-leave-active {
        transition: transform .5s ease-in-out
    }

    &-enter-from {
        transform: translateY(-100%)
    }

    &-leave-to {
        transform: translateY(100%)
    }
}

.todo-slide {
    &-enter-active, &-leave-active {
        transition: transform .5s ease-in-out
    }

    &-enter-from {
        transform: translateX(-100%)
    }

    &-leave-to {
        transform: translateX(100%)
    }
}
</style>