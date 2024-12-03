const clientLogosWrapper = document.querySelector(".client-logos-wrapper");
const clientLogos = [
    {
        'clientIMG' : '/reviews/img/abpplicaite.png',
        'clientHref' : 'https://www.linkedin.com/company/98118307/admin/feed/posts/'
    },
    {
        'clientIMG' : '/reviews/img/belgo.png',
        'clientHref' : 'https://www.instagram.com/belgorestaurant/'
    },
    {
        'clientIMG' : '/reviews/img/Bilitis.png',
        'clientHref' : 'https://www.instagram.com/bilitislingeriebadmode/'
    },
    {
        'clientIMG' : '/reviews/img/Boones.png',
        'clientHref' : 'https://www.instagram.com/boones_interieur/'
    },
    {
        'clientIMG' : '/reviews/img/brasserie-casino.png',
        'clientHref' : 'https://www.instagram.com/brasserie_casino/'
    },
    {
        'clientIMG' : '/reviews/img/carron-marine.png',
        'clientHref' : 'https://www.instagram.com/carron.marine/'
    },
    {
        'clientIMG' : '/reviews/img/casino-hotel.png',
        'clientHref' : 'https://www.instagram.com/casino_hotel_koksijde/'
    },
    {
        'clientIMG' : '/reviews/img/CBBH.png',
        'clientHref' : 'https://www.instagram.com/chateau_briand_by_hauspie/'
    },
    {
        'clientIMG' : '/reviews/img/coiffure-armonie.png',
        'clientHref' : 'https://www.instagram.com/coiffurearmonie/'
    },
    {
        'clientIMG' : '/reviews/img/CORNR.png',
        'clientHref' : 'https://www.instagram.com/thecornrhotel/'
    },
    {
        'clientIMG' : '/reviews/img/de-hobbit.png',
        'clientHref' : 'https://www.instagram.com/dehobbitbrugge/'
    },
    {
        'clientIMG' : '/reviews/img/Devlieger-3.png',
        'clientHref' : 'https://www.instagram.com/devlieger.knokke/'
    },
    {
        'clientIMG' : '/reviews/img/elektro-schoonaert.png',
        'clientHref' : 'https://www.instagram.com/elektroschoonaert/'
    },
    {
        'clientIMG' : '/reviews/img/Espero.png',
        'clientHref' : 'https://www.instagram.com/espero_oostduinkerke/'
    },
    {
        'clientIMG' : '/reviews/img/Feelgoodcare.png',
        'clientHref' : 'https://www.instagram.com/feelgood_care/'
    },
    {
        'clientIMG' : '/reviews/img/Herbalist.png',
        'clientHref' : 'https://www.instagram.com/theherbalistgin/'
    },
    {
        'clientIMG' : '/reviews/img/isabelle-sissau.png',
        'clientHref' : 'https://www.instagram.com/isabelle_sissau_keramiek/'
    },
    {
        'clientIMG' : '/reviews/img/Klimatherm.png',
        'clientHref' : 'https://www.instagram.com/klimatherm_sanitair/'
    },
    {
        'clientIMG' : '/reviews/img/la-glace.png',
        'clientHref' : 'https://www.instagram.com/laglacedefie/'
    },
    {
        'clientIMG' : '/reviews/img/Mivan.png',
        'clientHref' : 'https://www.instagram.com/mivan_interieurs/'
    },
    {
        'clientIMG' : '/reviews/img/Nobla.png',
        'clientHref' : 'https://www.instagram.com/nobla_restaurant/'
    },
    {
        'clientIMG' : '/reviews/img/omnisoft.png',
        'clientHref' : 'https://www.instagram.com/omnisoftbe/'
    },
    {
        'clientIMG' : '/reviews/img/optiek-segers.png',
        'clientHref' : 'https://www.instagram.com/optiek.segers/'
    },
    {
        'clientIMG' : '/reviews/img/panne-beach-endurance.png',
        'clientHref' : 'https://www.instagram.com/depannebeachendurance/'
    },
    {
        'clientIMG' : '/reviews/img/pieter-degrande.png',
        'clientHref' : 'https://www.instagram.com/pieterdegrandebv/'
    },
    {
        'clientIMG' : '/reviews/img/pietje-pek.png',
        'clientHref' : 'https://www.instagram.com/pietje_pek_bruges/'
    },
    {
        'clientIMG' : '/reviews/img/Raditel.png',
        'clientHref' : 'https://www.instagram.com/raditel_adinkerke/'
    },
    {
        'clientIMG' : '/reviews/img/Rebova.png',
        'clientHref' : 'https://www.instagram.com/rebova_veurne/'
    },
    {
        'clientIMG' : '/reviews/img/san-cv.png',
        'clientHref' : 'https://www.instagram.com/sancv_maldegem/'
    },
    {
        'clientIMG' : '/reviews/img/spoor-74.png',
        'clientHref' : 'https://www.instagram.com/maisdoolhofspoor74/'
    },
    {
        'clientIMG' : '/reviews/img/st-catherine.png',
        'clientHref' : 'https://www.instagram.com/st.catherine_nieuwpoort/'
    },
    {
        'clientIMG' : '/reviews/img/TigerBalm.png',
        'clientHref' : 'https://www.instagram.com/tigerbalm_belux/'
    },
    {
        'clientIMG' : '/reviews/img/Ultimmo.png',
        'clientHref' : 'https://www.instagram.com/agence_ultimmo_/'
    },
    {
        'clientIMG' : '/reviews/img/UltiSyn.png',
        'clientHref' : 'https://www.instagram.com/ultisynsyndicus/'
    },
    {
        'clientIMG' : '/reviews/img/Vanheste.png',
        'clientHref' : 'https://www.instagram.com/vanheste_sport/'
    },
    {
        'clientIMG' : '/reviews/img/Vansteelandt.png',
        'clientHref' : 'https://www.instagram.com/schilderwerkenvansteelandt/'
    },
    {
        'clientIMG' : '/reviews/img/Verdievel.png',
        'clientHref' : 'https://www.instagram.com/schoenenverdievel_nieuwpoort/'
    },
    {
        'clientIMG' : '/reviews/img/a-mode.png',
        'clientHref' : 'https://www.instagram.com/a_mode_belgie/'
    },
    {
        'clientIMG' : '/reviews/img/mestdagh-logo.png',
        'clientHref' : 'https://www.instagram.com/mestdagh.artisan/'
    },
    {
        'clientIMG' : '/reviews/img/sablon-logo.png',
        'clientHref' : 'https://www.instagram.com/hotelsablonbruges/'
    },
    {
        'clientIMG' : '/reviews/img/wijn-aan-zee.png',
        'clientHref' : 'https://www.instagram.com/wijn_aan_zee/'
    },
    {
        'clientIMG' : '/reviews/img/wonn-2-logo.png',
        'clientHref' : 'https://www.instagram.com/woonn_development/'
    },
    {
        'clientIMG' : '/reviews/img/logo-le-plat.png',
        'clientHref' : 'https://www.instagram.com/traiteurleplat/'
    },
    {
        'clientIMG' : '/reviews/img/logo-maritiem.png',
        'clientHref' : 'https://www.instagram.com/immomaritiem/'
    },
    {
        'clientIMG' : '/reviews/img/logo-fa4.png',
        'clientHref' : 'https://www.instagram.com/fresh4animals.be/'
    },
    {
        'clientIMG' : '/reviews/img/logo-spoor-74.png',
        'clientHref' : 'https://www.instagram.com/vakantiehuisspoor74/'
    },
    {
        'clientIMG' : '/reviews/img/logo-by-jonathan.png',
        'clientHref' : 'https://www.instagram.com/jonathanschuermans/'
    },
    // {
    //     'clientIMG' : '/reviews/img/',
    //     'clientHref' : 'https://www.instagram.com/atelier___mouton/'
    // },
    {
        'clientIMG' : '/reviews/img/logo-barenzo.png',
        'clientHref' : 'https://www.instagram.com/barenzo_westende/'
    },
    {
        'clientIMG' : '/reviews/img/logo-eico.png',
        'clientHref' : 'https://www.instagram.com/eico.eierhandel/'
    },
    {
        'clientIMG' : '/reviews/img/logo-immo-koksijde.svg',
        'clientHref' : 'https://www.instagram.com/immokoksijde/'
    },
    {
        'clientIMG' : '/reviews/img/logo-immo-plaza.jpg',
        'clientHref' : 'https://www.instagram.com/immoplaza/'
    },
    {
        'clientIMG' : '/reviews/img/logo-klachteling.jpg',
        'clientHref' : 'https://www.instagram.com/dekachteling/'
    },
    {
        'clientIMG' : '/reviews/img/logo-lingerie-caline.jpg',
        'clientHref' : 'https://www.instagram.com/lingeriecaline/'
    },
    {
        'clientIMG' : '/reviews/img/logo-pattyn.jpg',
        'clientHref' : 'https://www.instagram.com/drukkerijpattyn/'
    },
    {
        'clientIMG' : '/reviews/img/logo-provincie-oost-vl.JPG',
        'clientHref' : 'https://www.instagram.com/oost_vlaanderen/'
    },
    {
        'clientIMG' : '/reviews/img/logo-rosc.jpg',
        'clientHref' : 'https://www.instagram.com/oostendsezwemschool/'
    },
    {
        'clientIMG' : '/reviews/img/atelier-mouton.png',
        'clientHref' : 'https://www.instagram.com/atelier___mouton/'
    },
    {
        'clientIMG' : '/reviews/img/med.png',
        'clientHref' : 'https://www.instagram.com/medisale/'
    },
];

