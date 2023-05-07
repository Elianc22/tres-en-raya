# React Game Project

I built a tic tac toe game using ReactJs, HTML, CSS and JavaScript.
Also using hooks like *useState* to handle states.

This project has an implementation that lets you know who's turn is it,
this was a state with an inital value of **X**, and a different function
that setted the value of the state to the contrary player once the click on the board was made.

This game had also an initial state of the empty board, this was usefull
to show later on the implemented modal to show who was the winner once the
game was finished, or if it was a tie. In this modal, the user also has
a button to reset the game, that sets the board state to its initial value
(empty), so the user can play again.

The user also can restart the game from the board view if needed.
The game data is being saved in localStorage, this is usefull for the potential case of the user refreshing the page or even closing the window, if one of those thing happen, the progress will still be there once the window is reopen.

**You can check the live demo of the game [here](https://tres-en-raya-lovat.vercel.app/).**
