<template lang="en">
    <to-do-list />
</template>

<script>
import ToDoList from '@/components/ToDo/ToDoList.vue'

export default {
    name: 'App',

    components: { ToDoList }
}
</script>

<style lang="scss" scoped>
@import '@/styles/reset.css';
@import '@/styles/main.css'
</style>