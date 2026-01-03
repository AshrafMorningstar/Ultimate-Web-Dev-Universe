/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value =string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value= string;
        }

        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        
        else{ string += e.target.innerHTML;
            input.value = string;

        }
       
    })
})
