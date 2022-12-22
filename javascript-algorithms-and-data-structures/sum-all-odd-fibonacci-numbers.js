function sumFibs(num) {
    const sequencia = [1, 1]
    while(true) {
        let result = sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2]
        if (result <= num) {
            sequencia.push(result)
        } else {
            break
        }
    }

    const arr = []
    sequencia.map((element) => {
        if (element % 2 === 1) {
            arr.push(element)
        }
    })

    return arr.reduce((sum, element) => {return sum + element}, 0)
  }
  
  console.log(sumFibs(5));