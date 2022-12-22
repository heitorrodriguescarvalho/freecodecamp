function pairElement(str) {
    const pares = []
    for (let i in str) {
        switch(str[i]) {
            case 'A':
                pares.push(['A', 'T'])
                break

            case 'T':
                pares.push(['T', 'A'])
                break

            case 'C':
                pares.push(['C', 'G'])
                break

            case 'G':
                pares.push(['G', 'C'])
                break
        }
    }
    return pares;
  }
  
  console.log(pairElement("GCG"));
  console.log(pairElement("TTGAG"))