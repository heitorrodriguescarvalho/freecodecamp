function rot13(str) {
    const arr = str.split("")
    let newArr = []
    const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")
    for(let i in arr) {
        let index = alfabeto.indexOf(arr[i])
        if (index === -1) {
            newArr.push(arr[i])
        } else {
            if (index - 13 < 0) {
                newArr.push(alfabeto[index - 13 + 26])
            } else {
                newArr.push(alfabeto[index - 13])
            }
        }
    }
    return newArr.join("");
  }
  
  console.log(rot13("SERR PBQR PNZC"))