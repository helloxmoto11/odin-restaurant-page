import './style.css';
import Header from './header.js';

function content() {

    const content = document.createElement('div');
    content.classList.add('content')

    content.classList.add('content')

    const scrim = document.createElement('div');
    scrim.classList.add('scrim');

    //Add Component Here

    content.appendChild(scrim);

    return content;
}


document.body.appendChild(Header);
document.body.appendChild(content());








