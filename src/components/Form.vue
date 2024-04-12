<template>
  <form @submit.prevent="submitForm" class="form form--main">
    <div class="input-wrapper input-wrapper--main">
      <div class="input-column input-column--main">
        <BaseInput v-model="formData.firstName" type="text" label="Fornavn" />
        <span
          v-for="error in v$.firstName.$errors"
          :key="error.$uid"
          class="error-message error-message--main"
        >
          {{
            error.$message === "This field is required"
              ? "Fornavn skal udfyldes"
              : error.$message
          }}
        </span>
      </div>
      <div class="input-column input-column--main">
        <BaseInput v-model="formData.lastName" type="text" label="Efternavn" />
        <span
          v-for="error in v$.lastName.$errors"
          :key="error.$uid"
          class="error-message error-message--main"
        >
          {{ error.$message }}
        </span>
      </div>
    </div>
    <div class="input-wrapper input-wrapper--main">
      <div class="input-column input-column--main">
        <BaseInput
          v-model="formData.zipCode"
          type="number"
          label="Postnummer"
          class="input input--main"
        />
      </div>
      <div class="input-column input-column--main">
        <BaseInput
          v-model="formData.email"
          type="email"
          label="Mail"
          class="input input--main"
        />
        <span
          v-for="error in v$.email.$errors"
          :key="error.$uid"
          class="error-message error-message--main"
        >
          {{ error.$message }}
        </span>
      </div>
    </div>
    <div class="input-wrapper input-wrapper--main">
      <div class="input-column input-column--main">
        <BaseInput
          v-model="formData.reEmail"
          type="email"
          label="Gentag email"
          class="input input--main"
        />
        <span
          v-for="error in v$.reEmail.$errors"
          :key="error.$uid"
          class="error-message error-message--main"
        >
          {{ error.$message }}
        </span>
      </div>
      <div class="input-column input-column--main">
        <BaseInput
          v-model="formData.phone"
          type="number"
          label="Mobilnummer"
          class="input input--main"
        />
      </div>
    </div>
    <div class="input-wrapper input-wrapper--main">
      <div class="input-column input-column--main">
        <BaseInput
          v-model="formData.adult"
          type="text"
          label="Antal voksne i husstanden"
          class="input input--main"
        />
      </div>
      <div class="input-column input-column--main">
        <BaseInput
          v-model="formData.children"
          type="text"
          label="Antal børn i husstanden"
          class="input input--main"
        />
      </div>
    </div>

    <div class="checkbox-wrapper">
      <input type="checkbox" id="agreeCheckbox" v-model="formData.agree" />
      <label for="agreeCheckbox"
        >Jeg accepterer betingelserne og vilkårene for tilmelding.</label
      >
      <span
        class="error-message error-message--main"
        v-if="!formData.agree && v$.agree.$dirty"
        >Du skal acceptere betingelserne og vilkårene.</span
      >
    </div>

    <button type="submit" class="button button--main">Tilmeld</button>
    <Modal
      :show="modalOpen"
      :onClose="closeModal"
      class="modal modal--main"
    ></Modal>
    <Modal
      :show="modalOpen"
      @close="modalOpen = false"
      class="modal modal--main"
    >
      <h2 class="modal-title modal-title--main">Du er nu tilmeldt!</h2>
      <p class="modal-message modal-message--main">Tak for din tilmelding.</p>
    </Modal>
  </form>
</template>

<script setup>
import { reactive } from "vue";
import { ref } from "vue";
import BaseInput from "../components/BaseInput.vue";
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import Modal from "./SignUpModal.vue";

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
  firstName: {
    required: helpers.withMessage(errorMessage, required),
  },
  lastName: { required: helpers.withMessage(errorMessage, required) },
  email: { required: helpers.withMessage(errorMessage, required) },
  reEmail: { required: helpers.withMessage(errorMessage, required) },
  agree: { required },
};

const v$ = useVuelidate(rules, formData);

const modalOpen = ref(false);

const submitForm = async () => {
  const result = await v$.value.$validate();
  if (result && formData.agree) {
    modalOpen.value = true;
  } else {
    v$.agree.$touch();
  }
};
</script>
<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
}

.input-column {
  margin: 0;
}

.input {
  max-width: 100%;
  padding-top: 50px;
}

.error-message {
  color: red;
}

.button {
  background-color: green;
  color: white;
  padding: 10px 20px;
  width: 306px;
  height: 66px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  z-index: 1000;
  width: 90%;
}

.modal-title {
  color: white;
  font-size: 24px;
  margin-bottom: 10px;
}

.modal-message {
  color: white;
  font-size: 18px;
}

@media (min-width: 768px) {
  .input-wrapper {
    flex-direction: row;
    gap: 59px;
  }

  .input-column {
    flex: 1;
  }
}

@media (min-width: 1024px) {
  .form {
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .button {
    width: 280px;
    height: 56px;
  }

  .modal {
    width: 600px;
  }
}
</style>