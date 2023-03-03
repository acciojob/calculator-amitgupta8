let input = document.getElementById('input');

function addToInput(val) {
	input.value += val;
}

function clearInput() {
	input.value = '';
}

function calculate() {
	try {
		let result = eval(input.value);
		if (result === Infinity) {
			input.value = 'Infinity';
		} else if (isNaN(result)) {
			input.value = 'NaN';
		} else {
			input.value = result;
		}
	} catch (err) {
		input.value = 'Error';
	}
}
