// Faça um programa que receba a idade do usuário, enquanto a
// resposta do usuário for menor que 18 anos continue a solicitar a
// idade e mostre uma mensagem quando a idade do usuário for
// maior que 18.




// let opecaoescolhida = parseInt(prompt("digite 1 para continuar"));
// while (opecaoescolhida !== 1) {

//     opecaoescolhida = parseInt(prompt("voce tem que ewscolher o numero 1 para continuar !!!"));
    
    
// }


let informesuaidade = parseInt(prompt("Qual é sua idade ?"))

while (informesuaidade < 18) {

    informesuaidade = parseInt(prompt("Qual é sua idade?"))
    
}

if(informesuaidade >= 18){

    alert("vocé tem mais de 18 anos!!!")

}
