const blocks = [
    {
        id: 'section-image', // id is mandatory
        label: '<b>Section Image</b>', // You can use HTML/SVG inside labels
        attributes: { class: 'gjs-block-custom-image' },
        content: `
        <table align="center" width="95%" cellpadding="0" cellspacing="0" border="0">
            <tr>
                <td height="50"></td>
            </tr>
            <tr>
                <td valign="top" align="center">
                    <table height="265" width="365" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                            <td valign="top" align="center" background="https://i.imgur.com/9Fmjp7e.png">
                                <div>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="70%">
                                        <tr>
                                            <td valign="top" align="center">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td height="25"></td> <!-- Empty cell for padding -->
                                                    </tr>
                                                    <tr>
                                                        <td valign="top" align="center">
                                                            <h1 style="Margin:0;">Kære Spirer, tak for din tilmelding!</h1>
                                                            <div>
                                                                <p>Velkommen til Geografisk Have's Kundeklub! Som en del af vores kundeklub åbner der sig en 
                                                                    verden af fordele for dig og din familie. Medlemmer af kundeklubben kan få gode rabatter i vores hyggelige café, Lykkefund, 
                                                                    hvor smagsoplevelser og hyggelige stunder går hånd i hånd.</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        `
    },


    {
        id: 'text_with_image',
        label: 'Text with Image',
        content: `
        <table cellspacing="0" cellpadding="0" border="0" width="100%">
        <tr>
            <td align="center">
                <img src="https://via.placeholder.com/365x200" alt="Placeholder Image" style="display: block; width: 365px; height: 200px; margin-bottom: 20px;">

                <div style="background-color: green; padding: 20px;">
                    <div style="font-size: 24px; font-weight: bold; color: white; text-align: center;">Insert your text here</div>
                    <ul style="list-style: disc; padding-left: 20px; margin-top: 0; margin-bottom: 20px; color: black;">
                        <li>Text here</li>
                        <li>Text here</li>
                        <li>Text here</li>
                        <li>Text here</li>
                        <li>Text here</li>
                    </ul>
                </div>
            </td>
        </tr>
    </table>
        `
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
                        <td height="30"></td> <!-- Empty cell to create margin-top -->
                    </tr>
                    <tr>
                        <td style="text-align: center; fontColor: #000000;">
                            <a href="http://localhost:5173/gdpr" style="text-decoration: none; color: #111; font-size: 12pt;">
                                <h6 style="margin: 0;">WEBSITE</h6>
                            </a>
                        </td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;</td> <!-- Non-breaking spaces for gap -->
                        <td style="text-align: center; fontColor: #000000;">
                            <a href="http://localhost:5173/gdpr" style="text-decoration: none; color: #111; font-size: 12pt;">
                                <h6 style="margin: 0;">EVENTS</h6>
                            </a>
                        </td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;</td> <!-- Non-breaking spaces for gap -->
                        <td style="text-align: center; fontColor: #000000;">
                            <a href="http://localhost:5173/gdpr" style="text-decoration: none; color: #111; font-size: 12pt;">
                                <h6 style="margin: 0;">ÅBNINGSTIDER</h6>
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
                        <td height="40"></td> <!-- Empty cell to create margin-top -->
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
        label: 'Logo',
        content: `
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                    <td height="20"></td> <!-- Empty cell to create margin-top -->
                </tr>
                <tr>
                    <td align="center">
                        <img src="https://i.imgur.com/qspKNqi.png" alt="GeoGraden logo" width="118">
                    </td>
                </tr>
            </table>`
    }

]

export default blocks