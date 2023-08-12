<template lang="en">
    <transition name="todo-slide" mode="out">
        <div class="todo" v-if="isShowTodo">
            <h1><strong>{{todo}}</strong></h1>
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

    setup() {
        const isShowTodo = ref(false)

        onMounted(() => isShowTodo.value = true)
        onBeforeUnmount(() => isShowTodo.value = false)

        return { isShowTodo }
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

    padding: 10px;
    background: $secondary-color;
    width: 70%;
    aspect-ratio: 4/1;
    border: 4px inset $primary-color;
}

.todo-slide {
    &-enter-active, &-leave-active {
        transition: transform .7s ease-out
    }

    &-enter-from {
        transform: translateX(-9999px)
    }

    &-leave-to {
        transform: translateX(9999px)
    }
}
</style>