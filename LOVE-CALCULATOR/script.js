/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/


function calculateLove(){
    var random = Math.random();
    random = (random * 100) + 1;
    random = Math.floor(random);
    var p = document.createElement("p");
    var text = document.createTextNode(random + "%");
    p.appendChild(text);
    document.getElementById("lovePercentage").appendChild(p);
}
