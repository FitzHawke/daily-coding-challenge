function squareDigits(num) {
    arr = [];
    num.toString()
        .split("")
        .forEach((n) => arr.push(n ** 2));
    return Number(arr.join(""));
}
