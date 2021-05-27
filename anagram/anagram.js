export const findAnagrams = (palabraDada, listaPalabra) => {
  return listaPalabra.reduce((anagrama, palabra) => {
    let palabraSeparada = palabra.toLowerCase().split("").sort().join()
    let newArray = palabraDada.toLowerCase().split("").sort().join()
    if (palabraSeparada === newArray && palabra.toLowerCase() !== palabraDada.toLowerCase()) {
      anagrama.push(palabra)
    }
    return anagrama
  }, [])
};