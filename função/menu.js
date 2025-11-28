// 1
function calcularPesoimc() {

    function calcularimc(peso, altura) {


    let imc = peso / (altura * altura);


    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = "Peso normal";
    } else if (imc >= 25.0 && imc <= 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30.0 && imc <= 34.9) {
        classificacao = "Obesidade grau 1";
    } else if (imc >= 35.0 && imc <= 39.9) {
        classificacao = "Obesidade grau 2";
    } else {
        classificacao = "Obesidade grau 3";
    }

    alert("Seu IMC é: " + imc.toFixed(2) + "\nClassificação: " + classificacao);
    }
    





    let peso = parseFloat(prompt("Digite seu peso em kg:"));
    let altura = parseFloat(prompt("Digite sua altura em metros:"));

    calcularimc(peso, altura);
}




//2
function conferirSequencia(params) {
    
}




//3
function descontoNaCompra() {

let valorCompra = parseFloat(prompt("Digite o valor total da compra: "));

let desconto = 0;

if (valorCompra <= 100) {
    desconto = 0;
} else if (valorCompra <= 200){
    desconto = 0.10;
} else {
    desconto = 0.20;
}

let valorFinal = valorCompra - (valorCompra*desconto);

alert(valorFinal);

    
}





//4
function conferirNumeroPares() {
    for(let i = 1; i<= 10; i++){

    if (i % 2 == 0) {

        // par
        console.log(i);
        
        
    }
    
}
}






//5
function somarSequenciaDeNumeros() {

    let numero = 1;
let soma = 0
while (numero <= 100) {

soma = soma + numero;

numero++;
    
}

alert("a somas dos numeros de 1 a 100 é " + soma)

    
}
