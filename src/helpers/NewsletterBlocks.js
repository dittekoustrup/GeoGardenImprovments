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
        id: 'websiteLink',
        label: 'Website Link',
        content: '<a href="http://localhost:5173/" data-gjs-type="text" style="text-decoration: none; color: black; font-weight: 700;">WEBSITE</a>',
    },

    {
        id: 'openingHoursLink',
        label: 'Åbningstider Link',
        content: '<a href="http://localhost:5173/gdpr" data-gjs-type="text" style="text-decoration: none; color: black; font-weight: 700;">ÅBNINGSTIDER</a>',
    },

    {
        id: 'eventsLink',
        label: 'Events Link',
        content: '<a href="http://localhost:5173/gdpr" data-gjs-type="text" style="text-decoration: none; color: black; font-weight: 700;">EVENTS</a>',
    },

    {
        id: 'blogLink',
        label: 'Blog Link',
        content: '<a href="http://localhost:5173/gdpr" data-gjs-type="text" style="text-decoration: none; color: black; font-weight: 700;">BLOG</a>',
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

export default blocks