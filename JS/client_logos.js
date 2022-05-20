const clientLogosWrapper = document.querySelector(".client-logos-wrapper");
const clientLogos = [
    {
        'clientIMG' : '/IMG/Logo-Saumon-dOr.png',
        'clientAlt' : 'Sauman Dor logo',
        'clientHref' : 'https://www.instagram.com/ausaumondorkoksijde/'
    },
    {
        'clientIMG' : '',
        'clientAlt' : 'Feelgood loog',
        'clientHref' : 'https://www.instagram.com/feelgood_care/'
    },
    {
        'clientIMG' : '',
        'clientAlt' : 'Raditel Adinkerke',
        'clientHref' : 'https://www.instagram.com/raditel_adinkerke/'
    },
    {
        'clientIMG' : '',
        'clientAlt' : '',
        'clientHref' : ''
    },
];

// Create client logos section
function createClientLogos() {
    for (let i = 0; i < clientLogos.length; i++) {
        const clientLogoTemplate = `
        <a href="${clientLogos[i].clientHref}">
            <img src="${clientLogos[i].clientIMG}" alt="${clientLogos[i].clientAlt}">
        </a>
        `; 
        clientLogosWrapper.insertAdjacentHTML("beforeend", clientLogoTemplate);
    };
};

$(document).ready(function() {
    createClientLogos();
});