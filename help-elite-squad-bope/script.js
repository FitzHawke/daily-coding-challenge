function magNumber(info) {
    switch (info[0]) {
        case "PT92":
            return Math.ceil((info[1] * 3) / 17);
        case "M4A1":
            return Math.ceil((info[1] * 3) / 30);
        case "M16A2":
            return Math.ceil((info[1] * 3) / 30);
        case "PSG1":
            return Math.ceil((info[1] * 3) / 5);
    }
}
