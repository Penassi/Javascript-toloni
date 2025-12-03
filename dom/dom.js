// DOM é a arvore/fluxo do meu documento HTML
// Ele serve para que o Javascrist consiga manipular (visualizar, editar, criar e excluir)
// O DOM ele torna os elemntos HTML em objetos, para que o Javascript consiga acessar de fato

// let elementoBody = document.getElementsByTagName("body");

// console.log(elementoBody);

// acessar pela tag h1

let elementoh1 = document.getElementsByTagName("h1");


// acessando o elemento pela sua posição
console.log(elementoh1[0].textContent = "leandra");
// console.log();




//exibe o id tecnica

let exibeId = document.getElementById("tecnica");

console.log(exibeId);


//exibe os elementos que possuem a class jogador

let exibeClass = document.getElementsByClassName("jogador")

console.log(exibeClass);



//exibe o item 4 dos elementos que possuem a class jogador

console.log(exibeClass[3]);



//muda o texto do conteudo do item da 3 posicao dos elementos que possuem a class jogador

exibeClass[3].textContent = "Macarrão"


// mudar a estilização de um elemento

exibeId.style.color = "purple";
exibeId.style.fontSize = "20px";


// mude a cor da fonte do conteudo do item da 3 posicao dos elementos que possuem a class jogador
exibeClass[3].style.color = "red";