function openLetter() {
    const letter = document.getElementById("letter");
    letter.classList.add("show");
    letter.scrollIntoView({ behavior: "smooth" });
    document.querySelector(".letter-btn").innerText = "💖";
}
