function convertHTML(str) {
    let arr = str.split("")
    for (let i in arr) {
        switch(arr[i]) {
            case '&':
                arr.splice(i, 1, '&amp;')
                break

            case '<':
                arr.splice(i, 1, '&lt;')
                break

            case '>':
                arr.splice(i, 1, '&gt;')
                break

            case '"':
                arr.splice(i, 1, '&quot;')
                break

            case "'":
                arr.splice(i, 1, '&apos;')
                break
        }
    }
    return arr.join("");
  }
  
  console.log(convertHTML("Dolce & Gabbana"));