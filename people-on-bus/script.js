var number = function (busStops) {
    let passengers = 0;
    busStops.forEach((arr) => (passengers = passengers + arr[0] - arr[1]));
    return passengers;
};
