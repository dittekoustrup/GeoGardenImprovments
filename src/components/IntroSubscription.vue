<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: String,
    body: String,
});

</script>

<template>
     <section class="intro">
      <div class="intro__content">
        <h2>
          {{ title }}
        </h2>
        <p>
          {{ body }}
        </p>
        <button>
          Læs mere
        </button>
      </div>

      <div class="intro__image">
        <img src="https://placehold.co/600x600" alt="#">
      </div>
    </section>
</template>

<style lang="scss" scoped>

.intro {
      display: flex;
      justify-content: center;
      align-items: center;

      &>* {
        flex: 1;
      }

      &__content {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 170px;

      }

    }

</style>