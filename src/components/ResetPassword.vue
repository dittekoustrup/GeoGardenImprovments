<script setup>
import { ref, onMounted } from 'vue';
import { passwordReset } from '../services/authService';
import { useRouter } from 'vue-router';

const router = useRouter();

const emailToValidate = ref('');

const onSubmitForm = () => {
    passwordReset(emailToValidate.value);
}

onMounted(() => {
    // Get email from URL and put it into the input
    emailToValidate.value = router.currentRoute.value.query.email || '';
    // Clear URL from any parameters
    clearUrlParams();
});

const clearUrlParams = () => {
    if (router.currentRoute.value.query.email) {
        router.replace({ query: {} });
    }
}
</script>

<template>
    <div class="reset-password-form-container">
        <form @submit.prevent="onSubmitForm" class="reset-password-form-inputs">
            <h3>Reset adgangskode</h3>
            <input type="email" v-model="emailToValidate" placeholder="Email" />
            <button type="submit">Reset Password</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
@use '@/assets/style/global/fonts' as f;
@use '@/assets/style/global/_variables.scss' as v;
@use '@/assets/style/global/_colors.scss' as c;

.reset-password-form-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    background-color: c.$grey;
}

.reset-password-form-inputs {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    border-radius: 5px;

    input {
        padding: 5px;
        border-style: none;
        height: 30px;
        width: 300px;
        border-bottom: solid 1px;
        background: none;
    }

    button {
        font-family: f.$primary-font;
        font-size: f.$button-text;
        padding: 10px;
        cursor: pointer;
        background-color: c.$secondary-green;
        color: c.$primary-offWhite;
        border-style: none;
        transition: 0.2s;
        letter-spacing: 2px;

        &:hover {
            transition: 0.2s;
            color: c.$black;
            background-color: c.$primary-offWhite;
        }
    }
}
</style>
