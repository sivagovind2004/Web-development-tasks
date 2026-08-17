document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(
        ".content-card, .skills-card, .education-card"
    );


    cards.forEach(function (card, index) {

        card.style.opacity = "0";

        card.style.transform = "translateY(15px)";


        setTimeout(function () {

            card.style.transition =
                "opacity 0.5s ease, transform 0.5s ease";

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";

        }, index * 80);

    });

});