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
    {
        'clientIMG' : '../IMG/logo_nilis.jpg',
        'clientAlt' : 'Slagerij Nils logo',
        'clientHref' : 'https://www.instagram.com/slagerij_nilis/'
    },
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
    {
        'clientIMG' : '../IMG/logo_carine.jpg',
        'clientAlt' : 'Coach Carine logo',
        'clientHref' : 'https://www.instagram.com/coachtherapeutcarine/'
    },
    {
        'clientIMG' : '../IMG/logo_artsi.jpg',
        'clientAlt' : 'Artsi Pasta logo',
        'clientHref' : 'https://www.instagram.com/artsipasta/'
    },
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
    {
        'clientIMG' : '../IMG/logo_clevers.jpg',
        'clientAlt' : 'Clevers Immobiliën logo',
        'clientHref' : 'https://www.instagram.com/cleversimmobilienbrugge/'
    },
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
    {
        'clientIMG' : '../IMG/logo_atrium.jpg',
        'clientAlt' : 'Atrium logo',
        'clientHref' : 'https://www.instagram.com/contentmedia_social/'
    },
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
    }
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