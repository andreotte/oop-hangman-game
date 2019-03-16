/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



  const phrases = ['You are playing hangman',
  'Rhythm and blues',
  'Have a nice day',
  'Mississippi',
  'Mary had a little lamb'];


  // Call game.startGame() on click to initiate a new game.
  $('#btn__reset').on('click', () => {
    // Create a new instance of the Game class. game is global variable.
    window.game = new Game(phrases);
    game.startGame()
  });

   // Add click event listeners to each of the onscreen keyboard buttons, so that
   // clicking a button calls the handleInteraction() method on the Game object.
    const $keys = $('#qwerty');
    $keys.on('click', function(){
      if(event.target.className === 'key') {
        game.handleInteraction(event.target);
      }
  });


//  After a game is completed, the gameboard needs to be reset so that clicking
//  the "Start Game" button will successfully load a new game.
// Remove all li elements from the Phrase ul element.
// Enable all of the onscreen keyboard buttons and update each to use the key CSS
// class, and not use the chosen or wrong CSS classes.
// Reset all of the heart images (i.e. the player's lives) in the scoreboard at
// the bottom of the gameboard to display the liveHeart.png image.
