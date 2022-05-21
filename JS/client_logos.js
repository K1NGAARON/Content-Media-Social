const clientLogosWrapper = document.querySelector(".client-logos-wrapper");
const clientLogos = [
    {
        'clientIMG' : '/IMG/logo_saumon_dor.png',
        'clientAlt' : 'Sauman Dor logo',
        'clientHref' : 'https://www.instagram.com/ausaumondorkoksijde/'
    },
    {
        'clientIMG' : '/IMG/logo_feelgood.jpg',
        'clientAlt' : 'Feelgood logo',
        'clientHref' : 'https://www.instagram.com/feelgood_care/'
    },
    {
        'clientIMG' : '/IMG/logo_fit_atelier.png',
        'clientAlt' : 'Fit Atelier Koksijde logo',
        'clientHref' : 'https://www.instagram.com/fitatelier_koksijde/'
    },
    {
        'clientIMG' : '/IMG/logo_cirque.png',
        'clientAlt' : 'Café Cirque logo',
        'clientHref' : 'https://www.instagram.com/decirque.rsl/'
    },
    {
        'clientIMG' : '/IMG/logo_carron_marine.png',
        'clientAlt' : 'Carron marine logo',
        'clientHref' : 'https://www.instagram.com/carron.marine/'
    },
    {
        'clientIMG' : '/IMG/logo_elektro.png',
        'clientAlt' : 'Elektro Schoonaert logo',
        'clientHref' : 'https://www.instagram.com/elektroschoonaert/'
    },
    {
        'clientIMG' : '/IMG/logo_slagerij_nils.png',
        'clientAlt' : 'Slagerij Nils logo',
        'clientHref' : 'https://www.instagram.com/slagerij_nilis/'
    },
    {
        'clientIMG' : '/IMG/logo_tiger_balm.jpg',
        'clientAlt' : 'Tiger Balm logo',
        'clientHref' : 'https://www.instagram.com/tigerbalm_belux/'
    },
    {
        'clientIMG' : '/IMG/logo_purete.png',
        'clientAlt' : 'Pureté logo',
        'clientHref' : 'https://www.instagram.com/purete_bio/'
    },
    {
        'clientIMG' : '/IMG/logo_herbal.png',
        'clientAlt' : 'The Herbalist Gin logo',
        'clientHref' : 'https://www.instagram.com/theherbalistgin/'
    },
    {
        'clientIMG' : '/IMG/logo_carine.png',
        'clientAlt' : 'Coach Carine logo',
        'clientHref' : 'https://www.instagram.com/coachtherapeutcarine/'
    },
    {
        'clientIMG' : '/IMG/logo_artsi.png',
        'clientAlt' : 'Artsi Pasta logo',
        'clientHref' : 'https://www.instagram.com/artsipasta/'
    },
    {
        'clientIMG' : '/img/logo_omnisoft.png',
        'clientAlt' : 'Omnisoft logo',
        'clientHref' : 'https://www.instagram.com/omnisoftbe/'
    },
    {
        'clientIMG' : '/IMG/logo_unizo.png',
        'clientAlt' : 'Unizo Brugge logo',
        'clientHref' : 'https://www.instagram.com/unizobrugge/'
    },
    {
        'clientIMG' : '/IMG/logo_devlieger.png',
        'clientAlt' : 'Devlieger Filip logo',
        'clientHref' : 'https://www.instagram.com/devlieger.knokke/'
    },
    {
        'clientIMG' : '/IMG/logo_schilderwerken.png',
        'clientAlt' : 'Schilderwerken Vansteelandt logo',
        'clientHref' : 'https://www.instagram.com/schilderwerkenvansteelandt/'
    },
    {
        'clientIMG' : '/IMG/logo_immoplaza.jpg',
        'clientAlt' : 'Immo Plaza logo',
        'clientHref' : 'https://www.instagram.com/immoplaza/'
    },
    {
        'clientIMG' : '/IMG/logo_immo_clevers.png',
        'clientAlt' : 'Clevers Immobiliën logo',
        'clientHref' : 'https://www.instagram.com/cleversimmobilienbrugge/'
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