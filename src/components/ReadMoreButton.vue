<script setup>
const props = defineProps({
    text: String,
    buttonAlt: Boolean,
});

</script>

<template>
    <div class="button" :class="{ 'button--alt': buttonAlt }">
        {{ text }}
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/ReadMoreButton.scss';
</style>