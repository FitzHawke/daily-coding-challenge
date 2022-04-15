function arrayDiff(a, b) {
    for (let i = 0; i < b.length; i++) {
        for (let j = a.length - 1; j >= 0; j--) {
            if (b[i] === a[j]) {
                a.splice(j, 1);
            }
        }
    }
    return a;
}
