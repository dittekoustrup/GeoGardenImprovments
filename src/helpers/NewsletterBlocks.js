const blocks = [
    {
        id: 'section-image', // id is mandatory
        label: '<b>Section Image</b>', // You can use HTML/SVG inside labels
        attributes: { class: 'gjs-block-custom-image' },
        content: `
        <table align="center" width="95%" cellpadding="0" cellspacing="0" border="0">
        <tr>
            <td height="80"></td> <!-- Empty cell to create margin-top -->
        </tr>
        <tr>
            <td valign="top" align="center" style="color: #ffffff;">
                <table height="224" width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                        <td valign="top" align="center" background="https://i.imgur.com/9Fmjp7e.png">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%;max-width:700px;" width="100%">
                                <tr>
                                    <td valign="top" align="center" style="padding: 20px; text-align: center;">
                                        <h2 style="margin-top: 0; color: white;">Kære Spirer, tak for din tilmelding!</h2>
                                        <div style="background-color: rgba(255, 255, 255, 0.7); padding: 20px; text-align: center;">
                                            <p style="margin: 0; font-size: 16px; color: #ffffff;">Velkommen til Geografisk Have's Kundeklub! Som en del af vores kundeklub åbner der sig en 
                                                verden af fordele for dig og din familie. Medlemmer af kundeklubben kan få gode rabatter i vores hyggelige café, Lykkefund, 
                                                hvor smagsoplevelser og hyggelige stunder går hånd i hånd.</p>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    
    
    
    
        `
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
                        <td height="48"></td> <!-- Empty cell to create margin-top -->
                    </tr>
                    <tr>
                        <td style="text-align: center; fontColor: #000000;">
                            <a href="http://localhost:5173/gdpr" style="text-decoration: none; color: #111; font-size: 12pt;">
                                <h3 style="margin: 0;">WEBSITE</h3>
                            </a>
                        </td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;</td> <!-- Non-breaking spaces for gap -->
                        <td style="text-align: center; fontColor: #000000;">
                            <a href="http://localhost:5173/gdpr" style="text-decoration: none; color: #111; font-size: 12pt;">
                                <h3 style="margin: 0;">ÅBNINGSTIDER</h3>
                            </a>
                        </td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;</td> <!-- Non-breaking spaces for gap -->
                        <td style="text-align: center; fontColor: #000000;">
                            <a href="http://localhost:5173/gdpr" style="text-decoration: none; color: #111; font-size: 12pt;">
                                <h3 style="margin: 0;">EVENTS</h3>
                            </a>
                        </td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;</td> <!-- Non-breaking spaces for gap -->
                        <td style="text-align: center; fontColor: #000000;">
                            <a href="http://localhost:5173/gdpr" style="text-decoration: none; color: #111; font-size: 12pt;">
                                <h3 style="margin: 0;">BLOG</h3>
                            </a>
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
                        <td height="70"></td> <!-- Empty cell to create margin-top -->
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
                    <td height="20"></td> <!-- Empty cell to create margin-top -->
                </tr>
                <tr>
                    <td align="center">
                        <img src="https://i.imgur.com/qspKNqi.png" alt="GeoGraden logo" width="224">
                    </td>
                </tr>
            </table>`
    }
    
]

export default blocks