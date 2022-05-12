function bulbMaze(map) {
    let invert = 0;
    for (room of map.split("")) {
        if (invert % 2 === 0 && room === "o") {
            return false;
        } else if (invert % 2 !== 0 && room === "x") {
            return false;
        }
        invert++;
    }
    return true;
}
