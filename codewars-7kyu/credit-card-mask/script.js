function maskify(cc) {
    return cc
        .split("")
        .map((e, i) => (i < cc.length - 4 ? "#" : e))
        .join("");
}
