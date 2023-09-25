
let primeiraNota = document.querySelector (".primeira_nota");
let segundaNota = document.querySelector (".segunda_nota");
let terceiraNota = document.querySelector (".terceira_nota");

let nota1 = parseFloat(primeiraNota.textContent); 
let nota2 = parseFloat(segundaNota.textContent); 
let nota3 = parseFloat(terceiraNota.textContent); 



let primeiraNotaehvdd = true
let segundaNotaehvdd = true
let terceiraNotaehvdd = true

if (nota1 <= 0 || nota1 >= 10) {
    console.log("valor inválido");
    tdImc.textContent = "valor inválido";
    pesoehVdd = false;
  }

  if (nota2 <= 0 || nota2 >= 10) {
    console.log("valor inválido");
    tdImc.textContent = "valor inválido";
    pesoehVdd = false;
  }
  if (nota3 <= 0 || nota3 >= 10) {
    console.log("valor inválido");
    tdImc.textContent = "valor inválido";
    pesoehVdd = false;
  }
  if (pesoehVdd && alturaehVdd) { 
    let imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2); 
  }