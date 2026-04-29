const pngs = [
    'homepage/joyce-button.png',
    'homepage/perry-button.png',
];

const links = [
    'joyce.html',
    'perry.html',
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
