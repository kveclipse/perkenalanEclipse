let guestName =
localStorage.getItem("guestName");

document.getElementById(
"playerName"
).innerHTML =
guestName;

let score =
localStorage.getItem("score");
if(score == null){
    score = 0;
}

document.getElementById(
"score"
).innerHTML =
score;

const character =
document.getElementById(
"character"
);

character.addEventListener(
"click",

function(){
    score++;
    document.getElementById(
    "score"
    ).innerHTML =
    score;
    localStorage.setItem(
    "score",
    score
    );
    character.classList.add(
    "hit"
    );
    setTimeout(()=>{
        character.classList.remove(
        "hit"
        );
    },200);
});

function resetGame(){

    score = 0;

    localStorage.setItem(
    "score",
    score
    );

    document.getElementById(
    "score"
    ).innerHTML =
    score;
}
