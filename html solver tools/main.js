function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}

function checkNum(num) {
	if (isFloat(num) && toString(num).split( '.' ).pop().length > 3) {
		num = num.toFixed(4);
	}
	return num;
}

function sqrtNum(num)
{
	if (num === 0 || num === 1)
		return num;
	if (num <= Number.MAX_SAFE_INTEGER) {
		for (let i = 1; i <= (num / 2); i++) {
			if (num / i == i) {
				return i;
			}
			 i++;
		}
	}
	return 0;
}

function quad(a, b, c) {
	if (a == 0) return "Ошибка, а = 0 недопустимое значение!";
	const D = b * b - 4 * a * c;
	let x1, x2;
	if(D > 0) {

		x1 = checkNum((-b + sqrtNum(D)) / ( 2 * a));
		x2 = checkNum((-b - sqrtNum(D)) / ( 2 * a));

		return ("Коэффициенты: a = " + a + ", b = " + b + ", c = " + c + "\
		\nКорни уравнения:\n X1 = " + x1 + ", X2 = " + x2 + "\nДискриминант (D) = " +D);
	}
	else if (D == 0) {
		x1 = -b/(2 * a);
		return ("Коэффициенты: a = " + a + ", b = " + b + ", c = " + c + "\
		\nКорень уравнения: X = " + x1 + "\nДискриминант (D) = " + D);
	}
	else if (D < 0) {
		return ("Коэффициенты: a = " + a + ", b = " + b +  ", c = " + c + "\
		\nКорней нет!\nДискриминант (D) = " + D);
	}
}

function prog() {
	const a = document.getElementById('a').value;
	const b = document.getElementById('b').value;
	const c = document.getElementById('c').value;

	const result = quad(a, b, c);
	document.getElementById('result').textContent = result;
	document.getElementById('otvet').style.display = 'block';
	
}
