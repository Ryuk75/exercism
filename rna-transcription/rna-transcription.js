const rnaMap = {
  "G": "C",
  "C": "G",
  "T": "A",
  "A": "U"
}

export const toRna = DNA => (
  DNA
    .split("")
    .map(caracter => rnaMap[caracter])
    .join("")
);
