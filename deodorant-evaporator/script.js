function evaporator(content, evap_per_day, threshold) {
    let evap = 100;
    for (let i = 1; evap >= threshold; i++) {
        evap *= 1 - evap_per_day / 100;
        if (evap < threshold) {
            return i;
        }
    }
}
