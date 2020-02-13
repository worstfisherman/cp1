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
	if (num < 0){
		return NaN;
	}
	else if (num === 0 || num === 1){
		return num;
	}
	let val, root = num / 2;     
    do {
        val = root;
        const x = num / val;
        root = (val + x) / 2;
    } while ((val - root) !== 0);     
    return root;
}

function quad(a, b, c) {
	if (a == 0) {
		return "Ошибка, а = 0 недопустимое значение!";
	}
	const D = b * b - 4 * a * c;
	let x1, x2;
	if(D > 0) {
		let x0 = sqrtNum(D);
		x1 = checkNum((-b + x0) / ( 2 * a));
		x2 = checkNum((-b - x0) / ( 2 * a));
		return ("Коэффициенты: a = " + a + ", b = " + b + ", c = " + c + "\
		\nКорни уравнения:\n X1 = " + x1 + ", X2 = " + x2 + "\
		\nДискриминант (D) = " +D);
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

function prog(a, b, c) {
	const result = quad(a, b, c);
	console.log(result);
}

function testManualValues() {
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Введите Коэффициенты a, b, c:\n', (answer) => {

const kf = answer.split(', ');
let a = kf[0], b = kf[1], c = kf[2];
console.log(a, b, c);
prog(a, b, c);
 rl.close();
});
}

function testDefinedValues() {

console.log("Test 1:");
let a = 1, b = -2, c = -3; // X1 = 3, X2 = -1, D = 16
prog(a, b, c);
console.log("Answer 1:\n X1 = 3, X2 = -1, D = 16\n");

console.log("Test 2:");
a = -1, b = -2, c = 15; // X1 = -5, X2 = 3, D = 64
prog(a, b, c);
console.log("Answer 2:\n X1 = -5, X2 = 3, D = 64\n");

console.log("Test 3:");
a = 1, b = 12, c = 36; // X1 = -6, D = 0
prog(a, b, c);
console.log("Answer 3:\n X1 = -6, D = 0\n");

console.log("Test 4:");
a = 1, b = 2, c = 20; // Корней нет, D = -76
prog(a, b, c);
console.log("Answer 4:\n Корней нет, D = -76\n");

console.log("Test 5:");
a = 1, b = 52, c = 20; // X1 = -0.3875, X2 = -51.6125, D = 2624
prog(a, b, c);
console.log("Answer 5:\n X1 = -0.3875, X2 = -51.6125, D = 2624\n");

let maxInt = Number.MAX_SAFE_INTEGER;
console.log("Test 6:");
a = maxInt, b = maxInt, c = maxInt; // Корней нет! D = -2.4338891524381997e+32
prog(a, b, c);
console.log("Answer 6:\n Корней нет! D = -2.4338891524381997e+32\n");

}

//testManualValues();
testDefinedValues();