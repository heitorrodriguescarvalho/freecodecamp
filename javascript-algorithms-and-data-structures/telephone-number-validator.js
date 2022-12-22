function telephoneCheck(str) {
    const num = []
    const numDividido = []

    if (str[0] === '(' && str[str.length -1] === ')') {
        return false
    }

    if (str.includes('(')) {
        if (!str.includes(')', str.indexOf('('))) {
            return false
        }
    }

    if (str.includes(')') && !str.includes('(')) {
        return false
    }

    for(let i in str) {
        if(/[0-9]/.test(str[i])) {
            num.push(str[i])
        }
    }

    if (num.length === 11) {
        if (str[0] != '1') {
            return false
        }

        numDividido.push(num.join('').slice(0, 1))
        numDividido.push(num.join('').slice(1, 4))
        numDividido.push(num.join('').slice(4, 7))
        numDividido.push(num.join('').slice(7, 11))

    } else if (num.length === 10) {

        numDividido.push(num.join('').slice(0, 3))
        numDividido.push(num.join('').slice(3, 6))
        numDividido.push(num.join('').slice(6, 10))

    } else {return false}

    for(let i in numDividido) {
        if (str.indexOf(numDividido[i]) === -1) {
            return false
        } else {
            str = str.substring(0, str.indexOf(numDividido[i])) + str.substring(str.indexOf(numDividido[i]) + numDividido[i].length)
        }
        console.log(str)
    }

    
    console.log(numDividido)
    return true
}
  
    console.log(telephoneCheck("1(235)675-8955"))
    console.log(telephoneCheck("555-5555"))