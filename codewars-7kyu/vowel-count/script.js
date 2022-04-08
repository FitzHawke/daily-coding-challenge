function getCount(str) {
    let count = str.match(/[aeiouAEIOU]/g);
    return count !== null ? count.length : 0;
}