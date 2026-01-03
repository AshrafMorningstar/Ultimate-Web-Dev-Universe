/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

const character = document.querySelector(".dino");
const block = document.querySelector(".cactus");

const jump = () => {
   
    character.classList.add('animate');
    setTimeout(function() {
        character.classList.remove('animate')
    }, 500)
}

var checkDead = setInterval(function() {
    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var charactertop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    console.log(charactertop)
    console.log(blockleft)
    if(blockleft < 5 && charactertop >= 178) {
        block.style.animation="none";
        block.style.display="none"
        alert("Uh..Oh, you lose.");
    }
}
, 100)