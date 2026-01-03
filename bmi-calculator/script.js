/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

function bmi(){
	let h=document.getElementById("h").value;
	let w=document.getElementById("w").value;
	let ans=w/(h/100*h/100);
	let bmio=(ans.toFixed(2));
	document.getElementById("result").innerHTML="Your BMI is "+bmio;
}

