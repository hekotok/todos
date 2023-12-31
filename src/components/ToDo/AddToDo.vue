<template lang="en">
    <div class="modal-container" @click="$emit('close')">
        <div class="modal" @click.stop>
            <input-field
                v-model="todoTitle"
                tabindex="0"
                placeholder="Enter to do"
                maxlength="20"
                :class="{'input-todo--error': isErrorInput}"
                isBlack
            />
            <action-button tabindex="1" @click="addTodo">
                Add to do
            </action-button>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
    emits: [ 'close', 'add-todo' ],

    setup(_, { emit }) {
        const todoTitle = ref('')
        const isErrorInput = ref(false)

        const addTodo = () => {
            if (!todoTitle.value) {
                isErrorInput.value = true
                setTimeout(() => isErrorInput.value = false, 500)
            }
            else {
                emit('add-todo', todoTitle.value)
                emit('close')
            }
        }

        const handleKeyDown = event => event.key === 'Escape' && emit('close')

        onMounted(() => window.addEventListener('keydown', handleKeyDown))
        onBeforeUnmount(() => window.removeEventListener('keydown', handleKeyDown))

        return { todoTitle, isErrorInput, addTodo }
    }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.modal-container {
    @include flex-position(center, center);
    @include dimensions(100%, 100%);

    position: fixed;
    backdrop-filter: blur(2px);
    z-index: 1000
}

.modal {
    @include dimensions(50vw, 50vh);
    @include flex-position(space-around, center);

    top: 10vh;
    left: 10vw;
    background: $secondary-color ;
    border: 6px solid $primary-color;
    flex-direction: column;
    transition: box-shadow .3s ease-out;

    &:hover, &:focus {
        box-shadow: $primary-color 0 0 50px;
    }

    .input-todo--error {
        animation: shake-error .5s ease-in-out;
    }
}

@keyframes shake-error {
    0%, 100% {
        transform: translateX(0);
    }
    25% {
        transform: translateX(-10px);
    }
    50% {
        transform: translateX(10px);
    }
    75% {
        transform: translateX(-10px);
    }
}
</style>