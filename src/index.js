import './style.css';
import Header from './header.js';
import Home from './home';
import Menu from './menu';
import Contact from "./contact";

function content() {

    let currentPage = Home;

    const changePage = (page) => {
        if (page === "Home") {
            background.removeChild(currentPage);
            currentPage = Home;
            background.appendChild(currentPage);
        }
        if (page === "Menu") {
            background.removeChild(currentPage);
            currentPage = Menu;
            background.appendChild(currentPage);
        }
        if (page === "Contact") {
            background.removeChild(currentPage);
            currentPage = Contact;
            background.appendChild(currentPage);
        }
    }

    const background = document.createElement("div");
    background.classList.add("background");
    background.appendChild(Header(changePage));
    background.appendChild(currentPage);
    document.body.appendChild(background);

    return background;
}


document.body.appendChild(content());








