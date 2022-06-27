let rollDice_Btn = document.getElementById("btn btn--roll").onclick = rollDice;
let newGame_Btn = document.querySelector(".btn--new").onclick = setNewGame;
let hold_Btn = document.querySelector(".btn--hold").onclick = holdFnc;
let player1_totalScore = document.getElementById("score--0")
let player2_totalScore = document.getElementById("score--1")
let player1_current = document.getElementById("current--0")
let player2_current = document.getElementById("current--1")

init_game()

let actual_player = "player 1";

const player1 = {
    name: "player 1",
    current: 0,
    total: 0
}

const player2 = {
    name: "player 2",
    current: 0,
    total: 0
}

function genRandom(min = 1, max = 6){
    let dif = max - min;
    let rand = Math.random();
    rand = Math.floor(rand*dif);
    rand = rand + min;
    return rand;
}

function init_game(){
    player1_totalScore.innerHTML = 0
    player2_totalScore.innerHTML = 0

    player1_current.innerHTML = 0
    player2_current.innerHTML = 0
}

function setNewGame(){
    player1.total = 0;
    player1.current = 0;
    player2.total = 0;
    player2.current = 0;
    player1_totalScore.innerHTML = 0;
    player2_totalScore.innerHTML = 0;

    player1_current.innerHTML = 0;
    player2_current.innerHTML = 0;

    actual_player = "player 1";
    if(document.querySelector(".player--0").classList.contains("player--winner")){
        document.querySelector(".player--0").classList.remove("player--winner");
        document.querySelector(".player--0").classList.add("player--active");
    }
    if(document.querySelector(".player--1").classList.contains("player--winner")){
        document.querySelector(".player--0").classList.remove("player--winner");
        
    }
}

function holdFnc(){

    if (actual_player == "player 1"){
        player1.total += player1.current;
        player1.current = 0;
        player1_totalScore.innerHTML = player1.total;
    }   
    else{
        player2.total += player2.current;
        player2.current = 0;
        player2_totalScore.innerHTML = player2.total;
    }
    checkWinner();
    changePlayer();
}

function checkWinner(){
    if(actual_player=="player 1"){
        if(player1.total >=100){
            document.querySelector(".player--0").classList.remove("player--active");
            document.querySelector(".player--0").classList.add("player--winner");
        }
    }
    else{
        if(player2.total >=100){
            document.querySelector(".player--1").classList.remove("player--active");
            document.querySelector(".player--1").classList.add("player--winner");
        }
    }
}

function rollDice(){
    let randNum = genRandom()
    switch(randNum){
        case 1:
            document.getElementById("dice").src = "dice-1.png";
            break;
        case 2:
            document.getElementById("dice").src = "dice-2.png";
            break;
        case 3:
            document.getElementById("dice").src = "dice-3.png";
            break;
        case 4:
            document.getElementById("dice").src = "dice-4.png";
            break;
        case 5:
            document.getElementById("dice").src = "dice-5.png";
            break;
        case 6:
            document.getElementById("dice").src = "dice-6.png";
            break;                    
        }
    actual_turn(randNum);
}

function changePlayer(){
    if(actual_player=="player 1"){
        actual_player = "player 2";
        player1_current.innerHTML = 0;
        player1.current = 0;
        document.querySelector(".player--0").classList.remove("player--active");
        document.querySelector(".player--1").classList.add("player--active");
    }
    else{
        actual_player = "player 1";
        player2_current.innerHTML = 0;
        player2.current = 0;
        document.querySelector(".player--0").classList.add("player--active");
        document.querySelector(".player--1").classList.remove("player--active");
    }
}

function actual_turn(diceNumber){
    if (diceNumber == 1){
        changePlayer();
        return;
    }
    if (actual_player == "player 1"){
        player1.current += diceNumber;
    }
    else{
        player2.current += diceNumber;
    }
    player1_current.innerHTML = player1.current;
    player2_current.innerHTML = player2.current;
}


