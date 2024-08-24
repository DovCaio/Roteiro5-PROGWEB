const { rejects } = require("assert")
const { resolve } = require("path")

let colocarTodasLetrasEmMaiusculoEm500ms =  async (string) => {
    
    return new Promise((resolve, rejects) => {

        setTimeout(() => {

            if(typeof string === "string"){
                resolve(string.toLocaleUpperCase())
            }else {
                rejects("DEU B.O.")
            }
            

        }, 500)

    })
}


function inverteString(string, i=0) {
    if (i === string.length - 1){

        return string[i]
        
    }else {
        
        return inverteString(string, i + 1) + string[i] 

    }


}

let inverteAsLetras = async (string) => {

    return new Promise((resolve, rejects) => {
        resolve( inverteString(string))        
    })
}

colocarTodasLetrasEmMaiusculoEm500ms("Caio").then(data => {
    inverteAsLetras(data).then(interdata => console.log(interdata))
})

