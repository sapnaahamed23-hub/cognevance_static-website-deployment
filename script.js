
document.addEventListener("DOMContentLoaded", function () {
    console.log("Cloud portfolio loaded successfully!");

    const projectCard = document.querySelector(".project-card");

    if (projectCard) {
        projectCard.addEventListener("mouseenter", function () {
            projectCard.style.borderColor = "#60a5fa";
        });

        projectCard.addEventListener("mouseleave", function () {
            projectCard.style.borderColor = "#263650";
        });
    }

    const links = document.querySelectorAll(".nav-links a");

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            console.log("Navigating to: " + link.textContent);
        });
    });
});
