let userClickedPattern = []

let gamePattern = [];

let buttonColors = ["red", "blue", "green", "yellow"];


$(".btn").click(function() {
    let userChosenColor = $(this).attr("id");

    userClickedPattern.push(userChosenColor);
    // console.log(userClickedPattern);
    playSound(userChosenColor);

    animatePress(userChosenColor);
});



function nextSequence () {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}




function playSound(name) {
   let sound = new Audio("sounds/" + name + ".mp3");
    sound.play();  
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);

}