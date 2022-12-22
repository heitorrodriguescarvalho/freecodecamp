function translatePigLatin(str) {
    if (/[aeiou]/.test(str[0])) {
        return str + 'way'
    } else {
        for (let i in str) {
            if (/[^aeiou]/.test(str[i])) {
                let consoante = str[i]
                let x = parseInt(i) + 1
                while (true) {
                    if (/[^aeiou]/.test(str[x])) {
                        consoante += str[x]
                        x += 1
                    } else {
                        break
                    }
                    if (x === str.length) {
                        break
                    }
                }

                if (consoante.length === str.length) {
                    return str + 'ay'
                } else {
                str = str.substring(consoante.length) + consoante + 'ay'
                return str
                }
            }
        }
    }
}


console.log(translatePigLatin("california"))
console.log(translatePigLatin("paragraphs"))
console.log(translatePigLatin("glove"))
console.log(translatePigLatin("algorithm"))
console.log(translatePigLatin("eight"))
console.log(translatePigLatin("schwartz"))
console.log(translatePigLatin("rhythm"))