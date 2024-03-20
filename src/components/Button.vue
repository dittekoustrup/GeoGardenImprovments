<script setup>
const props = defineProps({
    text: String,
});
</script>

<template>
    <div class="button">
        {{ text }}
    </div>
</template>

<style lang="scss">
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