function shuffleArray(array) {
    array.sort(() => Math.random() - 0.5);
};

function createClientLogos() {
    shuffleArray(clientLogos);

    for (let i = 0; i < clientLogos.length; i++) {
        const clientLogoTemplate = `
        <a href=${clientLogos[i].clientHref} class="holder">
            <img src="${clientLogos[i].clientIMG}">
        </a>
        `; 
        clientLogosWrapper.insertAdjacentHTML("beforeend", clientLogoTemplate);
    };
};


// Animate numbers
function animate(obj, initVal, lastVal, duration) {

    let startTime = null;
    
    // get the current timestamp and assign it to the currentTime variable
    let currentTime = Date.now();
    
    // pass the current timestamp to the step function
    const step = (currentTime ) => {
    
        // if the start time is null, assign the current time to startTime
        if (!startTime) {
                startTime = currentTime ;
        }
    
        // calculate the value to be used in calculating the number to be displayed
        const progress = Math.min((currentTime  - startTime) / duration, 1);
    
        // calculate what to be displayed using the value gotten above
        obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);
    
        // checking to make sure the counter does not exceed the last value (lastVal)
        if (progress < 1) {
                window.requestAnimationFrame(step);
        }
        else {
                window.cancelAnimationFrame(window.requestAnimationFrame(step));
        }
    };
    
    // start animating
    window.requestAnimationFrame(step);
    }
    
    let text1 = document.getElementById('0101');
    let text2 = document.getElementById('0102');
    let text3 = document.getElementById('0103');
    
    function load() {
        animate(text1, 0, 56, 3000);
        animate(text2, 0, 5783, 3000);
        animate(text3, 0, 251, 3000);
    };

document.addEventListener('DOMContentLoaded', load());


$(document).ready(function() {
    createClientLogos();
});