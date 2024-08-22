const images = ["IMG_0832.JPG", "IMG_0833.JPG", "IMG_0834.JPG", "IMG_0835.JPG", "IMG_0837.JPG", "IMG_0838.JPG", "IMG_0839.JPG", "IMG_0840.JPG", "IMG_0841.JPG", "IMG_0842.JPG"];
const gameContainer = document.getElementById("game-container");
const timerLeftElement = document.getElementById("time-left");
const remaingAttemptsElement = document.getElementById("remaining-attempts");
const messageElement = document.getElementById("message");

let shuffledImages = [...images,...images].sort(() => 1 - Math.random());
let flippedCards = [];
let matchedPairs = 0;
let remainingAttempts = 3;
let timeleft = 30;
let timer;

