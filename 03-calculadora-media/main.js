'use strict'

function removerClasses(){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('Aprovado', 'Reprovado', 'Recuperação')
}

function calcularMedia(){

   let primeiraNota = parseFloat(document.getElementById('nota1').value)
   let segundaNota = parseFloat(document.getElementById('nota2').value)
   let terceiraNota = parseFloat(document.getElementById('nota3').value)

   const media = (primeiraNota + segundaNota + terceiraNota) / 3

   const resultado = document.getElementById('resultado')

   removerClasses()

   if (media < 5){
        resultado.classList.add('Reprovado')
        resultado.textContent = `Média: ${media.toFixed(1)} - Reprovado`

   }else if (media >= 7){
        resultado.classList.add('Aprovado')
        resultado.textContent = `Média: ${media.toFixed(1)} - Aprovado`

   }else{
        resultado.classList.add('Recuperação')
        resultado.textContent = `Média: ${media.toFixed(1)} - Recuperação`
   }

}