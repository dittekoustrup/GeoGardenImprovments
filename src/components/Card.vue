<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: String,
    category: String,
    body: String,
    imageURL: String,
    imageFirst: Boolean,
})

</script>

<template>
    <section :class="{ 'card--alt': imageFirst }"   class="card">
        <div>
            <img :src="imageURL" :alt="category + ' image'">
        </div>
        <div :class="{ 'card__content--alt': imageFirst }"  class="card__content">
            <h3>
                {{ category}}
            </h3>
            <h2>
                {{ title }}
            </h2>
            <p>
                {{ body }}
            </p>
            <button>
                read more
            </button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.card {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    background-color: deeppink;
    
    &__content {
    height: 100%;
    padding: 50px 100px;

}

    img {
        height: 756px;
    }
}

.card--alt {
    flex-direction: row;
    background-color: hotpink;
}
</style>
