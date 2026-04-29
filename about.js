const pngs = [
    'homepage/ABOUT-manifesto.png'
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