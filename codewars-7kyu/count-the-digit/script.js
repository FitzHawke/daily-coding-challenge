function nbDig(n, d) {
    let squares = [];
    for (let i = 0; i <= n; i++) {
        squares.push(`${i ** 2}`);
    }
    return squares.reduce((acc, square) => {
        return (acc += square.split("").filter((e) => e == d).length);
    }, 0);
}
