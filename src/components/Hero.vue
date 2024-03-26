<script setup>
const props = defineProps({
    imageURL: String,
})
</script>

<template>
    <div class="hero">
        <img class="hero__image" :src="imageURL" alt="#">
    </div>
</template>

<style lang="scss" scoped>
.hero {
    // width: 1517px;
    // height: 524px;
    
    width: 100vw;
    height: 524px;

    &__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>