let idx, deg, bigDeg = -1, indices = [];

//str = "x";
const degreeSign = '^';
const isDigit = (c) => c >= '0' && c  <= '9';

idx = str.indexOf(degreeSign);
if (idx !== -1) {

	while (idx != -1) {
		indices.push(idx);
		idx = str.indexOf(degreeSign, idx + 1);
	}

	for (let i = 0; i < indices.length; i++) {

		let j = indices[i] + 1, num = "";
		
		while (!isDigit(str[j])) {
	    	j++;
		}

		for (;isDigit(str[j]);j++) {
	    	num += str[j];
		}

		deg = parseInt(num);
		if (deg > bigDeg) {
			bigDeg = deg;
		}
	}

}

else if (idx === -1 && (str.indexOf("x") !== -1 || str.indexOf("X") !== -1 )) {
	bigDeg = 1;
}
else {
	bigDeg = 0;
}

console.log(bigDeg);