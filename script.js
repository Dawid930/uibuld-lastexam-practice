const loadEvent = async () => {
    const rootElement = document.getElementById("root");
    //const sectionElement = document.createElement(section)


    const beers = {
        id: "beers",
        logo: "Best Beers",
        button: "details",
        cards: [
            {
                title: "Mango Bay",
                sub: "Mad Scientist Beer",
                text: "Pale Ale - American",
                number: 1
            },
            {
                title: "Távoli Galaxis",
                sub: "Rothbeer Brewery",
                text: "IPA - American",
                number: 2
            },
            {
                title: "Flying Rabbit AIPA",
                sub: "MONYO Brewing Co.",
                text: "IPA - American",
                number: 3
            },
            {
                title: "Liquid Cocaine",
                sub: "Mad Scientist Beer",
                text: "IPA - Imperial",
                number: 4
            },
            {
                title: "Organic Chocolate Stout",
                sub: "Samuel Smith Old Brewery",
                text: "Stout - English",
                number: 5
            },
            {
                title: "Bracia",
                sub: "Thornbridge Brewery",
                text: "Strong Ale - English",
                number: 6
            },
            {
                title: "Oatmeal Stout",
                sub: "Samuel Smith Old Brewery",
                text: "Stout - Oatmeal",
                number: 7
            },
            {
                title: "Black Tokyo Horizon",
                sub: "BrewDog",
                text: "Stout - American Imperial",
                number: 8
            },
            {
                title: "Vintage Ale",
                sub: "Fuller's",
                text: "Old Ale",
                number: 9
            },
            {
                title: "All the Leaves are Brown",
                sub: "Tempest Brewing Company",
                text: "Brown Ale - American",
                number: 10
            },
        ]
    }

   const head = () => {
       return (`
       <div class="head">
            <h2>Best Beers</h2>
            <span class="material-symbols-outlined">menu</span>
       </div>
       `)
   }

    const beerHTML = beers.cards.map(x => `
    <div class="beer">
        <h2 class="title">${x.title}</h2>
        <h4 class="subtitle">${x.sub}</h4>
        <p class="text">${x.text}</p>
        <p class="number">${x.number}</p>
        <a href="#">
            <div class="button">
                <button class="button--details">details</button>
                <span class="material-symbols-outlined">arrow_forward</span>
            </div>
        </a>
    </div>
    `);

    rootElement.insertAdjacentHTML('beforebegin', head())
    rootElement.insertAdjacentHTML("beforeend", beerHTML.join(''))
    //sectionElement.insertAdjacentHTML('beforeend', beerHTML.join(''))
}

window.addEventListener("load", loadEvent)
