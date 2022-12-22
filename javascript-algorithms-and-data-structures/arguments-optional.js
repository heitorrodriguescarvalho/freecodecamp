function addTogether(...num) {
    if (num.length === 1 && typeof num[0] === 'number') {
        return (n) => {return num[0] + n}
    } else if (num.length === 2 && typeof num[0] === 'number' && typeof num[1] === 'number') {
        return num[0] + num[1]
    } else {
        return undefined
    }
}
  
  console.log(addTogether(2,[3]));
