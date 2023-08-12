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
            <transition name='input-field-fall' mode="in-out">
                <input-field
                    v-if="todos.length"
                    v-model="todoSearch"
                    tabindex="0"
                    placeholder="Enter to do"
                    maxlength="25"
                />
            </transition>
            <action-button @click="isShowModal = true" :class="{'todo--first': !todos.length}">
                {{ todos.length ? 'Add to do' : 'Add your first to do' }}
            </action-button>
        </section>
        <section class="todos-container">
            <to-do
                v-for="(todo, idx) in filterTodos"
                :key="`todo-${idx}`"
                :todo="todo"
                @del-todo="todos.splice(idx, 1)"
            />
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
        const todoSearch = ref('')
        const todos = reactive([])

        const filterTodos = computed(() => {
            if (!todoSearch.value.length)
                return todos

            return todos.filter(todo => todo.toLowerCase().includes(todoSearch.value.toLowerCase()))
        })

        return { todos, isShowModal, todoSearch, filterTodos }
    }
}
</script>

<style lang="scss" scoped>
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

.todo--first {
    transition: transform .5s 1s;
    transform: translateY(50vh) scale(2) !important;
}

.todos-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.modal-slide, .todo-slide {
    &-enter-active, &-leave-active {
        transition: transform .5s ease-in-out
    }
}

.modal-slide {
    &-enter-from {
        transform: translateY(-100%)
    }

    &-leave-to {
        transform: translateY(100%)
    }
}

.todo-slide {
    &-enter-from {
        transform: translateX(-100%)
    }

    &-leave-to {
        transform: translateX(100%)
    }
}

.input-field-fall {
    &-enter-active {
        animation: input-fall 1s;
    }
    &-leave-active {
        animation: input-fall 1s reverse;
    }
}

@keyframes input-fall {
    0% {
        transform: translateY(-100px) translateX(-30px)
    }
    50% {
        transform-origin: left bottom;
        transform: rotate(10deg) translateY(-100px) translateX(-30px)
    }
    100% {
        transform: translateY(0)
    }
}
</style>