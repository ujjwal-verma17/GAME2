var gamePattern = [];
var colors = ["blue", "yellow", "green", "red"];
var userClickedPattern = [];
var started = false;
var level = 0
$(document).keypress(function () {

    if (!started) {
        $("#level-title").text("Level " + level);
        newSequence();
        started = true;
    }
});
$(".btn").on("click", function () {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animate(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
})

function newSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var n = Math.random();
    var randomNumber = Math.floor(n * 4);


    var randomChosenColor = colors[randomNumber];

    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);


}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();


}
function animate(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);

}
function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("success");



        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                newSequence();
            }, 1000);
        }
    }
    else {
        var y = 'wrong';
        console.log("wrong");
        playSound(y);
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over Press any key to restart");
        startOver();
        
    }
}
function startOver(){
    level = 0;
    userClickedPattern =[];
    gamePattern = [];
    started = false;
    
}





console.log(userClickedPattern);

