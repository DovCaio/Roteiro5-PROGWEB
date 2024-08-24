
async function  upperIn500ms(string) {

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


async function inverteString(string, i=0) {
    if (i === string.length - 1){

        return string[i]
        
    }else {
        
        return await inverteString(string, i + 1) + string[i] 

    }


}


async function espera () {
    const invertida = await inverteString( await upperIn500ms("caio"))

    console.log(invertida)

}

espera() 

