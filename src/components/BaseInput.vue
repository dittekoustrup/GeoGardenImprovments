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

<style lang="scss" scoped>
.input-wrap {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
  position: relative;

  &__label {
    font-size: 16px;
    color: black;
    margin-bottom: 4px;
  }

  &__input {
    padding: 8px 0px;
    font-size: 16px;
    border: none;
    outline: none;
  }

  &.active .input-wrap__label {
    display: block; // Viser label når input-wrap har klassen 'active'
  }

  .max-width-input {
    max-width: 558px;
  }

  @media (min-width: 768px) {
    .max-width-input {
      min-width: 400px;
    }
  }
}
</style>
