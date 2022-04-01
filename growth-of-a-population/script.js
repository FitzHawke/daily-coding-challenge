function nbYear(p0, percent, aug, p) {
    let pop = p0;
    let per = percent / 100 + 1;
    for (let i = 1; pop <= p; i++) {
        pop = Math.floor(per * pop);
        pop += aug;
        if (pop >= p) {
            return i;
        }
    }
}
