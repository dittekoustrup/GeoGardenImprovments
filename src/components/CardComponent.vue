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
        <div>
            <img :src="getImageUrl(imageName)" :alt="category + ' image'">
        </div>

        <div :class="{ 'card__content--alt': imageFirst }" class="card__content">
            <div>
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
// @use '@/assets/style/global/variables' as v;
@use '@/assets/style/global/fonts' as f;
@use '@/assets/style/global/colors' as c;

.card {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    background-color: c.$secondary-green;

    div {
        flex-grow: 1;
        width: 100%;
    }

    h2 {
        font-size: f.$h2;
    }

    h3 {
        font-size: 24px;
        // TODO: talk about adding h3, is not part of design system
    }

    p {
        font-size: f.$body-text;
    }

    &__content div {
        padding: 50px 100px;
        font-size: f.$body-text;
    }

    img {
        width: 100%;
        object-fit: cover;
    }
}

.card--alt {
    flex-direction: row;
    background-color: c.$primary-green;
}
</style>
