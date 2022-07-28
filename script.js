let q = randomNr(1, 3);

function randomNr(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let a = document.getElementById("ch1");
let b = document.getElementById("ch2");
let c = document.getElementById("ch3");

let aa = document.getElementById("que1");
let ab = document.getElementById("que2");
let ac = document.getElementById("que3");
let ad = document.getElementById("que4");

let ba = document.getElementById("won");
let bb = document.getElementById("draw");
let bc = document.getElementById("compwon");
let but = document.getElementById("another");

function firstChoice() {
    a.style.backgroundColor = "white";
    b.style.display = "none";
    c.style.display = "none";
    computerChoice(1);
}

function secondChoice() {
    b.style.backgroundColor = "white";
    a.style.display = "none";
    c.style.display = "none";
    computerChoice(2);
}

function thirdChoice() {
    c.style.backgroundColor = "white";
    b.style.display = "none";
    a.style.display = "none";
    computerChoice(3);
}

function computerChoice(n) {
    aa.style.display = "none";
    if (q === 1) {
        ab.style.display = "block";
    } else if (q === 2) {
        ac.style.display = "block";
    } else {
        ad.style.display = "block";
    }
    if (q === n) {
        bb.style.display = "block";
        another.style.display = "block";

    } else if (n === 1 && q === 2) {
        bc.style.display = "block";
        another.style.display = "block";
    } else if (n === 1 && q === 3) {
        ba.style.display = "block";
        another.style.display = "block";
    } else if (n === 2 && q === 1) {
        ba.style.display = "block";
        another.style.display = "block";
    } else if (n === 2 && q === 3) {
        bc.style.display = "block";
        another.style.display = "block";
    } else if (n === 3 && q === 1) {
        bc.style.display = "block";
        another.style.display = "block";
    } else if (n === 3 && q === 2) {
        ba.style.display = "block";
        another.style.display = "block";
    }
}

function refreshPage() {
    window.location.reload();
}