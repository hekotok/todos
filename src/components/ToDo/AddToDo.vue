<template lang="en">
    <div class="modal-container">
        <div class="modal">
            <input-field />
            <action-button>Close</action-button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import '@/styles/_variables.scss';

.modal-container {
    @include flex-position(center, center);
    @include dimensions(100%, 100%);

    position: fixed;
    background: $bg-color;
    opacity: .5;
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
}
</style>