<script setup>
import { defineProps, defineComponent } from 'vue';

import Button from '@/components/Button.vue'

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
        <Button :text="buttonText" :buttonAlt="buttonAlt" />
      </div>
    </div>

    <div class="intro__image">
      <img :src="getImageUrl(imageURL)" alt="#">
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/style/global/mixins' as m;

.intro {
  @include m.flex-center;

  &__content-flex {
    flex: 1;
  }

  &__content-container {
    padding: 0 100px;

    h2 {
      @include m.font-size-h2;
    }

    p {
      @include m.font-size-body;
    }
  }

  &__image {
    display: none;

    @include m.desktop-size {
      display: block;

      @include m.flex-center;
      flex: 1;

      & img {
        width: 285px;
        height: auto;
        object-fit: cover;
      }
    }
  }
}
</style>