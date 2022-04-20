function openOrSenior(data) {
    let category = [];
    data.forEach((ele) => {
        if (ele[0] >= 55 && ele[1] > 7) {
            category.push("Senior");
        } else {
            category.push("Open");
        }
    });
    return category;
}
