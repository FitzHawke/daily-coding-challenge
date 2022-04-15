function sameCase(a, b) {
    if (
        a.toLowerCase() === a.toUpperCase() ||
        b.toLowerCase() === b.toUpperCase()
    )
        return -1;

    return (a.toUpperCase() === a) === (b.toUpperCase() === b) ? 1 : 0;
}
