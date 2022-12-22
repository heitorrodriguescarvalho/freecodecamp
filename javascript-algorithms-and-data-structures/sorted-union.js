function uniteUnique(...arr) {
    let newArr = []
    for (let element in arr) {
        for (let i in arr[element]) {
            if (newArr.indexOf(arr[element][i]) === -1) {
                newArr.push(arr[element][i])
            }
        }
    }
    return newArr;
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));