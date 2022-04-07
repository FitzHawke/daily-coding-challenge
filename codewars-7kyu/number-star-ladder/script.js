function pattern(n) {
    var output = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            if (j === 1 && j !== i) {
                output += "1*";
            } else if (j === i) {
                output += i;
                if (j !== n) {
                    output += "\n";
                }
            } else {
                output += "*";
            }
        }
    }
    return output;
}
