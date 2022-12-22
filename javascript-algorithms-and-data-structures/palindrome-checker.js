function palindrome(str) {
    let arr = str.toLowerCase().split('')
    let newArr = arr.filter(element => {return /[a-z0-9]/.test(element)})
    
    let invertStr = ''
    for (let i in newArr) {
        invertStr += newArr[newArr.length -1 - i]
    }
    
    return newArr.join('') === invertStr
}
  
    console.log(palindrome("eye"))
    console.log(palindrome("_eye"))
    console.log(palindrome("A man, a plan, a canal. Panama"))