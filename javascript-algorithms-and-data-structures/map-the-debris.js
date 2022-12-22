function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;

    const newArr = []

    for (let i in arr) {
        let result = Math.round(2 * Math.PI * Math.sqrt((earthRadius + arr[i].avgAlt) ** 3 / GM))

        newArr.push({
            name: arr[i].name,
            orbitalPeriod: result
        })
    }
    return newArr;
  }
  
  console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
  console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]))