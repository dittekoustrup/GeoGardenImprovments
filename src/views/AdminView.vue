<script setup>
import LoginForm from '../components/LoginForm.vue';
import AdminNavigation from '@/components/AdminNavigation.vue';
import NewsletterEditor from '../components/NewsletterEditor.vue'

import { onSignOut, stateChange } from '../services/authService';
import { ref } from 'vue';

const user = ref(null)

stateChange((userData) => {
    user.value = userData;
})

// console.log(user);

</script>

<template>
    <LoginForm v-if="!user" />

    <div v-else>
        <AdminNavigation />
        <NewsletterEditor />
    </div>
</template>