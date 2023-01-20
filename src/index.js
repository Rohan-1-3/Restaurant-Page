// importing functions
import getHomePage from './homePage';
import getMenuPage from './menuPage';
import getContactPage from './contactPage';
import './style.css' // importing CSS file
// importing pictures
import Logo from './images/logo.png'
import Github from './images/github.png'

function initialPageStart(){
    // creating main div
    const content = document.createElement('div');
    // header creation
    const header = document.createElement('header');
    const headerLogo = new Image();
    const homeButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const contactButton = document.createElement('button');
    // footer creation
    const footer = document.createElement('footer');
    const aLink = document.createElement('a');
    const githubLogo = new Image();
    const footerSpan = document.createElement('span');
    const footerCredit = document.createElement('h2');

    // properties of each division
    content.id = 'content';

    headerLogo.src = Logo;
    homeButton.textContent = 'Home'
    menuButton.textContent = 'Menu'
    contactButton.textContent = 'Contact'

    githubLogo.src = Github;
    aLink.href = 'https://github.com/Rohan-1-3/Restaurant-Page';
    footerCredit.textContent = 'Created By: rohan-1-3';
    
    // appending
    document.body.appendChild(content);
    // header 
    content.appendChild(header);
    header.appendChild(headerLogo);
    header.appendChild(homeButton);
    header.appendChild(menuButton)
    header.appendChild(contactButton)
    // footer
    content.appendChild(footer);
    footer.appendChild(aLink);
    aLink.appendChild(githubLogo);
    footer.appendChild(footerSpan);
    footerSpan.appendChild(footerCredit);

    getHomePage();// initial homepage creates
    // event for different pages
    homeButton.addEventListener('click', getHomePage);
    menuButton.addEventListener('click', getMenuPage);
    contactButton.addEventListener('click', getContactPage);
    headerLogo.addEventListener('click', getHomePage)
}

initialPageStart();