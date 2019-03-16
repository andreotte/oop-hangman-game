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
      this.gameOver('You lose. Better luck next time!', 'lose');
      this.missed = 0;
    }
  }

  // Check if player has revealed all letter in the phrase.
  checkForWin(phrase) {
    // this method checks to see if the player has revealed all
    // of the letters in the active phrase.
    const letters = phrase.filter('.letter');
    const matchedLetters = letters.filter('.show');
    if (matchedLetters.length === letters.length) {
      this.gameOver('You win!', 'win');
    }
  }

  // Display original start screen and write win or loss message to the DOM.
  // Reset game
  gameOver(message, outcome) {
    const $overlay = $('#overlay');
    $overlay.attr('class', `start ${outcome}`);
    $overlay.show();
    console.log(overlay);

    $('#game-over-message').text(message);

    // remove phrase
    const phraseUl = $('#phrase ul');
    phraseUl.children().remove();
    // enable all keys
    const $keyButtons = $('button');
    for (let button = 0; button < $keyButtons.length; button ++) {
      $keyButtons[button].disabled = false;
      $keyButtons[button].className = 'key';
    }
    // Add lives back
    const $lives = $('.lost');
    for (let life = 0; life < $lives.length; life ++) {
      $lives[life].className = 'tries';
      $lives[life].innerHTML = '<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30">';
    }
  }
 }
