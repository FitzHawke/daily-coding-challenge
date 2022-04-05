function dashatize(num) {
    if (isNaN(num)) {
        return "NaN";
    } else if (num < 0) {
        num = Math.abs(num);
    }

    let arr = num.toString().split("");

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0 && arr[i] !== "-") {
            if (i + 1 < arr.length) {
                arr.splice(i + 1, 0, "-");
            }
            if (i !== 0 && arr[i - 1] !== "-") {
                arr.splice(i, 0, "-");
                i++;
            }
        }
    }

    return arr.join("");
}