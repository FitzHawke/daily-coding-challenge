const squareOrSquareRoot = (array) =>
    array.map((num) => (Math.sqrt(num) % 1 == 0 ? Math.sqrt(num) : num ** 2));
