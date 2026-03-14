'use strict'

function removerClasses(){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove(  'abaixoPeso', 'pesoNormal', 'sobrepeso', 'obesidade1', 'obesidade2', 'obesidade3')
}


function calcularIMC(){

    const nome = document.getElementById('nome').value
    const altura = parseFloat(document.getElementById('altura').value)
    const peso = parseFloat(document.getElementById('peso').value)

    const imc = peso / (altura * altura)

    const resultado = document.getElementById('resultado')

    removerClasses()
  
   

    if (imc < 18.5){
        resultado.classList.add('abaixoPeso')
        resultado.textContent = `${nome}, seu IMC é ${imc.toFixed(1)} - Abaixo do peso`

    }else if (imc < 25){
        resultado.classList.add('pesoNormal')
        resultado.textContent = `${nome}, seu IMC é ${imc.toFixed(1)} - Peso normal`

    }else if (imc < 30){
        resultado.classList.add('sobrepeso')
        resultado.textContent = `${nome}, seu IMC é ${imc.toFixed(1)} - Sobrepeso`

    }else if (imc < 35){
        resultado.classList.add('obesidade1')
        resultado.textContent = `${nome}, seu IMC é ${imc.toFixed(1)} - Obesidade grau I`

    }else if (imc < 40){
        resultado.classList.add('obesidade2')
        resultado.textContent = `${nome}, seu IMC é ${imc.toFixed(1)} - Obesidade grau II`

    }else{
        resultado.classList.add('obesidade3')
        resultado.textContent = `${nome}, seu IMC é ${imc.toFixed(1)} - Obesidade grau III`
    }

}