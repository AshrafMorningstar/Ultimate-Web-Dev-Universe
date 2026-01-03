/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

document.getElementById("btn").addEventListener("click", function() {
	let your_string = document.getElementById('string').value;
	let string_length = your_string.length;
	let string_rev = your_string.split("").reverse().join("");
	let new_string = your_string.toUpperCase();
	let new_revstring = string_rev.toUpperCase();

	if (new_string == new_revstring) {
		document.getElementById('stringPal').value = "Yes";
	} else {
		document.getElementById('stringPal').value = "No";
	}

	document.getElementById('stringLength').value = string_length;
});

