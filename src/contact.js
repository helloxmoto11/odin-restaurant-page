

function Contact() {
    const menu = document.createElement("div");
    menu.classList.add("main-container");
    menu.classList.add("contact");
    const title = document.createElement("h1");
    title.innerText = "Contact Us";
    menu.appendChild(title);

    return menu;
}

export default Contact();