function sqrtNewtonMethod(number) {
    let i = 0, x, t, squareRoot = number / 2;     
    do {
        t = squareRoot;
    x = number / t;
        squareRoot = (t + x) / 2;
    i++;
    } while ((t - squareRoot) != 0);   
  return ${i} iterations and result = ${squareRoot};
}

for (let i = 1; i < 100; i++) {
  console.log(sqrtNewtonMethod(i*i));
}