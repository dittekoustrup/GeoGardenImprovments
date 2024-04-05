<script setup>
const props = defineProps({
    text: String,
    buttonAlt: Boolean,
});

</script>

<template>
    <div class="button" :class="{ 'button--alt': buttonAlt }">
        {{ text }}
        {{ buttonAlt }}
    </div>
</template>

<style lang="scss" scoped>
@use '@/assets/style/global/mixins' as m;
@use '@/assets/style/global/colors' as c;

.button {
    @include m.flex-center;

    background-color: c.$primary-offWhite;
    color: c.$primary-brown;
    width: 306px;
    height: 64px;
    font-weight: 700;
    
    &--alt {
        background-color: c.$secondary-green;
        color: c.$primary-offWhite;
    }

    &:hover {
        background-color: deeppink;
    }

    &:active {
        background-color: yellow;
    }
 
    &:disabled {
        opacity: 30%;
    }
}
</style>