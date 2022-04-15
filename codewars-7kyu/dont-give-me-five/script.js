function dontGiveMeFive(start, end) {
    let number = 0;
    for (let i = start; i <= end; i++) {
        if (!i.toString().includes("5")) number++;
    }
    return number;
}
