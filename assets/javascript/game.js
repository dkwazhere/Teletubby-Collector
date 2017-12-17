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
        alert("you win");
        $("#win").text("Your wins: " + wins);
        reset();
    }
    else if (userNumber > randomNumber) {
        loss++;
        alert("you lose");
        $("#loss").text("Your losses " + loss);
        reset();
    }
}

//clicking each character
$("#dipsy").on("click", function() {
    userNumber = userNumber + number1;
    console.log(userNumber);
    $("#usernumber").text("Your # " + userNumber);
    winOrLose();
});
$("#laa-laa").on("click", function() {
    userNumber = userNumber + number2;
    console.log(userNumber);
    $("#usernumber").text("Your # " + userNumber);
    winOrLose();
});
$("#po").on("click", function() {
    userNumber = userNumber + number3;
    console.log(userNumber);
    $("#usernumber").text("Your # " + userNumber);
    winOrLose();
});
$("#tinky").on("click", function() {
    userNumber = userNumber + number4;
    console.log(userNumber);
    $("#usernumber").text("Your # " + userNumber);
    winOrLose();
});



});
