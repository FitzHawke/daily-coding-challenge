function isNarcissistic(n) {
    let num = n.toString().split("");
    let total = 0;
    num.forEach((ele) => {
        total += ele ** num.length;
    });
    return n == total;
}
