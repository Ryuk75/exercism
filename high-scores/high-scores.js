export class HighScores {
  constructor(resultado) {
    this._resultado = resultado;
    this._utlimo = resultado[resultado.length - 1];
    this._mejorRegistroPersonal = Math.max.apply(null, resultado);
  }

  get scores() {
    return this._resultado;
  }

  get latest() {
    return this._utlimo;
  }

  get personalBest() {
    return this._mejorRegistroPersonal;
  }

  get personalTopThree() {
    let topTres = [];
    this._resultado = this._resultado.sort((x, y) => y - x);
    for (let i = 0; i < this._resultado.length; i++) {
      if (i < 3) {
        topTres.push(this._resultado[i]);
        continue;
      }
    }
    return topTres;
  }
}
