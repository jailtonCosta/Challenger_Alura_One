//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigosIndicados = [];
let elemAmigo = document.getElementById("amigo"); //input
//let elemListaAmigos = document.getElementById("lista-amigos"); // paragrafo
//let elemlistaSorteio = document.getElementById("resultado"); // paragrafo

function adicionar() {
  // Adiciona participante na lista de amigos desde que o campo não esteja em vazio ou já adicionado
    let amigo = elemAmigo.value;
    if (amigo == ""){
        alert("Digite o nome de um amigo");
    }
    else {
        if(!amigosIndicados.includes(amigo)){
            amigosIndicados.push(amigo);
            alert("Amigo adicionado com sucesso!!");
        }
        else{
            let opcao = prompt("Este nome já existe!\n  Digite:\n 1 - Adicionar \n 2 - Cancelar");
            if(opcao == 1 ){
                amigosIndicados.push(amigo);
                alert("Nome adcionado !");
            }
            else{
                alert("Nome não adcionado!");
            }
            
        }
    }
    amigosIndicados.value = "";

    exibirListaDeAmigos();

}
function  exibirListaDeAmigos() {
    let nomesDeAmigos = document.getElementById("lista-amigos");

    nomesDeAmigos.innerHTML = "";

    amigosIndicados.forEach
    (
        amigo => 
        {
            let participante = document.createElement('li');
            participante.textContent = amigo;
            nomesDeAmigos.appendChild(participante);
        }
    );
}


function sortearNumeroSecreto(){ 
    let numeroSorteado = Math.floor(Math.random() * amigosIndicados.length);
    return numeroSorteado;
}


function selecionarAmigoSecreto(numeroSecreto){
    return amigosIndicados[numeroSecreto];
}


function sortearAmigo(){
    
    if(amigosIndicados.length == 0){
        alert('Não há amigos para o sorteio!');
        return 0;
    }

    let amigoSecreto = selecionarAmigoSecreto(sortearNumeroSecreto());
    document.getElementById('resultado').innerHTML = amigoSecreto;
}