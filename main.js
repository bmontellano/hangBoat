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

function questButtonLogic(){
  if(turns%2===0){
      moveRight1();
      moveRight1();
}else {
      moveRight2();
      moveRight2();
}
}


function questButton(){
  if(questionTurns===0){
  var t = prompt("Answer the question correctly to steer your boat towards a gust of wind speeding you towards the island! What famous 1970's film starred a sea creature who terrified and ate beach goers?");
    if(t=='jaws'){
      questButtonLogic();
    }

   questionTurns += 1;
   questions();
 } else if (questionTurns===1){
 var z = prompt("You've entered Bermuda's triangle. Answer the question correctly to teleport closer to the island!What movie is about blue creatures and an element called unobtanium?")
  if(z=='avatar'){
    questButtonLogic();
  }
  questionTurns += 1;
  questions();
 }
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


$letter1.change(questions);
$letter2.change(questions);
$letter3.change(questions);
$letter4.change(questions);
$letter5.change(questions);
$letter6.change(questions);
$letter7.change(questions);
$letter8.change(questions);
$letter9.change(questions);
$letter10.change(questions);
$letter11.change(questions);
$letter12.change(questions);

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
$questions.text('What big boat breaks in half crossing the Atlantic ocean at the turn of the 20th century?')
if ($letter1.val() === 't'){ gameLogic();$letter1.val('T');return }
if ($letter2.val() === 'i'){ gameLogic();$letter2.val('I');return }
if ($letter3.val() === 't'){ gameLogic();$letter3.val('T');return }
if ($letter4.val() === 'a'){ gameLogic();$letter4.val('A');return }
if ($letter5.val() === 'n'){ gameLogic();$letter5.val('N');return }
if ($letter6.val() === 'i'){ gameLogic();$letter6.val('I');return }
if ($letter7.val() === 'c'){ gameLogic();$letter7.val('C');return }

} else if ( questionTurns ===1){
$questions.text("Fill in the blanks:The Last of the ....")
if ($letter1.val() == 'm'){ gameLogic();$letter1.val('M');return }
if ($letter2.val() == 'o'){ gameLogic();$letter2.val('O');return }
if ($letter3.val() == 'h'){ gameLogic();$letter3.val('H');return }
if ($letter4.val() == 'i'){ gameLogic();$letter4.val('I');return }
if ($letter5.val() == 'c'){ gameLogic();$letter5.val('C');return }
if ($letter6.val() == 'a'){ gameLogic();$letter6.val('A');return }
if ($letter7.val() == 'n'){ gameLogic();$letter7.val('N');return }
if ($letter8.val() == 's'){ gameLogic();$letter8.val('S');return }

} else if ( questionTurns ===2){
  $questions.text("A young woman, who is a perfect being, crashes into a cab driver's world and asks 'Help Meee' in this 1995 future flick")
if ($letter1.val() == 'f'){ gameLogic();$letter1.val('F');return }
if ($letter2.val() == 'i'){ gameLogic();$letter2.val('I');return }
if ($letter3.val() == 'f'){ gameLogic();$letter3.val('F');return }
if ($letter4.val() == 't'){ gameLogic();$letter4.val('T');return }
if ($letter5.val() == 'h'){ gameLogic();$letter5.val('H');return }
if ($letter6.val() == 'e'){ gameLogic();$letter6.val('E');return }
if ($letter7.val() == 'l'){ gameLogic();$letter7.val('L');return }
if ($letter8.val() == 'e'){ gameLogic();$letter8.val('E');return }
if ($letter9.val() == 'm'){ gameLogic();$letter9.val('M');return }
if ($letter10.val() == 'e'){ gameLogic();$letter10.val('E');return }
if ($letter11.val() == 'n'){ gameLogic();$letter11.val('N');return }
if ($letter12.val() == 't'){ gameLogic();$letter12.val('T');return }
  }
  turner();
}
questions();
questions();

function checkWinner(){
  console.log('checking winner')
if ($boatDiv1.css('left')=='412.997px'){
  $boatDiv1.fadeOut(1000,function(){alert("Player 1 wins")});

} else if ($boatDiv2.css('left')=='412.997px'){
  $boatDiv2.fadeOut(1000,function(){alert("Player 2 wins")});
}
}