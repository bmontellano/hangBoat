console.log('main.js connected!')
var $divCon = $('.container')
// $divCon.text("jquery is working!")
//
// $divCon.hover(enterGame,leaveGame)

function enterGame(){
  $divCon.css({'color':'rgba(17, 20, 178, .8)', 'fontSize': '40px'});
  $divCon.text('You have entered the game zone!');
}

function leaveGame(){
  $divCon.css({'color':'black', 'fontSize':'24px'})
  $divCon.text("You've left the game zone!")
}


//This is IF YOU WANT TO ADD KEYPRESS FUNCTIONALITY
//....unfortunately I can't get it to work....
// var $boatDiv1 = $('.boatDiv1')
// $boatDiv1.on('keypress', function (q) {
//     var key = q.which || q.keyCode;
//     if (key === 81) { // 81 is q
//       moveRight1();
//     }
// });


var $boatDiv1 = $('.boatDiv1')
$boatDiv1.on('click', moveRight1)
function moveRight1(){
  console.log('boat has been clicked!')
  $boatDiv1.animate({'left':'+=40px'}, 800,checkWinner)

}

var $boatDiv2 = $('.boatDiv2')
$boatDiv2.on('click', moveRight2)
function moveRight2(){
  console.log('boat has been clicked!')
$boatDiv2.animate({'left':'+=40px'}, 800,checkWinner);
}

var gameBoard = {
  letter1: '_',
  letter2: '_',
  letter3: '_',
  letter4: '_',
  letter5: '_',
  letter6: '_',
  letter7: '_',
  letter8: '_',
  letter9: '_',
  letter10: '_',
  letter11:'_',
  letter12: '_'
}


var $questionButton = $('.questionButton')
var $letter1 = $('.letter1')
var $letter2 = $('.letter2')
var $letter3 = $('.letter3')
var $letter4 = $('.letter4')
var $letter5 = $('.letter5')
var $letter6 = $('.letter6')
var $letter7 = $('.letter7')
var $letter8 = $('.letter8')
var $letter9 = $('.letter9')
var $letter10 = $('.letter10')
var $letter11 = $('.letter11')
var $letter12 = $('.letter12')

var turns = 0;
var questionTurns = 0;

$questionButton.on('click',questButton)

function questButton(){
  var t = prompt("Answer the question correctly to steer your boat towards a gust of wind speeding you towards the island! What famous 1970's film starred a sea creature who terrified and ate beach goers?");
    if(t=='jaws'){
      if(turns%2===0){
      moveRight1();
      moveRight1();
    }else {
      moveRight2();
      moveRight2();
    }
    }
   turner();
   questionTurns += 1;
   questions();
}

var $playerTurn = $('.playerTurn')
function turner(){
  turns +=1;
if (turns%2===0){
  $playerTurn.text("PLAYER 1's TURN!")
  $playerTurn.css({'border': '2px solid blue', 'color':'blue','padding': '5px 0px 0px 5px'})
  // $playerTurnD.css({'padding': '5px 0px 0px 5px'})
} else{
  $playerTurn.text("PLAYER 2's TURN!")
  $playerTurn.css({'border': '2px solid darkred', 'color':'darkred','padding': '5px 0px 0px 5px'})
}
};


// $letter1.change(gameLogic);
// $letter2.change(gameLogic);
// $letter3.change(gameLogic);
// $letter4.change(gameLogic);
// $letter5.change(gameLogic);
// $letter6.change(gameLogic);
// $letter7.change(gameLogic);


function gameLogic(){
    if(turns%2===0){
        moveRight1();turner();
  } else {
        moveRight2();turner();
  }
}

var $questions = $('.questions')
function questions(){
if (questionTurns === 0 ){
$questions.text('What big boat breaks in half crossing the Atlantic at the turn of the 20th century?')
if ($letter1.val() == 't'){ gameLogic() }
if ($letter2.val() == 'i'){ gameLogic() }
if ($letter3.val() == 't'){ gameLogic() }
if ($letter4.val() == 'a'){ gameLogic() }
if ($letter5.val() == 'n'){ gameLogic() }
if ($letter6.val() == 'i'){ gameLogic() }
if ($letter7.val() == 'c'){ gameLogic() }

} else if ( questionTurns ===1){
$questions.text("Fill in the blanks:The Last of the ....")
if ($letter1.val() == 'm'){ gameLogic() }
if ($letter2.val() == 'o'){ gameLogic() }
if ($letter3.val() == 'h'){ gameLogic() }
if ($letter4.val() == 'i'){ gameLogic() }
if ($letter5.val() == 'c'){ gameLogic() }
if ($letter6.val() == 'a'){ gameLogic() }
if ($letter7.val() == 'n'){ gameLogic() }
if ($letter8.val() == 's'){ gameLogic() }
}
}
setInterval(questions,500);

function checkWinner(){
  console.log('checking winner')
if ($boatDiv1.css('left')=='413px'){
  $boatDiv1.fadeOut(1000,function(){alert("Player 1 wins")});

} else if ($boatDiv2.css('left')=='413px'){
  $boatDiv2.fadeOut(1000,function(){alert("Player 2 wins")});
}
}
