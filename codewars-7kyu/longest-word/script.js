function longest(words) {
    let longest = 0;
    words.forEach((word) => {
        if (word.length > longest) longest = word.length;
    });
    return longest;
}
