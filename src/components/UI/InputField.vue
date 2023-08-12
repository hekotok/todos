<template>
    <div class="form-group field">
        <input
            :value="modelValue"
            class="form-field"
            name="input-field"
            :placeholder="placeholder"
            :aria-placeholder="placeholder"
            required
            v-bind="$attrs"
            @input="updateValue"
        />
        <label for="input-field" class="form-label">
            {{ placeholder }}
        </label>
    </div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
    name: 'InputField',

    props: {
        modelValue: {
            type: String,
            required: true
        },

        placeholder: {
            type: String,
            default: ''
        },

        isBlack: {
            type: Boolean,
            default: false
        }
    },

    emits: [ 'update:modelValue' ],

    //eslint-disable-next-line
    setup({ modelValue, isBlack }, { emit }) {
        const inputValue = ref(modelValue)
        const dinamicColor = ref(isBlack ? '#252422' : '#f2f0d8')

        watch(
            () => modelValue,
            newValue => inputValue.value = newValue
        )

        const updateValue = event => {
            inputValue.value = event.target.value
            emit('update:modelValue', inputValue.value)
        }

        return {
            inputValue,
            dinamicColor,
            updateValue
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.form-group {
    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
    width: 50%;
}

.form-field {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid gray;
    outline: 0;
    font-size: 1.4rem;
    color: v-bind(dinamicColor);
    padding: 7px 0;
    background: transparent;

    &::placeholder {
        color: transparent;
    }

    &:placeholder-shown ~ .form-label {
        font-size: 1.4rem;
        cursor: text;
        top: 20px;
    }

    &:focus {
        ~ .form-label {
            position: absolute;
            top: 0;
            display: block;
            transition: .2s;
            font-size: 1rem;
            color: $primary-color;
            font-weight: 700;
        }

        padding-bottom: 6px;
        font-weight: 700;
        border-width: 3px;
        border-image: linear-gradient(to right, $primary-color, v-bind(dinamicColor));
        border-image-slice: 1;
    }
}

.form-label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: v-bind(dinamicColor);
}
</style>