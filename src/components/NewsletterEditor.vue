
<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from 'vue';
import grapesjs from 'grapesjs';

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
        height: '300px',
        fromElement: true,
        storeManager: false,
        // Add Grapes.js configurations here
        blockManager: {
            appendTo: '#blocks',
            blocks: [
                {
                    id: 'section', // id is mandatory
                    label: '<b>Section</b>', // You can use HTML/SVG inside labels
                    attributes: { class: 'gjs-block-section' },
                    content: `<section>
                                    <h1>This is a simple title</h1>
                                    <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
                                </section>`,
                },

                {
                    id: 'text',
                    label: 'Text',
                    content: '<div data-gjs-type="text">Insert your text here</div>',
                },

                {
                    id: 'link',
                    label: 'Link',
                    content: '<a href="https://youtube.com" data-gjs-type="text">Link Here</a>',
                },

                {
                    id: 'image',
                    label: 'Image',
                    // Select the component once it's dropped
                    select: true,
                    // You can pass components as a JSON instead of a simple HTML string,
                    // in this case we also use a defined component type `image`
                    content: { type: 'image' },
                    // This triggers `active` event on dropped components and the `image`
                    // reacts by opening the AssetManager 
                    activate: true,
                }
            ]
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
  