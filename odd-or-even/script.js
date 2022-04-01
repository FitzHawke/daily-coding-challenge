function oddOrEven(array) {
    const sum = array.reduce((acc, n) => (acc += n), 0);
    return sum % 2 === 0 ? "even" : "odd";
}
