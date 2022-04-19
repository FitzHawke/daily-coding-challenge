function giveChange(amount) {
    let change = [];
    let bills = [100, 50, 20, 10, 5, 1];
    for (let i = 0; i < 6; i++) {
        let currentBills = Math.floor(amount / bills[i]);
        change.push(currentBills);
        amount -= currentBills * bills[i];
    }
    return change.reverse();
}
