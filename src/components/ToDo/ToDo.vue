<template lang="en">
    <transition name="todo-slide" mode="in-out">
        <div class="todo" v-if="isShowTodo">
            <h1><strong>{{ todo }}</strong></h1>
            <button @click="delTodo" type="button" class="trash-can"></button>
        </div>
    </transition>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
    props: { todo: {
        type: String,
        required: true
    } },

    emits: [ 'del-todo' ],

    setup(_, { emit }) {
        const isShowTodo = ref(false)

        onMounted(() => isShowTodo.value = true)
        onBeforeUnmount(() => isShowTodo.value = false)

        const delTodo = () => {
            isShowTodo.value = false
            setTimeout(() => {
                emit('del-todo')
                isShowTodo.value = true
            }, 500)
        }

        return { isShowTodo, delTodo }
    }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

h1 {
    font-size: 50pt;
}

.todo {
    @include flex-position(center, center);

    position: relative;
    padding: 10px;
    background: $secondary-color;
    width: 70%;
    aspect-ratio: 4/1;
    border: 4px inset $primary-color;
}

.todo-slide {
    &-enter-active, &-leave-active {
        transition: transform .5s ease-in-out
    }

    &-enter-from {
        transform: translateX(-9999px)
    }

    &-leave-to {
        transform: translateX(9999px)
    }
}

.trash-can {
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    background: url(@/assets/img/trash_can.svg) no-repeat center/contain;
    width: 28px;
    height: 28px;
    transition: all .3s ease-in-out;

    &:hover {
        transform: rotate(180deg) scale(1.2);
        background: url(@/assets/img/opened_trash_can.svg) no-repeat center/contain;
    }

    &:active {
        transform: rotate(180deg) scale(1.5);
    }
}
</style>