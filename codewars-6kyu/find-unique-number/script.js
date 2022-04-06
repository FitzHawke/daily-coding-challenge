function findUniq(arr) {
    arr.sort();
    if (arr[0] !== arr[1]) {
        return arr[0];
    } else if (arr[arr.length - 1] !== arr[arr.length - 2]) {
        return arr[arr.length - 1];
    }
}
