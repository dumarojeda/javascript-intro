$(document).ready(function() {
  var counterOne = 0;
  $(document).on('keyup', function(e) {
    // Detecta que tecla se hundió e invoca la función adecuada
    // Googlea 'jquery keyup what key was pressed' si no sabes como hacer esto
    counterOne++;
    var z = 90; //Player 1
    var p = 80; //Player 2
    var code = e.keyCode;
    var playerOne = $('#player1_strip');
    var playerTwo = $('#player2_strip');

    if(code == z) { 
      playerOne.children()[counterOne].addClass('active');
    } else if (code == p) {
      playerTwo.children()[counterOne].addClass('active');
    }

  });
});
//update_player_position('player1', 10);