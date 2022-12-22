function checkCashRegister(price, cash, cid) {
    const valorTroco = cash - price
    const valores = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100]
    const change = []


    const cidOperacao = JSON.parse(JSON.stringify(cid))
    let trocoOperacao = valorTroco
    let index = cidOperacao.length - 1
    while(true) {
        if (cidOperacao[index][1] >= valores[index]) {
            if (valores[index] <= trocoOperacao) {
                trocoOperacao = (trocoOperacao - valores[index]).toFixed(2)
                change.push([cidOperacao[index][0], valores[index]])
                cidOperacao[index].splice(1, 1, parseFloat((cidOperacao[index][1] - valores[index]).toFixed(2)))
            } else { index-- }
        } else { index-- }
        if (index === -1) { break }
    }
    

    index = 0
    while(true) {
        if (index < change.length - 1) {
            let arr = change.slice(index + 1)
            let igual = false
            for(let i in arr) {
                if (change[index][0] === arr[i][0]) {
                    change[index].splice(1, 1, (change[index][1] + change[1 + index + parseInt(i)][1]))
                    change.splice(1 + index + parseInt(i), 1)
                    igual = true
                    break
                }
            }
            if (!igual) { index++ }
        } else { break }
    }


    let changeTotal = 0
    for(let i in change) {
        changeTotal += change[i][1]
    }
    changeTotal = changeTotal.toFixed(2)

    let cidOperacaoTotal = 0
    for(let i in cidOperacao) {
        cidOperacaoTotal += cidOperacao[i][1]
    }
    cidOperacaoTotal = parseFloat(cidOperacaoTotal.toFixed(2))


    if (changeTotal != valorTroco) {
        return {status: "INSUFFICIENT_FUNDS", change: []}
    } else if(cidOperacaoTotal === 0) {
        return {status: "CLOSED", change: cid}
    } else {
        return {status: "OPEN", change: change}
    }
}
  
    console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));