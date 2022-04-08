function ipsBetween(start, end) {
    let startArr = start.split(".").reverse();
    let endArr = end.split(".").reverse();
    let totalIP = 0;

    for (let i = 0; i < startArr.length; i++) {
        totalIP += (endArr[i] - startArr[i]) * 256 ** i;
    }

    return totalIP;
}
