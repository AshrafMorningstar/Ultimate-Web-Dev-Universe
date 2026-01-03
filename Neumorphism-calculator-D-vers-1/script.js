/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

let outputScreen=document.getElementById("output-screen");

function display(num) {
    outputScreen.value += num;
}

function calculate() {
   try{ outputScreen.value = eval(outputScreen.value);}
   catch (err) {
       alert("Invalid equation!")
   }
}

function allClear() {
    outputScreen.value = "";
}

function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}
