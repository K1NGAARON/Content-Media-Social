const content = [
    {
        title: "12 SEO tips om hoog te scoren in Google",
        tag: "seo",
        body: "",
        img: "https://blitz-media.io/blog/12-seo-tips-om-te-scoren-in-google/img/banner.jpg",
        url: "/blog/12-seo-tips-om-te-scoren-in-google/",
    },
    {
        title: "Hoe genereer je gekwalificeerde leads via je website?",
        tag: "digital-marketing",
        body: "",
        img: "https://blitz-media.io/blog/hoe-leads-genereren-via-website/img/banner.jpg",
        url: "/blog/hoe-leads-genereren-via-website/",
    },
    {
        title: "Hoeveel Kost Een Professionele Website?",
        tag: "website-development",
        body: "",
        img: "https://blitz-media.io/blog/hoeveel-kost-een-professionele-website/img/banner.jpg",
        url: "/blog/hoeveel-kost-een-professionele-website/",
    },
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