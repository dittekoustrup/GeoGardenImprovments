<script setup>
import { ref } from 'vue';
import { signIn } from '../services/authService';
import { useRouter } from "vue-router";

const router = useRouter();

const resetPassRoute = router.getRoutes().find(route => route.name === 'password-reset');

const email = ref('')
const password = ref('')

const onSubmitForm = () => {
    signIn(email.value, password.value)
}

const redirectToResetPassword = () => {
    router.push({ name: 'password-reset', query: { email: email.value } });
}

</script>

<template>
    <div class="login-form-container">
        <form @submit.prevent="onSubmitForm" class="login-form-inputs">
            <input type="email" v-model="email" placeholder="Email" />
            <input type="password" v-model="password" placeholder="Password" />
            <button type="submit">Sign In</button>
            <a @click="redirectToResetPassword"> {{ resetPassRoute.meta.title }}</a>
        </form>
    </div>
</template>

<style lang="scss" scoped>
@import url(../assets/style/LoginForm.scss);
</style>
