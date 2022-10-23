let userClickedPattern = []

let gamePattern = [];


let buttonColors = ["red", "blue", "green", "yellow"];


function nextSequence () {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    let sound = new Audio("sounds/" + randomChosenColor + ".mp3");
    sound.play();
}


$(".btn").click(function() {
    let userChosenColor = $(this).attr("id");

    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
});