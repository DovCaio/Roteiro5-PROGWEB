
function ehPosivelApresentar(E, D) {
    let resposta = ""
    if (D - E > 3) {
        resposta = "Muito bem! O aluno está apto a apresentar até o natal!"
    }
    else {
        resposta = "O trabalho está muito ruim!\n"

        if(D + 2 > 24) {
            resposta += "TCC Apresentado!"
        }else{ 
            resposta += "Não deu! Só no próximo ano agora"
        }
    }

    return resposta
}

console.log(ehPosivelApresentar(13, 19))
console.log(ehPosivelApresentar(22, 23))
console.log(ehPosivelApresentar(21, 22))