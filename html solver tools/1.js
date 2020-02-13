/*let str = "5 + 4 * X + X^2= X^2";

let resultX = str.match(/X/g);

let resultDeg = str.match(/\^/g);
console.log( resultX.length);     // JavaScript (всё совпадение)
console.log( resultDeg.length);

if (resultDeg != resultX) {

}
*/

//console.log( result[1] );     // Script (первые скобки)
//console.log( result.length ); // 2

// Дополнительная информация:
//console.log( result.index );  // 7 (позиция совпадения)
//console.log( result.input );  // I love JavaScript (исходная строка)

let str = "x5 + 4 * X + X^2= X^2";

let resultX = str.indexOf("x");

let resultDeg = str.indexOf("X");

//indexOf()
//console.log( resultX.length);     // JavaScript (всё совпадение)
console.log( resultDeg);
console.log( resultX);

if (resultDeg === 0 ||  resultX === 0) {
		console.log("gotcha!");
}
//console.log( result[1] );     // Script (первые скобки)
//console.log( result.length ); // 2

// Дополнительная информация:
//console.log( result.index );  // 7 (позиция совпадения)
//console.log( result.input );  // I love JavaScript (исходная строка)