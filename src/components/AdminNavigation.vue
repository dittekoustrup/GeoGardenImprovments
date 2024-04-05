<script setup>
import { onSignOut } from '../services/authService';
</script>

<template>
    <nav>
        <button @click="onSignOut">Sign Out</button>
    </nav>
</template>

<style lang="scss">
@import url(../assets/style/AdminNavigation.scss);
</style>