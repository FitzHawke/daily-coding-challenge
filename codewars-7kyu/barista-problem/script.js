function barista(coffees) {
    let totalTime = 0;
    coffees.sort((a, b) => b - a);

    for (let i = 0; i < coffees.length; ) {
        let addedTime = coffees.pop();
        totalTime += (2 + addedTime) * coffees.length + addedTime;
    }

    return totalTime;
}
