var humanYearsCatYearsDogYears = function (humanYears) {
    let dogYears = 0,
        catYears = 0;
    for (let i = 1; i <= humanYears; i++) {
        switch (i) {
            case 1:
                catYears += 15;
                dogYears += 15;
                break;
            case 2:
                catYears += 9;
                dogYears += 9;
                break;
            default:
                catYears += 4;
                dogYears += 5;
                break;
        }
    }
    return [humanYears, catYears, dogYears];
};
