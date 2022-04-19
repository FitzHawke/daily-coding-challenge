function momentOfTimeInSpace(moment) {
    let time = 0;
    let space = 0;
    moment.split("").forEach((ele) => {
        if (ele.match(/[1-9]/) == ele) time += +ele;
        else space++;
    });
    return [time < space, time === space, time > space];
}
