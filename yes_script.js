function openLetter() {
    const letter = document.getElementById("letter");
    letter.classList.add("show");

    // Optional: scroll to letter smoothly (mobile-friendly)
    letter.scrollIntoView({ behavior: "smooth" });

    // Optional: change button text
    document.querySelector(".letter-btn").innerText = "💖";
}
