const messages = [
    "Are you sure?", "Really sure??", "Are you positive?",
    "Aloo please...", "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...", "I will be very very very sad...",
    "Ok fine, I will stop asking...", "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.2}px`;

    // Redirect to no_page.html if last message
    if (messageIndex === 0) {
        noButton.onclick = () => { window.location.href = "no_page.html"; };
    }
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
