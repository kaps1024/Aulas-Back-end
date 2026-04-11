let peso = 80;
let altura = 1.80;

let imc = peso / (altura * altura);

if (imc >= 25) {
    console.log("Acima do peso ideal");
} else {
    console.log("Peso ideal ou abaixo");
}