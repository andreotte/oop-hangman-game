/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
   constructor(phrase) {
     this.phrase = phrase.toLowerCase();
   }

   // Split the phrase into an array of characters.
   // Display hidden phrase
   addPhraseToDisplay() {
      const phraseUl = $('#phrase ul');
      const phraseLetters = (this.phrase).split('');
      let phraseLIs = [];

      for (let letter in phraseLetters) {
        if (phraseLetters[letter] === ' ') {
          phraseLetters[letter] = '<li class="space">' + phraseLetters[letter] + '</li>';
          phraseLIs.push(phraseLetters[letter]);
        } else {
          phraseLetters[letter] = '<li class="hide letter ' + [phraseLetters[letter]] + '">' + phraseLetters[letter] + '</li>';
          phraseLIs.push(phraseLetters[letter]);
        }
      }

      phraseUl.html(phraseLIs);
   }

   // Checks to see if the letter selected by the player matches a letter in
   // the phrase and disable selected key. Remove life if selection is wrong.
   checkLetter(key) {
     const $hiddenLetters = $('#phrase ul li');
     const $matchedLetters = $hiddenLetters.filter(`.${key.innerText}`);

     // Display matched letter(s)
     for (let letter = 0; letter < $matchedLetters.length; letter += 1){
       this.showMatchedLetter($matchedLetters[letter], key);
     }
     // Disable selected key and call removeLive() if selected key is not in
     // $hiddenLetters
     key.disabled = true;
     if ($matchedLetters.length > 0) {
       key.className = 'chosen';
     } else {
       key.className = 'wrong';
       game.removeLife();
     }
   }

   // Reveal letter(s) on the board that match player's selection.

   showMatchedLetter(matchedLetter, key) {
     matchedLetter.className = `show letter ${key.innerText}`;
   }
 }
