<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import grapesjs from 'grapesjs';
import blocks from '../helpers/NewsletterBlocks.js'
import axios from 'axios';
import { db } from '../firebase/index';
import { collection, getDocs } from "firebase/firestore";
import defaultMailTemplate from "../helpers/newsletterDefault"
const editor = ref(null);
const emailArray = ref([]);

onMounted(async () => {
    initEditor();
});

const importDefaultMailTemplate = () => {
    if (!localStorage.getItem('gjsProject')) {
        const serializedTemplate = JSON.stringify(defaultMailTemplate);
        localStorage.setItem('gjsProject', serializedTemplate);
        window.location.reload();
    }
}

onBeforeUnmount(() => {
    if (editor.value) {
        editor.value.destroy();
    }
});

const getEmails = async () => {
    const querySnapshot = await getDocs(collection(db, "userData"));
    emailArray.value = []; // Initialize emailArray as an empty array
    querySnapshot.forEach((doc) => {
        emailArray.value.push(doc.data().email); // Use emailArray.value
    });
}

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


async function sendEmail() {
    await getEmails()

    const emailContent = editor.value.getHtml();

    for (let i = 0; i < emailArray.value.length; i++) {

        try {
            const response = await axios.post('https://sendemail-lfxkyrqqea-uc.a.run.app', {
                to: emailArray.value[i],
                subject: 'Test Email',
                html: emailContent
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }

    }
}

</script>

<template>
    <button @click="importDefaultMailTemplate">Import Mail Template</button>
    <button @click="sendEmail">Send Email</button>
    <div ref="editor"></div>
    <div id="blocks"></div>
</template>
  

<style lang="scss">
@import url(../assets/style/NewsletterEditor.scss);
</style>
