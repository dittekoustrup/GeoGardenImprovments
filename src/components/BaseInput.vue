<template>
  <div class="input-wrap" :class="{ active: isFocused || modelValue !== '' }">
    <label v-if="label">{{ label }}</label>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @focus="isFocused = true"
      @blur="isFocused = false"
      :placeholder="isFocused ? '' : placeholder"
      v-bind="$attrs"
      class="input-wrap__input max-width-input"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  label: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  },
});

const isFocused = ref(false);
</script>

<style lang="scss" scoped>
@import "../assets/style/BaseInput.scss";
</style>
