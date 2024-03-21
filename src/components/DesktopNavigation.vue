<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import activateToast from "../helper/Toast.js"

const router = useRouter();
const pricesRoute = router.getRoutes().find(route => route.name === 'priser-åbningstider');
const blogRoute = router.getRoutes().find(route => route.name === 'haveblog');
const eventRoute = router.getRoutes().find(route => route.name === 'events');
</script>

<template>
    <div class="navigation__desktop-layout">
        <li class="navigation__dropdown-menu">
            <p>OPLEV HAVEN</p>
            <img src="../assets/icons/DownArrowWhite.svg" alt="down arrow">
            <!-- <div class="navigation__dropdown-menu--active">

            </div> -->
        </li>

        <li>
            <RouterLink :to="pricesRoute.path">{{ pricesRoute.meta.title }}</RouterLink>
        </li>

        <li class="navigation__dropdown-menu">
            <p>BOOKING</p>
            <img src="../assets/icons/DownArrowWhite.svg" alt="down arrow">
        </li>

        <li class="navigation__dropdown-menu">
            <p>GALLERIER</p>
            <img src="../assets/icons/DownArrowWhite.svg" alt="down arrow">
        </li>

        <li>
            <RouterLink :to="blogRoute.path">{{ blogRoute.meta.title }}</RouterLink>
        </li>
        
        <li>
            <RouterLink :to="eventRoute.path">{{ eventRoute.meta.title }}</RouterLink>
        </li>
    </div>
</template>