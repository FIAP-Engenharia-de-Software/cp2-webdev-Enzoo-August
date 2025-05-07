// ## Corrigir Valor Numérico **(1 ponto)**

// **Enunciado:**

// Crie a função corrigirValor, que recebe um valor e tenta convertê-lo para número. Se não for possível, retorne `"Valor inválido"`.

function corrigirValor(valor) {
  let valor1 = valor
  if(isNaN(valor1)){
    return "Valor inválido"}
  else{
      return parseFloat(valor1)
    }
  }

  


//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { corrigirValor };