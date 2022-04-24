function chmodCalculator(perm) {
    let user = 0,
        group = 0,
        other = 0;

    function buildPermission(str) {
        let value = 0;
        let permString = str.split("");
        if (permString[0] === "r") value += 4;
        if (permString[1] === "w") value += 2;
        if (permString[2] === "x") value += 1;

        return value;
    }

    if (perm.user) user = buildPermission(perm.user);
    if (perm.group) group = buildPermission(perm.group);
    if (perm.other) other = buildPermission(perm.other);

    return `${user}${group}${other}`;
}
