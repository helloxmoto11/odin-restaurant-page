import './style.css';
import Header from './header.js';

function content() {

    const mainContainer = document.createElement("div");
    mainContainer.classList.add("main-container");

    return mainContainer;
}


document.body.appendChild(Header);
document.body.appendChild(content());








