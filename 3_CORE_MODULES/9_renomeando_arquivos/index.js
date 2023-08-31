const fs = require("fs")

fs.rename("arquivo.txt", "arquivoRenomeado.txt", function(err) {
    if(err) {
        console.log(err)
    }

    console.log("arquivo renomeado!")
})