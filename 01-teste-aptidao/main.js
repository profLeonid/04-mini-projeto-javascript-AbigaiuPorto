'use strict'
//função para remover classes
function removerClasses(){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove("apto", "nao-apto")
}

//consultar valores e imprimir valor
function avaliar(){
    const tempo = document.getElementById('numero')
    const resultado = document.getElementById('resultado')

    if (tempo.value <= 14){
        resultado.textContent = "Apto"
        removerClasses()
        resultado.classList.add("apto")
    }else{
        resultado.textContent = "Não apto"
        removerClasses()
        resultado.classList.add("nao-apto")
    }
}