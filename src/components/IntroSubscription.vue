<script setup>

import ReadMoreButton from '@/components/ReadMoreButton.vue'

const props = defineProps({
  title: String,
  body: String,
  buttonText: String,
  buttonAlt: Boolean,
  imageURL: String,
});

function getImageUrl(imageURL) {
  return new URL(`${imageURL}`, import.meta.url);
}

</script>

<template>
  <section class="intro">
    <div class="intro__content-flex">
      <div class="intro__content-container">
        <h2>
          {{ title }}
        </h2>
        <p>
          {{ body }}
        </p>
        <ReadMoreButton :text="buttonText" :buttonAlt="buttonAlt" />
      </div>
    </div>

    <div class="intro__image">
      <img :src="getImageUrl(imageURL)" alt="#">
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../assets/style/IntroSubscription.scss'
</style>