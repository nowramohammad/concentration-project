//variables

const images = ["IMG_0832.JPG",
    "IMG_0833.JPG",
    "IMG_0834.JPG",
    "IMG_0835.JPG",
    "IMG_0837.JPG",
    "IMG_0838.JPG",
    "IMG_0839.JPG",
    "IMG_0840.JPG",
    "IMG_0841.JPG",
    "IMG_0842.JPG"]
    const resetButton = document.getElementById('reset-button');
    const gameContainer = document.getElementById('game-container');
    const timeLeftElement = document.getElementById("time-left");
    let timeLeft = 60;
    let timer;
    let matchedPairs = 0;
    let remainingAttempts = 6;
    let flippedCards = [ ];

    const messageElement = document.getElementById("message");
const remainingAttemptsElement = document.getElementById('remaining-attempts');
//const resetGame = document.getElementById("reset").onclick = reset;
let  shuffledImages = [...images, ...images ].sort(() => 0.3 - Math.random());

// function
function flipCard() {
    //console.log('click', this);
     if (flippedCards.length < 2 && !this.classList.contains("flipped")) {
         this.classList.add('flipped');
         //console.log(this);
         flippedCards.push(this);
         if (flippedCards.length === 2) {
             checkForMatch();
         }
     }
  }
  
  function startGame() {
    let  shuffledImages = [...images, ...images ].sort(() => 0.3 - Math.random());
    //let flippedCards = [ ];
            timeLeftElement.innerText = timeLeft;
            remainingAttemptsElement.innerText = remainingAttempts;
            messageElement.innerText = "";
            gameContainer.innerHTML = "";
    
            shuffledImages.forEach(image => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.image = image;
    
            const imgElement = document.createElement('img');
            imgElement.src = `images/${image}`;
            card.appendChild(imgElement);
            card.addEventListener("click", flipCard);
            gameContainer.appendChild(card);
           
            //document.querySelector("#cards").appendChild(card);
            
    
         });
         timer = setInterval(() => {
            timeLeft--; 
            timeLeftElement.innerText = timeLeft;
            
            if (timeLeft === 0) {
                endGame(false);
            }
        }, 1000);
        }

        function checkForMatch() {
            const [card1, card2] = flippedCards;
            
            // Check if the flipped cards match
            if (card1.dataset.image === card2.dataset.image) {
                matchedPairs++;
                flippedCards = []; // Clear the flipped cards array
                
                // Check if the player has matched all pairs
                if (matchedPairs === images.length) {
                    endGame(true); // End the game if all pairs are matched
                }
            } else {
                // If cards don't match, flip them back after a short delay
                setTimeout(() => {
                    card1.classList.remove("flipped");
                    card2.classList.remove("flipped");
                    flippedCards = []; // Clear the flipped cards array after flipping them back
                }, 1000); // 1 second delay to show the cards before flipping them back
                
                remainingAttempts--; // Reduce attempts
                remainingAttemptsElement.innerText = remainingAttempts;
                
                // Check if there are no remaining attempts
                if (remainingAttempts <= 0) {
                    endGame(false); // End the game if no attempts are left
                }
            }
        }
        
        function endGame(won) {
            clearInterval(timer);
            messageElement.innerText = won? "YOU WIN" : "YOU LOSE!"; 
            document.querySelectorAll(".card").forEach(card => card.removeEventListener("click", flipCard));
            if (won) {
                alert("Congratulations!");
            } else {
                alert("Game Over!");
            }
        
        }
          function resetGame() {
            startGame();
            clearInterval(timer);
            matchedPairs = 0;
            flippedCards = [ ];
            remainingAttempts = 6
            }
            resetButton.addEventListener('click', resetGame);
           
          startGame();
        