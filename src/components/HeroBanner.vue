<script setup>
import getImageSize from '@/helpers/getImageSize';

const props = defineProps({
    imageName: String,
    height: Number
});
</script>

<template>
    <div :style="{ height: props.height + 'px' }" class="hero">
        <img class="hero__image" :src="getImageSize(imageName)" alt="Hero image">
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/style/global/mixins' as m;

.hero {
    width: 100vw;
    // height: 165px !important;
    @include m.desktop-size{
        height: inherit !important;
    };

    &__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>
