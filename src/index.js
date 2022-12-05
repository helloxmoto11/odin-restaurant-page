import './style.css';


function content() {
    const content = document.createElement('div');
    content.classList.add('content')

    content.classList.add('content')

    const scrim = document.createElement('div');
    scrim.classList.add('scrim');
    scrim.innerText = "Jay's Confections"
    content.appendChild(scrim);

    return content;
}

document.body.appendChild(content());








