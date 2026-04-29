const pngs = [
    'homepage/susannah-button.png',
    'homepage/astrid-button.png',
    'homepage/andronike-button.png'
];

const links = [
    'susannah.html',
    'astrid.html',
    'andronike.html',
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
