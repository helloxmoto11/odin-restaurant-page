

function headerButton(name) {
    const button = document.createElement("button");
    button.classList.add("header-button");
    button.innerText = name;

    return button;
}

function header() {
    const header = document.createElement("div");
    header.classList.add("header");
    const title = document.createElement("h1");
    title.innerText = "Jay's Confections"
    header.appendChild(title)

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    buttonContainer.appendChild(headerButton("Home"))

    header.appendChild(headerButton("Home"));

    return header;
}

export default header();