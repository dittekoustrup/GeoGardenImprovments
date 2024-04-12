<script setup>
import { ref, defineProps, defineEmits } from "vue";
const { emit } = defineEmits();

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
});

</script>

<template>
  <div v-if="show" class="modal">
    <div class="modal-content">
      <span  @click="$emit('update:show', false)" class="close">&times;</span>
      <h2>Tak for din tilmelding!</h2>
      <p>
        Vi glæder os til at byde dig velkommen til vores grønne fællesskab og
        forkæle dig med eksklusive tilbud, VIP-oplevelser og personlig service.
        Hold øje med din indbakke for spændende opdateringer og særlige
        arrangementer. Vi ser frem til at dele vores passion for planter, natur
        og bæredygtighed med dig!
      </p>
    </div>
  </div>
</template>

<style scoped>
@import "../assets/style/SignUpModal.scss";
</style>
