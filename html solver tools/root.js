function sqrtNewtonMethod(number) {
    let t, squareRoot = number / 2;     
    do {
        t = squareRoot;
        let x = number / t;
        squareRoot = (t + x) / 2;
    } while ((t - squareRoot) != 0);     
    return squareRoot;
}

let number = 2624;

console.log(sqrtNewtonMethod(number));