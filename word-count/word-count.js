export const countWords = (string) => {
  const contadorPalabra = {};
  string
    .toLowerCase()
    .match(/\w+('\w+)?/g)
    .map((palabra) => {
      contadorPalabra[palabra] ? contadorPalabra[palabra]++ : (contadorPalabra[palabra] = 1);
    });
  return contadorPalabra;
};