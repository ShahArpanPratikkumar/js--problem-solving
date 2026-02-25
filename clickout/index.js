var currentScore = document.querySelector('#currentScore');
var highScore = document.querySelector('#highScore');
var timer = document.querySelector('#timer');
var clickButton = document.querySelector('#clickButton');
var startButton = document.querySelector('#startButton');
var pauseButton = document.querySelector('#pauseButton'); // Pause button
var resumeButton = document.querySelector('#resumeButton'); // Resume button
var resetButton = document.querySelector('#resetButton');
var statusMessage = document.querySelector('#statusMessage');

var current = 0;
var high = 0;
var time1 = 10;
var track = false;
var paused = false;
var idTrack = null;

function loadContent(){
    dataLoad();
    displayMessage();
}

function dataLoad(){
    var temp = localStorage.getItem('highScore');
    if(temp != null){
        high = parseInt(temp);
    } else {
        high = 0;
    }
}

function displayMessage(){
    currentScore.textContent = current;
    highScore.textContent = high;
    timer.textContent = time1;
}

function statuMsg(msg){
    statusMessage.textContent = msg;
}

function endGame(){
    clearInterval(idTrack);
    track = false;
    clickButton.disabled = true;
    startButton.disabled = false;
    pauseButton.disabled = true;
    resumeButton.disabled = true;

    if(current > high){
        localStorage.setItem('highScore', current);
        high = current;
        displayMessage();
        statuMsg("🎉 Great job! New high score! 🏆");
        alert("🎉 Congratulations! You set a new high score! Keep up the speed! 🥳");
    } else {
        statuMsg("😕 Oops! Try again to beat your high score!");
        alert("😕 You didn’t beat your high score this time. Try again to improve! 💪");
    }
}

function startGame(){
    track = true;
    paused = false;
    time1 = 10;
    current = 0;
    clickButton.disabled = false;
    startButton.disabled = true;
    pauseButton.disabled = false;
    resumeButton.disabled = true;
    statuMsg("🚀 Game started! Click as fast as you can!");
    idTrack = setInterval(function(){
        if(!paused){
            time1--;
            if(time1 <= 0){
                endGame();
            }
            displayMessage();
        }
    }, 1000);
}

function clickMe(){
    if(track && !paused){
        current++;
        displayMessage();
    }
}

function pauseGame(){
    if(track && !paused){
        paused = true;
        clickButton.disabled = true;
        pauseButton.disabled = true;
        resumeButton.disabled = false;
        statuMsg("⏸️ Game paused!");
    }
}

function resumeGame(){
    if(track && paused){
        paused = false;
        clickButton.disabled = false;
        pauseButton.disabled = false;
        resumeButton.disabled = true;
        statuMsg("▶️ Game resumed! Keep clicking!");
    }
}

function resetGame(){
    localStorage.removeItem('highScore');
    high = 0;
    current = 0;
    time1 = 10;
    displayMessage();
    statuMsg("🔄 Game reset. Ready for a fresh start!");
    clearInterval(idTrack);
    track = false;
    paused = false;
    startButton.disabled = false;
    clickButton.disabled = true;
    pauseButton.disabled = true;
    resumeButton.disabled = true;
}

startButton.addEventListener('click', startGame);
clickButton.addEventListener('click', clickMe);
pauseButton.addEventListener('click', pauseGame);
resumeButton.addEventListener('click', resumeGame);
resetButton.addEventListener('click', resetGame);
