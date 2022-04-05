const descendingOrder = (n) =>
    parseInt(
        n
            .toString()
            .split("")
            .sort((a, b) => (a < b ? 1 : -1))
            .join("")
    );
