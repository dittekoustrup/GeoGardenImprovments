<script setup>
import { ref } from 'vue';
import { signIn, passwordReset } from '../services/authService'

const email = ref('')
const password = ref('')

const onSubmitForm = () => {
    signIn(email.value, password.value)
}
</script>

<template>
    <div class="login-form-container">
        <form @submit.prevent="onSubmitForm" class="login-form-inputs">
            <input type="email" v-model="email" placeholder="Email" />
            <input type="password" v-model="password" placeholder="Password" />
            <button type="submit">Sign In</button>
        </form>
        <button type="submit" @click="passwordReset(email)" >glemt kodeord</button>
    </div>
</template>

<style lang="scss" scoped>
@import url(../assets/style/LoginForm.scss);
</style>
