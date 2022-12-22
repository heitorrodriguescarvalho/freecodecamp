function smallestCommons(arr) {
  let nums = []
  if (arr[0] < arr[1]) {
    for (let i = arr[0]; i < arr[1] + 1; i++)
    nums.push(i)
  } else  if (arr[0] > arr[1]) {
    for (let i = arr[1]; i < arr[0] + 1; i++)
    nums.push(i)
  }
    
  let cont = 1
  while(!nums.every((element) => {return cont % element === 0 ? true : false})) {
    cont += 1
  }
  return cont
}
  console.log(smallestCommons([23, 18]));