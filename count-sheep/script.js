function countSheeps(arrayOfSheep) {
    return arrayOfSheep.reduce((acc, sheep) => {
        if (sheep === true) {
            acc++;
        }
        return acc;
    }, 0);
}
