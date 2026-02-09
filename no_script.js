const noButton = document.querySelector(".no-button");

noButton.addEventListener("mouseenter", () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 100;

    noButton.style.transform = `translate(${x}px, ${y}px)`;
});

function goYes() {
    window.location.href = "yes_page.html";
}
