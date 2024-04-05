<template>
  <form @submit.prevent="submitForm">
    <BaseInput v-model="formData.firstName" type="text" label="Fornavn" />
    <span v-for="error in v$.firstName.$errors" :key="error.$uid">
      {{ error.$message }}</span
    >
    <BaseInput v-model="formData.lastName" type="text" label="Efternavn" />
    <span v-for="error in v$.lastName.$errors" :key="error.$uid">
      {{ error.$message }}</span
    >
    <BaseInput v-model="formData.email" type="email" label="Mail" />
    <span v-for="error in v$.email.$errors" :key="error.$uid">
      {{ error.$message }}</span
    >
    <button type="submit">Tilmeld</button>
    <Modal :show="modalOpen" :onClose="closeModal"></Modal>
    <Modal :show="modalOpen" @close="modalOpen = false">
      <h2>Du er nu tilmeldt!</h2>
      <p>Tak for din tilmelding.</p>
    </Modal>
  </form>
</template>
  
<script setup>
import { reactive } from "vue";
import { ref } from "vue";
import BaseInput from "../components/BaseInput.vue";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import Modal from "./SignUpModal.vue";

const formData = reactive({
  firstName: "",
  lastName: "",
  email: "",
});
const rules = {
  firstName: { required },
  lastName: { required },
  email: { required },
};
const v$ = useVuelidate(rules, formData);

const modalOpen = ref(false);

const submitForm = async () => {
  const result = await v$.value.$validate();
  if (result) {
    modalOpen.value = true;
  }
};
</script>

<style lang="scss">
.form {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>

  