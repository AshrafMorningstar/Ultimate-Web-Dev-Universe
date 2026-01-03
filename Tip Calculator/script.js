/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

const tipcalc = () => {
	let amount = document.getElementById('bill_amount').value;


	let perc = document.getElementById('tip_perc').value;

	let tip = amount * (perc / 100);


	let total = tip + Number(amount);


	document.getElementById('tip_amount').value = tip;
	document.getElementById('bill_total').value = total;
}
