// Isaac Wu Crystal Collector Game
$(document).ready(function () {

    var winTimes = 0;
    var lossTimes = 0;
    var totalScore = 0;

    var randomNum = Math.floor(Math.random() * 101) + 19;
    console.log(randomNum);
    var coinNum1 = Math.floor(Math.random() * 4) + 9;
    console.log(coinNum1);
    var coinNum2 = Math.floor(Math.random() * 3) + 6;
    console.log(coinNum2);
    var coinNum3 = Math.floor(Math.random() * 3) + 3;
    console.log(coinNum3);
    var coinNum4 = Math.floor(Math.random() * 2) + 1;
    console.log(coinNum4);

    function reset (){
        randomNum = Math.floor(Math.random() * 101) + 19;
        coinNum1 = Math.floor(Math.random() * 4) + 9;
        coinNum2 = Math.floor(Math.random() * 3) + 6;
        coinNum3 = Math.floor(Math.random() * 3) + 3;
        coinNum4 = Math.floor(Math.random() * 2) + 1;
        $("#random-number").text(randomNum);
        totalScore = 0;
        $("#total-score").empty();
    }

    //==== Box1 random coin:
    $("#random-number").text(randomNum);

    //==== Box2 total score & Box-set questions/coins:
    // #coin1
    $("#coin1").on("click", function () {
        totalScore += coinNum1; // totalScore = totalScore + coinNum1;
        console.log(totalScore);
        $("#total-score").text(totalScore);
        $("#mariocontain").html('<img src="assets/images/coin3.gif" class="mariopic">');
        var boxSound = new Audio('assets/sound/smb_coin.mp3');
        boxSound.play();
        decide();
    })
    // #coin2
    $("#coin2").on("click", function () {
        totalScore += coinNum2;
        console.log(totalScore);
        $("#total-score").text(totalScore);
        $("#mariocontain").html('<img src="assets/images/coin3.gif" class="mariopic">');
        boxSound = new Audio('assets/sound/smb_coin.mp3');
        boxSound.play();
        decide();
    })
    // #coin3
    $("#coin3").on("click", function () {
        totalScore += coinNum3;
        console.log(totalScore);
        $("#total-score").text(totalScore);
        $("#mariocontain").html('<img src="assets/images/coin3.gif" class="mariopic">');
        boxSound = new Audio('assets/sound/smb_coin.mp3');
        boxSound.play();
        decide();
    })
    // #coin4
    $("#coin4").on("click", function () {
        totalScore += coinNum4;
        console.log(totalScore);
        $("#total-score").text(parseInt(totalScore));
        $("#mariocontain").html('<img src="assets/images/coin3.gif" class="mariopic">');
        boxSound = new Audio('assets/sound/smb_coin.mp3');
        boxSound.play();
        decide();
    })
    //#clear
    $("#clear").on("click", function () {
        reset();
        var clearSound = new Audio('assets/sound/smb_bricksmash.mp3');
        clearSound.play();
    });

    // totalScore = randomNum;

    //==== Box3 condition wins/losses times & Box4 mario coin picture:
    function decide(){
    if (totalScore === randomNum) {
        winTimes++;
        $("#wins").text(winTimes);
        $("#result").text("You Win !");
        $("#mariocontain").html('<img src="assets/images/coin4.gif" class="mariopic">');
        var winSound = new Audio('assets/sound/sm64_1-up.mp3');
        winSound.play();
        reset();
    } else if (totalScore > randomNum) {
        lossTimes++;
        $("#losses").text(lossTimes);
        $("#result").text("Oh No !");
        $("#mariocontain").html('<img src="assets/images/gameover.jpg" class="mariopic">');
        var lossSound = new Audio('assets/sound/smb_mariodie.mp3');
        lossSound.play();
        reset();
    } else {
        $("#result").text("");
    }
}

});