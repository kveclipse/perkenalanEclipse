let playerData =
localStorage.getItem(
"playerData"
);

if(!playerData){

    const newPlayer = {

        username:
        "Guest_" +
        Math.floor(
        Math.random()*9999
        ),

        role:
        "Traveler",

        score:
        0
    };

    localStorage.setItem(
    "playerData",
    JSON.stringify(newPlayer)
    );

    playerData = newPlayer;

}else{

    playerData =
    JSON.parse(playerData);
}

document.getElementById(
"playerName"
).innerHTML =
playerData.username;

document.getElementById(
"playerRole"
).innerHTML =
playerData.role;

document.getElementById(
"playerScore"
).innerHTML =
playerData.score;

/* AUTO ROLE */

if(playerData.score >= 2500){

    playerData.role =
    "Silver Legend";

}else if(playerData.score >= 1000){

    playerData.role =
    "Golden Hero";

}else if(playerData.score >= 500){

    playerData.role =
    "Guardian";

}else if(playerData.score >= 100){

    playerData.role =
    "Explorer";

}else{
    playerData.role =
    "Traveler";
}


localStorage.setItem(
"playerData",
JSON.stringify(playerData)
);
