// Isaac Wu Crystal Collector Game
$(document).ready(function () {

    // function reset() {
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
    // }

    //==== Box1 random coin:
    $("#random-number").append(randomNum);

    //==== Box2 total score & Box-set questions/coins:
    // #coin1
    $("#coin1").on("click", function () {
        totalScore = totalScore + coinNum1;
        console.log(totalScore);
        $("#total-score").append(totalScore);
    })
    // #coin2
    $("#coin2").on("click", function () {
        totalScore = totalScore + coinNum2;
        console.log(totalScore);
        $("#total-score").append(totalScore);
    })
    // #coin3
    $("#coin3").on("click", function () {
        totalScore = totalScore + coinNum3;
        console.log(totalScore);
        $("#total-score").append(totalScore);
    })
    // #coin4
    $("#coin4").on("click", function () {
        totalScore = totalScore + coinNum4;
        console.log(totalScore);
        $("#total-score").append(parseInt(totalScore));
    })
    //#clear
    $("#clear").on("click", function () {
        winTimes = 0;
        lossTimes = 0;
        totalScore = 0;
        randomNum = Math.floor(Math.random() * 101) + 19;
        coinNum1 = Math.floor(Math.random() * 4) + 9;
        coinNum2 = Math.floor(Math.random() * 3) + 6;
        coinNum3 = Math.floor(Math.random() * 3) + 3;
        coinNum4 = Math.floor(Math.random() * 2) + 1;
        $("#coin1, #coin2, #coin3, #coin4, #total-score").empty();
    });

    //==== Box3 condition wins/losses times:
    if (totalScore === randomNum) {
        winTimes++;
        $("#result").text("Yes You Win !");
    } else if (totalScore > randomNum) {
        lossTimes++;
        $("#result").text("Oh No !");
    } else {
        $("#result").text("Here we go !");
    }
    // #wins
    $("#wins").append(winTimes);
    // #losses
    $("#losses").append(lossTimes);

    // totalScore = randomNum;
    // $("#total-score").append(totalScore);

    //==== Box4 mario coin picture:
});