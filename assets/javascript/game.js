//start the game when the page loads
$(document).ready(function() {

    //computer generates a random number between 19 and 120
    var randomNum = Math.floor(Math.random() * 102) + 19;
    console.log(randomNum);

    //each of the 4 crystal also generate a random number, between 1 and 12
    var crystalOne = Math.floor(Math.random() * 12) + 1,
        crystalTwo = Math.floor(Math.random() * 12) + 1,
        crystalThree = Math.floor(Math.random() * 12) + 1,
        crystalFour = Math.floor(Math.random() * 12) + 1;
    console.log(crystalOne, crystalTwo, crystalThree, crystalFour);




});


//score counter, starting at 0, increases the value of the crystal each time a crystal is clicked 
//each click updates the score on the display
//player wins if the score count matches the random number
//the win display is increased by 1 point
//player loses if the score count is greater than the random number 
//the loss display is increased by 1 point 
//the game resets the value of the random number and all crystals when win or loss is updated
