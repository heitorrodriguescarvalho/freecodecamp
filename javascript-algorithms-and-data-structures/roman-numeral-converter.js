function convertToRoman(num) {
    let str = `${num}`
    let romano = ''
    let algarismo = str.length

    for (let i in str.split('')) {
        switch (str[i]) {
            case '1':
                switch(algarismo) {
                    case 1:
                        romano += 'I'
                        break

                    case 2:
                        romano += 'X'
                        break

                    case 3:
                        romano += 'C'
                        break
                     
                    case 4:
                        romano += 'M'
                        break
                }
                break

            case '2':
                switch(algarismo) {
                    case 1:
                        romano += 'II'
                        break

                    case 2:
                        romano += 'XX'
                        break

                    case 3:
                        romano += 'CC'
                        break

                    case 4:
                        romano += 'MM'
                        break

                }
                break

            case '3':
                switch(algarismo) {
                    case 1:
                        romano += 'III'
                        break

                    case 2:
                        romano += 'XXX'
                        break

                    case 3:
                        romano += 'CCC'
                        break

                    case 4:
                        romano += 'MMM'
                        break

                }
                break

            case '4':
                switch(algarismo) {
                    case 1:
                        romano += 'IV'
                        break

                    case 2:
                        romano += 'XL'
                        break

                    case 3:
                        romano += 'CD'
                        break
                }
                break

            case '5':
                switch(algarismo) {
                    case 1:
                        romano += 'V'
                        break

                    case 2:
                        romano += 'L'
                        break

                    case 3:
                        romano += 'D'
                }
                break

            case '6':
                switch(algarismo) {
                    case 1:
                        romano += 'VI'
                        break

                    case 2:
                        romano += 'LX'
                        break

                    case 3:
                        romano += 'DC'
                        break

                }
                break

            case '7':
                switch(algarismo) {
                    case 1:
                        romano += 'VII'
                        break

                    case 2:
                        romano += 'LXX'
                        break

                    case 3:
                        romano += 'DCC'
                        break

                }
                break

            case '8':
                switch(algarismo) {
                    case 1:
                        romano += 'VIII'
                        break

                    case 2:
                        romano += 'LXXX'
                        break

                    case 3:
                        romano += 'DCCC'
                        break

                }
                break

            case '9':
                switch(algarismo) {
                    case 1:
                        romano += 'IX'
                        break

                    case 2:
                        romano += 'XC'
                        break

                    case 3:
                        romano += 'CM'
                        break
                }
                break

        }
        console.log(romano)
        algarismo --
    }
    return romano
}
   
   console.log(convertToRoman(362));