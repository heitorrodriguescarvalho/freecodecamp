function fearNotLetter(str) {
    const alfabeto = 'abcdefghijklmopqrstuvwxyz'
    let index = alfabeto.indexOf(str[0])
    for (let i = 0; i < str.length; i++) {
        if (alfabeto[i + index] != str[i]) {
            return alfabeto[i + index]
        }
    }
    return undefined;
  }
  
  console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"))