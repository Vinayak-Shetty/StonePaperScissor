$(".btn").click(function (event) {
    $(".your-hand i").removeClass();
    $(".computer-hand i").removeClass();
    var buttonPressed = $(this)[0].id;
    console.log(buttonPressed);
    startGame(buttonPressed);
})

function startGame(userHand) {
    $(".visibility").css("display", "inline-block")
    console.log("Games started");
    var hands = ["stone", "paper", "scissors"];
    var randNumber = Math.floor(Math.random() * 3);
    console.log(randNumber)
    var computerHand = hands[randNumber];
    var userHand = userHand;
    console.log("User Hand = " + userHand);
    console.log("Computer hand = " + computerHand);
    addHands(userHand, computerHand);
    console.log("Selected images added.");
    var winner = checkWinner(userHand, computerHand);
    //Increment Count
    if(winner === "You Win"){
        var userCount = $(".you-score").text();
        console.log("User Count = "+userCount)
        userCount ++;
        $(".you-score").text(userCount);
    }
    else if(winner === "Computer Wins"){
        var computerCount = $(".computer-score").text();
        console.log("Computer Count = "+computerCount)
        computerCount ++;
        $(".computer-score").text(computerCount);
    }
    $(".result").text(winner);
    console.log("UserCount = "+userCount);
    console.log("ComputerCount = "+computerCount);
}

function addHands(userHand, computerHand) {
    if (userHand === "stone") {
        $(".your-hand i").addClass("far fa-hand-rock")
    }
    if (userHand === "paper") {
        $(".your-hand i").addClass("far fa-hand-paper")
    }
    if (userHand === "scissors") {
        $(".your-hand i").addClass("far fa-hand-scissors")
    }
    if (computerHand === "stone") {
        $(".computer-hand i").addClass("far fa-hand-rock")
    }
    if (computerHand === "paper") {
        $(".computer-hand i").addClass("far fa-hand-paper")
    }
    if (computerHand === "scissors") {
        $(".computer-hand i").addClass("far fa-hand-scissors")
    }
}

function checkWinner(userHand, computerHand, userCount, computerCount) {

    if(userHand === computerHand){
        return "Draw";
    }
    if (computerHand === "stone" & userHand === "scissors") {
        return "Computer Wins";
    }
    else if (computerHand === "stone" & userHand === "paper") {
        return "You Win";
    }
    else if (userHand === "stone" && computerHand === "paper") {
        return "Computer Wins";
    }
    else if (userHand === "stone" && computerHand === "scissors"){
        return "You Win";
    }
    else if (userHand === "paper" && computerHand === "scissors") {
        return "Computer Wins";
    }
    else if (userHand === "scissors" && computerHand === "paper"){
        return "You Win";
    }

}