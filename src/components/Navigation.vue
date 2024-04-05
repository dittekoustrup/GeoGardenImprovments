<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Dropdown from "./Dropdown.vue"
import activateToast from "../helpers/Toast.js"
import DesktopNavigation from "./DesktopNavigation.vue"

const router = useRouter();
const newsletterRoute = router.getRoutes().find(route => route.name === 'newsletter');
const dropdownOpen = ref(false)

const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value
}

const redirectToHomePage = () => {
    router.push('/')
}
</script>

<template>
    <nav>
        <ul class="navigation">
            <div class="navigation__logo" @click="redirectToHomePage">
                <img src="../assets/icons/LogoTextRow.svg" alt="logo">
            </div>

            <DesktopNavigation />

            <li class="navigation__newsletter">
                <RouterLink :to="newsletterRoute.path">{{ newsletterRoute.meta.title }}</RouterLink>
            </li>

            <li class="navigation__search" @click="activateToast">
                <img src="../assets/icons/Search.svg" alt="search icon">
            </li>

            <li class="navigation__burger" @click="toggleDropdown">
                <div v-if="!dropdownOpen">
                    <img src="../assets/icons/Burger.svg" alt="Burger icon">
                </div>

                <div v-if="dropdownOpen" class="navigation__cross">
                    <img src="../assets/icons/Cross.svg" alt="Close icon">
                </div>
            </li>
        </ul>

        <div v-if="dropdownOpen">
            <Dropdown />
        </div>
    </nav>
</template>

<style lang="scss">
@import "../assets/style/Navigation.scss";
</style>../helpers/Toast.js