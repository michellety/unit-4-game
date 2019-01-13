//start the game when the page loads
$(document).ready(function() {

    //computer generates a random number between 19 and 120
    var randomNum = Math.floor(Math.random() * 102) + 19;
    console.log(randomNum);
    $("randNumber").text(randomNum);

    //each of the 4 crystal also generate a random number, between 1 and 12
    var crystalOne = Math.floor(Math.random() * 12) + 1,
        crystalTwo = Math.floor(Math.random() * 12) + 1,
        crystalThree = Math.floor(Math.random() * 12) + 1,
        crystalFour = Math.floor(Math.random() * 12) + 1;
    console.log(crystalOne, crystalTwo, crystalThree, crystalFour);

    //create variables to hold the wins, losses, and total
    //initialize to 0 for the start of the game  

    var wins = 0,
        losses = 0,
        scoreCounter = 0;

    //create a function to update wins

    function winUpdate () {
        //increase the win value
        wins ++;
        //change the value on the html
        $("#wins").html("Wins: " + wins);
      
    };

    //create a function to update losses

    function lossUpdate () {
        losses ++;
        //change the value on the html
        $("#losses").html("Losses: " + losses);
        
    };

    //create a game reset function 
    //the game resets the value of the random number and all crystals when win or loss is updated
    function reset () {
        //computer generates a random number between 19 and 120
        var randomNum = Math.floor(Math.random() * 102) + 19;
        
        //each of the 4 crystal also generate a random number, between 1 and 12
        var crystalOne = Math.floor(Math.random() * 12) + 1,
        crystalTwo = Math.floor(Math.random() * 12) + 1,
        crystalThree = Math.floor(Math.random() * 12) + 1,
        crystalFour = Math.floor(Math.random() * 12) + 1;
        //reset the scoreCounter
        scoreCounter = 0;
    };

    //onclick function for the game
    //compare the crystal value to the random number when clicked
    //if the total is less than the number, keep playing and counting 

    $("#crystalOne").on("click", function(){
        //score counter, starting at 0, increases the value of the crystal each time a crystal is clicked 
        scoreCounter += crystalOne; 
        //each click updates the score on the display
        $("#totalScore").html("Your total score: " + scoreCounter);
        //player wins if the score count matches the random number
        if (totalScore === randomNum) {
            //the win display is increased by 1 point
            win++;
            $("#wins").html("Wins: " + wins);
            // winUpdate();
            // reset();
        } else if (totalScore >= randomNum) {
            //player loses if the score count is greater than the random number 
            //the loss display is increased by 1 point 
            // lossUpdate();
            // reset();
            losses++;
            $("#losses").html("Losses: " + losses);
        };
    });
    
});








