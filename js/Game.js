/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor(phrases) {
    this.missed = 0;
    this.phrases = phrases;
    // Set activePhrase by calling getRandomPhrase.
    this.activePhrase = new Phrase(this.getRandomPhrase());
  }

  // Hide the start screen overlay.
  // Add phrase to display by calling addPhraseToDisplay.
  startGame() {
     $('#overlay').hide();
     this.activePhrase.addPhraseToDisplay();
  }

   // Randomly retrieve one of the phrases stored in the phrases array
   getRandomPhrase() {
     return this.phrases[(Math.ceil(Math.random() * this.phrases.length)) - 1];
   }

   // Call checkLetter() to check if selected key matches letter(s) in
   // $hiddenLetters
   handleInteraction(key) {
     this.activePhrase.checkLetter(key);

  //   this method controls most of the game logic. It checks to see if the
  //   button clicked by the player matches a letter in the phrase, and then
  //   directs the game based on a correct or incorrect guess. This method should:
  //
  //
  //     If the phrase does not include the guessed letter, call the removeLife()
  //     method.
  //
  //     If the phrase includes the guessed letter, add the chosen CSS class to
  //     the selected letter's keyboard button, call the showMatchedLetter()
  //     method on the phrase, and then call the checkForWin() method. If the
  //     player has won the game, also call the gameOver() method.
  }

  // Remove a life from the scoreboard. If player has five missed guesses, call
  // gameOver() to end game.
  removeLife() {
    let $lives = $('.tries');
    let $remainingLives = $lives.filter('.tries');
    this.missed += 1;
    
    $remainingLives[0]
      .className = 'lost';
    $remainingLives[0]
      .innerHTML = '<img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30">'

    if (this.missed === 5) {
      this.gameOver();
    }


  }

  checkForWin() {
    // this method checks to see if the player has revealed all
    // of the letters in the active phrase.
  }

  gameOver() {
    // this method displays the original start screen overlay, and depending on
    // the outcome of the game, updates the overlay h1 element with a friendly
    // win or loss message, and replaces the overlay’s start CSS class with
    // either the win or lose CSS class.
    $('#overlay').show();
    $('#game-over-message').text('You lose. Better luck next time!');

  }
 }
