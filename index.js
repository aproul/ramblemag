const pngs = [
    'homepage/merch-button.png',
    'homepage/about-button.png',
    'homepage/zine1.png',
    'homepage/zine2.png'
];

const links = [
    'merch.html',
    'about.html',
    'zine1.html',
    'zine2.html'
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
