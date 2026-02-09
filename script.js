const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Aloo please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Wait… one last thing 😶"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    if (messageIndex < messages.length) {
        noButton.textContent = messages[messageIndex];
        messageIndex++;

        const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = `${currentSize * 1.4}px`;
    } else {
        // Redirect to NO PAGE after last click
        window.location.href = "no_page.html";
    }
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
