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
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <td align="center">
                <table border="0" cellpadding="0" cellspacing="0" style="width: auto;">
                    <tr>
                        <td height="20"></td> <!-- Empty cell to create margin-top -->
                    </tr>
                    <tr>
                        <td style="text-align: center;">
                            <a href="http://localhost:5173/gdpr" data-gjs-type="text" style="text-decoration: none; color: black;">WEBSITE</a>
                        </td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;</td> <!-- Non-breaking spaces for gap -->
                        <td style="text-align: center;">
                            <a href="http://localhost:5173/gdpr" data-gjs-type="text" style="text-decoration: none; color: black;">ÅBNINGSTIDER</a>
                        </td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;</td> <!-- Non-breaking spaces for gap -->
                        <td style="text-align: center;">
                            <a href="http://localhost:5173/gdpr" data-gjs-type="text" style="text-decoration: none; color: black;">EVENTS</a>
                        </td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;</td> <!-- Non-breaking spaces for gap -->
                        <td style="text-align: center;">
                            <a href="http://localhost:5173/gdpr" data-gjs-type="text" style="text-decoration: none; color: black;">BLOG</a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
      
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
        content: `
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="90%">
        <tr>
            <td align="center">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                        <td height="20"></td> <!-- Empty cell to create margin-top -->
                    </tr>
                    <tr>
                        <td align="center">
                            <hr style="width: 100%; margin: 0;">
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    
`,
    },

    {
        id: 'image',
        label: 'Image',
        content: `
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                        <td align="center">
                            <img src="https://i.imgur.com/qspKNqi.png" alt="GeoGraden logo" width="100">
                        </td>
                    </tr>
                </table>`,
    }
    
]

export default blocks