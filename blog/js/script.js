const content = [
    {
        title: "TikTok voor bedrijven",
        tag: "social-media",
        body: "TikTok is het laatste nieuwe sociale media platform, maar als bedrijf sta je voor de keuze: dans je mee op de trends van TikTok, of blijf je aan de zijlijn?",
        img: "/blog/tiktok-voor-bedrijven/img/banner.png",
        url: "/blog/tiktok-voor-bedrijven/",
    },
    // {
    //     title: "",
    //     tag: "",
    //     body: "",
    //     img: "",
    //     url: "",
    // },
    // {
    //     title: "",
    //     tag: "",
    //     body: "",
    //     img: "",
    //     url: "",
    // },
];

function createCards(e) {
    const target = document.querySelector('#content');

    content.reverse();
    
    const cards = content.map(item => {
        const tagWithSpaces = item.tag.replace(/-/g, ' ');

        return `
            <div class="card ${item.tag}">
                <img src="${item.img}" alt="${item.title}">
                <div class="content">
                    <p class="tag">
                        ${tagWithSpaces}
                    </p>
                    <h5>
                        ${item.title}
                    </h5>
                    <a href="${item.url}" class="">
                        Lees meer
                    </a>
                </div>
            </div>
        `;
    }).join('');

    target.innerHTML = cards;
};

function filterContent(e) {
    // Toggle Active Class on Filter
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    $('.content .card').fadeOut();

    // Selected Tag
    let activeFilter = $(this).attr('id');
    console.log(activeFilter);

    if (activeFilter === 'all') {
        $('.content .card').fadeIn();
    } else {
        $('.' + activeFilter).fadeIn();
    }
}

$(document).ready(function() {
    createCards();
    $('.filter-btn').click(filterContent);
});