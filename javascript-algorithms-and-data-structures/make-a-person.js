const Person = function(firstAndLast) {
  // Only change code below this line
  const arr = firstAndLast.split(" ")
  // Complete the method below and implement the others similarly
  this.getFirstName = () => {return arr[0]}
  this.getLastName = () => {return arr[1]}
  this.getFullName = () => {return arr[0] + ' ' + arr[1]}

  this.setFirstName = (first) => {arr.splice(0, 1, first)}
  this.setLastName = (last) => {arr.splice(1, 1, last)}
  this.setFullName = (firstAndLast) => {arr.splice(0, 2, ...firstAndLast.split(" "))}
  return firstAndLast;
};

const bob = new Person('Bob Ross');
console.log(bob.getFullName());