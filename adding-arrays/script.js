function arrAdder(arr) {
    let addedArr = "";

    for (let i = 0; i < arr[0].length; i++) {
        for (let j = 0; j < arr.length; j++) {
            addedArr += arr[j][i];
        }
        if (i !== arr[0].length - 1) {
            addedArr += " ";
        }
    }
    return addedArr;
}
