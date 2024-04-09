const blocks = [
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
        id: 'navLinks',
        label: 'Navigation Links',
        content: `
            <div class="links-container" >
                <a href="http://localhost:5173/gdpr" data-gjs-type="text" style="text-decoration: none; color: inherit;">WEBSITE</a>
                <a href="http://localhost:5173/gdpr" data-gjs-type="text" style="text-decoration: none; color: inherit;">ÅBNINGSTIDER</a>
                <a href="http://localhost:5173/gdpr" data-gjs-type="text" style="text-decoration: none; color: inherit;">EVENTS</a>
                <a href="http://localhost:5173/gdpr" data-gjs-type="text" style="text-decoration: none; color: inherit;">BLOG</a>
            </div>
        `,
    },

    {
        id: 'imageAndTextSection',
        label: 'Image and Text Section',
        content: `
            <section class="image-text-section">
                <div class="image-container">
                    <img src="https://i.imgur.com/qspKNqi.png" alt="Image">
                </div>
                <div class="text-container">
                    <h3>Subtitle</h3>
                    <h2>Title</h2>
                    <p>Description</p>
                    <a href="#" class="btn">Læs Mere</a>
                </div>
            </section>
        `,
    },

    {
        id: 'devider',
        label: 'Devider',
        content: '<hr/>',
    },

    {
        id: 'image',
        label: 'Image',
        // Select the component once it's dropped
        // select: true,
        // You can pass components as a JSON instead of a simple HTML string,
        // in this case we also use a defined component type `image`
        content: {
            type: 'image',
            src: 'https://i.imgur.com/qspKNqi.png',
            alt: 'GeoGraden logo',
        },
        // This triggers `active` event on dropped components and the `image`
        // reacts by opening the AssetManager 
        // activate: true,
    }
]

export default blocks