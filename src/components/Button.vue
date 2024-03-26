<script setup>
const props = defineProps({
    text: String,
    color: String,
});
</script>

<template>
    <div class="button">
        {{ text }}
        {{ color }}
    </div>
</template>

<style lang="scss">
// unused for now, but import when necessary
@use '@/assets/style/global/variables' as v;

.button {
    background-color: hotpink;
    width: 306px;
    height: 64px;
    font-weight: 700;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: deeppink;
    }

    &:active {
        background-color: yellow;
    }

    // TODO: disabled is styled, but not integrated yet
    &:disabled {
        opacity: 30%;
    }
}
</style>