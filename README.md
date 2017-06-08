# <p style= 'color: blue'>hangBoat</p>
This is my project#1 game!</br>
<a href='https://bmontellano.github.io/hangBoat/'>https://bmontellano.github.io/hangBoat/</a>

## Technologies and Approach
HTML, CSS, Vanilla Javascript and the jQuery library were all used to create this web-based game! </br>
The game was created by first building the game board using 'div' block elements and then CSS to create desired dimensions and effects. </br>
<b>Google Fonts</b> was used to style the game, and the CSS text-shadow attribute was sprinkled around the board for <i>cool factor.</i></br>
JS and jQuery were used to select elements in the HTML and manipulate the DOM.

## Rules of the game
The game is like hangman, but with a twist: </br></br> Two players get one try per turn to guess the correct letters of the word in question. </br> </br>
'Movies' is the category and the word being guessed is a movie title. Hints are given to players within the question. </br> </br>
Once the word is guessed correctly, players press a button to generate a new question. Pressing the button also prompts players to answer bonus questions. </br> </br> 
The <i><b>objective of the game</i></b> is to move your paper boat into the island. First player to arrive WINS.

## <p style= 'color: #5f0f82'>Bugs and future additions</p>
BUGS: </br> 
1. At page load, players are directed to read the game rules and elements are seemingly overlapping, caused by elements having absolute positions. This is quickly removed after 2 seconds and the game board is correctly readjusted, but it would be nice if elements moved smoothly from the get-go. </br>
**UPDATE** Bug fixed by making the disappearing directions CSS position:absolute ^_^ </br>
2. Letters can be re-entered into the input fields moving your boat forward again, when it's not supposed to. </br>
</br>
DREAM ADDITIONS: </br>
1. Boost game content by adding questions.</br>
2. Clean up code by consolidating and getting rid of unnecessary functions.</br>
3. Mark up code with comments to explain game functionality.</br>
4. Add more jQuery animations. </br>
5. Add more bonus questions to increase the fun! </br>
6. Use DOM manipulation to display bonus questions with a submit field instead of prompting the page.</br>
7. Randomize questions on page load and on "question generator button" press!


