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
                            <td valign="top" align="center" background="https://imgur.com/9Fmjp7e.png">
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
        id: 'section-image-2', // id is mandatory
        label: 'Naturen kalder', // You can use HTML/SVG inside labels
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
                            <td valign="top" align="center" background="https://imgur.com/3LFpEwO.png">
                                <div>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="88%">
                                        <tr>
                                            <td valign="top">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td height="50"></td> <!-- Empty cell for padding -->
                                                    </tr>
                                                    <tr>
                                                        <td valign="top">
                                                            <h1 style="Margin:0;">Naturen Kalder!</h1>
                                                            <h4>Tag med os på en spændende dag i <br/> naturens tegn! </h4>
                                                            <div>
                                                                <p>
                                                                    Vi arrangerer sjove og lærerige aktiviteter, <br/> som hele familien kan deltage i. Udforsk <br/> vores skønne have, deltag i <br/> naturvandringer, lær om plantelivets <br/> mangfoldighed og nyd en hyggelig dag <br/> sammen med andre naturinteresserede <br/> familier. <br/><br/>
                                                                    Hold øje med din indbakke for yderligere <br/> detaljer og tilmeldingsinformation. Vi <br/> glæder os til at se dig og din familie til <br/> en uforglemmelig dag i haven!
                                                                </p>
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
                                <td bgcolor="#7FA761" align="center">
                                    <img src="https://imgur.com/7Xwdqvl.jpg" alt="Placeholder Image" width="365" height="200">
        
                                    <tr>
                                        <td bgcolor="#7FA761" height="50"></td>
                                    </tr>
        
                                    <tr>
                                        <td align="center" bgcolor="#7FA761">
                                            <h1 style="Margin:0;">Kommende <br/> Begivenheder</h1>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td bgcolor="#7FA761" height="20"></td>
                                    </tr>

                                    <tr>
                                        <td align="center" bgcolor="#7FA761">
                                            <p style="margin: 0; padding: 0;">I Geografisk Have holder vi mange <br/> spændende events og aktiviteter hele året <br/> rundt. Herunder Grøn Have Festival, <br/> Plantemarked, Bæredygtigt Julemarked, <br/> Sankt Hans og mange flere...</p>
                                        </td>
                                    </tr>
        
                                    <tr>
                                        <td bgcolor="#7FA761" height="50"></td>
                                    </tr>

                                    <tr>
                                    <td align="center" bgcolor="#7FA761">
                                        <table cellspacing="0" cellpadding="0" border="0" width="240" height="60" style="background-color: #ffffff;">
                                            <tr>
                                                <td align="center" valign="middle">
                                                    <h2>
                                                        <a href="http://localhost:5173/events" style="display: inline-block; width: 100%; height: 100%; text-decoration: none; color: #000000;">Læs mere</a>
                                                    </h2>
                                                </td>
                                            </tr>
                                        </table>
                                        </td>

                                        <tr>
                                            <td height="40" bgcolor="#7FA761"></td>
                                        </tr>
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
        id: 'small_text_section',
        label: 'Small Text',
        content: `
        <div>
            <table cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                    <td height="35"></td>
                </tr>    
                <tr>
                    <td align="center">
                        <table cellspacing="0" cellpadding="0" border="0" width="365">
                                <tr>
                                    <td align="center">
                                        <p style="margin: 0; padding: 0;">Tak, fordi du er en del af Geografisk Have's <br/> Kundeklub! Vi ser frem til at dele mange <br/> spændende og mindeværdige øjeblikke med dig i <br/> vores have. Som medlem af vores kundeklub får du <br/> adgang til en verden af særlige fordele.</p>
                                    </td>
                                </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
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
    },

    {
        id: 'unsub',
        label: 'Unsubscribe text',
        content: `
        <div>
            <table cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                    <td height="35"></td>
                </tr>    
                <tr>
                    <td align="center">
                        <table cellspacing="0" cellpadding="0" border="0" width="365">
                                <tr>
                                    <td align="center">
                                        <p style="margin: 0; padding: 0;">Vi værdsætter dit medlemskab og stræber efter at <br/> give dig den bedst mulige oplevelse hos os. <br/> <br/> Som altid overholder vi gældende datalovgivning, <br/> hvor din tryghed og fortrolighed er vores <br/> prioritet. Hvis du på et tidspunkt ønsker at melde <br/> dig ud af kundeklubben eller ændre dine <br/> kontaktoplysninger, er du velkommen til at <br/> <a href="">gør det her. </a></p>
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
        id: 'autogen',
        label: 'Autogen email text',
        content: `
        <div>
            <table cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                    <td height="45"></td>
                </tr>    
                <tr>
                    <td align="center">
                        <table cellspacing="0" cellpadding="0" border="0" width="365">
                                <tr>
                                    <td align="center">
                                        <p style="margin: 0; padding: 0;">Denne e-mail er autogenereret og kan ikke <br/> besvares. Du kan i stedet kontakte kundeservice <br/> <a href="">her.</a></p>
                                    </td>
                                </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td height="45"></td>
                </tr>    
            </table>
        </div>
        `
    },

    {
        id: 'socials',
        label: 'Some',
        content: `
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
                <td align="center">
                    <table role="presentation" width="600" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td height="45"></td>
                        </tr>   
                        <tr>
                            <td>
                                <table role="presentation" align="center" width="50%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td align="center">
                                            <a href="https://youtube.com">
                                                <img width="56" height="54" src="https://imgur.com/s0NZgk7.png" alt="Image 1">
                                            </a>
                                        </td>
                                        <td align="center">
                                            <img width="56" height="54" src="https://imgur.com/fld9Tpj.png" alt="Image 2">
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



]

export default blocks