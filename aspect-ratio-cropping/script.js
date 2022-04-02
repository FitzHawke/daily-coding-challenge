function aspectRatio(x, y) {
    let newX = Math.ceil((y * 16) / 9);
    return [newX, y];
}
