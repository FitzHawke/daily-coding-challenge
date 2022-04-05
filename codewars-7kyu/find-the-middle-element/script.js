function gimme(triplet) {
    let a = triplet[0];
    let b = triplet[1];
    let c = triplet[2];

    if ((a - b > 0 && a - c < 0) || (a - b < 0 && a - c > 0)) {
        return 0;
    } else if ((b - a > 0 && b - c < 0) || (b - a < 0 && b - c > 0)) {
        return 1;
    } else if ((c - a > 0 && c - b < 0) || (c - a < 0 && c - b > 0)) {
        return 2;
    }
}
