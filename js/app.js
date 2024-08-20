const symbols = ['😃', '🐦', '🍉', '🍕', '🏀', '🚨', '⚓️', '🖤', '☀︎', '♨︎'];
const gameContainer = document.getElementById("game-container");
const timerLeftElement = document.getElementById("time-left");
const remaingAttemptsElement = document.getElementById("remaining-attempts");
const messageElement = document.getElementById("message");

let shuffledSymbols = [...symbols, ...symbols].sort(() => 1 - Math.random());
let flippedCards = [];
let matchedPairs = 0;
let remainingAttempts = 3;
let timeleft = 30;
let timer;
