function dropElements(arr, func) {
    let newArr = [...arr]
    for (let i in arr) {
        console.log(newArr)
        if (func(arr[i])) {
            return newArr
        } else {
            newArr.splice(0, 1)
        }
    }
    return []
  }
  
  console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}))