const clientLogosWrapper = document.querySelector(".client-logos-wrapper");
const clientLogos = [
    {
        'clientIMG' : '/reviews/img/abpplicaite.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/agence-nwpt.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/belgo.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/Bilitis.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/blitz-media.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/Boones.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/brasserie-casino.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/Cajou.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/carron-marine.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/casino-hotel.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/CBBH.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/club-benelux.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/coiffure-armonie.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/CORNR.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/David-Debal-3.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/de-hobbit.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/Devlieger-3.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/elektro-schoonaert.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/Espero.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/evy-flavour.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/Feelgoodcare.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/Fonkelster.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/Fritesse.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/Herbalist.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/hotel-europe.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/HPlus-2.png',
        'clientHref' : ''
    },
    // {
    //     'clientIMG' : '/reviews/img/immo-plaza.png',
    //     'clientHref' : ''
    // },
    {
        'clientIMG' : '/reviews/img/isabelle-sissau.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/Klimatherm.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/la-glace.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/Mivan.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/Nobla.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/omnisoft.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/optiek-segers.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/panne-beach-endurance.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/pieter-degrande.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/pietje-pek.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/PlaDuJoer.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/Pralifino.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/psh.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/Raditel.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/Rebova.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/san-cv.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/saumon-d-or.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/spoor-74.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/st-catherine.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/TigerBalm.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/Ultimmo.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/UltiSyn.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/Unizo.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/Vanheste.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/Vansteelandt.png',
        'clientHref' : ''
    },
    {
        'clientIMG' : '/reviews/img/Verdievel.png',
        'clientHref' : ''
    },
    // {
    //     'clientIMG' : '/reviews/img/',
    //     'clientHref' : ''
    // },
];

function shuffleArray(array) {
    array.sort(() => Math.random() - 0.5);
};

function createClientLogos() {
    shuffleArray(clientLogos);

    for (let i = 0; i < clientLogos.length; i++) {
        const clientLogoTemplate = `
        <div class="holder">
            <img src="${clientLogos[i].clientIMG}">
        </div>
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