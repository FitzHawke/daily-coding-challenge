function filter_list(l) {
    let numL = [];
    l.forEach((ele) => {
        if (typeof ele === "number") numL.push(ele);
    });
    return numL;
}
