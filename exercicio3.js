const { rejects } = require("assert")
const { resolve } = require("path")

let colocarTodasLetrasEmMaiusculoEm500ms =  async (string) => {
    
    return new Promise((resolve, rejects) => {

        setTimeout(() => {

            if(typeof string === "string"){
                resolve(string.toLocaleUpperCase())
            }else {
                rejects("DEU BO")
            }
            

        }, 500)

    })
}


let inverteAsLetras = async (string) => {

    return new Promise((resolve, rejects) => {

    })
}

colocarTodasLetrasEmMaiusculoEm500ms("dadae").then(data => {
    console.log(data)
}).finally(() => {

})

