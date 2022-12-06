

function headerButton(name, changePage) {
    const button = document.createElement("button");
    button.classList.add("header-button");

    button.innerText = name;

    button.addEventListener('click', (e) => {
        console.log(name);
        const buttons = document.getElementsByClassName("header-button");
        for (let i = 0; i < buttons.length; i ++) {
            buttons[i].classList.remove("selected");
        }
        button.classList.add("selected");
        changePage(name);
    });

    return button;
}

function header(changePage) {
    const header = document.createElement("div");
    header.classList.add("header");
    const title = document.createElement("h1");
    title.innerText = "Jay's Confections";
    header.appendChild(title);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    const homeButton = headerButton("Home", changePage);
    homeButton.classList.add("selected");
    buttonContainer.appendChild(homeButton)
    buttonContainer.appendChild(headerButton("Menu", changePage));
    buttonContainer.appendChild(headerButton("Contact", changePage));

    header.appendChild(buttonContainer);

    return header;
}

export default header;