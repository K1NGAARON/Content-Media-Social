const clientLogosWrapper = document.querySelector(".client-logos-wrapper");
const clientLogos = [
    {
        'clientIMG' : '../IMG/logo_saumon.jpg',
        'clientAlt' : 'Sauman Dor logo',
        'clientHref' : 'https://www.instagram.com/ausaumondorkoksijde/'
    },
    {
        'clientIMG' : '../IMG/logo_feelgood.jpg',
        'clientAlt' : 'Feelgood logo',
        'clientHref' : 'https://www.instagram.com/feelgood_care/'
    },
    {
        'clientIMG' : '../IMG/logo_fitatelier.jpg',
        'clientAlt' : 'Fit Atelier Koksijde logo',
        'clientHref' : 'https://www.instagram.com/fitatelier_koksijde/'
    },
    {
        'clientIMG' : '../IMG/logo_cirque.jpg',
        'clientAlt' : 'Café Cirque logo',
        'clientHref' : 'https://www.instagram.com/decirque.rsl/'
    },
    {
        'clientIMG' : '../IMG/logo_carron.jpg',
        'clientAlt' : 'Carron marine logo',
        'clientHref' : 'https://www.instagram.com/carron.marine/'
    },
    {
        'clientIMG' : '../IMG/logo_elektro.jpg',
        'clientAlt' : 'Elektro Schoonaert logo',
        'clientHref' : 'https://www.instagram.com/elektroschoonaert/'
    },
    // {
    //     'clientIMG' : '../IMG/logo_nilis.jpg',
    //     'clientAlt' : 'Slagerij Nils logo',
    //     'clientHref' : 'https://www.instagram.com/slagerij_nilis/'
    // },
    {
        'clientIMG' : '../IMG/logo_tiger.jpg',
        'clientAlt' : 'Tiger Balm logo',
        'clientHref' : 'https://www.instagram.com/tigerbalm_belux/'
    },
    {
        'clientIMG' : '../IMG/logo_purete.jpg',
        'clientAlt' : 'Pureté logo',
        'clientHref' : 'https://www.instagram.com/purete_bio/'
    },
    {
        'clientIMG' : '../IMG/logo_herbal.jpg',
        'clientAlt' : 'The Herbalist Gin logo',
        'clientHref' : 'https://www.instagram.com/theherbalistgin/'
    },
    // {
    //     'clientIMG' : '../IMG/logo_carine.jpg',
    //     'clientAlt' : 'Coach Carine logo',
    //     'clientHref' : 'https://www.instagram.com/coachtherapeutcarine/'
    // },
    // {
    //     'clientIMG' : '../IMG/logo_artsi.jpg',
    //     'clientAlt' : 'Artsi Pasta logo',
    //     'clientHref' : 'https://www.instagram.com/artsipasta/'
    // },
    {
        'clientIMG' : '../IMG/logo_omnisoft.jpg',
        'clientAlt' : 'Omnisoft logo',
        'clientHref' : 'https://www.instagram.com/omnisoftbe/'
    },
    {
        'clientIMG' : '../IMG/logo_unizo.jpg',
        'clientAlt' : 'Unizo Brugge logo',
        'clientHref' : 'https://www.instagram.com/unizobrugge/'
    },
    {
        'clientIMG' : '../IMG/logo_devlieger.jpg',
        'clientAlt' : 'Devlieger Filip logo',
        'clientHref' : 'https://www.instagram.com/devlieger.knokke/'
    },
    {
        'clientIMG' : '../IMG/logo_schilderwerken.jpg',
        'clientAlt' : 'Schilderwerken Vansteelandt logo',
        'clientHref' : 'https://www.instagram.com/schilderwerkenvansteelandt/'
    },
    {
        'clientIMG' : '../IMG/logo_immoplaza.jpg',
        'clientAlt' : 'Immo Plaza logo',
        'clientHref' : 'https://www.instagram.com/immoplaza/'
    },
    // {
    //     'clientIMG' : '../IMG/logo_clevers.jpg',
    //     'clientAlt' : 'Clevers Immobiliën logo',
    //     'clientHref' : 'https://www.instagram.com/cleversimmobilienbrugge/'
    // },
    {
        'clientIMG' : '../IMG/logo_alfons.jpg',
        'clientAlt' : 'Alfons logo',
        'clientHref' : 'https://www.instagram.com/contentmedia_social/'
    },
    {
        'clientIMG' : '../IMG/logo_at.jpg',
        'clientAlt' : 'AT logo',
        'clientHref' : 'https://www.instagram.com/contentmedia_social/'
    },
    // {
    //     'clientIMG' : '../IMG/logo_atrium.jpg',
    //     'clientAlt' : 'Atrium logo',
    //     'clientHref' : 'https://www.instagram.com/contentmedia_social/'
    // },
    {
        'clientIMG' : '../IMG/logo_cargo.jpg',
        'clientAlt' : 'Cargo logo',
        'clientHref' : 'https://www.instagram.com/contentmedia_social/'
    },
    {
        'clientIMG' : '../IMG/logo_alveringem.jpg',
        'clientAlt' : 'Alveringem logo',
        'clientHref' : 'https://www.instagram.com/contentmedia_social/'
    },
    {
        'clientIMG' : '../IMG/logo_frieke.jpg',
        'clientAlt' : 'Frieke logo',
        'clientHref' : 'https://www.instagram.com/contentmedia_social/'
    },
    {
        'clientIMG' : '../IMG/logo_kathy.jpg',
        'clientAlt' : 'Kathy logo',
        'clientHref' : 'https://www.instagram.com/contentmedia_social/'
    },
    {
        'clientIMG' : '../IMG/logo_verdievel.jpg',
        'clientAlt' : 'Verdievel logo',
        'clientHref' : 'https://www.instagram.com/contentmedia_social/'
    },
    {
        'clientIMG' : '../IMG/boones.jpg',
        'clientAlt' : 'Boones logo',
        'clientHref' : 'https://www.instagram.com/boones_interieur/'
    },
    {
        'clientIMG' : '../IMG/glace_fie.jpg',
        'clientAlt' : 'La Glace De Fie Logo',
        'clientHref' : 'https://www.instagram.com/laglacedefie/'
    },
    // {
    //     'clientIMG' : '../IMG/het_oor.jpg',
    //     'clientAlt' : 'Het Oor Logo',
    //     'clientHref' : 'https://www.facebook.com/hetoor.alienvandaele/'
    // },
    {
        'clientIMG' : '../IMG/maison_violon.jpg',
        'clientAlt' : 'Maison Violon Logo',
        'clientHref' : 'https://www.instagram.com/maison_violon/'
    },
    {
        'clientIMG' : '../IMG/mani.jpg',
        'clientAlt' : 'Mani e Piedi Logo',
        'clientHref' : 'https://www.instagram.com/maniepiedinieuwpoort/'
    },
    {
        'clientIMG' : '../IMG/mivan.jpg',
        'clientAlt' : 'Mivan Logo',
        'clientHref' : 'https://www.instagram.com/mivan_interieurs/'
    },
    {
        'clientIMG' : '../IMG/optiek_segers.jpg',
        'clientAlt' : 'Optiek Segers Logo',
        'clientHref' : 'https://www.instagram.com/optiek.segers/'
    },
    // {
    //     'clientIMG' : '../IMG/tezauro.jpg',
    //     'clientAlt' : 'Tezauro Logo',
    //     'clientHref' : 'https://www.instagram.com/wijnen_tezauro/'
    // },
    {
        'clientIMG' : '../IMG/tpo.jpg',
        'clientAlt' : 'The Payroll Office Logo',
        'clientHref' : 'https://www.instagram.com/thepayrolloffice/'
    },
    {
        'clientIMG' : '../IMG/',
        'clientAlt' : ' Logo',
        'clientHref' : ''
    },
    {
        'clientIMG' : '../IMG/',
        'clientAlt' : ' Logo',
        'clientHref' : ''
    },
    {
        'clientIMG' : '../IMG/',
        'clientAlt' : ' Logo',
        'clientHref' : ''
    },
    {
        'clientIMG' : '../IMG/',
        'clientAlt' : ' Logo',
        'clientHref' : ''
    },
    {
        'clientIMG' : '../IMG/',
        'clientAlt' : ' Logo',
        'clientHref' : ''
    },
    {
        'clientIMG' : '../IMG/',
        'clientAlt' : ' Logo',
        'clientHref' : ''
    },
    {
        'clientIMG' : '../IMG/',
        'clientAlt' : ' Logo',
        'clientHref' : ''
    },
    {
        'clientIMG' : '../IMG/',
        'clientAlt' : ' Logo',
        'clientHref' : ''
    },
    {
        'clientIMG' : '../IMG/',
        'clientAlt' : ' Logo',
        'clientHref' : ''
    },
];

// Create client logos section
function createClientLogos() {
    for (let i = 0; i < clientLogos.length; i++) {
        const clientLogoTemplate = `
        <a href="${clientLogos[i].clientHref}" target="_blank">
            <img src="${clientLogos[i].clientIMG}" alt="${clientLogos[i].clientAlt}">
        </a>
        `; 
        clientLogosWrapper.insertAdjacentHTML("beforeend", clientLogoTemplate);
    };
};

$(document).ready(function() {
    createClientLogos();
});