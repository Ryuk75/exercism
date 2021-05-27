const alphabet = 'abcdefghijklmnopqrstuvwxyz';

export class RotationalCipher {
  static rotate(entrada, llave) {
    var encode = '';
    for (var x of entrada) {
      var index = alphabet.indexOf(x.toLowerCase());
      if (index === -1) {
        encode += x;
      } else {
        var isCapital = x.toUpperCase() === x;
        var nIndex = index + llave;
        if (nIndex > 25) nIndex = (nIndex % 25) - 1;
        encode += isCapital ? 
          alphabet[nIndex].toUpperCase() 
          : 
          alphabet[nIndex];
      }
    }
    return encode;
  }
}