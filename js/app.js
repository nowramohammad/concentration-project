const images = ["IMG_0832.JPG", "IMG_0833.JPG", "IMG_0834.JPG", "IMG_0835.JPG", "IMG_0837.JPG", "IMG_0838.JPG", "IMG_0839.JPG", "IMG_0840.JPG", "IMG_0841.JPG", "IMG_0842.JPG"];
const gameContainer = document.getElementById("game-container");
const timeLeftElement = document.getElementById("time-left");
const remaingAttemptsElement = document.getElementById("remaining-attempts");
const messageElement = document.getElementById("message");

let shuffledImages = [...images,...images].sort(() => 1 - Math.random());
let flippedCards = [];
let matchedPairs = 0;
let remainingAttempts = 3;
let timeLeft = 30;
let timer;
function startGame () {
    shuffledImages.forEach(image => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.image = image;

        const imgElement = document.createElement('img');
        imgElement.src = `images/${image}`;
        card.appendChild(imgElement);
        card.addEventListener("click", flipCard);
        gameContainer.appendChild(card);

     });
    timer = setInterval(() => {
        timeLeft--; 
        timeLeftElement.innerText = timeLeft;
        
        if (timeLeft === 0) {
            endGame(fales);
        }
    }, 1000);
    }
 function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains("flipped")) {
        this.classList.add('flipped');
        flippedCards.push(this);
        if (flippedCards.length === 2) {
            checkForMatch();
        }
    }
 }
 
 function checkForMatch() {
    const [card1, card2] = flippedCards;
    if (card1.dataset.omage === card2.dataset.image) {
        matchedPairs++;
        flippedCards =[];
        if (matchPairs === images.length) {
            endGame(true);
        }
    } else {
        remaingAttemptsElement.innerText = remainingAttempts;
        setTimeout(() => {
            card1.classList.remove("flipped");
            card2.classList.remove("flipped");
            flippedCards = [];
        }, 1000);
        if (remainingAttempts === 0) {
            endGame(false);
        }
    }
 }
  function endGame(won) {
    clearInterval(timer);
    messageElement.innerText = won? "YOU WIN" : "YOU LOSE!"; 
    document.querySelectorAll(".card").forEach(card => card.removeEventListener("click", flipCard));
  }
 startGame(); 