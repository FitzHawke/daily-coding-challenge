function firstNonConsecutive(arr) {
    let num = null;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - 1 !== arr[i - 1]) {
            num = arr[i];
            break;
        }
    }
    return num;
}
