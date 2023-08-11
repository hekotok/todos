<template>
    <div>
        <input
            v-bind="$attrs"
            class="input-field"
            :placeholder="placeholder"
        />
    </div>
</template>

<script>
export default {
    name: 'InputFiels',

    props: {
        placeholder: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/styles/_variables.scss';

div {
    border: 1px solid $primary-color;
    padding: 10px;
}
</style>