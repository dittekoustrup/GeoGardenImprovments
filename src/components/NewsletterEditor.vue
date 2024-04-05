
<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from 'vue';
import grapesjs from 'grapesjs';
import blocks from '../helpers/NewsletterBlocks.js'

const editor = ref(null);

onMounted(() => {
    initEditor();
});

onBeforeUnmount(() => {
    if (editor.value) {
        editor.value.destroy();
    }
});

function initEditor() {
    editor.value = grapesjs.init({
        container: editor.value,
        height: '500px',
        fromElement: true,
        storeManager: false,
        // Add Grapes.js configurations here
        blockManager: {
            appendTo: '#blocks',
            blocks
        },
    });
}

function exportNewsletter() {
    const htmlContent = editor.value.getHtml();
    // const inlineHtmlContent = inlineCSS(htmlContent)
    console.log(htmlContent);
}
</script>

<template>
    <button @click="exportNewsletter()">Export</button>
    <div ref="editor"></div>
    <div id="blocks"></div>
</template>
  

<style lang="scss">
@import url(../assets/style/NewsletterEditor.scss);
</style>