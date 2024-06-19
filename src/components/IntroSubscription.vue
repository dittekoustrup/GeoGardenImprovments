<script setup>
import { defineProps, onMounted, onUnmounted, ref } from 'vue';

import isMobile from '@/helpers/isMobile.js'

import ReadMoreButton from '@/components/ReadMoreButton.vue';
import getImageUrl from '@/helpers/getImageSize';

const props = defineProps({
  title: String,
  body: String,
  buttonText: String,
  buttonAlt: Boolean,
  intro: Boolean,
  imageName: String
});

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

    <div v-show="!intro || !isMobile()" class="intro__image">
  <img width="350px" height="350px" :src="getImageUrl(imageName)" alt="membercard image">
</div>

  </section>
</template>

<style lang="scss" scoped>
@import '../assets/style/IntroSubscription.scss';
</style>