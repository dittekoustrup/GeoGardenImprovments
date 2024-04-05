<template>
  <div class="modal-overlay" v-if="show" @click="close">
    <div class="modal">
      <div class="modal-header">
        <button class="close-btn" @click="close">&times;</button>
      </div>
      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  show: Boolean,
  onClose: Function,
});

const close = () => {
  props.onClose();
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: blue;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  width: 400px;
}

.modal-header {
  display: flex;
  justify-content: flex-end;
}

.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #000;
}
</style>