function countPositivesSumNegatives(input) {
    if (input === null) return [];
    let posCount = 0;
    let negSum = 0;
    input.forEach((e) => {
        if (e > 0) posCount++;
        else if (e < 0) negSum += e;
    });

    return posCount === 0 && negSum === 0 ? [] : [posCount, negSum];
}
