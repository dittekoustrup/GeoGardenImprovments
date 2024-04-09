
<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import grapesjs from 'grapesjs';
import blocks from '../helpers/NewsletterBlocks.js'
import axios from 'axios';
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



async function sendEmail() {
    const emailContent = editor.value.getHtml();

    try {
        const response = await axios.post('https://sendemail-lfxkyrqqea-uc.a.run.app', {
            to: 'skp2104@hotmail.com',
            subject: 'Test Email',
            html: emailContent
        });
        console.log(response.data);
        // Handle success
        // For example, show a success message to the user
    } catch (error) {
        console.error(error);
        // Handle error
        // For example, show an error message to the user
    }
}
</script>

<template>
    <button @click="sendEmail">Send Email</button>
    <button @click="exportNewsletter()">Export</button>
    <div ref="editor"></div>
    <div id="blocks"></div>
</template>
  

<style lang="scss">
@import url(../assets/style/NewsletterEditor.scss);
</style>