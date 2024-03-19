<script setup>
import { useRoute, useRouter } from "vue-router";
import IntroSubscription from '@/components/IntroSubscription.vue'

const router = useRouter();
const routes = router.getRoutes();
</script>

<template>
  <main>
    <menu>
      hello
      <li v-for="r in routes" :key="r.path">
        <RouterLink :to="r.path">{{ r.meta.title }}</RouterLink>
      </li>
    </menu>

    <section>
      <div class="hero">
        <img class="hero__image" src="https://placehold.co/600x600" alt="#">
      </div>
    </section>

    <IntroSubscription 
      title="Velkommen til haven"
      body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem exercitationem quaerat odio voluptate mollitia totam. Accusantium explicabo autem illo est dolor maxime culpa velit, temporibus cum id quam fugitomnis placeat! Numquam assumenda repudiandae distinctio sint nostrum, cum dicta! Eius quae architecto corporis numquam sed dolor voluptates velit doloribus cum harum voluptate doloremque dignissimos deserunt molestiae repellat, perferendis magni, veritatis quia officiis eligendi. Fuga harum esse numquam iste eaque id possimus, iure perspiciatis animi. Sunt iure nesciunt perferendis sequi."
      buttonText="Læs mere"
      buttonLink="dynamic button events here, ex. link to other page, or show toaster"
    />

  </main>
</template>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.hero {
  width: 1517px;
  height: 524px;

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

</style>