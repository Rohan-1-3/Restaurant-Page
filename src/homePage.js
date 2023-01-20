
export default function getHomePage(){
    const content = document.querySelector('#content');
    if(content.children.length === 3){ // if main div exists removes the main div
        content.removeChild(content.children[1]);
    }
    // creates main contents 
    const main = document.createElement('main');
    const aboutUs = document.createElement('h1');
    const homePagePara = document.createElement('p');
    // properites adding
    main.classList.add('main');
    aboutUs.textContent = 'ABOUT US';
    homePagePara.textContent = 'At Habibi Makes restaurant, we pride ourselves on using only the freshest, locally sourced ingredients to create delicious and innovative dishes. Our menu features a wide variety of options, from classic comfort foods to contemporary creations. Our chefs have years of experience and a passion for food that is evident in every dish they prepare. We also offer a carefully curated selection of wines and craft beers to complement your meal. Whether you\'re looking for a casual dining experience or a special occasion, Habibi Makes restaurant is the perfect choice for you.'
    // appending
    content.insertBefore(main, content.children[1]);// appends main at 2nd position 
    main.appendChild(aboutUs);
    main.appendChild(homePagePara);
}