import { memoryGame } from './memory-game.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';







$(document).ready(function() {
  function publisher (arrangement) {
    arrangement = memoryGame.arrangement;
    for (var i=0; i<arrangement.length; i++) {
      var card = arrangement[i];
      var string = card.cardImageURL;
      $("#box" + i).text(string);
    }
  }

  $("#start-game").click(function(){
    publisher();
  });
});
