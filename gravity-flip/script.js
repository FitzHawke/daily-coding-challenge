const flip = (d, a) => {
    if (d === "L") {
        return a.sort((x, y) => (x <= y ? 1 : -1));
    } else if (d === "R") {
        return a.sort((x, y) => (x >= y ? 1 : -1));
    }
};
