<script setup>

import ReadMoreButton from '@/components/ReadMoreButton.vue';

import getImageUrl from '@/helpers/getImageSize';

const props = defineProps({
    title: String,
    category: String,
    body: String,
    imageName: String,
    imageFirst: Boolean,
    buttonText: String,
})
</script>

<template>
    <section :class="{ 'card--alt': imageFirst }" class="card">
        <img :src="getImageUrl(imageName)" :alt="category + ' image'">

        <div :class="{ 'card__content--alt': imageFirst }" class="card__content">
            <div class="card__content-spacing">
                <h3>
                    {{ category}}
                </h3>
                <h2>
                    {{ title }}
                </h2>
                <p>
                    {{ body }}
                </p>
                <ReadMoreButton :text="buttonText" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '@/assets/style/CardComponent';
</style>
