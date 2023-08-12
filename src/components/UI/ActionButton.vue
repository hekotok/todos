<template>
    <button type="button">
        <strong><slot></slot></strong>
    </button>
</template>

<script>
export default {
    name: 'ActionButton'
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

button {
    font-size: 22pt;
    padding: 10px 20px;
    color: $secondary-color;
    background: $bg-color;
    border: 2px solid $primary-color;
    transition: all .4s ease-in-out;
    overflow: hidden;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 20px $primary-color;
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        height: 100%;
        width: 100%;
        background-color: $primary-color;
        z-index: -1;
        transition: left .1s ease-out
    }

    &:active::before {
        left: 0;
    }
}
</style>