$( document ).ready();

// Variables
var wins = 0;
var losses = 0;
var counter;
var targetNumber; 

// Number to guess/match.


// **** Variables for crystals
// Creating multiple crystals each with their own unique number value.

// var crystals = [(Math.floor(Math.random() * 12) + 1), (Math.floor(Math.random() * 12) + 1), (Math.floor(Math.random() * 12) + 1), (Math.floor(Math.random() * 12) + 1)];

startGame();
function startGame() {
    
    //For a new game
    
    //need new random values for button
    
    var buttonValues = [];
    for (var i = 0; i < 4; i++) {
        buttonValues.push(Math.floor(Math.random() * 12) +1)
        
    }      
    //new random values for target
    targetNumber = Math.floor(Math.random() * 121) + 19;
    //counter back to zero
    counter = 0;
    //Update DOm with all t his stuff
    $("#number-to-guess").text(targetNumber);
    $("#crystals").text(counter);
    $('.crBtn1').attr('value', buttonValues[0]);
    $('.crBtn2').attr('value', buttonValues[1]);
    $('.crBtn3').attr('value', buttonValues[2]);
    $('.crBtn4').attr('value', buttonValues[3]);
    console.log(buttonValues)
    
}
// Created a for loop to create crystals for every numberOption.
// for (var i = 0; i < buttonValues.length; i++) {

//     // For each iteration, we will create an imageCrystal
//     var imageCrystal = $("<img>");

//     // First each crystal will be given the class ".crystal-image".
//     // This will allow the CSS to take effect.
//     imageCrystal.addClass("crystal-image");

//     // Each imageCrystal will be given a src link to the crystal image
//     imageCrystal.attr("src", "");


//     // Each imageCrystal will be given a data attribute called data-crystalValue.
//     // This data attribute will be set equal to the array value.
//     imageCrystal.attr("data-crystalvalue", crystals[i]);

//     // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
//     $("#crystals").append(imageCrystal);
// }

// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal-image").on("click", function () {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = $(this).attr("value");
    //unary operator, == to parseInt()
    crystalValue = +crystalValue;
    console.log(crystalValue);
    console.log(typeof crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    //alert("New score: " + counter);
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
