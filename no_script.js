const noButton = document.querySelector('.no-button');
const yesButton = document.querySelector('.yes-button');

let escapeCount = 0;
const maxEscapes = 10; // after this many tries, No redirects to Yes

function moveNoButton() {
    const bodyWidth = window.innerWidth;
    const bodyHeight = window.innerHeight;

    const btnWidth = noButton.offsetWidth;
    const btnHeight = noButton.offsetHeight;

    // Random X and Y inside viewport (keep button fully visible)
    const maxX = bodyWidth - btnWidth - 20; // 20px padding
    const maxY = bodyHeight - btnHeight - 20;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;

    escapeCount++;

    if (escapeCount >= maxEscapes) {
        noButton.onclick = () => { window.location.href = "yes_page.html"; };
        alert("Looks like you can't resist 😉");
    }
}

// Trigger on mobile touch or desktop click
noButton.addEventListener('click', moveNoButton);
noButton.addEventListener('touchstart', moveNoButton);

// Yes button redirects normally
yesButton.addEventListener('click', () => {
    window.location.href = "yes_page.html";
});
