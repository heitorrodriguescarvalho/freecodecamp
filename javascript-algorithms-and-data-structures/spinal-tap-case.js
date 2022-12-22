function spinalCase(str) {
    for (let i = str.length; i > 0; i--) {
        if (i != 0 && /[A-Z]/.test(str[i])) {
            if (/[a-z]/.test(str[i-1])) {
                str = str.substring(0, i) + '-' + str.substring(i)
            } else {
                str = str.substring(0, i-1) + '-' + str.substring(i)
            }
        }
        if (/[^\w-]/.test(str[i])) {
            str = str.substring(0, i) + '-' + str.substring(i + 1)
        }
    }
    return str.toLowerCase()
}

console.log(spinalCase("This Is Spinal Tap"))
console.log(spinalCase("thisIsSpinalTap"))
console.log(spinalCase("The_Andy_Griffith_Show"))
console.log(spinalCase("Teletubbies say Eh-oh"))
console.log(spinalCase("AllThe-small Things"))