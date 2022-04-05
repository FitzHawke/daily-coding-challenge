function diamond(n) {
    if (n <= 0 || n % 2 === 0) {
        return null;
    }
    let spaces = (n - 1) / 2;
    let switchDir = false;
    let diam = "";

    for (let i = 1; i <= n; i++) {
        if (spaces > 0) {
            for (let j = 0; j < spaces; j++) {
                diam += " ";
            }
        } else if (spaces === 0) {
            switchDir = true;
        }

        for (let k = 0; k < n - spaces * 2; k++) {
            diam += "*";
        }

        if (switchDir === true) {
            spaces++;
        } else if (switchDir === false) {
            spaces--;
        }

        diam += "\n";
    }

    return diam;
}
