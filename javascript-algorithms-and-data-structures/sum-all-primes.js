function sumPrimes(num) {
    const primos = []
    for (let i = 2; i <= num; i++) {
        let divisores = []
        for (let x = 1; x <= i; x++) {
            if (i % x === 0) {
                divisores.push(x)
            }
        }
        if (divisores.length === 2) {
            primos.push(i)
        }
    }
    return primos.reduce((sum, element) => {return sum + element});
  }
  
  console.log(sumPrimes(10));