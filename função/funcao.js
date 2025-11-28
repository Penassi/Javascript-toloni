function exibirTabuadaEescolhida() {

    let tabuadaescolida = parseInt(prompt("digite o número da tabuada desejada: "));

    // 1 numero dentro da condicao dom for - inicializacao - variavel
    // 2 numero dentro da condicao do for - condicao -verifica a volta  da variavel
    // 3

    console.log(`TABUADA X ${tabuadaescolida}`);

    for (let i = 1; i <= 10; i++) {

        console.log(tabuadaescolida + " x " + i + " = " + (tabuadaescolida * i));
    }

}
// exibirTabuadaEescolhida();


// function Exibirnomesolicitado() {
//     let nomeSolicitado = prompt("digite seu nome")

//     return nomeSolicitado;

// }


// let nome = Exibirnomesolicitado ();

// alert(nome);

// function somarDoisnumeros(numero1, numero2) {
//     console.log(numero1+numero2);


// }

// somarDoisnumeros(10, 10);






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



    

