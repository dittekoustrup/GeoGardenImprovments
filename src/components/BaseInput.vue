<template>
  <div class="input-wrap" :class="{ active: modelValue !== '' }">
    <label>{{ label }}</label>
    <input
      type="text"
      :value="modelValue"
      @input="updateModelValue"
      @focus="isFocused = true"
      @blur="isFocused = false"
      :placeholder="isFocused ? '' : label"
      v-bind="$attrs"
      class="max-width-input my-input"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

const isFocused = ref(false);

defineProps({
  label: {
    type: [String, Boolean],
    default: false,
  },
  modelValue: {
    type: String,
    default: "",
  },
});

function updateModelValue(event) {
  $emit("update:modelValue", event.target.value);
}
</script>

<style lang="scss">
.input-wrap {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
  position: relative;

  label {
    font-size: 16px;
    color: black;
    padding-bottom: 2px;
  }

  input {
    padding: 8px 0px;
    font-size: 16px;
    border: none;
    outline: none;
  }

  &.active label,
  .my-input:focus::placeholder {
    display: none;
  }

  .max-width-input {
    max-width: 558px;
  }

  @media (min-width: 768px) {
    .max-width-input {
      min-width: 360px;
      padding-bottom: 1px;
    }
  }
}
</style>
