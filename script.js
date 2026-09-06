function nextCards() {
    const container = document.getElementById("categoryContainer");

    container.scrollBy({
        left: 400,
        behavior: "smooth"
    });
}

function previousCards() {
    const container = document.getElementById("categoryContainer");

    container.scrollBy({
        left: -400,
        behavior: "smooth"
    });
}