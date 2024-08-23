/*const images = ["IMG_0832.JPG", "IMG_0833.JPG", "IMG_0834.JPG", "IMG_0835.JPG", "IMG_0837.JPG", "IMG_0838.JPG", "IMG_0839.JPG", "IMG_0840.JPG", "IMG_0841.JPG", "IMG_0842.JPG"]*/
//const gameContainer = document.getElementById("game-container");

let firstSelection = "";
let secondSelection = "";

let counter = 0;

const cards = document.querySelectorAll(".cards .card");
cards.forEach((card) => {
    card.addEventListener("click", () => {
        card.classList.add("clicked");
        if(counter === 0) {
            firstSelection = card.getAttribute("symbol");
           counter++;
        } else {
            secondSelection = card.getAttribute("symbol");
            counter = 0;
        }
        
    });
})

/*function shuffleCards() { 
let currentIndex = cards.length,
randomIndex,
temporaryValue;
while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
}
}
function generateCards() {
    for (let card of cards) {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.setAttribute("card.name");
        cardElement.innerHTML = `
        <div class= "card"> <img class = "image" src= ${card.image}/>
        </div> 
        <div class = "back"></div>`;
       gridContainer.appendChild(cardElement);
       cardElement.addEventListener("click", flipCard);
    }
}
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add("flipped");
    if (!firstCard) {
        firstCard = this;
        return;
    }
    secondCard = this;
    score++;
    document.querySelector(".score").textContent = score;
    lockBoard = true;
    checkForMatch();
}
 
function checkForMatch () {
let isMatch = firstCard.dataset.name === secondCard.dataset.name;
isMatch ? disableCards() : unflipCards();
}
function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListner("click", flipCard);
    resetBoard();
}
    function unfilpCards() {
        setTimeout(() => {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
        resetBoard();
        
    }, 1000);
}
function resetGame() {
    resetBoard();
    shuffleCards();
    score =0;
    document.querySelector(".score").textContent = score;
    gridContainer.innerHTML = "";
    generateCards();
 }
*/
/*
const timeLeftElement = document.getElementById("time-left");
const remaingAttemptsElement = document.getElementById("remaining-attempts");
const messageElement = document.getElementById("message");

//let shuffledImages = [ ].sort(() => 1 - Math.random());

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
            endGame(false);
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
        if (matchedPairs === images.length) {
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
 startGame(); */