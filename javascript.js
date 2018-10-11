console.log('Calculator started');

var input_a = document.getElementById('number_a'); // pasiimama elementa
var input_b = document.getElementById('number_b');

var btn_sum = document.getElementById('btn_sum')
var btn_empty = document.getElementById('btn_empty')

btn_sum.addEventListener('click', sum);
btn_empty.addEventListener('click', empty);

input_a.addEventListener('keyup', sum);
result.addEventListener('mouseenter', sum);

var results = []; 

function sum() {
	var a = parseInt(input_a.value); //parseInt is elemento teksto keicia i skaiciu
	var b = parseInt(input_b.value);

	if (a > 100) {
		alert("nuber A is above 100");
		input_a.style.color = 'red'; // .style. (keicia stiliu)
		input_b.style.color = 'red';
	} else {
		var sum = a + b;
		console.log(sum);
		var eur = convert_to_eur(sum);
		result.innerHTML = sum + ' ( Eur: ' + eur + ')'; // result. (id="rezult")
		input_a.style.color = 'green';
		input_b.style.color = 'green';
		
		results.push(sum); // ideda duomenis i results masyva
		console.log(results);	
	}
}

function empty() {
	result.innerHTML = "X";
	input_a.value = 0; 
	input_b.value = 0;
}

function convert_to_eur(amount) {
	var result = amount / 3.4528
	result = Math.round(result);
	
	if (amount < 100) {
		result--;
		return result;
	}
}

