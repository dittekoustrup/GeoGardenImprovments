<script setup>
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const routes = router.getRoutes();
</script>

<template>
  <main>
    <menu>
      <li v-for="r in routes" :key="r.path">
        <RouterLink :to="r.path">{{ r.meta.title }}</RouterLink>
      </li>
    </menu>
  </main>
</template>
