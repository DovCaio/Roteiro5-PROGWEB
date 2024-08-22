const http = require("http")
const { resolve } = require("path")

const dono = {
"proprietario": "Silvio Santos",
"endereco": {
"cep":'hacked, pay to recover',
"logradouro": 'hacked, pay to recover',
"complemento": 'hacked, pay to recover',
"bairro": 'hacked, pay to recover',
"localidade": 'hacked, pay to recover',
"uf": '',
"geo": {
"lat": "-23.61919020307765",
"lng": "-46.70793551534256"
}
}
}



function getEndereco (cep, callback) {
    const url = `http://viacep.com.br/ws/${cep}/json/`
    http.get(url, res => {
        let resultado = ""

        res.on("data", dados => {
            resultado += dados
        })

        res.on("end", () => {
            callback(new Promise((resolve, reject) => {

                resolve(JSON.parse(resultado))

            }))
        })
    })

}

getEndereco("05650000", (promise) => {
    promise.then(({cep, bairro, localidade}) => {
        dono.endereco.cep = cep
        dono.endereco.bairro = bairro
        dono.endereco.localidade = localidade
        const resultado = `${dono.proprietario} - ${dono.endereco.cep} - ${dono.endereco.bairro}, ${dono.endereco.localidade} (${dono.endereco.geo.lat}, ${dono.endereco.geo.lng})`;
console.log(resultado);
    })
    
})

