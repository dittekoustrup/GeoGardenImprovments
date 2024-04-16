<script setup>
import { reactive, ref } from "vue";
import { required, helpers } from "@vuelidate/validators";
import BaseInput from "./BaseInput.vue";
import useVuelidate from "@vuelidate/core";
import SignUpModal from "./SignUpModal.vue";

const formData = reactive({
  firstName: "",
  lastName: "",
  email: "",
  reEmail: "",
  zipCode: "",
  adult: "",
  children: "",
  agree: false,
});

const errorMessage = "Forkert indtastning";

const rules = {
  firstName: { required: helpers.withMessage(errorMessage, required) },
  lastName: { required: helpers.withMessage(errorMessage, required) },
  email: { required: helpers.withMessage(errorMessage, required) },
  reEmail: { required: helpers.withMessage(errorMessage, required) },
  agree: { required },
};

const v$ = useVuelidate(rules, formData);

const modalOpen = ref(false);

const updateShowModal = (value) => {
  modalOpen.value = value;
};

const submitForm = async () => {
  const result = await v$.value.$validate();
  if (result && formData.agree) {
    modalOpen.value = true;
  } else {
    v$.agree.$touch();
  }
};
</script>

<template>
  <form @submit.prevent="submitForm" class="form form--main">
    <div class="input-wrapper input-wrapper--main">
      <div class="input-column input-column--main">
        <BaseInput v-model="formData.firstName" type="text" label="Fornavn"
          :placeholder="v$.firstName.$error ? errorMessage : 'Fornavn'"
          :class="v$.firstName.$error ? 'error-message' : ''" class="input input--main" />
      </div>
      <div class="input-column input-column--main">
        <BaseInput v-model="formData.lastName" type="text" label="Efternavn" class="input input--main"
          :placeholder="v$.firstName.$error ? errorMessage : 'Efternavn'"
          :class="v$.lastName.$error ? 'error-message' : ''" />

      </div>
    </div>
    <div class="input-wrapper input-wrapper--main">
      <div class="input-column input-column--main">
        <BaseInput v-model="formData.zipCode" type="number" label="Postnummer" placeholder="Postnummer"
          class="input input--main" />
      </div>
      <div class="input-column input-column--main">
        <BaseInput v-model="formData.email" type="email" label="Mail" class="input input--main"
          :placeholder="v$.firstName.$error ? errorMessage : 'Email'" :class="v$.email.$error ? 'error-message' : ''" />
      </div>
    </div>
    <div class="input-wrapper input-wrapper--main">
      <div class="input-column input-column--main">
        <BaseInput v-model="formData.reEmail" type="email" label="Gentag email" placeholder="Gentag email"
          class="input input--main" :placeholder="v$.reEmail.$error ? errorMessage : 'Gentag email'"
          :class="v$.email.$error ? 'error-message' : ''" />
      </div>
      <div class="input-column input-column--main">
        <BaseInput v-model="formData.phone" type="number" label="Mobilnummer" placeholder="Mobilnummer"
          class="input input--main" />
      </div>
    </div>
    <div class="input-wrapper input-wrapper--main">
      <div class="input-column input-column--main">
        <BaseInput v-model="formData.adult" type="text" label="Antal voksne i husstanden"
          placeholder="Antal i husstanden" class="input input--main" />
      </div>
      <div class="input-column input-column--main">
        <BaseInput v-model="formData.children" type="text" label="Antal børn i husstanden"
          placeholder="Antal børn i husstanden" class="input input--main" />
      </div>
    </div>

    <div class="checkbox-wrapper">
      <input type="checkbox" id="agreeCheckbox" v-model="formData.agree" />
      <label for="agreeCheckbox">Er du indforstået med, at I indsamler og behandler mine data i
        overensstemmelse med jeres privatlivspolitik. Læs mere og vores cockie-
        og privatlivspolitik.
      </label>
    </div>
    <span class="error-span" v-if="!formData.agree && v$.agree.$dirty"> <br> Du skal acceptere
      betingelserne og vilkårene.</span>
    <div class="button-container">
      <button type="submit" class="button button--main">Bliv medlem</button>
    </div>
  </form>
  <SignUpModal :show="modalOpen" @update:show="updateShowModal" />
</template>

<style lang="scss" scoped>
@import "../assets/style/SignUpForm.scss";
</style>