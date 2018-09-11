$(document).ready(function() {

    var toll;
    var tollDisplay = $(".toll");
    // arr crystalArray 
    var crystal1btn = $(".crystal-1");
    var crystal2btn = $(".crystal-2");
    var crystal3btn = $(".crystal-3");
    var crystal4btn = $(".crystal-4");
    var crystalValue1;
    var crystalValue2;
    var crystalValue3;
    var crystalValue4;
    var runningTotal = 0;
    var winTotal = 0;
    var lossTotal = 0;

    function setToll() {
        toll = Math.floor(Math.random()*10) * 10 + 19;
        tollDisplay.html("<p>" + toll + "</p>");
    }

//I want to create a for loop but I'm not sure how 
    function setCrystals() {
        crystalValue1 = Math.floor(Math.random()*11) + 1;
        crystalValue2 = Math.floor(Math.random()*11) + 1;
        crystalValue3 = Math.floor(Math.random()*11) + 1;
        crystalValue4 = Math.floor(Math.random()*11) + 1;
    }

    function showTotal () {
        $(".score-display").text(runningTotal);
    }

    function newGame () {
        setToll();
        setCrystals();
        runningTotal = 0;
        showTotal();
    }

    function win() {
        winTotal ++;
        $(".win-total").text(winTotal);
        if(winTotal === 1) {
            $(".result-text").text("Fantastic! You are free!");
        } else if (winTotal > 1) {
            $(".result-text").text("Well Done! But, seriously--you know you can leave, right?")
        }
        newGame();
    }

    function lose (){
        lossTotal++;
        $(".loss-total").text(lossTotal);
        $(".result-text").text("Oh no! You went over!")
        newGame();
    }

    crystal1btn.on("click", function(){
        runningTotal += crystalValue1;
        showTotal();
        if (runningTotal === toll){
            win();
        } else if (runningTotal > toll){
            lose();
        }        
    });

    crystal2btn.on("click", function(){
        runningTotal += crystalValue2;
        showTotal();
        if (runningTotal === toll){
            win();
        } else if (runningTotal > toll){
            lose();
        }
    });

    crystal3btn.on("click", function(){
        runningTotal += crystalValue3;
        showTotal();
        if (runningTotal === toll){
            win();
        } else if (runningTotal > toll){
            lose();
        }
    });

    crystal4btn.on("click", function(){
        runningTotal += crystalValue4;
        showTotal();
        if (runningTotal === toll){
            win();
        } else if (runningTotal > toll){
            lose();
        }
    });


    newGame();

    //Music
    var moodMusic = document.createElement("audio");
    moodMusic.setAttribute("src","./assets/Window_Demons.mp3");
    var musicPlaying = false;

    $(".music").on("click", function() {
        if (musicPlaying === false){
            moodMusic.play();
            musicPlaying = true;
            console.log("music playing");
        } else if (musicPlaying === true){
            moodMusic.pause();
            musicPlaying = false;
        }
    });


});