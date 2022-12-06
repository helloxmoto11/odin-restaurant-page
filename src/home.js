import Img from "./strawberry-shortcake.jpg"

function Home() {

    const home = document.createElement("div");
    home.classList.add("main-container");

    const leftSide = document.createElement("div");
    leftSide.classList.add("content-left");
    const paragraph = document.createElement("p");
    paragraph.innerText = "At Jay's Confections you can come and enjoy dessert at any time of day. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet nulla malesuada pellentesque elit eget. Aenean sed adipiscing diam donec. Id interdum velit laoreet id donec ultrices tincidunt arcu non."
    leftSide.appendChild(paragraph);

    const rightSide = document.createElement('div');
    rightSide.classList.add("content-right");
    const img = document.createElement("img");
    img.src = Img;
    rightSide.appendChild(img);

    home.appendChild(leftSide);
    home.appendChild(rightSide);

    return home;

}

export default Home();