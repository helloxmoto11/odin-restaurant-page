

function Menu() {
    const menu = document.createElement("div");
    menu.classList.add("main-container");
    menu.classList.add("menu");
    const title = document.createElement("h1");
    title.innerText = "Menu";
    menu.appendChild(title);

    return menu;
}

export default Menu();