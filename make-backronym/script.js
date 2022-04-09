var makeBackronym = function (string) {
    arr = string.split("");
    newArr = [];

    arr.forEach((l) => newArr.push(dict[l.toUpperCase()]));
    return newArr.join(" ");
};
