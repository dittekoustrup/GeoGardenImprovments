<script setup>
import LoginForm from '../components/LoginForm.vue';
import { onSignOut, stateChange } from '../services/authService';
import { ref } from 'vue';

const user = ref(null)

stateChange((userData) => {
    user.value = userData;
})

console.log(user);

</script>

<template>
    <LoginForm v-if="!user" />
    <button @click="onSignOut" v-else>Sign Out</button>
</template>