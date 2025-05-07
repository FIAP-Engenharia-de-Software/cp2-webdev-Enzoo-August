// ## Calculadora de IMC (1 ponto)

// **Enunciado:**

// Crie a função calcularIMC que receba peso e altura e retorne:

// - `"Abaixo do peso"` se < 18.5
// - `"Peso normal"` se entre 18.5 e 24.9
// - `"Sobrepeso"` se entre 25 e 29.9
// - `"Obesidade"` se ≥ 30
// - `"Erro"` para dados inválidos

// **Fórmula IMC**: peso / (altura * altura)

function calcularIMC(peso, altura) {
  let inc = peso / (altura + altura);
    if (inc <18.5){
      return "Abaixo do peso"
    }
    if (inc > 18.5 && inc < 24.9){
      return "Peso Normal";

    }
    if (inc > 25 && inc < 29.9){
      return "Sobrepeso"
    }
    if (inc > 30){
      return "Obesidade"
    }
    if(typeof(peso) && typeof(altura) != 'number'){
      return "Erro"
    }
    
  
  }

// NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcularIMC };