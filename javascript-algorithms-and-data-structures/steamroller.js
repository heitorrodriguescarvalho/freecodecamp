function steamrollArray(arr) {
    for (let i in arr) {
        if (Array.isArray(arr[i])) {
            arr.splice(i, 1, ...arr[i])
        }
    }
    for (let i in arr) {
        if (Array.isArray(arr[i])) {
            arr = steamrollArray(arr)
        }
    }
    return arr
}

console.log(steamrollArray([1, [2], [3, [[4]]]]))