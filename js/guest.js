let playerData =
localStorage.getItem(
"playerData"
);

if(!playerData){
    const randomID =
    "GS-" +
    Math.random()
    .toString(36)
    .substring(2,10)
    .toUpperCase();
    const guestNumber =
    Math.floor(
    Math.random() * 9999
    );

    const newPlayer = {
        guestID:
        randomID,
        username:
        "Guest_" + guestNumber,
        role:
        "Traveler",
        level:
        1,
        score:
        0,
        highscore:
        0,
        click:
        0,
        joinDate:
        new Date()
        .toLocaleDateString(),
        theme:
        "silver-gold"
    };

    localStorage.setItem(
    "playerData",
    JSON.stringify(newPlayer)
    );

    playerData =
    newPlayer;

}else{
    playerData =
    JSON.parse(playerData);
}

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

playerData.level =
Math.floor(
playerData.score / 100
) + 1;

localStorage.setItem(
"playerData",
JSON.stringify(playerData)
);

const guestName =
document.getElementById(
"guestName"
);

if(guestName){

    guestName.innerHTML =
    playerData.username;
}

const guestRole =
document.getElementById(
"guestRole"
);

if(guestRole){

    guestRole.innerHTML =
    playerData.role;
}

const guestLevel =
document.getElementById(
"guestLevel"
);

if(guestLevel){

    guestLevel.innerHTML =
    "Level " +
    playerData.level;
}

const guestScore =
document.getElementById(
"guestScore"
);

if(guestScore){
    guestScore.innerHTML =
    playerData.score;
}


const guestID =
document.getElementById(
"guestID"
);

if(guestID){
    guestID.innerHTML =
    playerData.guestID;
}


console.log(
"PLAYER DATA :",
playerData
);
