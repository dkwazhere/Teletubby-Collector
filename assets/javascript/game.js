$(document).ready(function(){
    // variables
    var wins = 0;
    var loss = 0;
    var userNumber = 0;
    var randomNumber = Math.floor((Math.random() *144)+20);
    // console.log(randomNumber);
    var number1 = Math.floor((Math.random() *11)+1);
    var number2 = Math.floor((Math.random() *11)+1);
    var number3 = Math.floor((Math.random() *11)+1);
    var number4 = Math.floor((Math.random() *11)+1);
    //audios
    var winAudio = new Audio("assets/sounds/tubbyagain.wav");
    var loseAudio = new Audio("assets/sounds/tubbyuhoh.wav");
    var tinkyAudio = new Audio("assets/sounds/tubbytinky.wav");
    var dipsyAudio = new Audio("assets/sounds/tubbydipsy.wav");
    var laalaaAudio = new Audio("assets/sounds/tubbylaalaa.wav");
    var poAudio = new Audio("assets/sounds/tubbypo.wav");
    // dom manipulation
    $("#randomnumber").text("Target # " + randomNumber);
    $("#usernumber").text("Your # " + userNumber);
    // $("#win").text("Your wins: " + wins);
    // $("#loss").text("Your losses " + loss);
    //reset function
function reset(){
    userNumber = 0;
    randomNumber = Math.floor((Math.random() *144)+20);
    number1 = Math.floor((Math.random() *11)+1);
    number2 = Math.floor((Math.random() *11)+1);
    number3 = Math.floor((Math.random() *11)+1);
    number4 = Math.floor((Math.random() *11)+1);
    $("#randomnumber").text("Target # " + randomNumber);
    $("#usernumber").text("Your # " + userNumber);
}
// check if win or lose
function winOrLose (){
    if (userNumber == randomNumber) {
        wins++;
        tinkyAudio.pause();
        dipsyAudio.pause();
        laalaaAudio.pause();
        poAudio.pause();
        winAudio.play();
        alert("you win");
        $("#win").text("Your wins: " + wins);
        reset();
    }
    else if (userNumber > randomNumber) {
        loss++;
        tinkyAudio.pause();
        dipsyAudio.pause();
        laalaaAudio.pause();
        poAudio.pause();
        loseAudio.play();
        alert("you lose");
        $("#loss").text("Your losses " + loss);
        reset();
    }
}

//clicking each character
$("#dipsy").on("click", function() {
    userNumber = userNumber + number1;
    dipsyAudio.play();
    console.log(userNumber);
    $("#usernumber").text("Your # " + userNumber);
    winOrLose();
});
$("#laa-laa").on("click", function() {
    userNumber = userNumber + number2;
    laalaaAudio.play();
    console.log(userNumber);
    $("#usernumber").text("Your # " + userNumber);
    winOrLose();
});
$("#po").on("click", function() {
    userNumber = userNumber + number3;
    poAudio.play();
    console.log(userNumber);
    $("#usernumber").text("Your # " + userNumber);
    winOrLose();
});
$("#tinky").on("click", function() {
    userNumber = userNumber + number4;
    tinkyAudio.play();
    console.log(userNumber);
    $("#usernumber").text("Your # " + userNumber);
    winOrLose();
});



});
