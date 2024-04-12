
<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import grapesjs from 'grapesjs';
import blocks from '../helpers/NewsletterBlocks.js'
import axios from 'axios';
const editor = ref(null);
const emailArray = ref(['skp2104@hotmail.com', 'ditte.j.kk1994@gmail.com', 'smoelfwastaken@gmail.com']);

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
        height: '85vh',
        minHeight: '500px',
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


// async function sendEmail() {
//     const emailContent = editor.value.getHtml();

//     for (let i = 0; i < emailArray.value.length; i++) {
        
//         try {
//             const response = await axios.post('https://sendemail-lfxkyrqqea-uc.a.run.app', {
//                 to: emailArray.value[i],
//                 subject: 'Test Email',
//                 html: emailContent
//             });
//             console.log(response.data);
//         } catch (error) {
//             console.error(error);
//         }
        
//     }

// }


async function sendEmail() {
    const emailContent = editor.value.getHtml();

        
        try {
            const response = await axios.post('https://sendemail-lfxkyrqqea-uc.a.run.app', {
                to: 'ditte.j.kk1994@gmail.com',
                subject: 'Test Email',
                html: emailContent
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
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