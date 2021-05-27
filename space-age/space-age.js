const constantes = {
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
  earth: 1,
};

export const age = (planeta, segundos) => {
  const añoTierra = 31557600;
  return parseFloat((segundos / (añoTierra * constantes[planeta.toLowerCase()])).toFixed(2));
};
