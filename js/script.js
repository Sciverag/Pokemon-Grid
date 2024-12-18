const character = document.getElementById("character");
let forwards = false;

setInterval(() => {
    if(forwards){
        character.setAttribute("class","backwards");
        forwards = false;
    }else{
        character.setAttribute("class","forwards");
        forwards = true;
    }
},10000)