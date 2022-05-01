function DNAStrand(dna) {
    return dna
        .split("")
        .map((ele) => {
            if (ele === "A") return "T";
            else if (ele === "T") return "A";
            else if (ele === "C") return "G";
            else if (ele === "G") return "C";
        })
        .join("");
}
