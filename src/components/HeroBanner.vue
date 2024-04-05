<script setup>

import getImageSize from '@/helpers/getImageSize';

const props = defineProps({
    imageName: String
});

</script>

<template>
    <div class="hero">
        <img class="hero__image" :src="getImageSize(imageName)" alt="Hero image">
    </div>
</template>

<style lang="scss" scoped>
.hero {
    width: 100vw;
    height: 524px;

    &__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>
