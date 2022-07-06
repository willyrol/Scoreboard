let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let homeCount = 0;
let guestCount = 0;

function plusOneHome() {
    homeCount += 1
    homeScore.textContent = homeCount;
}

function plusTwoHome() {
    homeCount += 2
    homeScore.textContent = homeCount;
}

function plusThreeHome() {
    homeCount += 3
    homeScore.textContent = homeCount;
}

function plusOneGuest() {
    guestCount += 1
    guestScore.textContent = guestCount;
}

function plusTwoGuest() {
    guestCount += 2
    guestScore.textContent = guestCount;
}

function plusThreeGuest() {
    guestCount += 3
    guestScore.textContent = guestCount;
}

function restartHome() {
    homeScore.textContent = 0;
    homeCount = 0;
}

function restartGuest() {
    guestScore.textContent = 0;
    guestCount = 0;
}
