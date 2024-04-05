<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const routes = router.getRoutes();
</script>

<template>
  <RouterView />
</template>
