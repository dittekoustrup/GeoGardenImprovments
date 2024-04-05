<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const pricesRoute = router.getRoutes().find(route => route.name === 'priser-åbningstider');
const blogRoute = router.getRoutes().find(route => route.name === 'haveblog');
const eventRoute = router.getRoutes().find(route => route.name === 'events');

</script>

<template>
    <div class="dropdown">
        <ul>
            <li class="dropdown__expand">
                <p>OPLEV HAVEN</p>
                <img src="../assets/icons/DownArrow.svg" alt="">
            </li>

            <li>
                <RouterLink :to="pricesRoute.path">{{ pricesRoute.meta.title }}</RouterLink>
            </li>

            <li class="dropdown__expand">
                <p>BOOKING</p>
                <img src="../assets/icons/DownArrow.svg" alt="">
            </li>

            <li class="dropdown__expand">
                <p>GALLERIER</p>
                <img src="../assets/icons/DownArrow.svg" alt="">
            </li>
            ∑
            <li>
                <RouterLink :to="blogRoute.path">{{ blogRoute.meta.title }}</RouterLink>
            </li>

            <li>
                <RouterLink :to="eventRoute.path">{{ eventRoute.meta.title }}</RouterLink>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
@import "../assets/style/Dropdown.scss";
</style>