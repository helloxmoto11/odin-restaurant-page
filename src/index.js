import './style.css';
import Header from './header.js';
import Home from './home';

function content() {

    const mainContainer = Home;

    const background = document.createElement("div");
    background.classList.add("background");
    background.appendChild(Header);
    background.appendChild(mainContainer);
    document.body.appendChild(background);

    return background;
}


document.body.appendChild(content());








