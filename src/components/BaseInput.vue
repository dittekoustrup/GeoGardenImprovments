<script setup>
import { ref } from "vue";

defineProps({
  label: {
    type: [String, Boolean],
    default: true,
  },
  modelValue: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="input-wrap" :class="{ active: isFocused || modelValue !== '' }">
    <label v-if="label && !isFocused">{{ label }}</label>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @focus="isFocused = false"
      @blur="isFocused = false"
      :placeholder="label"
      v-bind="$attrs"
      class="input-wrap__input max-width-input"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/style/BaseInput.scss";
</style>
