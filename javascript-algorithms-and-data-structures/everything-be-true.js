function truthCheck(collection, pre) {
    let bool = true
    for (let i in collection) {
        if (!collection[i][pre]) {
            bool = false
        }
    }
    return bool
  }
  
    console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false},
    {name: "Naomi", role: "", isBot: false},
    {name: "Camperbot", role: "Bot", isBot: true}],
    "isBot"))

    console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name"))