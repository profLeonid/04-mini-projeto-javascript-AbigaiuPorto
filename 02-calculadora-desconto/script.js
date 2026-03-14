'use strict'

function removerClasses(){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('desconto1', 'desconto2', 'desconto3')
}

function calcularDesconto (){

    const preco = document.getElementById('preco')
    const desconto = document.getElementById('desconto')
    const resultado = document.getElementById('resultado')

    
    const valorDesconto  = preco.value  * desconto.value / 100
    const precoFinal = preco.value - valorDesconto

    resultado.textContent = `Valor economizado:${valorDesconto} - Preço final:${precoFinal}`

    
    removerClasses()
    if (desconto.value <=5) {
        resultado.classList.add ('desconto1')
    }
    else if(desconto.value <=10){ 
        resultado.classList.add ('desconto2') 
    }
    else{
        resultado.classList.add ('desconto3')
       }

  
}