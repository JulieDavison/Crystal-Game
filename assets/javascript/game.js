$( document ).ready();

// Variables
var wins = 0;
var losses = 0;
var counter;
var targetNumber; 


startGame();
function startGame() {
    
    //For a new game
    
    //need new random values for button
    
    var buttonValues = [];
    for (var i = 0; i < 4; i++) {
        buttonValues.push(Math.floor(Math.random() * 12) +1);
        
    }      
    //new random values for target
    targetNumber = Math.floor(Math.random() * 120-19+1) +19;
    console.log(targetNumber);
    //counter back to zero
    counter = 0;
    //Update DOM with all this stuff
    $("#number-to-guess").text(targetNumber);
    // console.log(targetNumber);
    $("#crystals").text(counter);
    $('.crBtn1').attr('value', buttonValues[0]);
    $('.crBtn2').attr('value', buttonValues[1]);
    $('.crBtn3').attr('value', buttonValues[2]);
    $('.crBtn4').attr('value', buttonValues[3]);
    console.log(buttonValues)
    
}


// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal-image").on("click", function () {

    var crystalValue = $(this).attr("value");
    //unary operator, == to parseInt()
    crystalValue = +crystalValue;
    console.log(crystalValue);
    console.log(typeof crystalValue);
    
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    
    $("#crystals").text(counter);

    if (counter === targetNumber) {
        setTimeout(function(){

            alert("You win!");
            wins++;
            $("#wins").text(wins);
            startGame();
        },100)
    }

    else if (counter >= targetNumber) {
        setTimeout(function(){

            alert("You lose!!");
            losses++;
            $("#losses").text(losses);
            startGame();
        },100)
    }


});
