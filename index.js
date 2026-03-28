const pngs = [
    'homepage/andronike-button.png',
    'homepage/astrid-button.png',
    'homepage/susannah-button.png',
    'homepage/about-button.png'
];

const links = [
    'andronike.html',
    'astrid.html',
    'susannah.html'
];

pngs.forEach((img, i) => {

    const button = document.createElement("img");
    button.src = img;
    button.classList.add("nav-button");

    button.onclick = () => {
        window.location.href = links[i];
    };

    document.body.appendChild(button);

});
