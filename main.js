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
  $boatDiv1.animate({'left':'+=20px'}, 800)
}

var $boatDiv2 = $('.boatDiv2')
$boatDiv2.on('click', moveRight2)
function moveRight2(){
  console.log('boat has been clicked!')
$boatDiv2.animate({'left':'+=20px'}, 800)
}

var score = {
  player1: 0,
  player2: 0
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

var $letter1 = $('.letter1')
console.log($letter1.val())
if ($letter1.val()==='t'){
  moveRight2();
}
