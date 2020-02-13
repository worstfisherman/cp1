
function sqrtNum(num)
{
	if (num === 0 || num === 1)
		return num;
	if (num <= Number.MAX_SAFE_INTEGER) {
		for (let i = 1; i <= (num / 2); i++) {
			if (num / i == i) {
				return i;
			}
			console.log("i = " + i);
			i++;
		}
	}
	return 0;
}

console.log(Number.MAX_SAFE_INTEGER);

let a = sqrtNum(Number.MAX_SAFE_INTEGER);

console.log(a + "\n");

let b = Math.sqrt(Number.MAX_SAFE_INTEGER + Number.MAX_SAFE_INTEGER);

console.log(b + "\n");