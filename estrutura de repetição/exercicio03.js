// for(let i = 1; i<= 10; i++){

//     if (i % 2 == 0) {

//         // par
//         console.log(i);
        
        
//     }
    
// }



let tabuadaescolida = parseInt(prompt("digite o número da tabuada desejada: "));

// 1 numero dentro da condicao dom for - inicializacao - variavel
// 2 numero dentro da condicao do for - condicao -verifica a volta  da variavel
// 3

console.log(`TABUADA X ${tabuadaescolida}`);

for(let i = 1; i <= 10; i++){
 
    console.log(tabuadaescolida + " x " + i + " = " + (tabuadaescolida * i));
}
