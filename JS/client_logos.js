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
    {
        'clientIMG' : '../IMG/clients/belgo.jpg',
        'clientAlt' : 'Belgo Logo',
        'clientHref' : 'https://www.instagram.com/belgorestaurant/'
    },
    {
        'clientIMG' : '../IMG/clients/bilitis.jpg',
        'clientAlt' : 'Bilitis Logo',
        'clientHref' : 'https://www.instagram.com/bilitislingeriebadmode/'
    },
    {
        'clientIMG' : '../IMG/clients/blitz.jpg',
        'clientAlt' : 'Blitz Media Logo',
        'clientHref' : 'https://blitz-media.io'
    },
    {
        'clientIMG' : '../IMG/clients/club-benelux.jpg',
        'clientAlt' : 'Club Benelux Logo',
        'clientHref' : 'https://www.instagram.com/clubbenelux/'
    },
    {
        'clientIMG' : '../IMG/clients/cornr.jpg',
        'clientAlt' : 'Cornr Logo',
        'clientHref' : 'https://www.instagram.com/thecornrhotel/'
    },
    {
        'clientIMG' : '../IMG/clients/david-debal.jpg',
        'clientAlt' : 'David Debal Logo',
        'clientHref' : 'https://www.instagram.com/david.debal/'
    },
    {
        'clientIMG' : '../IMG/clients/espero.jpg',
        'clientAlt' : 'Espero Logo',
        'clientHref' : 'https://www.instagram.com/espero_oostduinkerke/'
    },
    {
        'clientIMG' : '../IMG/clients/evy-flavour.jpg',
        'clientAlt' : "Evy's Flavour Logo",
        'clientHref' : 'https://www.instagram.com/evys_flavour/'
    },
    {
        'clientIMG' : '../IMG/clients/fonkelster.jpg',
        'clientAlt' : 'Fonkelster Logo',
        'clientHref' : 'https://www.instagram.com/fonkelster/'
    },
    {
        'clientIMG' : '../IMG/clients/fritesse.jpg',
        'clientAlt' : 'Fritesse Logo',
        'clientHref' : 'https://www.instagram.com/fritesse_laroche/'
    },
    {
        'clientIMG' : '../IMG/clients/hauspie.jpg',
        'clientAlt' : 'By Hauspie Logo',
        'clientHref' : 'https://www.instagram.com/chateau_briand_by_hauspie/'
    },
    {
        'clientIMG' : '../IMG/clients/helmetplus.jpg',
        'clientAlt' : 'Helmet Plus Logo',
        'clientHref' : 'https://www.instagram.com/helmet_plus/'
    },
    {
        'clientIMG' : '../IMG/clients/hotel-cajou.jpg',
        'clientAlt' : 'Hotel Cajou Logo',
        'clientHref' : 'https://www.instagram.com/cajou_depanne/'
    },
    {
        'clientIMG' : '../IMG/clients/hotel-europe.jpg',
        'clientAlt' : 'Hotel Europe Logo',
        'clientHref' : 'https://www.instagram.com/hoteleurope/'
    },
    {
        'clientIMG' : '../IMG/clients/kimberly.jpg',
        'clientAlt' : 'Kimberly Logo',
        'clientHref' : 'https://www.instagram.com/juwelen_kimberly/'
    },
    {
        'clientIMG' : '../IMG/clients/klimatherm.jpg',
        'clientAlt' : 'Klimatherm Logo',
        'clientHref' : 'https://www.instagram.com/klimatherm_sanitair/'
    },
    {
        'clientIMG' : '../IMG/clients/nobla.jpg',
        'clientAlt' : 'Nobla Logo',
        'clientHref' : 'https://www.instagram.com/nobla_restaurant/'
    },
    {
        'clientIMG' : '../IMG/clients/pladujour.jpg',
        'clientAlt' : 'Pla du Joer Logo',
        'clientHref' : 'https://www.instagram.com/pladujoer/'
    },
    {
        'clientIMG' : '../IMG/clients/raditel.jpg',
        'clientAlt' : 'Raditel Logo',
        'clientHref' : 'https://www.instagram.com/raditel_adinkerke/'
    },
    {
        'clientIMG' : '../IMG/clients/sancv.jpg',
        'clientAlt' : 'San cv Logo',
        'clientHref' : 'https://www.instagram.com/sancv_maldegem/'
    },
    {
        'clientIMG' : '../IMG/clients/spoor.jpg',
        'clientAlt' : 'Spoor Logo',
        'clientHref' : 'https://www.instagram.com/maisdoolhofspoor74/'
    },
    // {
    //     'clientIMG' : '../IMG/clients/',
    //     'clientAlt' : ' Logo',
    //     'clientHref' : ''
    // },
    // {
    //     'clientIMG' : '../IMG/clients/',
    //     'clientAlt' : ' Logo',
    //     'clientHref' : ''
    // },
];

function shuffleArray(array) {
    array.sort(() => Math.random() - 0.5);
};

// Create client logos section
function createClientLogos() {
    shuffleArray(clientLogos);

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