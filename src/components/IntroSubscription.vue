<script setup>
import { defineProps, defineComponent } from 'vue';

import Button from '@/components/Button.vue'

const props = defineProps({
  title: String,
  body: String,
  buttonText: String,
  buttonLink: String,
  buttonColor: String,
  imageURL: String,
});

function getImageUrl(imageURL) {
  return new URL(`${imageURL}`, import.meta.url);
}

</script>

<template>
  <section class="intro">

    <div>
      <div class="intro__content">
        <h2>
          {{ title }}
        </h2>
        <p>
          {{ body }}
        </p>
        <Button :text="buttonText" :color="buttonColor" />
      </div>
    </div>

    <div class="intro__image">
      <img :src="getImageUrl(imageURL)" alt="#">
    </div>
  </section>
</template>

<style lang="scss" scoped>
.intro {
  display: flex;
  justify-content: center;
  align-items: center;

  & div {
    flex-grow: 1;
    width: 100%;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 170px;

  }

  &__image {
    object-fit: cover;
    width: 285px;
    // background-color: crimson;
  }

}
</style>