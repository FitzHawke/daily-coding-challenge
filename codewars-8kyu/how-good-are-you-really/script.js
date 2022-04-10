const betterThanAverage = (classPoints, yourPoints) =>
    classPoints.reduce((acc, x) => acc + x) / classPoints.length < yourPoints;
