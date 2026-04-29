document.addEventListener("DOMContentLoaded", function () {

    const audio = document.getElementById("myAudio");

    const buttons = [
        {
            src: 'music-button.png',
            action: 'audio'
        },
        {
            src: 'astrid/astrid-button-02.png',
            action: 'link',
            url: 'astrid/astrid-02.png'
        },
        {
            src: 'astrid/astrid-button-03.png',
            action: 'link',
            url: 'astrid/astrid-03.png'
        }
    ];

    buttons.forEach(button => {

        const img = document.createElement("img");
        img.src = button.src;
        img.style.cursor = "pointer";

        // MUSIC BUTTON — small + top-right
        if (button.action === "audio") {

            img.style.width = "80px";  // smaller size

            img.style.position = "fixed";
            img.style.top = "20px";
            img.style.right = "20px";
            img.style.zIndex = "999";

            img.addEventListener("click", function () {

                audio.currentTime = 0;
                audio.play();

                setTimeout(() => {
                    audio.pause();
                    audio.currentTime = 0;
                }, 5000);

            });

        }

         // 🔗 LINK BUTTONS — positioned separately
        if (button.action === "link") {

            img.style.width = "300px";
            img.style.position = "relative";

            // LEFT BUTTON
            if (button.position === "leftButton") {
                img.style.left = "100px";
                img.style.top = "1000px";
                img.style.transform = "translateY(-50%)";
            }

            // RIGHT BUTTON
            if (button.position === "rightButton") {
                img.style.right = "800px";
                img.style.top = "700px";
                img.style.transform = "translateY(-50%)";
            }

            img.addEventListener("click", function () {
                window.location.href = button.url;
            });

            img.addEventListener("mouseover", () => {
    img.style.transform = "scale(1.1)";
});

img.addEventListener("mouseout", () => {
    img.style.transform = "scale(1)";
});

        }

        document.body.appendChild(img);

    });

});