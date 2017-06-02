console.log('main.js connected!')
var $divCon = $('.container')
$divCon.text("jquery is working!")

$divCon.on('mouseover', enterGame)

function enterGame(){
  $divCon.css({'color':'rgba(17, 20, 178, .8)', 'fontSize': '40px'});
  $divCon.text('You have entered the game zone!');
}
