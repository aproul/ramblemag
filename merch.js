const pngs = [
    'MERCH/tees/tee-button.png',
    'MERCH/bothzines.png'
];

const links = [
    'tees.html',
    'zine-order.html'
   
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