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
        label: 'Image over Bulletpoints',
        content: `
        <div>
        <table cellspacing="0" cellpadding="0" border="0" width="100%">
            <tr>
                <td height="50"></td>
            </tr>    
            <tr>
                <td align="center">
                    <table cellspacing="0" cellpadding="0" border="0" width="365">
                        <tr>
                            <td bgcolor="#225B2C" align="center">
                                <img src="https://imgur.com/HC5F0TA.png" alt="Placeholder Image" width="365" height="200">
    
                                <tr>
                                    <td bgcolor="#225B2C" height="50"></td>
                                </tr>
    
                                <tr>
                                    <td align="center" bgcolor="#225B2C" style="line-height: 40px;">
                                        <h1 style="Margin:0;">Medlemskabets fordele inkluderer</h1>
                                        <p style="margin: 0; padding: 0;">15% på drikkevarer, varme som kolde i vores café</p>
                                        <p style="margin: 0; padding: 0;">Fordelagtige rabatter på kommende events</p>
                                        <p style="margin: 0; padding: 0;">Foran i køen på alle kommende events</p>
                                        <p style="margin: 0; padding: 0;">Første kaffe i hver årstid er gratis</p>
                                        <p style="margin: 0; padding: 0;">Gratis frøpose til din have hvert forår</p>
                                    </td>
                                </tr>
    
                                <tr>
                                    <td bgcolor="#225B2C" height="50"></td>
                                </tr>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
        `
    },

    {
        id: 'read_more_section',
        label: 'Read More',
        content: `
        <div>
        <table cellspacing="0" cellpadding="0" border="0" width="100%">
            <tr>
                <td height="50"></td>
            </tr>    
            <tr>
                <td align="center">
                    <table cellspacing="0" cellpadding="0" border="0" width="365">
                        <tr>
                            <td bgcolor="#225B2C" align="center">
                                <img src="https://imgur.com/7Xwdqvl.jpg" alt="Placeholder Image" width="365" height="200">
    
                                <tr>
                                    <td bgcolor="#225B2C" height="50"></td>
                                </tr>
    
                                <tr>
                                    <td align="center" bgcolor="#225B2C">
                                        <h1 style="Margin:0;">Kommende <br/> Begivenheder</h1>
                                        <p style="margin: 0; padding: 0;">I Geografisk Have holder vi mange <br/> spændende events og aktiviteter hele året <br/> rundt. Herunder Grøn Have Festival, <br/> Plantemarked, Bæredygtigt Julemarked, <br/> Sankt Hans og mange flere...</p>
                                    </td>
                                </tr>

                                
    
                                <tr>
                                    <td bgcolor="#225B2C" height="50"></td>
                                </tr>

                                <tr>
                                <td align="center" bgcolor="#225B2C">
                                    <table cellspacing="0" cellpadding="0" border="0">
                                        <tr>
                                            <td align="center" bgcolor="#ffffff">
                                                <a href="http://localhost:5173/events">Læs mere</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td height="40" bgcolor="#225B2C"></td>
                                        </tr>

                                    </table>
                                </td>
                            </tr>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
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