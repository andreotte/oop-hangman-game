/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const phrases = ['Andre',
'Rhythm and blues',
'Michigan',
'Mississippi',
'Adam and Eve'];


// Call game.startGame() on click to initiate a new game.
$('#btn__reset').on('click', () => {
  // Create a new instance of the Game class. game is global variable.
  window.game = new Game(phrases);
  game.startGame()
});

// Receives specific key from event listeners and calls handleInteraction()
function key(target) {
  if(target.className === 'key') {
    game.handleInteraction(event.target);
  }
}

 // Add click event listeners to each of the onscreen keyboard buttons, so that
 // clicking a button calls the handleInteraction() method on the Game object.
const $keys = $('#qwerty');

$keys.on('click', () => key(event.target));

// TODO: add keydown event listener
// window.onkeydown = (event) => {
//   const $keys = $('.key');
//   for (let letter = 0; letter < $keys.length; letter ++) {
//     if ($keys[letter].innerHTML === event.key) {
//       console.log($keys[letter]);
//       key($keys[letter]);
//     }
//   }
// };
