function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    let sharkMove = dolphin
        ? (sharkDistance / sharkSpeed) * 2
        : sharkDistance / sharkSpeed;
    let youMove = pontoonDistance / youSpeed;
    return sharkMove > youMove ? "Alive!" : "Shark Bait!";
}
