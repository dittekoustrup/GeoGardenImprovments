<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import DesktopDropdown from "./DesktopDropdown.vue";

const router = useRouter();
const pricesRoute = router.getRoutes().find(route => route.name === 'priser-åbningstider');
const blogRoute = router.getRoutes().find(route => route.name === 'haveblog');
const eventRoute = router.getRoutes().find(route => route.name === 'events');

const dropdownVisibility = ref([false, false, false]);

const showDropdown = (index) => {
    dropdownVisibility.value[index] = true;
    dropdownVisibility.value.forEach((value, i) => {
        if (i !== index) {
            dropdownVisibility.value[i] = false;
        }
    });
};

const hideDropdown = (index) => {
    dropdownVisibility.value[index] = false;
};

const hideAllDropdowns = () => {
    dropdownVisibility.value = dropdownVisibility.value.map(() => false);
};
</script>

<template>
    <div class="navigation__desktop-layout">

        <li class="navigation__dropdown-menu" @mouseenter="showDropdown(0)" @click="hideDropdown(0)">
            <p>OPLEVHAVEN</p>
            <img :class="{ 'rotate-180': dropdownVisibility[0] }" src="../assets/icons/DownArrowWhite.svg" alt="down arrow">
            <DesktopDropdown v-if="dropdownVisibility[0]" @mouseleave="hideDropdown(0)" />
        </li>

        <li @click="hideAllDropdowns()">
            <RouterLink :to="pricesRoute.path">{{ pricesRoute.meta.title }}</RouterLink>
        </li>

        <li class="navigation__dropdown-menu" @mouseenter="showDropdown(1)" @click="hideDropdown(1)">
            <p>BOOKING</p>
            <img :class="{ 'rotate-180': dropdownVisibility[1] }" src="../assets/icons/DownArrowWhite.svg" alt="down arrow">
            <DesktopDropdown v-if="dropdownVisibility[1]" @mouseleave="hideDropdown(1)" />
        </li>

        <li class="navigation__dropdown-menu" @mouseenter="showDropdown(2)" @click="hideDropdown(2)">
            <p>GALLERIER</p>
            <img :class="{ 'rotate-180': dropdownVisibility[2] }" src="../assets/icons/DownArrowWhite.svg" alt="down arrow">
            <DesktopDropdown v-if="dropdownVisibility[2]" @mouseleave="hideDropdown(2)" />
        </li>

        <li @click="hideAllDropdowns()">
            <RouterLink :to="blogRoute.path">{{ blogRoute.meta.title }}</RouterLink>
        </li>

        <li @click="hideAllDropdowns()">
            <RouterLink :to="eventRoute.path">{{ eventRoute.meta.title }}</RouterLink>
        </li>
    </div>
</template>
