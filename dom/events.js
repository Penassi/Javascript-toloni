//Eventos são interações do usuario com o website e também comportamentos 
// do websitw, por exemplo carregar a tela

let elementoBtn = document.getElementById("btn");
let elementoIdLeandra = document.getElementById("tecnica");
let novoElemento = document.createElement("a");

novoElemento.textContent = "zww.aposta";
novoElemento.href = "https://pq3xczfuv7.com/main/inicio?pid=1454477056";``

elementoBtn.addEventListener("click", () => {
    // alert("Você clicou no botão");

    // elementoBtn.style.backgroundColor = "red";

    document.body.appendChild(novoElemento);

    // document.body.removeChild(elementoIdLeandra)
    console.log(document.body.children);
    document.body.children[2].removeChild(elementoIdLeandra)
})